import { useState, useRef, useEffect } from "react";

const POLICY_CONTEXT = `You are an expert guide for the Telangana Education Policy 2026 - "Vision for Inclusive Excellence". Answer questions clearly, simply and helpfully based on the following comprehensive policy knowledge:

OVERVIEW: The Telangana Education Commission was constituted on 3rd September 2024 by GO Ms No 27 to prepare a comprehensive education policy from pre-primary to university level. Chaired by Akunuri Murali IAS (Retd.), it visited 305+ institutions across all 33 districts, held 54 meetings, 10 seminars, visited Malaysia, Vietnam, USA, Punjab, Kerala, Karnataka, Andhra Pradesh, Haryana for best practices.

KEY VISION: "Every child in Telangana shall get access to free, quality education in a dignified environment." The policy is rooted in Constitutional values - equality, justice, liberty, fraternity. It places the child at the center.

KEY STATISTICS:
- Telangana ranks near bottom in literacy nationally
- Private school enrollment rose from 40% (2013-14) to 60%+ today
- Govt school enrollment fell 40%+ over a decade, to just 26% in Class 1 (2024-25)
- Education budget dropped from 10.9% (2014-15) to 5.9% (2021-22), recovered to 7.55% (2024-25)
- 60% of Class IX students lack adequate proficiency in Maths, Science, Social Science (PARAKH 2024)
- ASER 2024: Only 29.3% of Std V govt school children can read Std II text; only 31.5% average
- 1,855 residential institutions with 7.45 lakh students in Telangana
- 175 engineering colleges, 90%+ private, 1.2 lakh+ seats annually
- 60%+ college faculty positions vacant (no recruitment since 2013 in degree colleges)

CHAPTER 1 - PRE-PRIMARY EDUCATION:
- Pre-primary education mostly outside formal schooling, delivered through underfunded Anganwadi Centres
- Families forced to private pre-schools costing thousands of rupees
- Recommendations: Integrate pre-primary (Nursery, LKG, UKG) into government schools; appoint trained pre-school teachers; play-based, no-homework, no formal testing approach; regulate private pre-schools; establish enforceable infrastructure & safety standards

CHAPTER 2 - SCHOOL EDUCATION:
- Major challenges: Small under-resourced schools, weak foundational skills, poor English, fragmented management
- Key recommendations:
  A) Reform teacher recruitment - needs-based, prioritize English proficiency & subject competence
  B) Strengthen English-medium education & spoken English from early grades
  C) Standardize infrastructure: classrooms, labs, libraries, digital facilities, safety
  D) Shift from rote learning to competency-based, experiential education
  E) Embed sports, arts, cultural activities, life skills as core (not optional)
  F) Rationalize assessments - competency-based evaluation, third-party validation
  G) Strengthen governance & decentralized decision-making
  H) Implement Section 12(1)(c) of RTE - 25% seats in private unaided schools for marginalized communities

CHAPTER 3 - INTERMEDIATE EDUCATION (Classes XI-XII):
- 10-11 lakh students enroll annually; 2/3 in private colleges
- Govt residential colleges actually show HIGHER pass rates than most private colleges
- Problems: Excessive coaching focus (JEE/NEET), high fees, batch segregation, fake advertisements, certificate withholding
- Recommendations: Discontinue EAPCET; use strengthened IPE (Intermediate Public Examination) marks for UG admissions; regulate private coaching; integrate Classes IX-XII under school system; merge SSC Board and BIE into Telangana School Education Board (TSEB); discontinue Class 11 public exam

CHAPTER 4 - TELANGANA PUBLIC SCHOOLS (TPS) - FLAGSHIP:
- Cluster-based model: divide each mandal into 2-5 clusters, 1 TPS per cluster
- Each TPS campus: ~1,500 students, pre-primary to secondary/higher secondary
- Features: standardized high-quality infrastructure, labs, libraries, sports; English-medium; co-curricular as core; safe transportation; strong SMC governance; remedial education; no closures/forced mergers
- Will benefit ~35 lakh students statewide; phased rollout from 2026
- Goal: Create government schools FREE but BETTER than most private schools

CHAPTER 5 - TEACHER EDUCATION:
- 90%+ private TEIs (Teacher Education Institutions), but public DIETs/CTEs/IASEs perform BETTER on TET
- Problems: Outdated curriculum, weak practicum, distance B.Ed. rampant, no new private TEIs needed
- Recommendations: Discontinue D.El.Ed diploma; restructure B.Ed. into stage-specific degrees; strengthen DIETs; prohibit distance/online B.Ed.; develop Teacher Competency Framework; mandatory Teacher Professional Development; periodic teacher certification; fill 90% vacancies in DIETs and 70% in SCERT urgently

CHAPTER 6 - TELANGANA EDUCATION STANDARDS AUTHORITY (TESA):
- New statutory autonomous body to set, assess, and publicly report on education standards
- Will conduct independent third-party assessments for Classes 2-12 (excluding 10 & 12)
- Will rank and grade ALL schools and colleges; make data public
- Will conduct action research, evaluate policies, collaborate internationally
- Designed to eliminate conflict of interest in current self-assessment system

CHAPTER 7 - RESIDENTIAL EDUCATIONAL INSTITUTIONS:
- 1,855 residential institutions, 7.45 lakh students, 36,000+ teachers; strong social mobility record
- 40% still in rented/makeshift premises; major food safety failures; fragmented across caste-based welfare societies
- Recommendations: Unify all under one Telangana State Residential Education Society; limit to 1,000 students per school; digital end-to-end governance; mandatory mental health professionals; discontinue residential model for UG degree colleges; prioritize neighborhood schools over expansion of residential schools; dedicate residential schools for tribal children and orphans

CHAPTER 8 - COLLEGIATE EDUCATION:
- GER 40%, Gender Parity Index 1.8 (women outnumber men) - good access
- But 60%+ faculty positions vacant, no regular recruitment since 2013; many colleges dilapidated
- Recommendations: Urgent faculty recruitment; enforce infrastructure standards; decentralize rural colleges; Apprenticeship Embedded Degree Programmes (AEDP); timely scholarships; unified academic calendar; NAAC accreditation push

CHAPTER 9 - TECHNICAL EDUCATION (Engineering + Polytechnic):
- 175 engineering colleges, 90%+ private; 60%+ focused on CSE/IT
- 22,000+ engineering seats VACANT in 2025-26; many districts have near-zero seat utilization
- Polytechnic colleges drifted from industry-ready training to becoming JEE/ECET feeder institutions
- Recommendations: Performance-linked differentiation; outcome-based curriculum; integrate polytechnics with Telangana Skill University; restore faculty capacity; focus polytechnics on applied, industry-ready skills

CHAPTER 10 - UNIVERSITY EDUCATION:
- Osmania University founded 1917 - rich legacy
- Major crisis: prolonged Vice-Chancellor vacancies, dissolved Academic/Executive Councils, faculty recruitment frozen
- Many departments have zero qualified faculty; heavy reliance on contract staff below UGC standards
- Recommendations: Transparent VC recruitment; fill all vacancies per UGC norms; Office of Controller of Affiliation in each university; reinstate democratic student elections; upgrade libraries, labs, hostels; create interdisciplinary programmes; establish TESA for quality audits

CHAPTER 11 - MID-DAY MEALS & FOOD SAFETY:
- Repeated food poisoning incidents across 33 districts
- Unit costs too low vs market prices; SHG cooks in financial stress; unhygienic kitchens; rusted utensils; rodent infestation
- Recommendations: Revised nutritionally balanced menu (vegetables, dal, eggs, fruits daily); extend MDM to Intermediate students; additional ₹200 crore/year investment; replace firewood with gas; SS 304 stainless steel utensils; complete digital payment system (weekly billing, facial recognition attendance); standardized menu for residential schools

CHAPTER 12 - OPEN & DISTANCE LEARNING (ODL):
- Telangana pioneered ODL with Dr B.R. Ambedkar Open University (BRAOU), TOSS
- Now constrained by weak staffing, poor learner support, high dropout rates, digital divide
- Recommendations: Strengthen TOSS with regular trained staff; curriculum reform for ODL learners; bridge digital divide (free device/connectivity access); establish CODE-T (Consortium of Distance Education - Telangana); state-level open education portal; extend to prisoners, women, marginalized communities

GENERAL / CROSS-CUTTING RECOMMENDATIONS:
- BUDGET: Allocate at least 18% of state budget to education (currently 7.55%); 5% for higher education
- LANGUAGE: English as medium of instruction from Nursery to PG; mother tongue only as support explanation at primary level
- GOVERNANCE: IAS officers in education departments to serve minimum 5-year tenure; common ERP software; all education data in public domain
- COMMON SCHOOL SYSTEM: Long-term goal for equitable access for all children
- RTE EXTENSION: Extend Right to Education from 6-14 years to 3-18 years (Nursery to Class XII)
- CASTE DIGNITY: SC/ST categories not to appear on attendance registers or public documents; no caste/religious discrimination; strict enforcement
- GENDER: Introduce gender education from secondary school; awareness of POCSO, Anti-Dowry, POSH laws
- NATIONAL ANTHEM: Only national anthem and state anthem to be sung in government school assemblies
- ALUMNI: All institutions to build robust alumni engagement systems
- PRIVATE SCHOOLS: Protect government land; no PPP/FDI in education; regulate fees through TAFRC (Telangana Admission & Fee Regulatory Committee)
- BIOMETRIC ATTENDANCE: For all students, teachers, staff; link to salary

NEW LEGISLATIVE PROPOSALS:
1. Telangana Private Schools & Junior Colleges Fee Regulatory & Monitoring Commission Draft Bill 2026
2. Telangana Public Schools (Establishment, Management & Monitoring) Draft Bill 2026
3. Telangana Education Standards Authority Draft Bill 2026

Answer in clear, simple language. Use bullet points when listing recommendations. If asked about something not covered in the policy, say so honestly. Always be encouraging and positive about Telangana's future. Use Telugu cultural context when relevant.`;

const chapters = [
  { id: 1, icon: "🌱", title: "Pre-Primary Education", color: "#0f6e56", bg: "#e1f5ee", summary: "Bring Nursery, LKG & UKG into government schools so every child starts equal", tag: "Foundation" },
  { id: 2, icon: "🏫", title: "School Education", color: "#185fa5", bg: "#e6f1fb", summary: "Quality schools for all — English, sports, labs, and no more rote learning", tag: "Core Reform" },
  { id: 3, icon: "📚", title: "Intermediate Education", color: "#ba7517", bg: "#faeeda", summary: "Fix the coaching industry, protect students, and merge Class 9-12 under one board", tag: "Classes XI-XII" },
  { id: 4, icon: "⭐", title: "Telangana Public Schools", color: "#993556", bg: "#fbeaf0", summary: "Flagship model: Government schools free yet better than private schools", tag: "FLAGSHIP" },
  { id: 5, icon: "👩‍🏫", title: "Teacher Education", color: "#3b6d11", bg: "#eaf3de", summary: "Better trained teachers, professional development, and fix the B.Ed. system", tag: "Teachers" },
  { id: 6, icon: "📊", title: "Education Standards (TESA)", color: "#534ab7", bg: "#eeedfe", summary: "New independent body to grade every school and college publicly", tag: "Accountability" },
  { id: 7, icon: "🏠", title: "Residential Institutions", color: "#5f5e5a", bg: "#f1efe8", summary: "Unify 1,855 residential schools under one society; fix food, safety & dignity", tag: "Welfare" },
  { id: 8, icon: "🎓", title: "Collegiate Education", color: "#185fa5", bg: "#e6f1fb", summary: "Fill 60%+ vacant faculty posts, link degrees to jobs, fix infrastructure", tag: "Degree Colleges" },
  { id: 9, icon: "⚙️", title: "Technical Education", color: "#993c1d", bg: "#faece7", summary: "Fix 22,000 vacant engineering seats; restore polytechnics to practical training", tag: "Engg & Polytechnic" },
  { id: 10, icon: "🏛️", title: "University Education", color: "#0c447c", bg: "#e6f1fb", summary: "Fill VC vacancies, recruit faculty per UGC norms, restore academic culture", tag: "Universities" },
  { id: 11, icon: "🍱", title: "Mid-Day Meals & Food Safety", color: "#854f0b", bg: "#faeeda", summary: "₹200 cr more/year for nutritious meals, gas stoves, steel utensils, digital payments", tag: "Nutrition" },
  { id: 12, icon: "💻", title: "Open & Distance Learning", color: "#0f6e56", bg: "#e1f5ee", summary: "Strengthen TOSS, bridge digital divide, create CODE-T consortium", tag: "ODL" },
];

const stats = [
  { value: "354", label: "Pages of policy", sub: "Comprehensive coverage" },
  { value: "305+", label: "Institutions visited", sub: "All 33 districts" },
  { value: "12", label: "Chapters", sub: "Pre-school to university" },
  { value: "35L", label: "Students to benefit", sub: "From TPS model alone" },
  { value: "18%", label: "Budget target", sub: "Of state budget for education" },
  { value: "₹200Cr", label: "Extra for meals", sub: "Per year recommended" },
];

const highlights = [
  { emoji: "🆓", text: "Extend free & compulsory education from age 3 to 18 (not just 6-14)" },
  { emoji: "🇬🇧", text: "English medium from Nursery to PG across all government schools" },
  { emoji: "📋", text: "25% seats in private schools for marginalized communities (RTE Section 12)" },
  { emoji: "🏫", text: "Create Telangana Public Schools — free but world-class government schools" },
  { emoji: "👮", text: "IAS officers in education must serve 5-year minimum tenure (no churn)" },
  { emoji: "📱", text: "Biometric attendance for all students and teachers; digital payment for meals" },
  { emoji: "⚖️", text: "SC/ST categories not to appear on public attendance registers" },
  { emoji: "🌐", text: "All education data to be placed in public domain for transparency" },
];

export default function App() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Namaste! 🙏 I'm your guide to the Telangana Education Policy 2026. Ask me anything — from what the policy says about English medium to how Telangana Public Schools work, or what changes are coming for universities. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("home");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: POLICY_CONTEXT,
          messages: [
            ...messages.filter(m => m.role !== "assistant" || messages.indexOf(m) > 0).map(m => ({
              role: m.role === "assistant" ? "assistant" : "user",
              content: m.text
            })),
            { role: "user", content: userMsg }
          ]
        })
      });
      const data = await response.json();
      const reply = data.content?.[0]?.text || "Sorry, I couldn't get a response. Please try again.";
      setMessages(prev => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Connection error. Please try again." }]);
    }
    setLoading(false);
  }

  const sampleQuestions = [
    "What are Telangana Public Schools?",
    "What happens to mid-day meals?",
    "How will teachers improve?",
    "What is TESA?",
    "How does this help poor students?",
    "What changes for engineering colleges?",
  ];

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "var(--color-background-primary)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "#0f6e56", padding: "0 24px", position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", height: 52 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#ef9f27", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>📚</div>
          <span style={{ color: "#fff", fontWeight: 500, fontSize: 15, letterSpacing: "0.01em" }}>Telangana Education Policy 2026</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[["home","Overview"],["chapters","Chapters"],["chat","Ask AI"]].map(([v,label]) => (
            <button key={v} onClick={() => setView(v)} style={{ padding: "5px 14px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.3)", background: view === v ? "rgba(255,255,255,0.2)" : "transparent", color: "#fff", fontSize: 13, cursor: "pointer", fontFamily: "Georgia, serif" }}>{label}</button>
          ))}
        </div>
      </div>

      {/* HOME VIEW */}
      {view === "home" && (
        <div>
          {/* Hero */}
          <div style={{ background: "linear-gradient(135deg, #0f6e56 0%, #085041 60%, #04342c 100%)", padding: "48px 24px 40px", textAlign: "center" }}>
            <div style={{ display: "inline-block", background: "rgba(239,159,39,0.2)", border: "1px solid rgba(239,159,39,0.5)", color: "#ef9f27", borderRadius: 20, padding: "4px 16px", fontSize: 12, marginBottom: 16, letterSpacing: "0.06em" }}>VISION FOR INCLUSIVE EXCELLENCE</div>
            <h1 style={{ color: "#fff", fontSize: 32, fontWeight: 500, margin: "0 0 12px", lineHeight: 1.25 }}>Telangana Education<br/>Policy 2026</h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.6 }}>A comprehensive roadmap to transform education from nursery to university — putting every child at the center.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => setView("chapters")} style={{ background: "#ef9f27", color: "#412402", border: "none", borderRadius: 24, padding: "11px 24px", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "Georgia, serif" }}>Explore 12 Chapters →</button>
              <button onClick={() => setView("chat")} style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 24, padding: "11px 24px", fontSize: 14, cursor: "pointer", fontFamily: "Georgia, serif" }}>Ask the Policy AI</button>
            </div>
          </div>

          {/* Stats */}
          <div style={{ padding: "32px 24px 8px" }}>
            <p style={{ fontSize: 11, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 16px", textAlign: "center" }}>Policy at a glance</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, maxWidth: 640, margin: "0 auto" }}>
              {stats.map(s => (
                <div key={s.label} style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "14px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 24, fontWeight: 500, color: "#0f6e56", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "var(--color-text-primary)", fontWeight: 500, marginTop: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)", marginTop: 2 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Crisis Context */}
          <div style={{ padding: "24px 24px 8px", maxWidth: 640, margin: "0 auto" }}>
            <div style={{ background: "#faeeda", border: "1px solid #ef9f27", borderRadius: 12, padding: "16px 18px", marginBottom: 16 }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: "#412402", margin: "0 0 8px" }}>⚠️ Why this policy was urgently needed</p>
              <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: 13, color: "#633806", lineHeight: 1.7 }}>
                <li>Private school enrollment surged from 40% → 60%+ as parents lost faith in govt schools</li>
                <li>Education budget fell from 10.9% → 5.9% of state budget over a decade</li>
                <li>Only 31.5% of Class V students can read a Class II-level text (ASER 2024)</li>
                <li>60%+ faculty posts in degree colleges vacant since 2013</li>
                <li>40% of residential schools still in rented buildings without basic safety features</li>
              </ul>
            </div>
          </div>

          {/* Key Highlights */}
          <div style={{ padding: "8px 24px 32px", maxWidth: 640, margin: "0 auto" }}>
            <p style={{ fontSize: 11, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 14px" }}>Key decisions in the policy</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px" }}>
                  <span style={{ fontSize: 16 }}>{h.emoji}</span>
                  <span style={{ fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.55 }}>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: "#0f6e56", padding: "28px 24px", textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 15, margin: "0 0 16px", lineHeight: 1.5 }}>Have questions about the policy?<br/>Ask our AI — trained on the full 354-page document.</p>
            <button onClick={() => setView("chat")} style={{ background: "#ef9f27", color: "#412402", border: "none", borderRadius: 24, padding: "11px 28px", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "Georgia, serif" }}>Ask the Policy AI →</button>
          </div>
        </div>
      )}

      {/* CHAPTERS VIEW */}
      {view === "chapters" && (
        <div style={{ padding: "24px 20px", maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>All 12 Chapters</h2>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 20px" }}>Click any chapter to learn more, or ask the AI for details.</p>

          {activeChapter ? (
            <div>
              <button onClick={() => setActiveChapter(null)} style={{ display: "flex", alignItems: "center", gap: 6, background: "transparent", border: "none", color: "#0f6e56", cursor: "pointer", fontSize: 13, marginBottom: 16, fontFamily: "Georgia, serif", padding: 0 }}>← Back to all chapters</button>
              <ChapterDetail chapter={activeChapter} onAskAI={(q) => { setView("chat"); setTimeout(() => {}, 100); }} />
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {chapters.map(ch => (
                <div key={ch.id} onClick={() => setActiveChapter(ch)} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "14px 16px", cursor: "pointer", display: "flex", gap: 14, alignItems: "flex-start", transition: "border-color 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "#0f6e56"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-tertiary)"}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: ch.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{ch.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, color: ch.color, background: ch.bg, padding: "2px 8px", borderRadius: 10, fontWeight: 500 }}>{ch.tag}</span>
                      <span style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Chapter {ch.id}</span>
                    </div>
                    <p style={{ fontSize: 15, fontWeight: 500, margin: "0 0 4px", color: "var(--color-text-primary)" }}>{ch.title}</p>
                    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{ch.summary}</p>
                  </div>
                  <span style={{ color: "var(--color-text-secondary)", fontSize: 16, flexShrink: 0, marginTop: 4 }}>›</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* CHAT VIEW */}
      {view === "chat" && (
        <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 52px)" }}>
          <div style={{ padding: "12px 20px 8px", borderBottom: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-primary)" }}>
            <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary)" }}>AI trained on the full Telangana Education Policy 2026 — ask anything in simple language</p>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                {m.role === "assistant" && (
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#0f6e56", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0, marginRight: 8, marginTop: 2 }}>📚</div>
                )}
                <div style={{
                  maxWidth: "80%", padding: "10px 14px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: m.role === "user" ? "#0f6e56" : "var(--color-background-secondary)",
                  color: m.role === "user" ? "#fff" : "var(--color-text-primary)",
                  fontSize: 14, lineHeight: 1.6, whiteSpace: "pre-wrap"
                }}>{m.text}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#0f6e56", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>📚</div>
                <div style={{ background: "var(--color-background-secondary)", borderRadius: "16px 16px 16px 4px", padding: "10px 16px", fontSize: 13, color: "var(--color-text-secondary)" }}>
                  <span style={{ animation: "pulse 1s infinite" }}>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Sample Questions */}
          {messages.length <= 1 && (
            <div style={{ padding: "0 20px 10px" }}>
              <p style={{ fontSize: 11, color: "var(--color-text-secondary)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Try asking:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {sampleQuestions.map(q => (
                  <button key={q} onClick={() => { setInput(q); }} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 16, padding: "5px 12px", fontSize: 12, cursor: "pointer", color: "var(--color-text-primary)", fontFamily: "Georgia, serif" }}>{q}</button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div style={{ padding: "10px 16px 14px", borderTop: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-primary)", display: "flex", gap: 8 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Ask about any part of the policy..."
              style={{ flex: 1, borderRadius: 22, border: "0.5px solid var(--color-border-secondary)", padding: "10px 16px", fontSize: 14, outline: "none", fontFamily: "Georgia, serif", background: "var(--color-background-primary)", color: "var(--color-text-primary)" }}
            />
            <button onClick={sendMessage} disabled={loading || !input.trim()} style={{ background: "#0f6e56", color: "#fff", border: "none", borderRadius: 22, padding: "10px 20px", fontSize: 14, cursor: input.trim() && !loading ? "pointer" : "not-allowed", opacity: input.trim() && !loading ? 1 : 0.5, fontFamily: "Georgia, serif" }}>Send</button>
          </div>
        </div>
      )}

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </div>
  );
}

const chapterDetails = {
  1: { problem: "Pre-primary education is mostly in underfunded Anganwadi centres. Private nursery schools cost ₹20,000–₹1 lakh+ per year, pushing poor families into debt from age 3.", recs: ["Add Nursery, LKG & UKG to ALL government primary schools", "Hire trained pre-school teachers (not just general teachers)", "Play-based learning — no exams, no homework at this age", "Regulate private pre-schools for safety & fee transparency", "Standard infrastructure: safe toilets, clean classrooms, play areas"] },
  2: { problem: "Government schools losing students to private schools. Only 26% of Class 1 enrollments are in government schools. Poor English, no labs, no sports, overcrowded classrooms.", recs: ["Recruit teachers based on English skills & subject expertise", "English medium from Class 1; daily spoken English practice", "Every school to have labs, library, computer room, playground", "Sports, music, arts made mandatory (not extra)", "25% seats in private schools for marginalized children (RTE Act)"] },
  3: { problem: "Corporate coaching colleges charging ₹3–5 lakh/year, locking certificates, segregating students by marks. Government junior colleges crumbling. 95% students in just 3 streams.", recs: ["Stop EAPCET; use Intermediate board marks for college admissions", "Merge Class 11 & 12 board under new Telangana School Education Board", "No more Class 11 public exam (reduce pressure on students)", "Strict fee regulation for coaching colleges", "Vocational courses moved to ITIs & polytechnics"] },
  4: { problem: "Government schools too small, under-resourced, fragmented across 33+ management types. Parents choosing costly private schools due to perception gap.", recs: ["One Telangana Public School (TPS) per mandal cluster (2-5 clusters per mandal)", "Each TPS: ~1,500 students, pre-primary to Class 12, free of cost", "Full infrastructure: labs, library, sports, digital, cafeteria", "Safe school buses; no forced school closures", "Will serve 35 lakh students statewide by full rollout"] },
  5: { problem: "90%+ of teacher training institutions are private and underperform. B.Ed. by distance education rampant. 90% vacancies in DIETs (District Teacher Training Institutes).", recs: ["Discontinue D.El.Ed diploma; restructure B.Ed. into stage-specific degrees", "Strengthen government DIETs as centres of excellence", "Ban distance/online B.Ed. programmes", "Annual teacher certification & professional development", "Mentoring, reflective practice, professional learning communities"] },
  6: { problem: "No independent body to honestly assess school/college quality. Internal assessments inflated. Parents & govt have no real picture of education quality.", recs: ["Create TESA: independent body to assess all schools & colleges", "Independent exams for Classes 2-9 & 11 (not self-assessed)", "Public ranking of every school and college", "Diagnostic research on what works and what doesn't", "No influence from government on TESA's findings"] },
  7: { problem: "1,855 residential schools, 40% still in rented buildings. Food poisoning incidents. Mental health crisis. Separate caste-based welfare societies causing fragmentation.", recs: ["Merge all under one Telangana State Residential Education Society", "Maximum 1,000 students per residential school", "Mandatory mental health professionals in every school", "Digital end-to-end procurement & payment systems", "Stop expanding residential UG colleges; support neighborhood colleges instead"] },
  8: { problem: "60%+ faculty positions in degree colleges vacant since 2013. Many colleges dilapidated. Low NAAC accreditation. Degrees disconnected from employment.", recs: ["Immediate large-scale faculty recruitment", "Apprenticeship Embedded Degree Programmes (job-linked degrees)", "Timely disbursement of scholarships to students", "Unified academic calendar across all colleges", "Push for NAAC accreditation; target NIRF top-100 representation"] },
  9: { problem: "22,000+ engineering seats vacant in 2025-26. 60%+ seats in CSE/IT; core engineering (Civil, Mechanical, Electrical) declining. Polytechnics lost their identity as skill institutes.", recs: ["Performance-linked college differentiation (not all colleges equal)", "Outcome-based curriculum linked to job market", "Polytechnics to focus on hands-on, industry-ready training", "Integrate polytechnics with Telangana Skill University & ITIs", "Limit new engineering college approvals; consolidate existing ones"] },
  10: { problem: "VC positions vacant for years. No faculty recruitment. Executive Councils dissolved. Heavy government interference in university governance undermining autonomy.", recs: ["Transparent VC appointment process; fixed 5-year tenure", "Fill all faculty posts immediately per UGC norms", "Office of Controller of Affiliation in each university", "Reinstate democratically elected student unions", "Upgrade libraries, labs, hostels; create interdisciplinary programmes"] },
  11: { problem: "Repeated food poisoning. SHG cooks paid too little, too late. Firewood stoves, rusted utensils, rodent infestations in school kitchens across 33 districts.", recs: ["Daily nutritious menu: vegetables, dal, eggs, fruits", "Extend mid-day meals to Intermediate (Classes 11-12) students", "Replace firewood with gas; use SS 304 steel utensils only", "Weekly digital billing; facial recognition attendance integration", "Additional ₹200 crore/year investment; standardized menus for residential schools"] },
  12: { problem: "BRAOU, TOSS pioneered ODL but now weakened. High dropout rates. Digital divide. Deputation-based staff with no permanency or training.", recs: ["Appoint regular trained staff for TOSS & BRAOU", "Create CODE-T: Consortium of Distance Education Telangana", "Free device & internet access for ODL learners", "Tailor curriculum for working adults, women, rural youth", "Extend ODL to prisoners, school dropouts, tribal communities"] },
};

function ChapterDetail({ chapter, onAskAI }) {
  const detail = chapterDetails[chapter.id];
  return (
    <div>
      <div style={{ background: chapter.bg, borderRadius: 16, padding: "20px 20px 16px", marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <div style={{ fontSize: 36 }}>{chapter.icon}</div>
          <div>
            <div style={{ fontSize: 11, color: chapter.color, fontWeight: 500, marginBottom: 4 }}>Chapter {chapter.id} · {chapter.tag}</div>
            <h2 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 8px", color: "var(--color-text-primary)" }}>{chapter.title}</h2>
            <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.55 }}>{chapter.summary}</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 12, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px" }}>The Problem</p>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--color-text-primary)", margin: 0, background: "var(--color-background-secondary)", borderRadius: 10, padding: "14px 16px" }}>{detail?.problem}</p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 12, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px" }}>Key Recommendations</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {detail?.recs.map((r, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px" }}>
              <span style={{ color: chapter.color, fontWeight: 500, flexShrink: 0, fontSize: 14 }}>{i + 1}.</span>
              <span style={{ fontSize: 14, color: "var(--color-text-primary)", lineHeight: 1.55 }}>{r}</span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={onAskAI} style={{ background: chapter.color, color: "#fff", border: "none", borderRadius: 24, padding: "10px 22px", fontSize: 13, cursor: "pointer", fontFamily: "Georgia, serif" }}>Ask AI about this chapter →</button>
    </div>
  );
}
