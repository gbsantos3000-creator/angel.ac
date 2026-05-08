import {
  PRODUCT_SIGNATURES,
  SCANNER_CATEGORIES,
  ADVANCED_DETECTION_RULES,
  buildScannerVerdict,
} from "../data/scannerRules";

export default function ScannerDashboard() {
  const verdict = buildScannerVerdict(
    ADVANCED_DETECTION_RULES
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="border border-yellow-500/20 rounded-2xl p-8 bg-zinc-950">

        <h1 className="text-4xl font-bold text-yellow-400">
          ANGEL A.C
        </h1>

        <p className="text-zinc-400 mt-2">
          Advanced Kernel & Forensic Scanner
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

          <Box title="Verdict" value={verdict.verdict} />
          <Box title="Critical" value={verdict.critical} />
          <Box title="High" value={verdict.high} />
          <Box title="Findings" value={verdict.total} />

        </div>

      </div>
    </div>
  );
}

function Box({ title, value }) {
  return (
    <div className="bg-black border border-zinc-800 rounded-xl p-5">
      <p className="text-zinc-500 text-sm">
        {title}
      </p>

      <h3 className="text-2xl font-bold text-yellow-400 mt-2">
        {value}
      </h3>
    </div>
  );
}
