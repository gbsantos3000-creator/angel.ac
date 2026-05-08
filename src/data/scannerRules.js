export const PRODUCT_SIGNATURES = [
  "KellerSS",
  "Echo",
  "Napse",
  "Zyon",
  "Void.ac",
  "Ocean.ac",
  "FiveM",
  "Citizen Runtime",
  "Discord Overlay",
  "NVIDIA Overlay",
  "OBS",
  "RTSS",
  "MSI Afterburner",
]

export const SCANNER_CATEGORIES = {
  kernel: [
    "Driver Integrity",
    "Kernel Telemetry",
    "Process Callbacks",
    "Thread Callbacks",
    "Image Load Callbacks",
    "Hidden Modules",
    "Hidden Drivers",
    "Kernel Monitor",
    "Signed Driver Verification",
    "Certificate Validation",
  ],

  memory: [
    "Process Hollowing",
    "RWX Memory",
    "CREATE_SUSPENDED",
    "Manual Map Indicators",
    "Shellcode Regions",
    "Executable Private Memory",
    "Orphan Modules",
    "PE Header Validation",
    "Thread Start Address",
    "Parent PID Anomalies",
  ],

  drivers: [
    "iqvw64e.sys",
    "capcom.sys",
    "gdrv.sys",
    "winring0",
    "asusgio",
    "Hidden Driver Detection",
    "Driver Object Anomaly",
    "Vulnerable Driver Detection",
  ],

  security: [
    "Windows Defender",
    "Firewall",
    "SmartScreen",
    "Tamper Protection",
    "Cloud Protection",
    "IOAV Protection",
    "Defender Exclusions",
    "Threat History",
    "Audit Policies",
  ],

  forensic: [
    "ETW Monitoring",
    "YARA Scanning",
    "Module Reputation",
    "Timeline Correlation",
    "Anomaly Heuristics",
    "Telemetry Upload",
    "Integrity Snapshots",
    "Tamper Alerts",
    "Cleared Logs",
    "Administrative Activity",
  ],

  fivem: [
    "FiveM Cache",
    "Citizen Runtime",
    "FiveM Resources",
    "Injected DLLs",
    "DLL Side Loading",
    "server-cache",
    "server-cache-priv",
    "nui-storage",
    "Runtime Integrity",
  ],

  boot: [
    "UEFI Integrity",
    "Secure Boot",
    "TPM",
    "TestSigning",
    "Debug Mode",
    "BCD Integrity",
    "Boot Integrity",
  ],

  registry: [
    "Run",
    "RunOnce",
    "Services",
    "Drivers",
    "IFEO",
    "KnownDLLs",
    "AppInit_DLLs",
    "SilentProcessExit",
    "Registry Forensic",
  ],
}

export const ADVANCED_DETECTION_RULES = [
  {
    title: "Vulnerable Driver",
    severity: "critical",
  },
  {
    title: "RWX Memory Region",
    severity: "high",
  },
  {
    title: "Manual Map Indicators",
    severity: "critical",
  },
  {
    title: "Kernel Callback Tampering",
    severity: "critical",
  },
  {
    title: "Overlay Detection",
    severity: "medium",
  },
]

export function buildScannerVerdict(findings) {
  const critical = findings.filter((f) => f.severity === "critical").length
  const high = findings.filter((f) => f.severity === "high").length
  const medium = findings.filter((f) => f.severity === "medium").length

  let verdict = "CLEAN"

  if (critical >= 1) {
    verdict = "BLOCKED"
  } else if (high >= 1) {
    verdict = "SUSPICIOUS"
  }

  return {
    verdict,
    critical,
    high,
    medium,
    total: findings.length,
  }
}
