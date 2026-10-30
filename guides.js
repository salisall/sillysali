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
   titleEn / descEn / countEn : English text shown when the EN button is on
   Newest guides go at the TOP. Filters only show topics/tools that have guides.
   ============================================================ */

const TOPICS = ["Image & photo", "Office & productivity", "Presentation", "AI video", "Content creation", "Prompting", "Vibe coding"];
const TOOLS  = ["ChatGPT", "Gamma", "HeyGen", "Higgsfield", "Claude", "Multi-tool"];

const GUIDES = [
  {
    slug: "japan-mood", title: "Japan mood prompts / Cinema",
    desc: "ทำ AI short film สไตล์ญี่ปุ่น 6 ฉาก ตัวละครเดียวกันทุกฉาก",
    topic: "AI video", tool: "Higgsfield", keyword: "JAPAN", count: "6 ฉาก", isNew: true,
    descEn: "Make a Japanese-style AI short film: 6 scenes, same character in every shot", countEn: "6 scenes"
  },
  {
    slug: "heygen-commands", title: "HeyGen Command Cheat Sheet",
    desc: "28 คำสั่งตามขั้นตอนผลิตวิดีโอ + ChatGPT prompt pack",
    topic: "AI video", tool: "HeyGen", keyword: "HEYGEN", count: "28 คำสั่ง", isNew: true,
    descEn: "28 commands in video-production order + a ChatGPT prompt pack", countEn: "28 commands"
  },
  {
    link: "https://app.notion.com/p/HollyLand-3f99be65bcad801ca49fe7443eff8f15",
    title: "UGC Guide",
    desc: "ไกด์ทำคอนเทนต์ UGC (เปิดใน Notion)",
    topic: "Content creation", tool: "Multi-tool", keyword: "UGC",
    descEn: "A guide to making UGC content (opens in Notion)"
  },
  {
    slug: "gamma-presentation", title: "สร้างรายงานเป็นสไลด์ด้วย Gamma AI",
    desc: "จากไฟล์ CSV → executive presentation ใน 7 ขั้น + prompt",
    topic: "Presentation", tool: "Gamma", keyword: "GAMMA", count: "7 ขั้น",
    descEn: "From a CSV file to an executive presentation in 7 steps + prompts", countEn: "7 steps", titleEn: "Turn a report into slides with Gamma AI"
  },
  {
    slug: "photo-commands", title: "Photo Cheat Code",
    desc: "65 คำสั่งแต่งรูป: camera look, มุมกล้อง, แสง, ลบคน",
    topic: "Image & photo", tool: "ChatGPT", keyword: "PHOTO", count: "65 คำสั่ง",
    descEn: "65 photo-editing commands: camera looks, angles, lighting, removing people", countEn: "65 commands"
  },
  {
    slug: "office-100", title: "100 Office & Productivity Prompts",
    desc: "คำสั่งลัด ChatGPT สำหรับอีเมล ประชุม Excel และสไลด์",
    topic: "Office & productivity", tool: "ChatGPT", keyword: "OFFICE", count: "100 คำสั่ง",
    descEn: "ChatGPT shortcuts for email, meetings, Excel and slides", countEn: "100 commands"
  },
  {
    slug: "visual-100", title: "100 Visual Prompt Shortcuts",
    desc: "คีย์เวิร์ดสร้างภาพ: ไดอะแกรม อินโฟกราฟิก สินค้า UI",
    topic: "Image & photo", tool: "ChatGPT", keyword: "CHEATCODE", count: "100 คำสั่ง",
    descEn: "Image keywords for diagrams, infographics, products and UI", countEn: "100 commands"
  }
];
