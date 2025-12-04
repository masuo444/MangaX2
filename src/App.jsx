import React, { useState, useEffect } from "react";
import {
  Play, Plus, Info, Search, Home, MonitorPlay, User, ChevronLeft, ChevronRight,
  X, Heart, Share2, Crown, Globe, Settings, Upload, Wand2, DollarSign,
  Briefcase, Smile, Link as LinkIcon, AlertCircle, FileText, Palette,
  FileCheck, Mail, Languages, Lock, Sparkles, Check, Trophy, Handshake, Building,
  ThumbsUp, MessageCircle, Gift, Clock, Bell, Download, Loader2, Coins, Calendar,
  Users, PenTool, Folder, Cpu, Rocket, Coffee, CheckCircle,
} from "lucide-react";

// ==========================================
// 🎨 デザイン (CSS)
// ==========================================
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&family=Noto+Serif+JP:wght@700&family=Playfair+Display:wght@700&family=Inter:wght@400;500&display=swap');

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
.compare-table { display: grid; gap: 0.75rem; }
.compare-row {
  display: grid;
  grid-template-columns: 1.05fr 1fr 1fr;
  gap: 0.6rem;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
}
.compare-row-head { background: rgba(255,255,255,0.06); font-weight: 800; }
.compare-title { font-weight: 800; color: #fff; }
.compare-general { color: #cfcfcf; line-height: 1.5; }
.compare-fomus { color: #f4f7ff; line-height: 1.5; }
.compare-note-highlight { color: #8be5ff; font-weight: 800; }
@media (max-width: 720px) {
  .compare-row { grid-template-columns: 1fr; }
}
.comp-section { background: radial-gradient(circle at 20% 20%, rgba(255,190,120,0.08), transparent 40%), radial-gradient(circle at 80% 10%, rgba(80,200,255,0.12), transparent 45%), rgba(10,10,10,0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 1.6rem; box-shadow: 0 16px 40px rgba(0,0,0,0.4); }
.comp-header h2 { margin: 0 0 0.4rem; font-size: 1.95rem; font-weight: 850; letter-spacing: 0.02em; }
.comp-header p { margin: 0; color: #cfcfcf; line-height: 1.6; }
.comp-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.1rem; margin-top: 1.1rem; padding: 0.6rem; border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; background: linear-gradient(90deg, rgba(255,190,120,0.08), rgba(80,200,255,0.08)); }
.comp-col { border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 1.1rem; position: relative; overflow: hidden; backdrop-filter: blur(4px); }
.comp-col-trad { background: linear-gradient(160deg, rgba(58,34,12,0.9), rgba(90,56,20,0.75)); box-shadow: inset 0 0 0 1px rgba(255,205,140,0.08); }
.comp-col-fomus { background: linear-gradient(160deg, rgba(12,32,68,0.9), rgba(10,70,110,0.78)); box-shadow: inset 0 0 0 1px rgba(120,210,255,0.1); border-color: rgba(120,210,255,0.2); }
.comp-col-title { margin: 0; font-size: 1.3rem; font-weight: 850; }
.comp-col-sub { margin: 0.1rem 0 0.7rem; color: #dcdcdc; line-height: 1.55; }
.comp-row { display: grid; grid-template-columns: auto 1fr; gap: 0.7rem; align-items: start; padding: 0.7rem 0; border-top: 1px solid rgba(255,255,255,0.08); }
.comp-row:first-of-type { border-top: none; }
.comp-col-trad .comp-icon { background: rgba(255,200,120,0.15); color: #ffdca8; box-shadow: 0 6px 16px rgba(0,0,0,0.35); }
.comp-col-fomus .comp-icon { background: rgba(80,200,255,0.18); color: #b7e9ff; box-shadow: 0 6px 16px rgba(0,0,0,0.35); }
.comp-icon { width: 42px; height: 42px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; }
.comp-main-text { font-weight: 800; color: #fff; }
.comp-sub-text { color: #d0d0d0; font-size: 0.95rem; line-height: 1.5; }
.comp-badge { position: absolute; top: 12px; right: 12px; background: linear-gradient(135deg, #0f172a, #12375f); color: #8be5ff; font-weight: 800; padding: 0.35rem 0.8rem; border-radius: 999px; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 8px 18px rgba(0,0,0,0.3); }
.comp-badge-secondary { top: 44px; }
.flow-page { background: #0b0b0b; min-height: 100vh; padding: 5rem 6% 4rem; }
.flow-hero-grid { display: grid; gap: 1.2rem; padding-bottom: 1rem; }
.flow-grid { padding: 0 4%; display: grid; gap: 1.2rem; }
@media (max-width: 768px) {
  .flow-page { padding: 4rem 7% 4.5rem; }
  .flow-hero-grid { gap: 1.4rem; }
  .flow-grid { gap: 1.6rem; padding: 0; }
  .service-section { margin: 2.2rem 0 3rem; padding: 1.6rem; }
  .comp-section { padding: 1.4rem; }
  .comp-container { padding: 0.8rem; }
  .service-grid { gap: 1rem; }
}

.feature-section { background: none; border: none; border-radius: 0; padding: 0 0 1.5rem; box-shadow: none; }
.feature-grid { display: grid; gap: 0.75rem 1rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
.feature-card { background: none; border: none; border-radius: 0; padding: 0.3rem 0; box-shadow: none; }
.feature-card strong { font-size: 1.05rem; display: inline-block; margin-bottom: 0.25rem; }
.tag-chip { display: inline-flex; padding: 0.25rem 0.65rem; border-radius: 999px; background: rgba(255,255,255,0.1); color: #e8e8e8; font-size: 0.9rem; letter-spacing: 0.01em; }
.accent-heading { letter-spacing: 0.08em; color: #9ae6ff; font-weight: 700; font-size: 0.95rem; }
.section-title-hero { font-size: 1.9rem; font-weight: 850; margin: 0.2rem 0 0.4rem; }
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

/* =========================
   Story LP (Story-to-Comic)
   ========================= */
.story-lp {
  background: #0A0A0A;
  color: #FFFFFF;
  min-height: 100vh;
  padding: 0 0 120px;
}
.story-lp a { color: inherit; text-decoration: none; }
.story-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
}
.story-section {
  margin: 0 auto 180px;
}
.story-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 72px;
  background: rgba(10,10,10,0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #1f1f1f;
  z-index: 100;
}
.story-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
}
.story-nav {
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
  font-size: 15px;
}
.story-nav a { color: #e5e5e5; }
.story-lang {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #B8B8B8;
  font-size: 14px;
}
.story-header-cta {
  margin-left: 20px;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid #C6A667;
  background: #C6A667;
  color: #0A0A0A;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
}
.story-hero {
  text-align: center;
  padding: 240px 0 220px;
  position: relative;
}
.story-kicker {
  font-family: 'Playfair Display', 'Noto Serif JP', serif;
  font-size: 18px;
  letter-spacing: 0.08em;
  color: #C6A667;
  margin-bottom: 12px;
}
.story-h1 {
  font-family: 'Noto Serif JP', serif;
  font-size: 56px;
  line-height: 1.2;
  margin: 0 0 20px;
}
.story-subcopy {
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #B8B8B8;
  max-width: 760px;
  margin: 0 auto 32px;
}
.story-hero-visual {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 20%, rgba(198,166,103,0.12), transparent 45%), radial-gradient(circle at 80% 70%, rgba(90,120,150,0.08), transparent 45%);
  opacity: 0.9;
  pointer-events: none;
}
.story-cta-group {
  display: inline-flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
.story-cta {
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
  font-weight: 700;
  border-radius: 999px;
  padding: 16px 32px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #C6A667;
  transition: all 0.2s ease;
}
.story-cta.primary {
  background: #C6A667;
  color: #0A0A0A;
}
.story-cta.primary:hover { background: #b29757; }
.story-cta.secondary {
  background: transparent;
  color: #C6A667;
}
.story-cta.secondary:hover { background: rgba(198,166,103,0.12); }
.story-meta {
  margin-top: 18px;
  color: #B8B8B8;
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
  font-size: 14px;
  letter-spacing: 0.04em;
}
.story-lang-row {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.story-lang-pill {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #7F7F7F;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.story-back {
  position: absolute;
  top: 24px;
  left: 24px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #151515;
  color: #FFFFFF;
  border: 1px solid #2a2a2a;
  border-radius: 999px;
  cursor: pointer;
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
}

.story-section-title {
  font-family: 'Noto Serif JP', serif;
  font-size: 36px;
  line-height: 1.3;
  margin: 0 0 24px;
}
.story-section-sub {
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
  font-size: 18px;
  color: #B8B8B8;
  line-height: 1.7;
  margin: 0 0 28px;
}
.story-section-desc {
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
  color: #B8B8B8;
  font-size: 18px;
  line-height: 1.7;
  margin: 0 0 32px;
}
.story-value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
}
.story-value-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
}
.story-value-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #151515;
  border: 1px solid #2b2b2b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #C6A667;
}
.story-value-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 6px;
}
.story-value-text {
  margin: 0;
  color: #B8B8B8;
  font-size: 16px;
  line-height: 1.6;
}

.story-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: stretch;
}
.story-step {
  position: relative;
  flex: 1 1 140px;
  min-width: 140px;
  padding: 12px 0 0;
}
.story-step::after {
  content: "";
  position: absolute;
  right: -9px;
  top: 22px;
  width: 18px;
  height: 1px;
  background: #7F7F7F;
}
.story-step:last-child::after { display: none; }
.story-step-head {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.story-step-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #151515;
  border: 1px solid #2b2b2b;
  color: #C6A667;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.story-step-title {
  font-family: 'Noto Serif JP', serif;
  font-size: 18px;
  margin: 0;
}
.story-step-caption {
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
  font-size: 14px;
  color: #B8B8B8;
  margin: 6px 0 0;
}

.story-use-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
.story-card {
  background: #151515;
  border-radius: 8px;
  padding: 48px;
  border: 1px solid #1f1f1f;
}
.story-thumb-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-top: 18px;
}
.story-thumb {
  aspect-ratio: 3 / 2;
  border-radius: 10px;
  background: linear-gradient(135deg, #1b1b1b, #222);
  border: 1px solid #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
  font-size: 13px;
}
.story-card h3 {
  font-family: 'Noto Serif JP', serif;
  font-size: 22px;
  margin: 0 0 12px;
}
.story-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.story-tag {
  background: rgba(255,255,255,0.08);
  border-radius: 999px;
  padding: 8px 14px;
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
  font-size: 14px;
  color: #FFFFFF;
}

.story-comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}
.story-compare-col {
  border-radius: 12px;
  overflow: hidden;
}
.story-compare-trad {
  background: #2A1E14;
  color: #FFFFFF;
}
.story-compare-fomus {
  background: linear-gradient(135deg, #0A0A0A, #151515);
  border: 1px solid rgba(198,166,103,0.3);
}
.story-compare-head {
  padding: 20px 28px 10px;
  font-family: 'Playfair Display', 'Noto Serif JP', serif;
  font-size: 22px;
  letter-spacing: 0.02em;
}
.story-compare-row {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 12px;
  padding: 14px 28px;
  border-top: 1px solid rgba(255,255,255,0.06);
  align-items: center;
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
}
.story-compare-label { color: #B8B8B8; font-size: 15px; }
.story-compare-value { font-size: 18px; color: #FFFFFF; }
.story-compare-value.gold { color: #C6A667; font-weight: 700; }

.story-pricing {
  background: #151515;
  border-radius: 12px;
  padding: 48px;
  border: 1px solid #1f1f1f;
}
.story-price-title {
  font-family: 'Noto Serif JP', serif;
  font-size: 24px;
  margin: 0 0 12px;
}
.story-price-amount {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  color: #C6A667;
  margin: 0 0 18px;
}
.story-bullet {
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
  color: #B8B8B8;
  font-size: 16px;
  line-height: 1.7;
  margin: 6px 0;
}
.story-option-list { margin-top: 14px; padding-top: 14px; border-top: 1px solid #2a2a2a; }

.story-faq-list { display: flex; flex-direction: column; gap: 12px; }
.story-faq-item {
  background: #151515;
  border-radius: 10px;
  border: 1px solid #1f1f1f;
  overflow: hidden;
}
.story-faq-question {
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  cursor: pointer;
  color: #FFFFFF;
}
.story-faq-answer {
  padding: 0 18px 16px;
  color: #B8B8B8;
  font-family: 'Noto Sans JP', 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  border-top: 1px solid #7F7F7F;
}

.story-application {
  text-align: center;
  padding: 200px 0;
}
.story-floating-cta {
  position: fixed;
  right: 16px;
  bottom: 20px;
  z-index: 90;
  display: none;
}
.story-footer {
  background: #0A0A0A;
  border-top: 1px solid #1f1f1f;
  padding: 40px 0 60px;
}
.story-footer-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  color: #B8B8B8;
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
  font-size: 14px;
}

@media (max-width: 900px) {
  .story-hero { padding: 200px 0 180px; }
  .story-h1 { font-size: 46px; }
  .story-section { margin-bottom: 140px; }
}
@media (max-width: 640px) {
  .story-hero { padding: 180px 0 160px; }
  .story-h1 { font-size: 38px; }
  .story-subcopy { font-size: 16px; }
  .story-section-title { font-size: 28px; }
  .story-section-desc { font-size: 16px; }
  .story-container { padding: 0 16px; }
  .story-step::after { display: none; }
  .story-application { padding: 160px 0; }
  .story-floating-cta { display: block; }
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

    // Studio LP: サービス比較 (Comparison)
    comp_title_trad: "伝統的な漫画制作",
    comp_sub_trad: "(プロの技と時間)",
    comp_title_fomus: "FOMUS Story-to-Comic",
    comp_sub_fomus: "(AIとアジャイルによる革新)",

    comp_cost_trad: "30万〜50万円 / 10P",
    comp_cost_sub_trad: "多重構造による高コスト体質",
    comp_time_trad: "1.5ヶ月〜2ヶ月",
    comp_time_sub_trad: "ネーム・下書き等の確認工程が長期化",
    comp_effort_trad: "多大",
    comp_effort_sub_trad: "詳細な脚本準備、度重なるディレクションが必要",
    comp_skill_trad: "個人のスキルに依存",
    comp_skill_sub_trad: "熟練の作家による唯一無二の作品",
    comp_deliver_trad: "データ納品のみが一般的",

    comp_cost_fomus: "10万円 / 10P",
    comp_cost_sub_fomus: "AI活用による工程最適化・コスト圧縮",
    comp_time_fomus: "約2週間",
    comp_time_sub_fomus: "アジャイルな制作体制による短納期",
    comp_effort_fomus: "最小限 (60分)",
    comp_effort_sub_fomus: "ヒアリングで意図を汲み取り、構成から提案",
    comp_quality_fomus: "安定したクオリティ",
    comp_quality_sub_fomus: "プロ編集者監修による一貫した品質保証",
    comp_expand_fomus: "ワンストップ展開",
    comp_expand_sub_fomus: "多言語化、MangaX世界配信、製本まで統合支援",

    badge_fast: "爆速＆低コスト",
    badge_easy: "クライアントに優しい",

    // Studio LP: 料金プラン & ワークフロー
    studio_title: "Story-to-Comic Studio",
    studio_subtitle: "その物語を、一生残る「MANGA」に。",
    studio_intro: "AIのスピードと編集者の構成力で、あなたの物語を漫画化します。",

    studio_basic_plan: "基本制作パック (10P)",
    studio_basic_price: "100,000円 (税込)",
    studio_detail_1: "漫画制作 10ページ",
    studio_detail_2: "60分オンラインヒアリング",
    studio_detail_3: "AI作画 + 編集ディレクション",
    studio_add_page: "ページ追加 (+5,000円/P)",
    studio_book_option: "製本サービス (+1,000円/冊〜)",
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

    // Studio LP: Comparison
    comp_title_trad: "Traditional Manga Production",
    comp_sub_trad: "(Craft & Time)",
    comp_title_fomus: "FOMUS Story-to-Comic",
    comp_sub_fomus: "(AI & Agile Innovation)",

    comp_cost_trad: "300k–500k JPY / 10P",
    comp_cost_sub_trad: "Layered process drives higher cost",
    comp_time_trad: "1.5–2 months",
    comp_time_sub_trad: "Long review cycles for name & draft",
    comp_effort_trad: "Heavy",
    comp_effort_sub_trad: "Detailed scripts and repeated direction",
    comp_skill_trad: "Skill-dependent",
    comp_skill_sub_trad: "Unique craft by seasoned artists",
    comp_deliver_trad: "Data delivery only, typically",

    comp_cost_fomus: "100k JPY / 10P",
    comp_cost_sub_fomus: "AI-optimized workflow cuts cost",
    comp_time_fomus: "~2 weeks",
    comp_time_sub_fomus: "Agile production enables fast turnaround",
    comp_effort_fomus: "Minimal (60 mins)",
    comp_effort_sub_fomus: "We capture intent via hearing and propose structure",
    comp_quality_fomus: "Consistent quality",
    comp_quality_sub_fomus: "Editor-led QA for cohesive output",
    comp_expand_fomus: "One-stop expansion",
    comp_expand_sub_fomus: "Multilingual, MangaX global publish, printing",

    badge_fast: "Fast & Lean",
    badge_easy: "Client-friendly",

    studio_title: "Story-to-Comic Studio",
    studio_subtitle: "Turn your story into a lasting manga.",
    studio_intro: "AI speed meets editorial craft to adapt your story.",
    studio_basic_plan: "Standard Package (10P)",
    studio_basic_price: "100,000 JPY (tax incl.)",
    studio_detail_1: "10 pages of manga",
    studio_detail_2: "60-min online consultation",
    studio_detail_3: "AI art + editorial direction",
    studio_add_page: "Extra pages (+5,000 JPY/page)",
    studio_book_option: "Printing option (+1,000 JPY/book~)",
  },
};

// --- Hooks & helpers ---
const useAppNavigation = (initialView = "flow") => {
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
  <section className="feature-section" id="production-flow" style={{ marginTop: "1.5rem" }}>
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ fontSize: "0.9rem", letterSpacing: "0.08em", color: "#9ae6ff", fontWeight: 700 }}>WORKFLOW</div>
      <h3 style={{ fontSize: "1.6rem", margin: "0.3rem 0 0.4rem", fontWeight: 800 }}>制作の流れ</h3>
      <p style={{ maxWidth: 780, color: "#cfcfcf", lineHeight: 1.6 }}>
        ご依頼から納品まで、あなたの負担は「ヒアリング」だけ。構成・AI作画・編集をワンストップで進行します。
      </p>
    </div>
    <div className="feature-grid" style={{ marginTop: "1rem" }}>
      <div className="feature-card">
        <strong>01. 申し込み</strong>
        <p style={{ color: "#cfcfcf", lineHeight: 1.5 }}>フォーム or DMでかんたん。</p>
      </div>
      <div className="feature-card">
        <strong>02. ヒアリング（60分）</strong>
        <p style={{ color: "#cfcfcf", lineHeight: 1.5 }}>まっすーがあなたの物語を丁寧に聞きます。</p>
      </div>
      <div className="feature-card">
        <strong>03. 構成案（10ページ）提出</strong>
        <p style={{ color: "#cfcfcf", lineHeight: 1.5 }}>流れ・配役・見せ場を整理。</p>
      </div>
      <div className="feature-card">
        <strong>04. 制作（AI × クリエイティブ）</strong>
        <p style={{ color: "#cfcfcf", lineHeight: 1.5 }}>アジャイル方式で高速に。</p>
      </div>
      <div className="feature-card">
        <strong>05. 納品（PDF / JPG / 冊子）</strong>
        <p style={{ color: "#cfcfcf", lineHeight: 1.5 }}>用途に合わせて提供。</p>
      </div>
      <div className="feature-card">
        <strong>06. MangaX掲載（任意）</strong>
        <p style={{ color: "#cfcfcf", lineHeight: 1.5 }}>あなたの作品が世界に公開されます。</p>
      </div>
    </div>
  </section>
);

// --- Comparison Section Component (VISUAL UPDATE) ---
const ComparisonSection = ({ t, hideHeader = false }) => {
  const rows = [
    {
      icon: <Coins size={24} />,
      tradMain: t.comp_cost_trad,
      tradSub: t.comp_cost_sub_trad,
      fomusMain: t.comp_cost_fomus,
      fomusSub: t.comp_cost_sub_fomus,
    },
    {
      icon: <Calendar size={24} />,
      tradMain: t.comp_time_trad,
      tradSub: t.comp_time_sub_trad,
      fomusMain: t.comp_time_fomus,
      fomusSub: t.comp_time_sub_fomus,
    },
    {
      icon: <Users size={24} />,
      tradMain: t.comp_effort_trad,
      tradSub: t.comp_effort_sub_trad,
      fomusMain: t.comp_effort_fomus,
      fomusSub: t.comp_effort_sub_fomus,
    },
    {
      icon: <PenTool size={24} />,
      tradMain: t.comp_skill_trad,
      tradSub: t.comp_skill_sub_trad,
      fomusMain: t.comp_quality_fomus,
      fomusSub: t.comp_quality_sub_fomus,
    },
    {
      icon: <Folder size={24} />,
      tradMain: t.comp_deliver_trad,
      tradSub: "",
      fomusMain: t.comp_expand_fomus,
      fomusSub: t.comp_expand_sub_fomus,
    },
  ];
  const fomusIcons = [Cpu, Rocket, Coffee, CheckCircle, Globe];

  return (
    <div className="comp-section">
      {!hideHeader && (
        <div className="comp-header">
          <h2>サービス比較</h2>
          <p></p>
        </div>
      )}

      <div className="comp-container">
        <div className="comp-col comp-col-trad">
          <h3 className="comp-col-title">{t.comp_title_trad}</h3>
          <p className="comp-col-sub">{t.comp_sub_trad}</p>
          {rows.map((row, idx) => (
            <div key={`trad-${idx}`} className="comp-row">
              <div className="comp-icon">{row.icon}</div>
              <div className="comp-content">
                <div className="comp-main-text">{row.tradMain}</div>
                {row.tradSub && <div className="comp-sub-text">{row.tradSub}</div>}
              </div>
            </div>
          ))}
        </div>

        <div className="comp-col comp-col-fomus">
          <div className="comp-badge">{t.badge_fast}</div>
          <h3 className="comp-col-title">{t.comp_title_fomus}</h3>
          <p className="comp-col-sub">{t.comp_sub_fomus}</p>
          {rows.map((row, idx) => (
            <div key={`fomus-${idx}`} className="comp-row">
              <div className="comp-icon">{fomusIcons[idx] ? React.createElement(fomusIcons[idx], { size: 24 }) : row.icon}</div>
              <div className="comp-content">
                <div className="comp-main-text">{row.fomusMain}</div>
                {row.fomusSub && <div className="comp-sub-text">{row.fomusSub}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StoryCTAButton = ({ variant = "primary", children, onClick }) => (
  <button type="button" className={`story-cta ${variant}`} onClick={onClick}>
    {children}
  </button>
);

const StoryFaqItem = ({ item, isOpen, onToggle }) => (
  <div className="story-faq-item">
    <div className="story-faq-question" onClick={onToggle}>
      <span>{item.q}</span>
      <ChevronRight size={18} style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
    </div>
    {isOpen && <div className="story-faq-answer">{item.a}</div>}
  </div>
);

const StoryLanding = ({ onBack }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const valueItems = [
    { icon: <Rocket size={20} />, title: "プロ品質 × 最短2週間", text: "AI × アジャイル制作で、最短2週間の納品が可能。" },
    { icon: <MessageCircle size={20} />, title: "60分ヒアリングで構成まで丸投げOK", text: "想い・背景・目的を引き出し、構成をゼロから設計。" },
    { icon: <Globe size={20} />, title: "40言語対応。世界で読まれる漫画へ。", text: "SNS・展示会・海外PRに最適。" },
  ];

  const steps = [
    { title: "申し込み（フォーム / DM）", caption: "", icon: <Mail size={18} /> },
    { title: "ヒアリング（60分）", caption: "", icon: <Clock size={18} /> },
    { title: "構成案（10ページ）作成", caption: "", icon: <FileText size={18} /> },
    { title: "AI作画 × 編集", caption: "", icon: <Wand2 size={18} /> },
    { title: "仕上げ・レタッチ", caption: "", icon: <Sparkles size={18} /> },
    { title: "納品 ＋ MangaX掲載（任意）", caption: "", icon: <Upload size={18} /> },
  ];

  const useCases = [
    { title: "個人向け", tags: ["自己紹介", "転職ストーリー", "SNSプロフィール"] },
    { title: "ギフト", tags: ["結婚", "誕生日", "家族の記録", "友人への贈り物"] },
    { title: "ビジネス", tags: ["代表ストーリー", "採用漫画", "サービス説明"] },
    { title: "海外向け", tags: ["英語プロモ", "展示会PR", "国際イベント用資料"] },
  ];

  const comparisonRows = [
    { label: "価格", trad: "30〜50万円 / 10P", fomus: "10万円 / 10P" },
    { label: "納期", trad: "1.5〜2ヶ月", fomus: "最短1週間" },
    { label: "手間", trad: "ネーム・下書き指示が必要", fomus: "ヒアリングのみ" },
    { label: "品質", trad: "作家によって差が大きい", fomus: "プロ編集 × AI補正で安定品質" },
    { label: "展開", trad: "データ納品のみ", fomus: "40言語展開・SNS発信可能" },
  ];

  const faqList = [
    { q: "ストーリーがまとまっていなくても大丈夫？", a: "はい。ヒアリングで整理します。" },
    { q: "公開したくない場合は？", a: "非公開制作も可能です。" },
    { q: "個人／企業の納期は？", a: "個人は約2〜3週間、ギフトは＋数日。企業案件も個別相談で対応します。" },
    { q: "ギフトとして使える？", a: "はい。結婚・誕生日・家族の記録などギフト向け構成も可能です。" },
    { q: "海外向けにも対応できる？", a: "40言語対応で海外PRや展示会資料として活用できます。" },
    { q: "どんなジャンルでも可能？", a: "はい。伝えたい想いがあればジャンル不問で制作します。" },
    { q: "MangaXに掲載しなくてもいい？", a: "非公開納品にも対応します。掲載は任意です。" },
    { q: "制作事例は見られる？", a: "ヒアリング予約の際に事例リンクを共有します。" },
    { q: "支払い方法は？", a: "お申し込み時にご案内します。法人請求も対応します。" },
    { q: "修正は何回まで？", a: "構成確定後の軽微な調整を含め、内容に応じてご相談のうえ対応します。" },
  ];

  return (
    <div className="story-lp">
      <header className="story-header">
        <div className="story-header-inner">
          <div className="story-nav" style={{ gap: 14 }}>
            <a className="logo" style={{ color: "#C62828", fontSize: 20, textShadow: "none" }} onClick={onBack}>MangaX</a>
            <a>新着</a>
            <a>スポンサー</a>
            <a>マイページ</a>
          </div>
          <div className="story-nav" style={{ gap: 14 }}>
            <div className="story-lang">EN / JP</div>
            <button className="story-header-cta" onClick={() => window.open("mailto:contact@example.com?subject=Story-to-Comic 申し込み", "_self")}>申し込み</button>
          </div>
        </div>
      </header>

      <div className="story-container">
        <section className="story-section story-hero">
          <div className="story-hero-visual" />
          <button className="story-back" onClick={onBack}>
            <ChevronLeft size={16} /> トップへ戻る
          </button>
          <div className="story-kicker">MangaX × FOMUS</div>
          <h1 className="story-h1">あなたの物語を、10ページの漫画に。</h1>
          <p className="story-subcopy">
            世界基準のAI × クリエイティブディレクション。<br />
            人生・ビジネス・ギフト・PRストーリーを、<br />
            短期間で“作品”として形にします。
          </p>
          <div className="story-cta-group">
            <StoryCTAButton variant="primary" onClick={() => window.open("mailto:contact@example.com?subject=Story-to-Comic 予約", "_self")}>
              無料ヒアリングを予約する
            </StoryCTAButton>
            <StoryCTAButton variant="secondary" onClick={() => document.getElementById("story-portfolio")?.scrollIntoView({ behavior: "smooth" })}>
              制作事例を見る
            </StoryCTAButton>
          </div>
          <div className="story-meta">FOMUS Creative Studio</div>
          <div className="story-lang-row">
            {["JP", "EN", "CN", "KR", "40+"].map((lang) => (
              <span key={lang} className="story-lang-pill">{lang}</span>
            ))}
          </div>
        </section>

        <section className="story-section">
          <h2 className="story-section-title">FOMUS品質の漫画制作を、誰でも。</h2>
          <div className="story-value-grid">
            {valueItems.map((item, idx) => (
              <div key={idx} className="story-value-item">
                <div className="story-value-icon">{item.icon}</div>
                <div>
                  <div className="story-value-title">{item.title}</div>
                  <p className="story-value-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="story-section">
          <h2 className="story-section-title">こんな物語が、漫画になります。</h2>
          <div className="story-use-grid">
            {useCases.map((block) => (
              <div key={block.title} className="story-card">
                <h3>{block.title}</h3>
                <div className="story-tags">
                  {block.tags.map((tag) => (
                    <span key={tag} className="story-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="story-section-sub">制作例</div>
          <div id="story-portfolio" className="story-thumb-row">
            {["Sample 1", "Sample 2", "Sample 3", "Sample 4"].map((s) => (
              <div key={s} className="story-thumb">{s}</div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <StoryCTAButton variant="secondary" onClick={() => window.scrollTo({ top: document.body.clientHeight / 2, behavior: "smooth" })}>
              詳しく見る
            </StoryCTAButton>
          </div>
        </section>

        <section className="story-section">
          <h2 className="story-section-title">あなたがやるのは、“話すだけ”。</h2>
          <div className="story-steps">
            {steps.map((step, idx) => (
              <div key={idx} className="story-step">
                <div className="story-step-head">
                  <div className="story-step-icon">{step.icon}</div>
                  <div className="story-step-title">{step.title}</div>
                </div>
                {step.caption && <div className="story-step-caption">{step.caption}</div>}
              </div>
            ))}
          </div>
        </section>

        <section className="story-section">
          <h2 className="story-section-title">従来の常識を覆す、速度と品質。</h2>
          <ComparisonSection
            t={{
              comp_title_trad: "従来の漫画制作",
              comp_sub_trad: "(プロの技と時間)",
              comp_title_fomus: "MangaX Story-to-Comic",
              comp_sub_fomus: "(AIとアジャイルによる革新)",
              comp_cost_trad: "30〜50万円 / 10P",
              comp_cost_sub_trad: "匠の技にはコストがかかります",
              comp_time_trad: "1.5ヶ月〜2ヶ月",
              comp_time_sub_trad: "緻密な工程と確認に時間を費やします",
              comp_effort_trad: "多大",
              comp_effort_sub_trad: "詳細な脚本と度重なる調整が必要",
              comp_skill_trad: "個人のスキルに依存",
              comp_skill_sub_trad: "熟練の作家による唯一無二の作品",
              comp_deliver_trad: "データ納品のみが一般的",
              comp_cost_fomus: "10万円 / 10P",
              comp_cost_sub_fomus: "AI活用による工程最適化・コスト圧縮",
              comp_time_fomus: "最短1週間",
              comp_time_sub_fomus: "アジャイルな制作体制による短納期",
              comp_effort_fomus: "最小限 (60分)",
              comp_effort_sub_fomus: "ヒアリングで意図を汲み取り、構成から提案",
              comp_quality_fomus: "安定したクオリティ",
              comp_quality_sub_fomus: "プロ編集者監修による一貫した品質保証",
              comp_expand_fomus: "ワンストップ展開",
              comp_expand_sub_fomus: "多言語化、MangaX世界配信、製本まで統合支援",
              badge_fast: "Fast & Lean",
              badge_easy: "Client-friendly",
            }}
            hideHeader
          />
        </section>

        <section className="story-section">
          <h2 className="story-section-title">料金プラン</h2>
          <div className="story-pricing">
            <div className="story-price-title">Standard Package</div>
            <div className="story-price-amount">100,000円（税込）</div>
            <div className="story-bullet">漫画10ページ制作</div>
            <div className="story-bullet">60分ヒアリング</div>
            <div className="story-bullet">AI作画・編集</div>
            <div className="story-bullet">高解像度データ納品（PDF / JPG / PNG）</div>
            <div className="story-option-list">
              <div className="story-bullet">追加ページ：1P +5,000円</div>
              <div className="story-bullet">多言語追加：1言語 +30,000円</div>
              <div className="story-bullet">製本サービス：1冊1,000円〜</div>
            </div>
          </div>
        </section>

        <section className="story-section">
          <h2 className="story-section-title">FOMUSならではの強み</h2>
          <div className="story-value-grid">
            {[
              { icon: <MessageCircle size={20} />, title: "まっすーの“引き出すヒアリング”", text: "話を聞くだけで構成ができる。" },
              { icon: <Wand2 size={20} />, title: "AI×人のハイブリッド制作", text: "速い・高品質・安定。" },
              { icon: <Globe size={20} />, title: "世界展開できる多言語漫画（40言語）", text: "翻訳・SNS・展示会にも対応。" },
              { icon: <Sparkles size={20} />, title: "MangaXに掲載できる（無料）", text: "個人・ギフト・企業PRとして利用可能。" },
            ].map((item, idx) => (
              <div key={idx} className="story-value-item">
                <div className="story-value-icon">{item.icon}</div>
                <div>
                  <div className="story-value-title">{item.title}</div>
                  <p className="story-value-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="story-section">
          <h2 className="story-section-title">FAQ</h2>
          <div className="story-faq-list">
            {faqList.map((item, idx) => (
              <StoryFaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </section>

        <section className="story-section story-application">
          <h2 className="story-section-title">あなたの物語を、世界にひとつの漫画へ。</h2>
          <StoryCTAButton variant="primary" onClick={() => window.open("mailto:contact@example.com?subject=Story-to-Comic 申し込み", "_self")}>
            Story-to-Comicを申し込む
          </StoryCTAButton>
          <div style={{ marginTop: 16 }}>
            <StoryCTAButton variant="secondary" onClick={() => window.open("mailto:contact@example.com?subject=Story-to-Comic 無料ヒアリング", "_self")}>
              無料ヒアリングを予約
            </StoryCTAButton>
          </div>
        </section>
      </div>

      <div className="story-floating-cta">
        <StoryCTAButton variant="primary" onClick={() => window.open("mailto:contact@example.com?subject=Story-to-Comic 申し込み", "_self")}>
          Story-to-Comic を申し込む
        </StoryCTAButton>
      </div>

      <footer className="story-footer">
        <div className="story-container">
          <div className="story-footer-links">
            <span>MangaX</span>
            <span>FOMUS Creative Studio</span>
            <span>利用規約</span>
            <span>プライバシーポリシー</span>
            <span>お問い合わせ</span>
            <span>EN / JP</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

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

      {view === "flow" && <StoryLanding onBack={() => navigate("home")} />}

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
