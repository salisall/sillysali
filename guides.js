/* ============================================================
   FREE GUIDES — edit this list to add / remove guides
   ------------------------------------------------------------
   title   : ชื่อไกด์ (Thai or English)
   desc    : 1 short line (optional)
   topic   : must match one of TOPICS below
   tool    : must match one of TOOLS below
   keyword : the word people comment under your reel (optional)
   link    : Notion / Google Drive / Canva link. Leave "" = shows "Coming soon"
   isNew   : true = shows a NEW sticker
   Newest guides go at the TOP.
   ============================================================ */

const TOPICS = ["Getting started", "Prompting", "Vibe coding", "AI agents", "Content creation", "Data & ML", "Career"];
const TOOLS  = ["Claude", "ChatGPT", "Gemini", "Codex", "Cursor", "Multi-tool"];

const GUIDES = [
  {
    title: "ต่อ Claude กับ GitHub แล้วสั่งแก้เว็บด้วยแชท",
    desc: "Connect GitHub แล้วให้ Claude แก้และ deploy เว็บให้แบบไม่ต้องเขียนโค้ดเอง",
    topic: "Vibe coding", tool: "Claude", keyword: "GITHUB", link: "", isNew: true
  },
  {
    title: "Prompt คืออะไร + สูตรเขียน prompt ให้ AI เข้าใจ",
    desc: "Role · Context · Result · Clarity พร้อมตัวอย่าง copy ได้เลย",
    topic: "Prompting", tool: "Multi-tool", keyword: "PROMPT", link: "", isNew: true
  },
  {
    title: "Vibe coding 101: สร้างแอปแรกโดยไม่ต้องเป็น dev",
    desc: "จากไอเดีย → แอปที่ใช้งานได้จริง ทีละขั้น",
    topic: "Vibe coding", tool: "Claude", keyword: "VIBE", link: ""
  },
  {
    title: "AI Agent คืออะไร ต่างจาก chatbot ยังไง",
    desc: "อธิบายแบบเข้าใจง่าย + ตัวอย่างงานที่ให้ agent ทำแทนได้",
    topic: "AI agents", tool: "Multi-tool", keyword: "AGENT", link: ""
  },
  {
    title: "Claude vs Codex: ใช้ตัวไหนเขียนโค้ดดี",
    desc: "เทียบจุดเด่น จุดด้อย และงานที่เหมาะกับแต่ละตัว",
    topic: "Vibe coding", tool: "Codex", keyword: "CODEX", link: ""
  },
  {
    title: "Workflow deploy แอปเร็วขึ้น 10 เท่าด้วย AI",
    desc: "เครื่องมือที่ใช้จริงตั้งแต่ build จนถึงขึ้นเว็บ",
    topic: "Vibe coding", tool: "Multi-tool", keyword: "DEPLOY", link: ""
  },
  {
    title: "วางแผนคอนเทนต์ 1 เดือนด้วย AI",
    desc: "Template content calendar + prompt สำหรับคิดไอเดีย",
    topic: "Content creation", tool: "ChatGPT", keyword: "PLAN", link: ""
  },
  {
    title: "เริ่มต้น Data Science จากสายบัญชี",
    desc: "Roadmap + skill ที่ต้องมีสำหรับคนเปลี่ยนสาย",
    topic: "Career", tool: "Multi-tool", keyword: "DATA", link: ""
  }
];
