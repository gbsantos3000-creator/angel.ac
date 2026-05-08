export const PRODUCT_SIGNATURES = [
  "KellerSS",
  "Echo",
  "Napse",
  "Zyon",
  "Void.ac",
  "Ocean.ac",
];

export const SCANNER_CATEGORIES = {
  kernel: [
    "Driver Integrity",
    "Kernel Telemetry",
    "Process Callbacks",
    "Thread Callbacks",
    "Image Load Callbacks",
    "Hidden Modules",
    "Hidden Drivers",
  ],

  memory: [
    "Process Hollowing",
    "RWX Memory",
    "CREATE_SUSPENDED",
    "Shellcode Regions",
    "Executable Private Memory",
    "Orphan Modules",
  ],

  security: [
    "Windows Defender",
    "Firewall",
    "SmartScreen",
    "Tamper Protection",
    "Cloud Protection",
  ],

  forensic: [
    "ETW Monitoring",
    "YARA Scanning",
    "Timeline Correlation",
    "Integrity Snapshots",
    "Telemetry Upload",
  ],

  fivem: [
    "FiveM Cache",
    "Citizen Runtime",
    "FiveM Resources",
    "Overlay Detection",
  ],
};

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
];

export function buildScannerVerdict(findings) {
  const critical = findings.filter(
    (f) => f.severity === "critical"
  ).length;

  const high = findings.filter(
    (f) => f.severity === "high"
  ).length;

  const medium = findings.filter(
    (f) => f.severity === "medium"
  ).length;

  let verdict = "CLEAN";

  if (critical >= 1) {
    verdict = "BLOCKED";
  } else if (high >= 1) {
    verdict = "SUSPICIOUS";
  }

  return {
    verdict,
    critical,
    high,
    medium,
    total: findings.length,
  };
}
