/* ============================================================
   FREE GUIDES — edit this list to add / remove guides
   ------------------------------------------------------------
   slug    : opens guide.html?g=<slug> (content lives in guides/<slug>.json)
   link    : use INSTEAD of slug for guides that live elsewhere (Notion, Drive…)
   title   : ชื่อไกด์
   desc    : 1 short line
   topic   : one of TOPICS below
   tool    : one of TOOLS below
   keyword : the word people comment under your reel
   count   : optional, e.g. "100 คำสั่ง"
   isNew   : true = shows a NEW sticker
   Newest guides go at the TOP. Filters only show topics/tools that have guides.
   ============================================================ */

const TOPICS = ["Image & photo", "Office & productivity", "Presentation", "AI video", "Content creation", "Prompting", "Vibe coding"];
const TOOLS  = ["ChatGPT", "Gamma", "HeyGen", "Higgsfield", "Claude", "Multi-tool"];

const GUIDES = [
  {
    slug: "japan-mood", title: "Japan mood prompts / Cinema",
    desc: "ทำ AI short film สไตล์ญี่ปุ่น 6 ฉาก ตัวละครเดียวกันทุกฉาก",
    topic: "AI video", tool: "Higgsfield", keyword: "JAPAN", count: "6 ฉาก", isNew: true
  },
  {
    slug: "heygen-commands", title: "HeyGen Command Cheat Sheet",
    desc: "28 คำสั่งตามขั้นตอนผลิตวิดีโอ + ChatGPT prompt pack",
    topic: "AI video", tool: "HeyGen", keyword: "HEYGEN", count: "28 คำสั่ง", isNew: true
  },
  {
    link: "https://app.notion.com/p/HollyLand-3f99be65bcad801ca49fe7443eff8f15",
    title: "UGC Guide",
    desc: "ไกด์ทำคอนเทนต์ UGC (เปิดใน Notion)",
    topic: "Content creation", tool: "Multi-tool", keyword: "UGC"
  },
  {
    slug: "gamma-presentation", title: "สร้างรายงานเป็นสไลด์ด้วย Gamma AI",
    desc: "จากไฟล์ CSV → executive presentation ใน 7 ขั้น + prompt",
    topic: "Presentation", tool: "Gamma", keyword: "GAMMA", count: "7 ขั้น"
  },
  {
    slug: "photo-commands", title: "Photo Cheat Code",
    desc: "65 คำสั่งแต่งรูป: camera look, มุมกล้อง, แสง, ลบคน",
    topic: "Image & photo", tool: "ChatGPT", keyword: "PHOTO", count: "65 คำสั่ง"
  },
  {
    slug: "office-100", title: "100 Office & Productivity Prompts",
    desc: "คำสั่งลัด ChatGPT สำหรับอีเมล ประชุม Excel และสไลด์",
    topic: "Office & productivity", tool: "ChatGPT", keyword: "OFFICE", count: "100 คำสั่ง"
  },
  {
    slug: "visual-100", title: "100 Visual Prompt Shortcuts",
    desc: "คีย์เวิร์ดสร้างภาพ: ไดอะแกรม อินโฟกราฟิก สินค้า UI",
    topic: "Image & photo", tool: "ChatGPT", keyword: "CHEATCODE", count: "100 คำสั่ง"
  }
];
