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

          <Box
            title="Verdict"
            value={verdict.verdict}
          />

          <Box
            title="Critical"
            value={verdict.critical}
          />

          <Box
            title="High"
            value={verdict.high}
          />

          <Box
            title="Findings"
            value={verdict.total}
          />

        </div>

        <h2 className="text-2xl text-yellow-400 mt-10">
          Products
        </h2>

        <div className="flex flex-wrap gap-2 mt-4">
          {PRODUCT_SIGNATURES.map((item) => (
            <div
              key={item}
              className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300"
            >
              {item}
            </div>
          ))}
        </div>

        <h2 className="text-2xl text-yellow-400 mt-10">
          Detection Modules
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-4">

          {Object.entries(
            SCANNER_CATEGORIES
          ).map(([key, items]) => (

            <div
              key={key}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
            >
              <h3 className="text-xl font-semibold capitalize">
                {key}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full bg-black border border-zinc-700 text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

function Box({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
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
