import {
  PRODUCT_SIGNATURES,
  SCANNER_CATEGORIES,
  ADVANCED_DETECTION_RULES,
  buildScannerVerdict,
} from "../data/scannerRules"

export default function ScannerDashboard() {
  const verdict = buildScannerVerdict(ADVANCED_DETECTION_RULES)

  return (
    <section className="scannerPanel">
      <div className="scannerHeader">
        <div>
          <h2>ADVANCED SCANNER MODULES</h2>
          <p>Kernel · Memory · FiveM · Registry · Forensic · Telemetry</p>
        </div>

        <div className={`verdict ${verdict.verdict.toLowerCase()}`}>
          {verdict.verdict}
        </div>
      </div>

      <div className="scannerStats">
        <Stat title="CRITICAL" value={verdict.critical} />
        <Stat title="HIGH" value={verdict.high} />
        <Stat title="MEDIUM" value={verdict.medium} />
        <Stat title="FINDINGS" value={verdict.total} />
      </div>

      <div className="products">
        <h3>PRODUCT SIGNATURES</h3>

        <div className="tags">
          {PRODUCT_SIGNATURES.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="moduleGrid">
        {Object.entries(SCANNER_CATEGORIES).map(([key, items]) => (
          <div className="moduleCard" key={key}>
            <h3>{key}</h3>

            <div className="moduleItems">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scannerPanel {
          margin-top: 25px;
          padding: 28px;
          border-radius: 24px;
          background: #080808;
          border: 1px solid rgba(212,175,55,0.18);
          box-shadow: 0 0 35px rgba(212,175,55,0.05);
        }

        .scannerHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 25px;
        }

        .scannerHeader h2 {
          color: #d4af37;
          font-size: 26px;
          letter-spacing: 2px;
        }

        .scannerHeader p {
          color: #aaa;
          margin-top: 8px;
          font-size: 14px;
        }

        .verdict {
          padding: 16px 22px;
          border-radius: 16px;
          font-weight: bold;
          letter-spacing: 2px;
          color: #000;
          background: #d4af37;
        }

        .verdict.blocked {
          background: #ff4b4b;
          color: white;
        }

        .scannerStats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 25px;
        }

        .stat {
          background: #050505;
          border: 1px solid rgba(212,175,55,0.16);
          border-radius: 18px;
          padding: 20px;
        }

        .stat span {
          color: #8f7440;
          font-size: 13px;
        }

        .stat strong {
          display: block;
          margin-top: 10px;
          color: white;
          font-size: 28px;
        }

        .products {
          margin-bottom: 25px;
        }

        .products h3 {
          color: #d4af37;
          margin-bottom: 15px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tags span {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.25);
          color: #f3d27b;
          font-size: 13px;
        }

        .moduleGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .moduleCard {
          background: #050505;
          border: 1px solid rgba(212,175,55,0.14);
          border-radius: 20px;
          padding: 22px;
        }

        .moduleCard h3 {
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 16px;
        }

        .moduleItems {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .moduleItems span {
          font-size: 12px;
          color: #ddd;
          padding: 8px 10px;
          border-radius: 999px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.08);
        }

        @media (max-width: 1100px) {
          .scannerStats,
          .moduleGrid {
            grid-template-columns: 1fr;
          }

          .scannerHeader {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  )
}

function Stat({ title, value }) {
  return (
    <div className="stat">
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  )
}
