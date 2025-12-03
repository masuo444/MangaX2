import React from "react";
import {
  Coins, Calendar, Users, PenTool, Folder,
  Cpu, Rocket, Coffee, CheckCircle, Globe, ArrowRight
} from "lucide-react";

const STYLES = `
:root {
  --bg: #0A0A0A;
  --card: #151515;
  --text: #FFFFFF;
  --text-sub: #B8B8B8;
  --gold: #C6A667;
  --line: #7F7F7F;
  --brown: #2A1E14;
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Noto+Sans+JP:wght@400;500&family=Noto+Serif+JP:wght@700&family=Playfair+Display:wght@700&display=swap');

* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text); font-family: 'Noto Sans JP','Inter',sans-serif; }
.lp-page { background: var(--bg); color: var(--text); font-family: 'Noto Sans JP','Inter',sans-serif; }
.lp-container { max-width: 960px; margin: 0 auto; padding: 0 20px; }
.lp-section { margin: 160px 0; }
.lp-hero { text-align: center; padding: 240px 0; }
.lp-h1 { font-family: 'Noto Serif JP','Playfair Display',serif; font-size: 56px; line-height: 1.2; margin: 0; letter-spacing: 0.01em; }
.lp-h2 { font-family: 'Noto Serif JP','Playfair Display',serif; font-size: 34px; line-height: 1.3; margin: 0 0 28px; }
.lp-h3 { font-family: 'Noto Serif JP','Playfair Display',serif; font-size: 22px; line-height: 1.3; margin: 0 0 12px; }
.lp-body-l { font-size: 18px; line-height: 1.7; color: var(--text-sub); margin: 0; }
.lp-body-m { font-size: 16px; line-height: 1.6; color: var(--text-sub); margin: 0; }
.lp-caption { font-size: 13px; letter-spacing: 0.08em; color: var(--text-sub); text-transform: uppercase; }
.lp-cta-row { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 24px; }
.lp-btn-primary { background: var(--gold); color: #000; padding: 16px 32px; border: none; border-radius: 999px; font-weight: 800; cursor: pointer; }
.lp-btn-primary:hover { background: #b99753; }
.lp-btn-secondary { background: transparent; color: var(--gold); padding: 16px 32px; border: 1px solid var(--gold); border-radius: 999px; font-weight: 700; cursor: pointer; }
.lp-grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
.lp-value-card { background: var(--card); border-radius: 12px; padding: 24px; border: 1px solid #1f1f1f; }
.lp-value-card h4 { font-size: 18px; margin: 0 0 8px; color: var(--gold); font-family: 'Noto Sans JP','Inter',sans-serif; }
.lp-workflow { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
.lp-workflow-step { background: var(--bg); border: 1px solid var(--line); border-radius: 10px; padding: 16px; min-height: 100px; }
.lp-uc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
.lp-uc-card { background: var(--card); border-radius: 8px; padding: 20px; border: 1px solid #1f1f1f; }
.lp-uc-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.lp-tag { padding: 6px 12px; background: rgba(255,255,255,0.08); border-radius: 999px; font-size: 14px; color: var(--text); }
.lp-table { width: 100%; border-collapse: collapse; }
.lp-table th, .lp-table td { padding: 14px 12px; border: 1px solid rgba(255,255,255,0.12); }
.lp-table th { background: var(--brown); color: var(--text); text-align: left; font-weight: 800; }
.lp-table td:nth-child(2) { background: #0f0f0f; }
.lp-table td:nth-child(3) { background: linear-gradient(160deg, rgba(20,20,22,0.95), rgba(40,32,12,0.9)); color: var(--gold); font-weight: 800; }
.lp-price-card { background: var(--card); border-radius: 12px; padding: 28px; border: 1px solid rgba(255,255,255,0.08); }
.lp-price-num { font-size: 24px; font-weight: 900; color: var(--gold); margin: 0 0 12px; }
.lp-faq details { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 12px 14px; }
.lp-faq summary { cursor: pointer; font-weight: 800; color: var(--text); }
.lp-faq p { margin: 8px 0 0; color: var(--text-sub); }
.lp-footer { background: var(--bg); border-top: 1px solid var(--line); padding: 40px 0; color: var(--text-sub); }
.lp-footer a { color: var(--text-sub); text-decoration: none; margin-right: 16px; }
.lp-footer span.logo { color: #C62828; font-weight: 900; }
@media (max-width: 768px) {
  .lp-section { margin: 120px 0; }
  .lp-hero { padding: 200px 0; }
  .lp-h1 { font-size: 44px; }
  .lp-h2 { font-size: 30px; }
  .lp-h3 { font-size: 20px; }
}
`;

const FlowPage = () => {
  const workflowSteps = [
    "申込み（フォーム / DM）",
    "ヒアリング（60分）",
    "構成案（10ページ）制作",
    "AI作画 × 編集",
    "仕上げ・レタッチ",
    "納品 ＋ MangaX掲載（任意）",
  ];
  const useCases = [
    { title: "個人", tags: ["SNSプロフィール", "転職物語", "ノマドの記録"] },
    { title: "ギフト", tags: ["結婚", "家族の記録", "誕生日", "記念日"] },
    { title: "ビジネス", tags: ["代表ストーリー", "サービス説明", "採用漫画"] },
    { title: "海外向け", tags: ["英語PR", "展示会漫画", "多言語プロモーション"] },
  ];
  const comparison = [
    ["価格", "30〜50万円 / 10P", "10万円 / 10P"],
    ["納期", "1.5〜2ヶ月", "最短2週間"],
    ["手間", "ネーム・下書き指示が必要", "ヒアリングのみ"],
    ["品質", "作家によって差が大きい", "プロ編集 × AI補正で安定品質"],
    ["展開", "データ納品のみ", "40言語展開・SNS発信可能"],
  ];
  const faqItems = [
    { q: "ストーリーがまとまっていなくても大丈夫？", a: "はい。ヒアリングで整理します。" },
    { q: "公開したくない場合は？", a: "非公開制作も可能です。" },
    { q: "納期は？", a: "個人：2〜3週間前後。ギフト：＋数日。" },
    { q: "ビジネス利用は可能？", a: "会社紹介・採用漫画・展示会PRにも対応。" },
  ];

  const valueIcons = [Rocket, Coffee, Globe];

  return (
    <div className="lp-page">
      <style>{STYLES}</style>

      <section className="lp-hero">
        <div className="lp-container">
          <div className="lp-caption" style={{ color: "#C6A667" }}>MangaX × FOMUS</div>
          <h1 className="lp-h1">あなたの物語を、10ページの漫画に。</h1>
          <p className="lp-body-l" style={{ maxWidth: 760, margin: "16px auto 0" }}>
            世界基準のAI × クリエイティブディレクションで、人生・ビジネス・ギフト・個人PRを“作品”へ昇華するサービス。
          </p>
          <div className="lp-cta-row">
            <button className="lp-btn-primary">無料ヒアリングを予約する</button>
            <button className="lp-btn-secondary">制作事例を見る</button>
          </div>
          <div className="lp-body-m" style={{ marginTop: 12 }}>
            FOMUS Creative Studio ・ 多言語対応（40言語）
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="lp-container">
          <h2 className="lp-h2">FOMUSがつくると、 なぜ圧倒的？</h2>
          <div className="lp-grid-3">
            {[
              "プロ品質 × 圧倒的スピード",
              "まっすーによる60分ヒアリング",
              "世界展開できる漫画",
            ].map((title, idx) => (
              <div key={title} className="lp-value-card">
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {React.createElement(valueIcons[idx], { size: 22, color: "#C6A667" })}
                  <h4 style={{ margin: 0 }}>{title}</h4>
                </div>
                <p className="lp-body-m" style={{ marginTop: 8 }}>
                  {idx === 0 && "AI × アジャイル制作で、最短2週間の納品が可能。"}
                  {idx === 1 && "想い・背景・目的を引き出し、構成をゼロから設計。"}
                  {idx === 2 && "40言語展開。SNS・展示会・海外PRに最適。"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="lp-container">
          <h2 className="lp-h2">制作の流れ</h2>
          <div className="lp-workflow">
            {workflowSteps.map((step, idx) => (
              <div key={step} className="lp-workflow-step">
                <p className="lp-body-m" style={{ color: "#FFFFFF", margin: 0 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="lp-container">
          <h2 className="lp-h2">こんな物語が漫画になります</h2>
          <div className="lp-uc-grid">
            {useCases.map((uc) => (
              <div key={uc.title} className="lp-uc-card">
                <h3 className="lp-h3" style={{ margin: 0 }}>{uc.title}</h3>
                <div className="lp-uc-tags">
                  {uc.tags.map((t) => <span key={t} className="lp-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="lp-container">
          <h2 className="lp-h2" style={{ marginBottom: 16 }}>従来の常識を覆す、スピードと価格</h2>
          <table className="lp-table">
            <thead>
              <tr>
                <th>項目</th>
                <th>従来の漫画制作</th>
                <th>MangaX Story-to-Comic</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row[0]}>
                  <td style={{ color: "#FFFFFF", fontWeight: 700 }}>{row[0]}</td>
                  <td style={{ color: "#FFFFFF" }}>{row[1]}</td>
                  <td style={{ color: "#C6A667", fontWeight: 800 }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="lp-section">
        <div className="lp-container">
          <h2 className="lp-h2" style={{ marginBottom: 20 }}>料金プラン</h2>
          <div className="lp-price-card">
            <h3 className="lp-h3" style={{ marginBottom: 8 }}>Standard Package</h3>
            <p className="lp-price-num">100,000円（税込）</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#FFFFFF", lineHeight: 1.7 }}>
              <li>漫画10ページ制作</li>
              <li>60分ヒアリング</li>
              <li>AI作画・編集</li>
              <li>高解像度データ納品（PDF / JPG / PNG）</li>
            </ul>
            <div style={{ marginTop: 16 }}>
              <h4 style={{ margin: "0 0 8px", color: "#C6A667", fontSize: 18 }}>オプション</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#B8B8B8", lineHeight: 1.6 }}>
                <li>追加ページ：1P +5,000円</li>
                <li>多言語追加：1言語 +30,000円</li>
                <li>製本サービス：1冊1,000円〜</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="lp-container">
          <h2 className="lp-h2" style={{ marginBottom: 16 }}>FAQ</h2>
        <div className="lp-faq" style={{ display: "grid", gap: 12 }}>
          {faqItems.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        </div>
      </section>

      <section className="lp-section" style={{ paddingTop: 200, paddingBottom: 200, textAlign: "center" }}>
        <div className="lp-container">
          <h2 className="lp-h2" style={{ marginBottom: 16 }}>あなたの物語を、世界へ届けましょう。</h2>
          <div className="lp-cta-row" style={{ justifyContent: "center" }}>
            <button className="lp-btn-primary">Story-to-Comicを申し込む</button>
          </div>
        </div>
      </section>

      <footer className="lp-footer">
        <div className="lp-container" style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
          <span className="logo">MangaX</span>
          <a>FOMUS Creative Studio</a>
          <a>利用規約</a>
          <a>プライバシーポリシー</a>
          <a>お問い合わせ</a>
          <a>EN / JP</a>
        </div>
      </footer>
    </div>
  );
};

export default FlowPage;
