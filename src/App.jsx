import React, { useState, useEffect } from "react";
import {
  Play, Plus, Info, Search, Home, MonitorPlay, User, ChevronLeft, ChevronRight,
  X, Heart, Share2, Crown, Globe, Settings, Upload, Wand2, DollarSign,
  Briefcase, Smile, Link as LinkIcon, AlertCircle, FileText, Palette,
  FileCheck, Mail, Languages, Lock, Sparkles, Check, Trophy, Handshake, Building,
  ThumbsUp, MessageCircle, Gift, Clock, Bell, Download, Loader2,
} from "lucide-react";

// ==========================================
// 🎨 デザイン (CSS)
// ==========================================
const STYLES = `
:root {
  --primary-red: #e50914;
  --bg-black: #141414;
  --bg-dark: #181818;
  --bg-card: #2f2f2f;
  --text-white: #ffffff;
  --text-gray: #b3b3b3;
  
  --jump-bg: #ffffff;
  --jump-text: #333333;
  --jump-gray: #757575;
  --jump-light-gray: #f5f5f5;
  --jump-accent: #e60012;
  --jump-border: #eeeeee;

  --header-height: 68px;
  --safe-area-bottom: env(safe-area-inset-bottom);
}

* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

body {
  margin: 0; padding: 0;
  background-color: var(--bg-black);
  color: var(--text-white);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

.hidden { display: none !important; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.text-center { text-align: center; }
.font-bold { font-weight: bold; }
.relative { position: relative; }
.absolute { position: absolute; }
.overflow-hidden { overflow: hidden; }
.cursor-pointer { cursor: pointer; }

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.animate-fade-in { animation: fadeIn 0.4s ease-out; }
.animate-slide-up { animation: slideUp 0.3s ease-out; }
.animate-spin { animation: spin 1s linear infinite; }

.service-section {
  margin: 3rem 4% 5rem;
  padding: 2rem;
  border-radius: 16px;
  background: radial-gradient(circle at 20% 20%, rgba(229,9,20,0.08), transparent 40%), radial-gradient(circle at 80% 0%, rgba(0,255,200,0.08), transparent 40%), #0f0f0f;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 20px 60px rgba(0,0,0,0.45);
  color: #fff;
}
.service-grid { display: grid; gap: 1.2rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.service-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  padding: 1rem;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.service-cta {
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: linear-gradient(135deg, #e50914, #ff6b6b);
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.85rem 1.4rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(229,9,20,0.35);
}

.app-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 50;
  padding: 0 4%; height: var(--header-height);
  display: flex; justify-content: space-between; align-items: center;
  transition: background-color 0.4s;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%);
}
.app-header.scrolled { background-color: rgb(20, 20, 20); }
.header-left { display: flex; align-items: center; gap: 2rem; }
.logo { color: var(--primary-red); font-size: 1.8rem; font-weight: 900; text-shadow: 0 0 10px rgba(229,9,20,0.5); cursor: pointer; text-decoration: none; }
.pc-nav { display: none; gap: 1.2rem; }
.pc-nav-link { color: #e5e5e5; font-size: 0.9rem; cursor: pointer; transition: color 0.2s; }
.pc-nav-link:hover, .pc-nav-link.active { color: #fff; font-weight: bold; }
.header-right { display: flex; align-items: center; gap: 1.5rem; color: white; }
.icon-btn { background: none; border: none; color: white; cursor: pointer; transition: transform 0.2s; }
.icon-btn:hover { transform: scale(1.1); }

.bottom-nav {
  position: fixed; bottom: 0; left: 0; right: 0;
  background-color: #121212; border-top: 1px solid #333;
  display: flex; justify-content: space-around;
  padding: 0.5rem 0 calc(0.5rem + var(--safe-area-bottom)); z-index: 50;
}
.nav-item { background: none; border: none; color: #666; display: flex; flex-direction: column; align-items: center; font-size: 0.6rem; cursor: pointer; }
.nav-item.active { color: var(--text-white); }

@media (min-width: 768px) {
  .bottom-nav { display: none; }
  .pc-nav { display: flex; }
  .app-header { padding: 0 60px; }
}

.hero { position: relative; height: 85vh; width: 100%; display: flex; align-items: flex-end; justify-content: center; }
@media (min-width: 768px) { .hero { align-items: center; justify-content: flex-start; height: 95vh; } }
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #141414 0%, transparent 50%, rgba(0,0,0,0.4) 100%); }
@media (min-width: 768px) { .hero-overlay { background: linear-gradient(to right, #141414 10%, rgba(20,20,20,0.8) 40%, transparent 80%), linear-gradient(to top, #141414 0%, transparent 30%); } }

.hero-content { position: relative; z-index: 10; text-align: center; width: 100%; padding: 0 1rem 6rem; max-width: 800px; margin: 0 auto; }
@media (min-width: 768px) { .hero-content { text-align: left; padding: 0 60px; width: 100%; max-width: 1400px; display: flex; align-items: center; justify-content: flex-start; gap: 4rem; margin: 0; } }

.hero-text-area { flex: 1; max-width: 600px; }
.hero-poster-area { display: none; flex-shrink: 0; width: 300px; aspect-ratio: 257 / 364; box-shadow: 0 20px 40px rgba(0,0,0,0.8); border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.2); transform: rotate(2deg); }
@media (min-width: 768px) { .hero-poster-area { display: block; } }
.hero-poster-img { width: 100%; height: 100%; object-fit: cover; }

.hero-title { font-size: 3rem; font-weight: 900; line-height: 1; margin-bottom: 0.5rem; font-family: Impact, sans-serif; letter-spacing: -1px; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); }
@media (min-width: 768px) { .hero-title { font-size: 5rem; margin: 0 0 1rem 0; } }
.hero-desc { display: none; font-size: 1.1rem; line-height: 1.5; margin-bottom: 2rem; color: #ddd; text-shadow: 1px 1px 2px rgba(0,0,0,0.8); }
@media (min-width: 768px) { .hero-desc { display: block; } }

.hero-meta { display: flex; align-items: center; justify-content: center; gap: 0.8rem; font-size: 0.9rem; font-weight: bold; margin-bottom: 1.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.8); flex-wrap: wrap; }
@media (min-width: 768px) { .hero-meta { justify-content: flex-start; font-size: 1.1rem; } }
.hero-tags { margin-bottom: 1.5rem; display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap;}
@media (min-width: 768px) { .hero-tags { justify-content: flex-start; } }
.hero-actions { display: flex; gap: 1rem; justify-content: center; }
@media (min-width: 768px) { .hero-actions { justify-content: flex-start; } }

.btn { border: none; padding: 0.6rem 1.5rem; border-radius: 4px; font-weight: bold; font-size: 1.1rem; cursor: pointer; display: flex; align-items: center; gap: 0.6rem; transition: all 0.2s; }
.btn:active { transform: scale(0.95); }
.btn-white { background: white; color: black; }
.btn-gray { background: rgba(109, 109, 110, 0.7); color: white; backdrop-filter: blur(4px); }

.content-container { position: relative; z-index: 30; margin-top: -4rem; padding-bottom: 4rem; }
@media (min-width: 768px) { .content-container { margin-top: -5rem; } }
.section-row { margin: 2rem 0; padding-left: 4%; }
.section-title { font-size: 1.1rem; font-weight: bold; margin-bottom: 0.8rem; color: #e5e5e5; cursor: pointer; }
@media (min-width: 768px) { .section-title { font-size: 1.5rem; } }
.carousel { display: flex; overflow-x: auto; gap: 0.5rem; padding-bottom: 2rem; padding-right: 4%; scroll-snap-type: x mandatory; scrollbar-width: none; }
.carousel::-webkit-scrollbar { display: none; }

.poster-card { position: relative; flex: 0 0 auto; width: 110px; aspect-ratio: 2/3; border-radius: 4px; overflow: hidden; background: var(--bg-card); scroll-snap-align: start; transition: transform 0.3s, z-index 0.3s; cursor: pointer; }
@media (min-width: 768px) { .poster-card { width: 180px; } .poster-card:hover { transform: scale(1.1); z-index: 10; box-shadow: 0 10px 20px rgba(0,0,0,0.5); } }
.poster-image { width: 100%; height: 100%; object-fit: cover; }

.continue-card { flex: 0 0 auto; width: 240px; background: var(--bg-card); border-radius: 4px; overflow: hidden; margin-right: 0.5rem; transition: transform 0.3s; cursor: pointer; }
@media (min-width: 768px) { .continue-card { width: 300px; } .continue-card:hover { transform: scale(1.05); z-index: 10; } }
.continue-image-wrapper { position: relative; aspect-ratio: 16/9; }
.continue-image { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
.play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; }
.continue-card:hover .play-overlay { opacity: 1; }
.play-circle { width: 40px; height: 40px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.5); }
.progress-bar-bg { height: 4px; background: #333; width: 100%; }
.progress-bar-fill { height: 100%; background: var(--primary-red); }
.continue-info { padding: 0.8rem; display: flex; justify-content: space-between; align-items: center; color: #ccc; }

.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: flex-end; z-index: 100; padding: 0; }
@media (min-width: 768px) { .modal-overlay { align-items: center; padding: 2rem; } }
.modal-content { background: var(--bg-dark); width: 100%; max-width: 850px; border-radius: 16px 16px 0 0; max-height: 90vh; overflow-y: auto; position: relative; color: var(--text-white); box-shadow: 0 0 20px rgba(0,0,0,0.5); }
@media (min-width: 768px) { .modal-content { border-radius: 8px; height: auto; max-height: 95vh; } }
.modal-close { position: absolute; top: 1rem; right: 1rem; background: #181818; border: none; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; color: white; z-index: 20; cursor: pointer; }

.jump-container { background-color: var(--jump-bg); color: var(--jump-text); min-height: 100%; }
.jump-hero { position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; }
@media (min-width: 768px) { .jump-hero { aspect-ratio: 21 / 9; } }
.jump-hero img { width: 100%; height: 100%; object-fit: cover; }
.jump-hero-gradient { position: absolute; bottom: 0; left: 0; right: 0; height: 50%; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); }
.jump-info { padding: 1.5rem 1rem; }
.jump-title { font-size: 1.8rem; font-weight: bold; margin-bottom: 0.5rem; }
@media (min-width: 768px) { .jump-title { font-size: 2.5rem; } }
.jump-read-btn { width: 100%; padding: 1rem; border-radius: 30px; border: none; background: var(--jump-accent); color: white; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer; box-shadow: 0 4px 10px rgba(230, 0, 18, 0.3); margin-bottom: 1.5rem; transition: transform 0.2s; }
.jump-read-btn:hover { transform: scale(1.02); }
.jump-tabs { display: flex; border-bottom: 1px solid var(--jump-border); background: var(--jump-bg); position: sticky; top: 0; z-index: 40; }
.jump-tab { flex: 1; padding: 1rem; text-align: center; font-weight: bold; color: var(--jump-gray); cursor: pointer; background: none; border: none; position: relative; transition: color 0.2s; }
.jump-tab.active { color: var(--jump-accent); }
.jump-tab.active::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: var(--jump-accent); }
.jump-episode-item { display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid var(--jump-border); cursor: pointer; align-items: flex-start; position: relative; transition: background 0.2s; }
.jump-episode-item:hover { background: #f9f9f9; }
.jump-ep-thumb { width: 120px; aspect-ratio: 16 / 9; background: var(--jump-light-gray); border-radius: 4px; overflow: hidden; flex-shrink: 0; position: relative; }
.jump-ep-thumb img { width: 100%; height: 100%; object-fit: cover; }
.production-badge { position: absolute; top: 0.5rem; left: 0.5rem; background: rgba(0,0,0,0.7); color: white; font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; }

.reader-container { position: fixed; inset: 0; background: black; z-index: 200; display: flex; flex-direction: column; }
.reader-header { position: absolute; top: 0; width: 100%; padding: 1rem; background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent); display: flex; justify-content: space-between; color: white; z-index: 10; transition: transform 0.3s; }
.reader-header.hidden { transform: translateY(-100%); }
.reader-content { flex: 1; overflow-x: auto; display: flex; scroll-snap-type: x mandatory; scrollbar-width: none; }
.reader-page { flex: 0 0 100%; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; scroll-snap-align: center; position: relative; }
.reader-page img { max-width: 100%; max-height: 100%; object-fit: contain; }
.reader-footer { position: absolute; bottom: 0; width: 100%; padding: 1rem; padding-bottom: 2rem; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); transition: transform 0.3s; }
.reader-footer.hidden { transform: translateY(100%); }

.admin-container { padding: 2rem; background: #f3f4f6; min-height: 100vh; color: #333; padding-bottom: 6rem;}
.card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 1rem; }
`;

const TRANSLATE_LANGS = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "中文" },
  { code: "es", label: "Español" },
];

// ==========================================
// データ
// ==========================================
const DEFAULT_DB = {
  series: [
    { 
      id: "kuku",
      title: "KUKU ―黎明の木神―",
      author: "Author Name",
      coverUrl: "/assets/kuku-cover.jpg",
      heroUrl: "/assets/kuku-hero.jpg",
      description: "",
      totalLikes: 12400,
      isNew: true,
      status: "approved",
      direction: "rtl",
      language: "ja",
      tags: ["Dark Fantasy", "Action"],
      match: 98,
    },
  ],
  chapters: [
    { id: "c1", seriesId: "kuku", number: 1, title: "1話", publishDate: "2025/11/01", likes: 1200, status: "published", thumbUrl: "/assets/kuku-ep1.jpg", pageCount: 21 },
    { id: "c2", seriesId: "kuku", number: 2, title: "2話", publishDate: "2025/11/08", likes: 980, status: "published", thumbUrl: "/assets/kuku-ep2.jpg", pageCount: 22 },
    { id: "c3", seriesId: "kuku", number: 3, title: "3話", publishDate: "2025/11/15", likes: 720, status: "published", thumbUrl: "/assets/kuku-ep3.jpg", pageCount: 22 },
    { id: "c4", seriesId: "kuku", number: 4, title: "", status: "in_production", sponsorGoal: 1, sponsors: 0, thumbUrl: "/assets/kuku-ep3.jpg", pageCount: 22 },
    { id: "c5", seriesId: "kuku", number: 5, title: "", status: "in_production", sponsorGoal: 1, sponsors: 0, thumbUrl: "/assets/kuku-ep3.jpg", pageCount: 22 },
    { id: "c6", seriesId: "kuku", number: 6, title: "", status: "in_production", sponsorGoal: 1, sponsors: 0, thumbUrl: "/assets/kuku-ep3.jpg", pageCount: 22 },
  ],
};

const RESOURCES = {
  ja: {
    nav_home: "ホーム", nav_new: "新着", nav_mypage: "マイページ", nav_partners: "スポンサー",
    read_now: "読む", my_list: "マイリスト",
    section_continue: "視聴中コンテンツ", section_trending: "人気急上昇", section_new: "新着エピソード",
    match: "マッチ", new_badge: "新着",
    episodes: "エピソード", details: "作品詳細", more_like_this: "似たような作品",
    read_first: "最初から読む", favorite: "お気に入り", comments: "コメント", share: "シェア",
    production: "制作中", sponsor_slots: "スポンサー枠", become_sponsor: "スポンサーになる",
    support_btn: "支援する", sponsor_desc: "制作を支援して巻末に名前を掲載しよう！", sponsor_price: "一口 5,000円",
    admin_title: "クリエイター管理", tab_dashboard: "ダッシュボード", tab_works: "作品一覧",
    close: "閉じる", lang_switch: "English", guest_name: "ゲスト",
  },
  en: {
    nav_home: "Home", nav_new: "New", nav_mypage: "My Page", nav_partners: "Partners",
    read_now: "Read", my_list: "My List",
    section_continue: "Continue Reading", section_trending: "Trending", section_new: "New Releases",
    match: "Match", new_badge: "NEW",
    episodes: "Episodes", details: "Details", more_like_this: "More Like This",
    read_first: "Read First", favorite: "Favorite", comments: "Comments", share: "Share",
    production: "In Production", sponsor_slots: "Sponsor Slots", become_sponsor: "Become a Sponsor",
    support_btn: "Support", sponsor_desc: "Support production and get credited!", sponsor_price: "$50 / Slot",
    admin_title: "Creator Studio", tab_dashboard: "Dashboard", tab_works: "Works",
    close: "Close", lang_switch: "日本語", guest_name: "Guest",
  },
};

// --- Hooks & helpers ---
const useAppNavigation = (initialView = "home") => {
  const [view, setView] = useState(initialView);
  const [historyStack, setHistoryStack] = useState([initialView]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [readingChapter, setReadingChapter] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      if (readingChapter) {
        setReadingChapter(null);
      } else if (selectedSeries) {
        setSelectedSeries(null);
      } else if (historyStack.length > 1) {
        const newStack = [...historyStack];
        newStack.pop();
        setHistoryStack(newStack);
        setView(newStack[newStack.length - 1]);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [readingChapter, selectedSeries, historyStack]);

  const navigate = (newView) => {
    if (newView === view) return;
    window.history.pushState({ view: newView }, "");
    setHistoryStack([...historyStack, newView]);
    setView(newView);
    window.scrollTo(0, 0);
  };

  const openDetail = (series) => {
    window.history.pushState({ detail: series.id }, "");
    setSelectedSeries(series);
  };

  const closeDetail = () => setSelectedSeries(null);

  const openReader = (chapter, series) => {
    window.history.pushState({ read: chapter.id }, "");
    setReadingChapter({ chapter, series });
  };

  const closeReader = () => setReadingChapter(null);

  return { view, navigate, selectedSeries, openDetail, closeDetail, readingChapter, openReader, closeReader };
};

const useData = () => {
  const [data, setData] = useState(DEFAULT_DB);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("No external data");
      })
      .then((jsonData) => setData(jsonData))
      .catch(() => {}); // fallback to default
  }, []);
  return data;
};

const getHistory = () => JSON.parse(localStorage.getItem("mx_history") || "[]");
const saveHistory = (seriesId, chapterId, progress) => {
  const history = getHistory();
  const newEntry = { seriesId, chapterId, progress, lastReadAt: new Date().toISOString() };
  const filtered = history.filter((h) => h.seriesId !== seriesId);
  localStorage.setItem("mx_history", JSON.stringify([newEntry, ...filtered]));
};

// --- Components ---
const Header = ({ scrolled, activeTab, setActiveTab, t, toggleLang, lang }) => (
  <div className={`app-header ${scrolled ? "scrolled" : ""}`}>
    <div className="header-left">
      <div className="logo" onClick={() => setActiveTab("home")}>MangaX</div>
      <div className="pc-nav">
        {["home", "new", "partners", "mypage"].map((k) => (
          <div key={k} className={`pc-nav-link ${activeTab === k ? "active" : ""}`} onClick={() => setActiveTab(k)}>
            {t[`nav_${k}`]}
          </div>
        ))}
      </div>
    </div>
    <div className="header-right">
      <button className="icon-btn"><Search size={24} /></button>
      <button className="text-xs text-gray-300 hover:text-white transition-colors" onClick={toggleLang}>{lang === "ja" ? "EN" : "JP"}</button>
      <div onClick={() => setActiveTab("mypage")} className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold cursor-pointer hover:ring-2 ring-white transition-all">:D</div>
    </div>
  </div>
);

const BottomNav = ({ activeTab, setActiveTab, t }) => (
  <div className="bottom-nav">
    {["home", "new", "partners", "mypage"].map((k) => (
      <button key={k} onClick={() => setActiveTab(k)} className={`nav-item ${activeTab === k ? "active" : ""}`}>
        {k === "home" ? <Home size={24} /> : k === "new" ? <MonitorPlay size={24} /> : k === "partners" ? <Handshake size={24} /> : <User size={24} />}
        <span>{t[`nav_${k}`]}</span>
      </button>
    ))}
  </div>
);

const HeroSection = ({ series, onRead, onMyList, t }) => {
  if (!series) return null;
  return (
    <div className="hero">
      <div className="hero-bg"><img src={series.heroUrl || series.coverUrl} alt="Hero" /></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text-area">
          <h1 className="hero-title">{series.title.toUpperCase()}</h1>
          <p className="hero-desc">{series.description}</p>
          <div className="hero-meta">
            <span style={{ color: "#46d369" }}>{series.match}% Match</span>
            <span className="border border-gray-500 px-1 rounded text-xs">HD</span>
          </div>
          <div className="hero-actions">
            <button onClick={onRead} className="btn btn-white"><Play size={24} fill="currentColor" /> {t.read_now}</button>
            <button onClick={onMyList} className="btn btn-gray"><Plus size={24} /> {t.my_list}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionRow = ({ title, items, renderItem }) => (
  <div className="section-row">
    <h3 className="section-title">{title}</h3>
    <div className="carousel">
      {items.map((item, idx) => <div key={idx}>{renderItem(item, idx)}</div>)}
    </div>
  </div>
);

const PosterCard = ({ series, onClick, t }) => (
  <div onClick={() => onClick(series)} className="poster-card">
    <img src={series.coverUrl} className="poster-image" loading="lazy" />
    <div className="absolute top-1 left-1 text-red-600 font-bold text-xs" style={{ color: "var(--primary-red)", textShadow: "0 1px 2px black" }}>N</div>
    {series.isNew && <div className="absolute bottom-0 width-full bg-red-600/90 text-white text-[9px] font-bold text-center py-0.5 w-full">{t.new_badge}</div>}
  </div>
);

const NewEpisodeCard = ({ episode, onClick }) => (
  <div onClick={() => onClick(episode)} className="continue-card">
    <div className="continue-image-wrapper">
      <img src={episode.thumbUrl} className="continue-image" loading="lazy" />
      <div className="play-overlay"><div className="play-circle"><Play size={20} className="text-white ml-1" /></div></div>
    </div>
    <div className="continue-info">
      <div className="text-sm font-bold text-white truncate w-36">{episode.series?.title} #{episode.number}</div>
      <Info size={20} />
    </div>
  </div>
);

const ServicePitch = ({ onShowFlow }) => {
  return (
    <section className="service-section">
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ maxWidth: 820 }}>
          <div style={{ fontSize: "0.95rem", letterSpacing: "0.08em", color: "#ffb3b3", fontWeight: 700 }}>STORY → COMIC</div>
          <h2 style={{ fontSize: "2.4rem", margin: "0.3rem 0 0.8rem", fontWeight: 900, lineHeight: 1.15 }}>あなたの物語を漫画にしませんか？</h2>
          <p style={{ maxWidth: 760, color: "#d7d7d7", lineHeight: 1.6 }}>
            企画の種から長編まで、AIワークフローとプロの作画チームが商業品質の漫画に仕立てます。
            1話から連載、短納期案件まで柔軟に対応。制作体制・料金プランもご提案します。
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: 220 }}>
          <button className="service-cta" onClick={onShowFlow} style={{ justifyContent: "center" }}>
            <Info size={18} /> 詳しくはこちら
          </button>
          <button
            className="service-cta"
            onClick={() => window.open("mailto:contact@example.com?subject=漫画制作相談")}
            style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.35)", boxShadow: "none" }}
          >
            <Sparkles size={18} /> 制作相談する
          </button>
        </div>
      </div>
    </section>
  );
};

const ProductionFlow = () => (
  <section className="service-section" id="production-flow" style={{ marginTop: "1.5rem" }}>
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ fontSize: "0.9rem", letterSpacing: "0.08em", color: "#9ae6ff", fontWeight: 700 }}>PROCESS</div>
      <h3 style={{ fontSize: "1.6rem", margin: "0.3rem 0 0.4rem", fontWeight: 800 }}>制作の流れ</h3>
      <p style={{ maxWidth: 780, color: "#cfcfcf", lineHeight: 1.6 }}>
        原作の共有からヒアリング、構成・生成・編集、最終納品までワンストップで伴走します。
      </p>
    </div>
    <div className="service-grid" style={{ marginTop: "1rem" }}>
      <div className="service-card">
        <strong>01. お申し込み</strong>
        <p style={{ color: "#cfcfcf", lineHeight: 1.5 }}>フォームより原作（テキストやメモ）をお送りください。</p>
      </div>
      <div className="service-card">
        <strong>02. オンラインヒアリング（60分）</strong>
        <p style={{ color: "#cfcfcf", lineHeight: 1.5 }}>担当編集者がWeb会議で物語の詳細や希望の画風を伺います。</p>
      </div>
      <div className="service-card">
        <strong>03. 構成・制作</strong>
        <p style={{ color: "#cfcfcf", lineHeight: 1.5 }}>ヒアリング内容を元に構成を練り、AIで漫画を生成・編集します。</p>
      </div>
      <div className="service-card">
        <strong>04. 確認・納品</strong>
        <p style={{ color: "#cfcfcf", lineHeight: 1.5 }}>データ確認後に納品。製本を希望される場合は印刷工程へ進みます。</p>
      </div>
    </div>
  </section>
);

const FlowPage = ({ onBack }) => (
  <div style={{ background: "#0b0b0b", minHeight: "100vh", paddingBottom: "4rem" }}>
    <div style={{ padding: "5rem 4% 2rem", display: "grid", gap: "1.2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <button
          onClick={onBack}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "0.6rem 1rem",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.04)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <ChevronLeft size={18} /> トップへ戻る
        </button>
        <button
          onClick={() => window.open("mailto:contact@example.com?subject=Story-to-Comic 相談")}
          className="service-cta"
          style={{ justifyContent: "center", padding: "0.75rem 1.5rem" }}
        >
          <Sparkles size={18} /> 制作相談する
        </button>
      </div>

      <div style={{ position: "relative", overflow: "hidden", borderRadius: 16, padding: "2.2rem 2rem", background: "linear-gradient(135deg, rgba(229,9,20,0.12), rgba(0,180,180,0.08))" }}>
        <div style={{ fontSize: "0.95rem", letterSpacing: "0.08em", color: "#ffb3b3", fontWeight: 700 }}>STORY → COMIC STUDIO</div>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 900, margin: "0.3rem 0 0.6rem", lineHeight: 1.1 }}>その物語を、一生残る「MANGA」に。</h1>
        <p style={{ maxWidth: 900, color: "#e8e8e8", lineHeight: 1.7, margin: 0 }}>
          あなたの人生、ビジネス、頭の中にある小説。言葉だけでは伝わらない熱量を、最新AIテクノロジーと編集力で、世界に一つだけの漫画作品へ。
        </p>
      </div>
    </div>

    <div style={{ padding: "0 4%", display: "grid", gap: "1.2rem" }}>
      <section className="service-section">
        <div style={{ marginBottom: "0.8rem" }}>
          <div style={{ fontSize: "0.9rem", letterSpacing: "0.08em", color: "#9ae6ff", fontWeight: 700 }}>CONCEPT</div>
          <h2 style={{ fontSize: "2rem", fontWeight: 850, margin: "0.3rem 0 0.5rem" }}>AIが描き、人が魂を吹き込む。</h2>
          <p style={{ maxWidth: 900, color: "#cfcfcf", lineHeight: 1.7, margin: 0 }}>
            FOMUS Story-to-Comic Studio は、物語の可視化を専門とするクリエイティブチームです。作画工程を最新の画像生成AIに任せることで、従来の漫画制作における「膨大な時間とコスト」を圧縮。
            浮いたリソースを「ヒアリング」と「構成」に集中させることで、あなたの想いを深く理解し、最適なストーリー構成で漫画化します。
          </p>
        </div>
      </section>

      <section className="service-section">
        <div style={{ marginBottom: "0.8rem" }}>
          <div style={{ fontSize: "0.9rem", letterSpacing: "0.08em", color: "#ffb3b3", fontWeight: 700 }}>WHY FOMUS?</div>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 850, margin: "0.3rem 0 0.5rem" }}>選ばれる理由</h2>
        </div>
        <div className="service-grid">
          <div className="service-card">
            <strong>01. 徹底したヒアリングと構成力</strong>
            <p style={{ color: "#cfcfcf", lineHeight: 1.6 }}>
              美しい絵だけでは漫画は面白くなりません。60分間のオンラインヒアリングで想いを深掘りし、プロ編集者が「読まれるストーリー構成（ネーム）」を設計します。
            </p>
          </div>
          <div className="service-card">
            <strong>02. AIによる圧倒的な表現スピード</strong>
            <p style={{ color: "#cfcfcf", lineHeight: 1.6 }}>
              最新の生成AIを活用し、多様な画風でスピーディに作画。編集者が構図やセリフを調整・演出し、AI特有の不自然さを排除して没入できる作品に仕上げます。
            </p>
          </div>
          <div className="service-card">
            <strong>03. Webからリアルまで</strong>
            <p style={{ color: "#cfcfcf", lineHeight: 1.6 }}>
              完成漫画はデジタル納品に加え、オプションで製本も可能。Web発信はもちろん、記念品や配布資料として手元に残せます。
            </p>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div style={{ marginBottom: "0.8rem" }}>
          <div style={{ fontSize: "0.9rem", letterSpacing: "0.08em", color: "#9ae6ff", fontWeight: 700 }}>PRICING</div>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 850, margin: "0.3rem 0 0.5rem" }}>料金プラン</h2>
        </div>
        <div className="service-grid">
          <div className="service-card" style={{ border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
            <strong>Basic Package（制作パック）</strong>
            <ul style={{ color: "#cfcfcf", lineHeight: 1.6, paddingLeft: "1.2rem", margin: "0.6rem 0" }}>
              <li>料金: 100,000円（税込）〜（漫画制作10ページ分を含む）</li>
              <li>60分間のオンラインヒアリング付き</li>
              <li>構成・AI作画・編集費用込み</li>
              <li>追加ページ: 1ページ +5,000円（例: 20ページ＝15万円）</li>
              <li>納期目安: 20ページで約2週間〜</li>
            </ul>
          </div>
          <div className="service-card" style={{ border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}>
            <strong>Option（オプション）</strong>
            <ul style={{ color: "#cfcfcf", lineHeight: 1.6, paddingLeft: "1.2rem", margin: "0.6rem 0" }}>
              <li>製本サービス: 1冊 1,000円〜（ページ数・部数で変動）</li>
              <li>高級感のある冊子でお届け可能</li>
              <li>結婚式の引き出物、企業案内、個人の保存用に</li>
            </ul>
          </div>
        </div>
      </section>

      <ProductionFlow />
    </div>
  </div>
);

const ContinueCard = ({ historyItem, series, onClick }) => (
  <div onClick={() => onClick(series)} className="continue-card">
    <div className="continue-image-wrapper">
      <img src={series.heroUrl || series.coverUrl} className="continue-image" loading="lazy" />
      <div className="play-overlay"><div className="play-circle"><Play size={20} className="text-white ml-1" /></div></div>
    </div>
    <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: `${historyItem.progress || 0}%` }}></div></div>
    <div className="continue-info"><span className="text-sm font-bold text-white truncate w-32">{series.title}</span><Info size={20} /></div>
  </div>
);

const DetailModal = ({ series, chapters, isOpen, onClose, onRead, t }) => {
  if (!isOpen || !series) return null;
  const [activeTab, setActiveTab] = useState("episodes");
  const firstChapter = chapters.find((c) => c.status === "published");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="jump-container">
          <header className="jump-header">
            <button onClick={onClose} className="jump-back-btn"><ChevronLeft size={28} /></button>
            <div className="jump-header-title"></div>
          </header>
          <div className="jump-hero"><img src={series.heroUrl || series.coverUrl} /><div className="jump-hero-gradient"></div></div>
          <div className="jump-info">
            <h1 className="jump-title">{series.title}</h1>
            <p className="jump-author">{series.author}</p>
            <p className="jump-description">{series.description}</p>
            {firstChapter && <button onClick={() => onRead(firstChapter)} className="jump-read-btn"><Play size={24} /> {t.read_first}</button>}
          </div>
          <div className="jump-tabs">
            <button onClick={() => setActiveTab("episodes")} className={`jump-tab ${activeTab === "episodes" ? "active" : ""}`}>{t.episodes}</button>
            <button onClick={() => setActiveTab("details")} className={`jump-tab ${activeTab === "details" ? "active" : ""}`}>{t.details}</button>
          </div>
          {activeTab === "episodes" && (
            <div className="jump-episodes">
              {chapters.map((c) => (
                <div key={c.id} className="jump-episode-item" onClick={() => { if (c.status === "published") onRead(c); }} style={{ opacity: c.status === "published" ? 1 : 0.8, background: c.status === "published" ? "" : "#fffaf0" }}>
                  <div className="jump-ep-thumb">
                    <img src={c.thumbUrl || series.coverUrl} />
                    {c.status !== "published" && <span className="production-badge">{t.production}</span>}
                  </div>
                  <div className="jump-ep-info">
                    <div className="jump-ep-title">{c.title}</div>
                    {c.status === "published" ? (
                      <div className="jump-ep-meta"><span>{c.publishDate}</span><ThumbsUp size={14} className="ml-2" /> {c.likes}</div>
                    ) : (
                      <div className="jump-ep-meta"><span style={{ color: "var(--jump-accent)" }}>{t.sponsor_slots}: {c.sponsors || 0}/{c.sponsorGoal || 5}</span></div>
                    )}
                  </div>
                  {c.status !== "published" && <button className="jump-sponsor-btn" onClick={(e) => { e.stopPropagation(); alert("Sponsor flow"); }}><Gift size={14} /> {t.support_btn}</button>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Reader = ({ chapter, series, onClose, translationLang, onChangeTranslationLang, nextChapter, onNextChapter }) => {
  const [showUI, setShowUI] = useState(true);
  const [translations, setTranslations] = useState({});
  const [activePage, setActivePage] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translateError, setTranslateError] = useState(null);
  const [autoTranslate, setAutoTranslate] = useState(true);
  const [batchTranslating, setBatchTranslating] = useState(false);
  const [batchProgress, setBatchProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(false);
  const scrollRaf = React.useRef(null);
  const readerRef = React.useRef(null);
  const [preloaded, setPreloaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const pageCount = chapter.pageCount || 20;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  useEffect(() => {
    setCurrentPage(1);
    setTranslations({});
    setTranslateError(null);
    setActivePage(null);
    setPreloaded(false);
    setLoadedCount(0);
    setReachedEnd(false);
  }, [chapter.id]);

  const handleScroll = () => {
    const el = readerRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    // RTLはscrollLeftが負値や末尾起点になるブラウザがあるため補正
    const isRTL = series.direction !== "ltr";
    const offset = isRTL ? scrollWidth - clientWidth - scrollLeft : scrollLeft;
    const page = Math.round(offset / clientWidth) + 1;
    const clamped = Math.min(pageCount, Math.max(1, page));
    if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    scrollRaf.current = requestAnimationFrame(() => setCurrentPage(clamped));
  };

  useEffect(() => {
    setReachedEnd(currentPage >= pageCount);
  }, [currentPage, pageCount]);

  const handleTranslateAll = async () => {
    if (batchTranslating) return;
    try {
      setBatchTranslating(true);
      setBatchProgress(0);
      setTranslateError(null);
      for (let idx = 0; idx < pages.length; idx++) {
        const p = pages[idx];
        if (!translations[p]) {
          const translatedText = await performTranslate(p);
          setTranslations((prev) => ({ ...prev, [p]: translatedText || "翻訳結果がありませんでした。" }));
        }
        setBatchProgress(Math.round(((idx + 1) / pages.length) * 100));
      }
    } catch (err) {
      console.error(err);
      setTranslateError(err.message || "翻訳に失敗しました");
    } finally {
      setBatchTranslating(false);
      setBatchProgress(100);
    }
  };

  useEffect(() => {
    if (!autoTranslate) return;
    if (!preloaded) return;
    if (isTranslating) return;
    if (translations[currentPage]) return;
    handleTranslate(currentPage);
  }, [currentPage, autoTranslate, preloaded, translations, isTranslating]);

  useEffect(() => {
    let cancelled = false;
    const loadImage = (url) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });

    const preload = async () => {
      for (const p of pages) {
        if (cancelled) return;
        const basePng = `/manga/${series.id}/ch${chapter.number}/${p}.png`;
        const baseJpg = `/manga/${series.id}/ch${chapter.number}/${p}.jpg`;
        const ok = await loadImage(basePng);
        if (!ok) await loadImage(baseJpg);
        setLoadedCount((c) => c + 1);
      }
      if (!cancelled) setPreloaded(true);
    };

    preload();
    return () => {
      cancelled = true;
    };
  }, [chapter.id, series.id, pageCount]);

  const performTranslate = async (page) => {
    const imgEl = document.getElementById(`reader-img-${page}`);
    const imageUrl = imgEl?.currentSrc || `/manga/${series.id}/ch${chapter.number}/${page}.png`;

    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl, targetLang: translationLang }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Translation failed");
    }

    const data = await res.json();
    return data.translation || data.raw?.translated_text || "";
  };

  const handleTranslate = async (page) => {
    try {
      setIsTranslating(true);
      setActivePage(page);
      setTranslateError(null);

      const translatedText = await performTranslate(page);
      setTranslations((prev) => ({ ...prev, [page]: translatedText || "翻訳結果がありませんでした。" }));
    } catch (err) {
      console.error(err);
      setTranslateError(err.message || "翻訳に失敗しました");
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="reader-container">
      <div className={`reader-header ${showUI ? "" : "hidden"}`} style={{ justifyContent: "flex-start", gap: "0.75rem" }}>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "white" }}><ChevronLeft size={24} /></button>
      </div>
      <div
        className="reader-content"
        onClick={() => setShowUI(!showUI)}
        onScroll={handleScroll}
        ref={readerRef}
        dir={series.direction === "ltr" ? "ltr" : "rtl"}
      >
        {pages.map((p) => (
          <div key={p} className="reader-page" style={{ background: "#111" }}>
            <div style={{ position: "absolute", top: 12, right: 12, display: "flex", gap: "0.5rem", alignItems: "center", zIndex: 5, background: "rgba(0,0,0,0.55)", padding: "0.35rem 0.6rem", borderRadius: 10 }}>
              <select
                value={translationLang}
                onChange={(e) => onChangeTranslationLang(e.target.value)}
                style={{ background: "#1f1f1f", color: "#fff", border: "1px solid #333", borderRadius: 8, padding: "0.35rem 0.45rem" }}
              >
                {TRANSLATE_LANGS.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
              <button
                onClick={(e) => { e.stopPropagation(); setAutoTranslate((v) => !v); }}
                style={{ background: autoTranslate ? "#198754" : "#2a2a2a", color: "white", border: "none", borderRadius: 8, padding: "0.35rem 0.55rem", cursor: "pointer", fontWeight: 700 }}
              >
                {autoTranslate ? "自動ON" : "自動OFF"}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleTranslateAll(); }}
                disabled={batchTranslating}
                style={{ display: "flex", alignItems: "center", gap: 6, background: "#0f6fec", color: "white", border: "none", borderRadius: 8, padding: "0.35rem 0.7rem", cursor: "pointer", fontWeight: 700 }}
              >
                {batchTranslating ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                全ページ翻訳
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleTranslate(p); }}
                disabled={isTranslating && activePage === p}
                style={{ display: "flex", alignItems: "center", gap: 6, background: "#e50914", color: "white", border: "none", borderRadius: 8, padding: "0.4rem 0.75rem", cursor: "pointer", fontWeight: 700 }}
              >
                {isTranslating && activePage === p ? <Loader2 size={16} className="animate-spin" /> : <Globe size={16} />}
                翻訳
              </button>
            </div>
            <img
              id={`reader-img-${p}`}
              src={`/manga/${series.id}/ch${chapter.number}/${p}.png`}
              onError={(e) => {
                if (!e.target.dataset.fallback) {
                  e.target.dataset.fallback = "jpg";
                  e.target.src = `/manga/${series.id}/ch${chapter.number}/${p}.jpg`;
                } else {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/800x1200/111/333?text=${series.title}+Page+${p}`;
                }
              }}
              alt={`Page ${p}`}
              loading="lazy"
            />
            {translations[p] && (
              <div style={{ position: "absolute", left: "50%", bottom: 18, transform: "translateX(-50%)", maxWidth: "90%", background: "rgba(0,0,0,0.7)", color: "#fff", padding: "0.75rem 1rem", borderRadius: 12, backdropFilter: "blur(6px)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                {translations[p]}
              </div>
            )}
            {translateError && activePage === p && (
              <div style={{ position: "absolute", left: "50%", bottom: 18, transform: "translateX(-50%)", maxWidth: "90%", background: "rgba(229,9,20,0.85)", color: "#fff", padding: "0.65rem 0.9rem", borderRadius: 12, fontSize: "0.9rem" }}>
                {translateError}
              </div>
            )}
          </div>
        ))}
      </div>
      {nextChapter && preloaded && reachedEnd && showUI && (
        <div style={{ position: "fixed", bottom: 16, right: 16, left: 16, zIndex: 121, display: "flex", justifyContent: "flex-end", pointerEvents: "none" }}>
          <button
            onClick={() => onNextChapter(nextChapter)}
            style={{
              pointerEvents: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "rgba(229,9,20,0.95)",
              border: "none",
              borderRadius: 12,
              color: "#fff",
              fontWeight: 800,
              padding: "0.7rem 1rem",
              cursor: "pointer",
              boxShadow: "0 10px 24px rgba(0,0,0,0.45)",
            }}
          >
            <ChevronRight size={18} /> 次のエピソードへ
          </button>
        </div>
      )}
      {batchTranslating && (
        <div
          style={{
            position: "fixed",
            bottom: 16,
            left: 16,
            zIndex: 121,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,0,0,0.75)",
            color: "#fff",
            padding: "0.5rem 0.75rem",
            borderRadius: 10,
            fontWeight: 700,
          }}
        >
          <Loader2 size={16} className="animate-spin" />
          全ページ翻訳中... {batchProgress}%
        </div>
      )}
      {!preloaded && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            zIndex: 300,
            gap: "0.8rem",
          }}
        >
          <Loader2 className="animate-spin" size={32} />
          <div style={{ fontWeight: 700 }}>ページを事前読み込み中...</div>
          <div style={{ fontSize: 14, color: "#cfcfcf" }}>{loadedCount} / {pageCount} pages</div>
        </div>
      )}
    </div>
  );
};

const AdminView = ({ onBack, t }) => (
  <div className="admin-container">
    <div className="admin-header"><button onClick={onBack}><ChevronLeft /></button><h3>{t.admin_title}</h3><div /></div>
    <div className="card">Dashboard Placeholder</div>
  </div>
);

export default function App() {
  const [lang, setLang] = useState("ja");
  const [translationLang, setTranslationLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const { view, navigate, selectedSeries, openDetail, closeDetail, readingChapter, openReader, closeReader } = useAppNavigation("home");
  const db = useData();
  const t = RESOURCES[lang];

  const toggleLang = () => setLang((l) => (l === "ja" ? "en" : "ja"));

  useEffect(() => {
    document.title = selectedSeries ? `MangaX - ${selectedSeries.title}` : "MangaX - The Cross-Border Manga Platform";
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedSeries]);

  if (readingChapter) {
    const chaptersForSeries = db.chapters
      .filter((c) => c.seriesId === readingChapter.series.id && c.status === "published")
      .sort((a, b) => a.number - b.number);
    const nextChapter = chaptersForSeries.find((c) => c.number > readingChapter.chapter.number) || null;

    return (
      <>
        <style>{STYLES}</style>
        <Reader
          chapter={readingChapter.chapter}
          series={readingChapter.series}
          onClose={closeReader}
          translationLang={translationLang}
          onChangeTranslationLang={setTranslationLang}
          nextChapter={nextChapter}
          onNextChapter={(ch) => openReader(ch, readingChapter.series)}
        />
      </>
    );
  }

  const historyItems = getHistory();
  const featuredSeries = db.series[0];

  return (
    <>
      <style>{STYLES}</style>
      <Header
        scrolled={scrolled}
        activeTab={view}
        setActiveTab={navigate}
        t={t}
        toggleLang={toggleLang}
        lang={lang}
      />

      {view === "home" && (
        <div style={{ paddingBottom: "4rem" }}>
          <HeroSection
            series={featuredSeries}
            onRead={() => {
              const ch = db.chapters.find((c) => c.seriesId === featuredSeries.id && c.number === 1);
              if (ch) openReader(ch, featuredSeries);
            }}
            onMyList={() => alert("Saved")}
            t={t}
          />
          <div className="content-container">
            {historyItems.length > 0 && (
              <SectionRow
                title={t.section_continue}
                items={historyItems.map((h) => {
                  const s = db.series.find((x) => x.id === h.seriesId);
                  return s ? { ...h, ...s } : null;
                }).filter(Boolean)}
                renderItem={(item) => <ContinueCard historyItem={item} series={item} onClick={openDetail} />}
              />
            )}
            <SectionRow
              title={t.section_new}
              items={db.chapters
                .filter((c) => c.status === "published")
                .map((c) => ({ ...c, series: db.series.find((s) => s.id === c.seriesId) }))
                .filter((c) => c.series)}
              renderItem={(ep) => (
                <NewEpisodeCard
                  episode={ep}
                  onClick={(episode) => {
                    const series = db.series.find((s) => s.id === episode.seriesId);
                    if (series) {
                      openReader(episode, series);
                    }
                  }}
                />
              )}
            />
            <SectionRow title={t.section_trending} items={[...db.series].reverse()} renderItem={(s) => <PosterCard series={s} onClick={openDetail} t={t} />} />
            <ServicePitch onShowFlow={() => navigate("flow")} />
          </div>
        </div>
      )}

      {view === "flow" && <FlowPage onBack={() => navigate("home")} />}

      {view === "mypage" && (
        <div className="bg-black min-h-screen pt-20 px-4 text-white">
          <h1>{t.guest_name}</h1>
        </div>
      )}

      <DetailModal
        series={selectedSeries}
        isOpen={!!selectedSeries}
        onClose={closeDetail}
        t={t}
        chapters={db.chapters.filter((c) => selectedSeries && c.seriesId === selectedSeries.id)}
        onRead={(ch) => openReader(ch, selectedSeries)}
      />

      <BottomNav activeTab={view} setActiveTab={navigate} t={t} />
    </>
  );
}
