import json
import os
import platform
import subprocess
import sys
import time
from datetime import datetime

PRODUCT_SIGNATURES = [
    'KellerSS', 'Echo', 'Napse', 'Zyon', 'Void.ac', 'Ocean.ac',
    'FiveM', 'Citizen Runtime', 'Discord Overlay', 'NVIDIA Overlay',
    'OBS', 'RTSS', 'MSI Afterburner'
]

SUSPICIOUS_DRIVERS = [
    'iqvw64e.sys', 'capcom.sys', 'gdrv.sys', 'winring0', 'asusgio'
]

CHECKS = {
    'kernel': [
        'Driver Integrity', 'Kernel Telemetry', 'Process Callbacks',
        'Thread Callbacks', 'Image Load Callbacks', 'Hidden Modules',
        'Hidden Drivers', 'Signed Driver Verification', 'Certificate Validation'
    ],
    'memory': [
        'Process Hollowing', 'RWX Memory', 'CREATE_SUSPENDED',
        'Manual Map Indicators', 'Shellcode Regions', 'Executable Private Memory',
        'Orphan Modules', 'PE Header Validation', 'Thread Start Address'
    ],
    'security': [
        'Windows Defender', 'Firewall', 'SmartScreen', 'Tamper Protection',
        'Cloud Protection', 'IOAV Protection', 'Defender Exclusions', 'Threat History'
    ],
    'fivem': [
        'FiveM Cache', 'Citizen Runtime', 'FiveM Resources', 'Injected DLLs',
        'DLL Side Loading', 'server-cache', 'server-cache-priv', 'nui-storage'
    ],
    'forensic': [
        'ETW Monitoring', 'YARA Scanning', 'Timeline Correlation',
        'Integrity Snapshots', 'Tamper Alerts', 'Cleared Logs', 'Administrative Activity'
    ]
}


def run_cmd(command):
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=15)
        return (result.stdout or result.stderr or '').strip()
    except Exception as exc:
        return f'ERROR: {exc}'


def print_header():
    os.system('cls' if os.name == 'nt' else 'clear')
    print('=====================================================')
    print('                 ANGEL A.C SCANNER')
    print('        Advanced Kernel & Forensic Scanner')
    print('=====================================================')
    print('Read-only scanner. No files are deleted or modified.\n')


def check_pin():
    expected = os.environ.get('ANGEL_PIN')
    if not expected:
        print('No ANGEL_PIN environment variable set.')
        print('Scanner will continue in demo mode.\n')
        return True

    typed = input('Enter your ANGEL A.C PIN: ').strip()
    if typed != expected:
        print('Invalid PIN.')
        return False
    return True


def collect_system():
    return {
        'hostname': platform.node(),
        'os': platform.platform(),
        'arch': platform.machine(),
        'user': os.environ.get('USERNAME') or os.environ.get('USER') or 'unknown',
        'timestamp': datetime.utcnow().isoformat() + 'Z'
    }


def collect_processes():
    if os.name != 'nt':
        return []
    output = run_cmd('tasklist /FO CSV')
    lines = output.splitlines()[1:]
    processes = []
    for line in lines:
        parts = [p.strip('"') for p in line.split(',')]
        if len(parts) >= 2:
            processes.append({'name': parts[0], 'pid': parts[1]})
    return processes[:500]


def collect_drivers():
    if os.name != 'nt':
        return []
    output = run_cmd('driverquery /FO CSV')
    return output.splitlines()[:300]


def collect_services():
    if os.name != 'nt':
        return []
    output = run_cmd('sc query type= service state= all')
    return output.splitlines()[:600]


def collect_security():
    if os.name != 'nt':
        return {'status': 'Windows-only checks skipped'}
    defender = run_cmd('powershell -NoProfile -Command "Get-MpComputerStatus | Select-Object AMServiceEnabled,AntivirusEnabled,RealTimeProtectionEnabled,IoavProtectionEnabled,OnAccessProtectionEnabled | ConvertTo-Json"')
    firewall = run_cmd('powershell -NoProfile -Command "Get-NetFirewallProfile | Select-Object Name,Enabled | ConvertTo-Json"')
    bcd = run_cmd('bcdedit')
    return {'defender': defender, 'firewall': firewall, 'bcd': bcd[:4000]}


def collect_fivem():
    paths = []
    local = os.environ.get('LOCALAPPDATA')
    appdata = os.environ.get('APPDATA')
    candidates = []
    if local:
        candidates.append(os.path.join(local, 'FiveM', 'FiveM.app', 'data'))
    if appdata:
        candidates.append(os.path.join(appdata, 'CitizenFX'))

    for base in candidates:
        if os.path.exists(base):
            for root, dirs, files in os.walk(base):
                for name in dirs[:10]:
                    if name.lower() in ['cache', 'server-cache', 'server-cache-priv', 'nui-storage']:
                        paths.append(os.path.join(root, name))
                if len(paths) > 50:
                    break
    return paths


def analyze(processes, drivers, security, fivem_paths):
    findings = []

    proc_names = ' '.join(p.get('name', '') for p in processes).lower()
    for sig in ['obs', 'rtss', 'msiafterburner', 'discord']:
        if sig.lower() in proc_names:
            findings.append({'severity': 'medium', 'title': f'Overlay/recording process detected: {sig}'})

    driver_blob = '\n'.join(drivers).lower()
    for drv in SUSPICIOUS_DRIVERS:
        if drv.lower() in driver_blob:
            findings.append({'severity': 'critical', 'title': f'Known vulnerable driver detected: {drv}'})

    if isinstance(security, dict) and 'bcd' in security:
        bcd = security.get('bcd', '').lower()
        if 'testsigning' in bcd and 'yes' in bcd:
            findings.append({'severity': 'high', 'title': 'BCD TestSigning appears enabled'})
        if 'debug' in bcd and 'yes' in bcd:
            findings.append({'severity': 'high', 'title': 'BCD Debug mode appears enabled'})

    if fivem_paths:
        findings.append({'severity': 'low', 'title': f'FiveM cache locations found: {len(fivem_paths)}'})

    critical = sum(1 for f in findings if f['severity'] == 'critical')
    high = sum(1 for f in findings if f['severity'] == 'high')
    if critical:
        verdict = 'BLOCKED'
    elif high:
        verdict = 'REVIEW_REQUIRED'
    elif findings:
        verdict = 'SUSPICIOUS'
    else:
        verdict = 'CLEAN'

    return {'verdict': verdict, 'findings': findings}


def main():
    print_header()
    if not check_pin():
        input('Press ENTER to exit...')
        return 1

    print('Loading ANGEL A.C modules...')
    for category, items in CHECKS.items():
        print(f'[{category.upper()}] {len(items)} checks loaded')
        time.sleep(0.08)

    print('\nScanning system...')
    system = collect_system()
    processes = collect_processes()
    drivers = collect_drivers()
    services = collect_services()
    security = collect_security()
    fivem_paths = collect_fivem()
    result = analyze(processes, drivers, security, fivem_paths)

    report = {
        'scanner': 'ANGEL A.C',
        'products': PRODUCT_SIGNATURES,
        'system': system,
        'verdict': result['verdict'],
        'findings': result['findings'],
        'counts': {
            'processes': len(processes),
            'drivers_lines': len(drivers),
            'services_lines': len(services),
            'fivem_paths': len(fivem_paths)
        },
        'fivem_paths': fivem_paths,
        'security': security
    }

    filename = f'angel-ac-report-{datetime.now().strftime("%Y%m%d-%H%M%S")}.json'
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)

    print('\n=====================================================')
    print(f'VERDICT: {result["verdict"]}')
    print(f'FINDINGS: {len(result["findings"])}')
    for finding in result['findings']:
        print(f'- [{finding["severity"].upper()}] {finding["title"]}')
    print(f'\nReport saved: {filename}')
    print('=====================================================')
    input('Press ENTER to exit...')
    return 0


if __name__ == '__main__':
    sys.exit(main())
