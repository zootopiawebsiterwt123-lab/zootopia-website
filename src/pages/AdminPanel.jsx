import { useState, useEffect } from "react";

const usePoppins = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
};

// ─── Theme ────────────────────────────────────────────────────────────────────
const T = {
  navy: "hsl(222,80%,6%)",
  navyMid: "hsl(222,72%,10%)",
  navyLight: "hsl(222,60%,14%)",
  gold: "hsl(44,85%,55%)",
  goldLight: "hsl(44,85%,65%)",
  goldDim: "hsla(44,85%,55%,0.18)",
  goldBorder: "hsla(44,85%,55%,0.25)",
  ivory: "hsl(44,40%,94%)",
  muted: "hsla(44,30%,92%,0.5)",
  serif: "'Cormorant Garamond', serif",
  sans: "'Poppins', sans-serif",
};

// ─── Mock Data ────────────────────────────────────────────────────────────────
const mockInquiries = [
  { id: 1, name: "Rohan Mehta", email: "rohan@gmail.com", subject: "Wedding Booking", message: "We are looking to book the wedding hall for March 2026.", date: "2026-03-28", status: "New" },
  { id: 2, name: "Priya Sharma", email: "priya@yahoo.com", subject: "Corporate Dinner", message: "Need info on private dining arrangements for 40 people.", date: "2026-03-27", status: "Replied" },
  { id: 3, name: "Anil Kapoor", email: "anil@hotmail.com", subject: "Resort Stay", message: "Would like to know pool access timings and villa rates.", date: "2026-03-26", status: "New" },
  { id: 4, name: "Sneha Joshi", email: "sneha@gmail.com", subject: "Birthday Event", message: "Looking for outdoor birthday setup with catering.", date: "2026-03-25", status: "Closed" },
  { id: 5, name: "Vikram Nair", email: "vikram@gmail.com", subject: "Restaurant Reservation", message: "Table for 6 on Saturday evening, any availability?", date: "2026-03-24", status: "Replied" },
];

const mockReservations = [
  { id: 1, name: "Amit Desai", type: "Wedding Hall", date: "2026-04-10", guests: 200, amount: "₹1,20,000", status: "Confirmed" },
  { id: 2, name: "Neha Verma", type: "Resort Villa", date: "2026-04-14", guests: 4, amount: "₹18,000", status: "Pending" },
  { id: 3, name: "Ravi Kumar", type: "Restaurant", date: "2026-04-05", guests: 8, amount: "₹6,400", status: "Confirmed" },
  { id: 4, name: "Sonal Patel", type: "Garden Event", date: "2026-04-20", guests: 150, amount: "₹85,000", status: "Confirmed" },
  { id: 5, name: "Deepak Rao", type: "Restaurant", date: "2026-04-02", guests: 2, amount: "₹2,200", status: "Cancelled" },
  { id: 6, name: "Meera Singh", type: "Resort Villa", date: "2026-04-18", guests: 6, amount: "₹24,000", status: "Pending" },
];

const mockTestimonials = [
  { id: 1, name: "Anjali Bose", role: "Bride", rating: 5, message: "Our wedding at Zootopia was a dream come true. The floral arrangements and service were impeccable.", date: "2026-03-15", approved: true },
  { id: 2, name: "Suresh Iyer", role: "Corporate Client", rating: 4, message: "Excellent ambience and food quality. Will definitely bring our team again.", date: "2026-03-10", approved: true },
  { id: 3, name: "Kavita Menon", role: "Resort Guest", rating: 5, message: "The pool villas are stunning. Staff were warm and attentive throughout.", date: "2026-03-08", approved: false },
  { id: 4, name: "Arjun Pillai", role: "Dining Guest", rating: 3, message: "Food was good but service was a little slow on weekends.", date: "2026-03-01", approved: false },
  { id: 5, name: "Divya Nair", role: "Event Guest", rating: 5, message: "The garden setup for our anniversary was beyond expectations. Magical evening!", date: "2026-02-20", approved: true },
];

const mockGallery = [
  { id: 1, url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=70", caption: "Wedding Garden", category: "Weddings" },
  { id: 2, url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=70", caption: "Fine Dining", category: "Restaurant" },
  { id: 3, url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=70", caption: "Resort Pool", category: "Resort" },
  { id: 4, url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=70", caption: "Event Decor", category: "Events" },
  { id: 5, url: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=70", caption: "Gourmet Plating", category: "Restaurant" },
  { id: 6, url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=70", caption: "Ballroom", category: "Weddings" },
  { id: 7, url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=70", caption: "Villa Suite", category: "Resort" },
  { id: 8, url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=400&q=70", caption: "Lounge Bar", category: "Restaurant" },
];

// ─── Shared Components ────────────────────────────────────────────────────────

const GoldLine = () => (
  <div style={{ height: "1px", background: `linear-gradient(to right, transparent, ${T.gold}, transparent)`, margin: "0" }} />
);

const Badge = ({ status }) => {
  const map = {
    New: { bg: "hsla(200,80%,50%,0.15)", color: "hsl(200,80%,65%)" },
    Replied: { bg: "hsla(44,85%,55%,0.15)", color: T.goldLight },
    Closed: { bg: "hsla(0,0%,60%,0.15)", color: "hsla(0,0%,70%,0.8)" },
    Confirmed: { bg: "hsla(140,60%,45%,0.15)", color: "hsl(140,60%,55%)" },
    Pending: { bg: "hsla(44,85%,55%,0.15)", color: T.goldLight },
    Cancelled: { bg: "hsla(0,70%,55%,0.15)", color: "hsl(0,70%,65%)" },
  };
  const s = map[status] || map.Closed;
  return (
    <span style={{
      padding: "2px 10px", fontSize: "11px", letterSpacing: "0.1em",
      fontFamily: T.sans, fontWeight: 600, textTransform: "uppercase",
      background: s.bg, color: s.color,
      border: `1px solid ${s.color}33`,
    }}>
      {status}
    </span>
  );
};

const Stars = ({ n }) => (
  <span style={{ color: T.gold, fontSize: "13px", letterSpacing: "2px" }}>
    {"★".repeat(n)}{"☆".repeat(5 - n)}
  </span>
);

const SectionHeader = ({ label, title }) => (
  <div style={{ marginBottom: "2rem" }}>
    <p style={{ fontFamily: T.sans, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: T.goldLight, marginBottom: "6px" }}>{label}</p>
    <h2 style={{ fontFamily: T.serif, fontSize: "2rem", fontWeight: 300, color: T.ivory, margin: 0 }}>{title}</h2>
    <div style={{ height: "1px", width: "60px", background: T.gold, marginTop: "12px" }} />
  </div>
);

const Card = ({ children, style = {} }) => (
  <div style={{
    background: T.navyLight, border: `1px solid ${T.goldBorder}`,
    padding: "1.5rem", ...style,
  }}>
    {children}
  </div>
);

// ─── Dashboard ────────────────────────────────────────────────────────────────

const Dashboard = () => {
  const stats = [
    { label: "Total Reservations", value: "142", delta: "+12 this month", icon: "◈" },
    { label: "Open Inquiries", value: "8", delta: "3 need reply", icon: "◉" },
    { label: "Gallery Images", value: "48", delta: "+4 this week", icon: "▣" },
    { label: "Avg Rating", value: "4.7", delta: "from 86 reviews", icon: "★" },
  ];

  const recent = mockReservations.slice(0, 4);

  return (
    <div>
      <SectionHeader label="Overview" title="Dashboard" />

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {stats.map((s, i) => (
          <Card key={i} style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "12px", right: "16px", fontSize: "28px", color: T.goldDim, fontFamily: T.serif }}>{s.icon}</div>
            <p style={{ fontFamily: T.sans, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: T.muted, marginBottom: "8px" }}>{s.label}</p>
            <p style={{ fontFamily: T.serif, fontSize: "2.5rem", fontWeight: 300, color: T.gold, margin: "0 0 4px" }}>{s.value}</p>
            <p style={{ fontFamily: T.sans, fontSize: "12px", color: T.muted }}>{s.delta}</p>
          </Card>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        {/* Recent reservations */}
        <Card>
          <p style={{ fontFamily: T.serif, fontSize: "1.2rem", color: T.ivory, marginBottom: "1rem", fontWeight: 300 }}>Recent Reservations</p>
          <GoldLine />
          <div style={{ marginTop: "1rem" }}>
            {recent.map((r) => (
              <div key={r.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${T.goldBorder}` }}>
                <div>
                  <p style={{ fontFamily: T.serif, fontSize: "1rem", color: T.ivory, margin: 0 }}>{r.name}</p>
                  <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, margin: "2px 0 0" }}>{r.type} · {r.date}</p>
                </div>
                <Badge status={r.status} />
              </div>
            ))}
          </div>
        </Card>

        {/* Recent inquiries */}
        <Card>
          <p style={{ fontFamily: T.serif, fontSize: "1.2rem", color: T.ivory, marginBottom: "1rem", fontWeight: 300 }}>Recent Inquiries</p>
          <GoldLine />
          <div style={{ marginTop: "1rem" }}>
            {mockInquiries.slice(0, 4).map((inq) => (
              <div key={inq.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${T.goldBorder}` }}>
                <div>
                  <p style={{ fontFamily: T.serif, fontSize: "1rem", color: T.ivory, margin: 0 }}>{inq.name}</p>
                  <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, margin: "2px 0 0" }}>{inq.subject} · {inq.date}</p>
                </div>
                <Badge status={inq.status} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Booking breakdown */}
      <Card style={{ marginTop: "1.5rem" }}>
        <p style={{ fontFamily: T.serif, fontSize: "1.2rem", color: T.ivory, marginBottom: "1rem", fontWeight: 300 }}>Bookings by Type</p>
        <GoldLine />
        <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { label: "Wedding Hall", pct: 42, count: 60 },
            { label: "Restaurant", pct: 30, count: 43 },
            { label: "Resort Villa", pct: 18, count: 26 },
            { label: "Garden Events", pct: 10, count: 13 },
          ].map((b, i) => (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontFamily: T.sans, fontSize: "12px", color: T.muted }}>{b.label}</span>
                <span style={{ fontFamily: T.serif, fontSize: "13px", color: T.goldLight }}>{b.count} bookings</span>
              </div>
              <div style={{ height: "4px", background: "hsla(44,85%,55%,0.1)", borderRadius: "2px" }}>
                <div style={{ height: "4px", width: `${b.pct}%`, background: `linear-gradient(to right, ${T.gold}, ${T.goldLight})`, borderRadius: "2px", transition: "width 0.8s ease" }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const cats = ["All", "Weddings", "Restaurant", "Resort", "Events"];
  const filtered = filter === "All" ? mockGallery : mockGallery.filter(g => g.category === filter);

  return (
    <div>
      <SectionHeader label="Media" title="Gallery Management" />

      {/* Upload bar */}
      <Card style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontFamily: T.sans, fontSize: "13px", color: T.muted }}>{mockGallery.length} images · Last updated today</p>
        <button style={{
          padding: "8px 20px", fontFamily: T.sans, fontSize: "11px", letterSpacing: "0.15em",
          textTransform: "uppercase", background: `linear-gradient(135deg, ${T.gold}, hsl(44,70%,42%))`,
          color: T.navy, border: "none", cursor: "pointer", fontWeight: 700,
        }}>+ Upload Image</button>
      </Card>

      {/* Filter pills */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {cats.map(c => (
          <button key={c} onClick={() => setFilter(c)} style={{
            padding: "6px 16px", fontFamily: T.sans, fontSize: "11px", letterSpacing: "0.12em",
            textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s",
            background: filter === c ? T.gold : "transparent",
            color: filter === c ? T.navy : T.muted,
            border: `1px solid ${filter === c ? T.gold : T.goldBorder}`,
            fontWeight: filter === c ? 700 : 400,
          }}>{c}</button>
        ))}
      </div>

      {/* Image grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
        {filtered.map(img => (
          <div
            key={img.id}
            onClick={() => setSelected(img)}
            style={{ position: "relative", overflow: "hidden", cursor: "pointer", border: `1px solid ${T.goldBorder}`, aspectRatio: "4/3" }}
            onMouseEnter={e => e.currentTarget.querySelector(".overlay").style.opacity = "1"}
            onMouseLeave={e => e.currentTarget.querySelector(".overlay").style.opacity = "0"}
          >
            <img src={img.url} alt={img.caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div className="overlay" style={{
              position: "absolute", inset: 0, background: "hsla(222,80%,6%,0.8)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              opacity: 0, transition: "opacity 0.3s",
            }}>
              <p style={{ fontFamily: T.serif, fontSize: "1rem", color: T.ivory, margin: "0 0 4px" }}>{img.caption}</p>
              <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.goldLight, textTransform: "uppercase", letterSpacing: "0.1em" }}>{img.category}</p>
              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                <span style={{ padding: "4px 12px", border: `1px solid ${T.goldBorder}`, color: T.ivory, fontSize: "11px", fontFamily: T.sans, cursor: "pointer" }}>Edit</span>
                <span style={{ padding: "4px 12px", border: "1px solid hsla(0,70%,55%,0.5)", color: "hsl(0,70%,65%)", fontSize: "11px", fontFamily: T.sans, cursor: "pointer" }}>Delete</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: "fixed", inset: 0, background: "hsla(222,80%,4%,0.95)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "2rem",
        }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: "700px", width: "100%", border: `1px solid ${T.goldBorder}`, background: T.navyMid }}>
            <img src={selected.url} alt={selected.caption} style={{ width: "100%", display: "block" }} />
            <div style={{ padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ fontFamily: T.serif, fontSize: "1.1rem", color: T.ivory, margin: 0 }}>{selected.caption}</p>
                <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.goldLight, margin: "4px 0 0", textTransform: "uppercase", letterSpacing: "0.1em" }}>{selected.category}</p>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "transparent", border: `1px solid ${T.goldBorder}`, color: T.muted, padding: "6px 14px", cursor: "pointer", fontFamily: T.sans, fontSize: "12px" }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Inquiries ────────────────────────────────────────────────────────────────

const Inquiries = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "New", "Replied", "Closed"];
  const filtered = filter === "All" ? mockInquiries : mockInquiries.filter(i => i.status === filter);

  return (
    <div>
      <SectionHeader label="Messages" title="Inquiries" />

      <div style={{ display: "flex", gap: "8px", marginBottom: "1.5rem" }}>
        {statuses.map(s => (
          <button key={s} onClick={() => setFilter(s)} style={{
            padding: "6px 16px", fontFamily: T.sans, fontSize: "11px", letterSpacing: "0.12em",
            textTransform: "uppercase", cursor: "pointer",
            background: filter === s ? T.gold : "transparent",
            color: filter === s ? T.navy : T.muted,
            border: `1px solid ${filter === s ? T.gold : T.goldBorder}`,
            fontWeight: filter === s ? 700 : 400,
          }}>{s}</button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 1fr" : "1fr", gap: "1rem" }}>
        {/* List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {filtered.map(inq => (
            <div
              key={inq.id}
              onClick={() => setSelected(inq)}
              style={{
                padding: "1rem 1.25rem", background: selected?.id === inq.id ? T.navyLight : "hsla(222,72%,10%,0.6)",
                border: `1px solid ${selected?.id === inq.id ? T.gold : T.goldBorder}`,
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={e => { if (selected?.id !== inq.id) e.currentTarget.style.borderColor = T.gold; }}
              onMouseLeave={e => { if (selected?.id !== inq.id) e.currentTarget.style.borderColor = T.goldBorder; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontFamily: T.serif, fontSize: "1.05rem", color: T.ivory, margin: "0 0 2px" }}>{inq.name}</p>
                  <p style={{ fontFamily: T.sans, fontSize: "12px", color: T.goldLight, margin: "0 0 6px" }}>{inq.subject}</p>
                  <p style={{ fontFamily: T.sans, fontSize: "12px", color: T.muted, margin: 0 }}>{inq.message.slice(0, 60)}...</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "1rem" }}>
                  <Badge status={inq.status} />
                  <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, marginTop: "6px" }}>{inq.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {selected && (
          <Card>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div>
                <p style={{ fontFamily: T.serif, fontSize: "1.4rem", color: T.ivory, margin: "0 0 2px", fontWeight: 300 }}>{selected.name}</p>
                <p style={{ fontFamily: T.sans, fontSize: "12px", color: T.goldLight, margin: 0 }}>{selected.email}</p>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "transparent", border: `1px solid ${T.goldBorder}`, color: T.muted, padding: "4px 10px", cursor: "pointer", fontFamily: T.sans, fontSize: "11px" }}>✕</button>
            </div>
            <GoldLine />
            <div style={{ margin: "1rem 0" }}>
              <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>Subject</p>
              <p style={{ fontFamily: T.serif, fontSize: "1.1rem", color: T.ivory, margin: 0 }}>{selected.subject}</p>
            </div>
            <div style={{ margin: "1rem 0" }}>
              <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>Message</p>
              <p style={{ fontFamily: T.sans, fontSize: "13px", color: "hsla(44,30%,92%,0.7)", lineHeight: "1.7", margin: 0 }}>{selected.message}</p>
            </div>
            <div style={{ margin: "1rem 0 1.5rem" }}>
              <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>Received</p>
              <p style={{ fontFamily: T.sans, fontSize: "13px", color: T.ivory, margin: 0 }}>{selected.date}</p>
            </div>
            <GoldLine />
            <div style={{ marginTop: "1rem" }}>
              <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Reply</p>
              <textarea rows={4} placeholder="Type your reply..." style={{
                width: "100%", background: T.navyMid, border: `1px solid ${T.goldBorder}`,
                color: T.ivory, fontFamily: T.sans, fontSize: "13px", padding: "10px", resize: "none",
                outline: "none", boxSizing: "border-box",
              }} />
              <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                <button style={{
                  padding: "8px 20px", fontFamily: T.sans, fontSize: "11px", letterSpacing: "0.15em",
                  textTransform: "uppercase", background: `linear-gradient(135deg, ${T.gold}, hsl(44,70%,42%))`,
                  color: T.navy, border: "none", cursor: "pointer", fontWeight: 700,
                }}>Send Reply</button>
                <button style={{
                  padding: "8px 16px", fontFamily: T.sans, fontSize: "11px", letterSpacing: "0.1em",
                  textTransform: "uppercase", background: "transparent", color: T.muted,
                  border: `1px solid ${T.goldBorder}`, cursor: "pointer",
                }}>Mark Closed</button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

// ─── Reservations ─────────────────────────────────────────────────────────────

const Reservations = () => {
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "Confirmed", "Pending", "Cancelled"];
  const filtered = filter === "All" ? mockReservations : mockReservations.filter(r => r.status === filter);

  const total = mockReservations.filter(r => r.status === "Confirmed").length;
  const pending = mockReservations.filter(r => r.status === "Pending").length;
  const revenue = "₹2,55,600";

  return (
    <div>
      <SectionHeader label="Bookings" title="Reservations" />

      {/* Mini stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
        {[
          { label: "Confirmed", value: total, color: "hsl(140,60%,55%)" },
          { label: "Pending", value: pending, color: T.goldLight },
          { label: "Revenue", value: revenue, color: T.ivory },
        ].map((s, i) => (
          <Card key={i} style={{ textAlign: "center" }}>
            <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "8px" }}>{s.label}</p>
            <p style={{ fontFamily: T.serif, fontSize: "2rem", color: s.color, margin: 0, fontWeight: 300 }}>{s.value}</p>
          </Card>
        ))}
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "1.25rem" }}>
        {statuses.map(s => (
          <button key={s} onClick={() => setFilter(s)} style={{
            padding: "6px 16px", fontFamily: T.sans, fontSize: "11px", letterSpacing: "0.12em",
            textTransform: "uppercase", cursor: "pointer",
            background: filter === s ? T.gold : "transparent",
            color: filter === s ? T.navy : T.muted,
            border: `1px solid ${filter === s ? T.gold : T.goldBorder}`,
            fontWeight: filter === s ? 700 : 400,
          }}>{s}</button>
        ))}
      </div>

      {/* Table */}
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: T.sans }}>
          <thead>
            <tr style={{ background: T.navyMid }}>
              {["Guest", "Type", "Date", "Guests", "Amount", "Status"].map(h => (
                <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontFamily: T.sans, fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: T.goldLight, fontWeight: 600, borderBottom: `1px solid ${T.goldBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={r.id} style={{ borderBottom: `1px solid ${T.goldBorder}`, background: i % 2 === 0 ? "transparent" : "hsla(44,85%,55%,0.02)" }}>
                <td style={{ padding: "14px 16px", color: T.ivory, fontFamily: T.serif, fontSize: "1rem" }}>{r.name}</td>
                <td style={{ padding: "14px 16px", color: T.muted, fontSize: "12px" }}>{r.type}</td>
                <td style={{ padding: "14px 16px", color: T.muted, fontSize: "12px" }}>{r.date}</td>
                <td style={{ padding: "14px 16px", color: T.muted, fontSize: "12px" }}>{r.guests}</td>
                <td style={{ padding: "14px 16px", color: T.goldLight, fontFamily: T.serif, fontSize: "1rem" }}>{r.amount}</td>
                <td style={{ padding: "14px 16px" }}><Badge status={r.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

// ─── Testimonials ─────────────────────────────────────────────────────────────

const Testimonials = () => {
  const [items, setItems] = useState(mockTestimonials);
  const [filter, setFilter] = useState("All");

  const toggle = (id) => setItems(prev => prev.map(t => t.id === id ? { ...t, approved: !t.approved } : t));

  const filtered = filter === "All" ? items : filter === "Approved" ? items.filter(t => t.approved) : items.filter(t => !t.approved);

  return (
    <div>
      <SectionHeader label="Reviews" title="Testimonials" />

      <div style={{ display: "flex", gap: "8px", marginBottom: "1.5rem" }}>
        {["All", "Approved", "Pending"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: "6px 16px", fontFamily: T.sans, fontSize: "11px", letterSpacing: "0.12em",
            textTransform: "uppercase", cursor: "pointer",
            background: filter === f ? T.gold : "transparent",
            color: filter === f ? T.navy : T.muted,
            border: `1px solid ${filter === f ? T.gold : T.goldBorder}`,
            fontWeight: filter === f ? 700 : 400,
          }}>{f}</button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
        {filtered.map(t => (
          <Card key={t.id} style={{ position: "relative", opacity: t.approved ? 1 : 0.75 }}>
            {/* Approval status accent */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: t.approved ? `linear-gradient(to right, transparent, hsl(140,60%,45%), transparent)` : `linear-gradient(to right, transparent, ${T.goldBorder}, transparent)` }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
              <div>
                <p style={{ fontFamily: T.serif, fontSize: "1.1rem", color: T.ivory, margin: "0 0 2px", fontWeight: 300 }}>{t.name}</p>
                <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.goldLight, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{t.role}</p>
              </div>
              <span style={{
                padding: "2px 8px", fontSize: "10px", fontFamily: T.sans, fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.1em",
                background: t.approved ? "hsla(140,60%,45%,0.15)" : "hsla(44,85%,55%,0.1)",
                color: t.approved ? "hsl(140,60%,55%)" : T.goldLight,
                border: `1px solid ${t.approved ? "hsla(140,60%,45%,0.3)" : T.goldBorder}`,
              }}>
                {t.approved ? "Live" : "Pending"}
              </span>
            </div>

            <Stars n={t.rating} />
            <p style={{ fontFamily: T.sans, fontSize: "13px", color: "hsla(44,30%,92%,0.65)", lineHeight: "1.7", margin: "10px 0 12px", fontStyle: "italic" }}>"{t.message}"</p>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
              <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, margin: 0 }}>{t.date}</p>
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={() => toggle(t.id)}
                  style={{
                    padding: "4px 12px", fontFamily: T.sans, fontSize: "10px", letterSpacing: "0.1em",
                    textTransform: "uppercase", cursor: "pointer",
                    background: t.approved ? "hsla(0,70%,55%,0.1)" : `linear-gradient(135deg, ${T.gold}, hsl(44,70%,42%))`,
                    color: t.approved ? "hsl(0,70%,65%)" : T.navy,
                    border: t.approved ? "1px solid hsla(0,70%,55%,0.3)" : "none",
                    fontWeight: 700,
                  }}
                >
                  {t.approved ? "Unpublish" : "Approve"}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "⬡" },
  { id: "gallery", label: "Gallery", icon: "▣" },
  { id: "inquiries", label: "Inquiries", icon: "◉" },
  { id: "reservations", label: "Reservations", icon: "◈" },
  { id: "testimonials", label: "Testimonials", icon: "★" },
];

// ─── App ──────────────────────────────────────────────────────────────────────

export default function AdminPanel() {
  const [active, setActive] = useState("dashboard");
  usePoppins();

  const panels = {
    dashboard: <Dashboard />,
    gallery: <Gallery />,
    inquiries: <Inquiries />,
    reservations: <Reservations />,
    testimonials: <Testimonials />,
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: T.navy, fontFamily: T.sans }}>

      {/* Sidebar */}
      <aside style={{
        width: "220px", flexShrink: 0, background: T.navyMid,
        borderRight: `1px solid ${T.goldBorder}`, display: "flex", flexDirection: "column",
        position: "sticky", top: 0, height: "100vh",
      }}>
        {/* Logo */}
        <div style={{ padding: "2rem 1.5rem 1.5rem", borderBottom: `1px solid ${T.goldBorder}` }}>
          <p style={{ fontFamily: T.serif, fontSize: "1.6rem", color: T.gold, margin: "0 0 2px", fontWeight: 300, letterSpacing: "0.05em" }}>Zootopia</p>
          <p style={{ fontFamily: T.sans, fontSize: "10px", color: T.muted, margin: 0, textTransform: "uppercase", letterSpacing: "0.2em" }}>Admin Panel</p>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "1rem 0" }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                width: "100%", padding: "12px 1.5rem", background: "transparent", border: "none",
                cursor: "pointer", textAlign: "left", transition: "all 0.2s", position: "relative",
                borderLeft: active === item.id ? `2px solid ${T.gold}` : "2px solid transparent",
              }}
              onMouseEnter={e => { if (active !== item.id) e.currentTarget.style.background = "hsla(44,85%,55%,0.07)"; }}
              onMouseLeave={e => { if (active !== item.id) e.currentTarget.style.background = "transparent"; }}
            >
              <span style={{ fontSize: "14px", color: active === item.id ? T.gold : T.muted }}>{item.icon}</span>
              <span style={{
                fontFamily: T.sans, fontSize: "12px", letterSpacing: "0.12em",
                textTransform: "uppercase", fontWeight: active === item.id ? 700 : 400,
                color: active === item.id ? T.ivory : T.muted,
              }}>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div style={{ padding: "1.25rem 1.5rem", borderTop: `1px solid ${T.goldBorder}` }}>
          <p style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, margin: "0 0 4px" }}>Logged in as</p>
          <p style={{ fontFamily: T.serif, fontSize: "1rem", color: T.ivory, margin: 0 }}>Admin</p>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "2.5rem", overflowY: "auto", minWidth: 0 }}>
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: `1px solid ${T.goldBorder}` }}>
          <p style={{ fontFamily: T.sans, fontSize: "12px", color: T.muted, margin: 0, textTransform: "uppercase", letterSpacing: "0.15em" }}>
            {new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "hsl(140,60%,55%)" }} />
            <span style={{ fontFamily: T.sans, fontSize: "11px", color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em" }}>Live</span>
          </div>
        </div>

        {panels[active]}
      </main>
    </div>
  );
}
