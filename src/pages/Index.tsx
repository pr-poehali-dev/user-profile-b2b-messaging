import Icon from "@/components/ui/icon";

const AVATAR_URL =
  "https://cdn.poehali.dev/projects/26dd1934-cbc7-4b73-84ae-c57f8c4bcf36/files/ac5ca109-7ac6-4ba9-b58c-d31d2e4c4eb8.jpg";

const experience = [
  {
    company: "Яндекс",
    role: "Старший менеджер продукта",
    period: "2021 — сейчас",
    logo: "🟡",
  },
  {
    company: "Сбер",
    role: "Менеджер продукта",
    period: "2018 — 2021",
    logo: "🟢",
  },
  {
    company: "Mail.ru Group",
    role: "Аналитик",
    period: "2016 — 2018",
    logo: "🔵",
  },
];

const contacts = [
  { icon: "Mail", label: "alexei@company.ru" },
  { icon: "Phone", label: "+7 999 123-45-67" },
  { icon: "Link", label: "linkedin.com/in/alexei" },
];

const chats = [
  { name: "Дизайн & продукт", members: "18 участников", emoji: "🎨" },
  { name: "Стратегия 2026", members: "7 участников", emoji: "📊" },
  { name: "Команда роста", members: "12 участников", emoji: "🚀" },
  { name: "Tech leads", members: "9 участников", emoji: "⚙️" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#DDDBD4] font-golos flex items-center justify-center py-12 px-4">
      {/* Phone frame */}
      <div className="relative w-[390px] flex-shrink-0">
        {/* Shell */}
        <div className="relative bg-[#1C1C1E] rounded-[52px] p-[11px] shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
          {/* Side buttons left */}
          <div className="absolute -left-[3px] top-[108px] w-[3px] h-7 bg-[#2C2C2E] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[152px] w-[3px] h-14 bg-[#2C2C2E] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[214px] w-[3px] h-14 bg-[#2C2C2E] rounded-l-sm" />
          {/* Side button right */}
          <div className="absolute -right-[3px] top-[152px] w-[3px] h-20 bg-[#2C2C2E] rounded-r-sm" />

          {/* Screen */}
          <div className="bg-[#F7F7F5] rounded-[43px] overflow-hidden" style={{ height: 780 }}>
            {/* Status bar */}
            <div className="relative flex items-center justify-between px-8 pt-[14px] pb-0 shrink-0">
              <span className="text-[13px] font-semibold text-[#1A1A1A] z-10">9:41</span>
              {/* Dynamic island */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[10px] w-[120px] h-[34px] bg-[#1C1C1E] rounded-full z-20" />
              <div className="flex items-center gap-[5px] z-10">
                <Icon name="Signal" size={13} className="text-[#1A1A1A]" />
                <Icon name="Wifi" size={13} className="text-[#1A1A1A]" />
                <Icon name="Battery" size={14} className="text-[#1A1A1A]" />
              </div>
            </div>

            {/* Scrollable content */}
            <div
              className="overflow-y-auto px-4 pt-3 pb-8"
              style={{ height: 780 - 48, scrollbarWidth: "none" }}
            >
              {/* Header nav */}
              <div className="flex items-center justify-between mb-8">
                <button className="flex items-center gap-1.5 text-sm text-[#8B8B8B] hover:text-[#1A1A1A] transition-colors">
                  <Icon name="ChevronLeft" size={16} />
                  Назад
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#EDEDEB] transition-colors">
                  <Icon name="MoreHorizontal" size={18} className="text-[#8B8B8B]" />
                </button>
              </div>

              {/* Hero */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-4">
                  <img
                    src={AVATAR_URL}
                    alt="Алексей Соколов"
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-md"
                  />
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-white" />
                </div>
                <h1 className="text-[20px] font-semibold text-[#1A1A1A] tracking-tight mb-1">
                  Алексей Соколов
                </h1>
                <p className="text-[14px] text-[#5A5A5A] mb-2">
                  Старший менеджер продукта
                </p>
                <div className="flex items-center gap-1.5 text-[12px] text-[#ABABAB]">
                  <Icon name="MapPin" size={12} />
                  Москва, Россия
                </div>
              </div>

              {/* Кнопки */}
              <div className="flex gap-2.5 mb-8">
                <button className="flex-1 flex items-center justify-center gap-2 h-10 bg-[#1A1A1A] text-white text-[13px] font-medium rounded-xl hover:bg-[#333] transition-colors">
                  <Icon name="MessageCircle" size={15} />
                  Написать
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 h-10 bg-white text-[#1A1A1A] text-[13px] font-medium rounded-xl border border-[#E5E5E2] hover:bg-[#F0F0EE] transition-colors">
                  <Icon name="UserPlus" size={15} />
                  Добавить в чат
                </button>
              </div>

              {/* Место работы */}
              <section className="mb-6">
                <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-2.5">
                  Место работы
                </h2>
                <div className="bg-white rounded-2xl border border-[#EDEDEB]">
                  <div className="flex items-center gap-3 px-3.5 py-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF9DB] flex items-center justify-center text-base">
                      🏢
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-[#1A1A1A]">Яндекс</p>
                      <p className="text-[12px] text-[#8B8B8B]">Старший менеджер продукта</p>
                    </div>
                    <span className="text-[11px] text-[#ABABAB] shrink-0">2021 — сейчас</span>
                  </div>
                </div>
              </section>

              {/* Опыт */}
              <section className="mb-6">
                <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-2.5">
                  Опыт работы
                </h2>
                <div className="bg-white rounded-2xl border border-[#EDEDEB] divide-y divide-[#F2F2F0]">
                  {experience.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-3.5 py-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F5F5F3] flex items-center justify-center text-sm">
                        {item.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium text-[#1A1A1A] leading-tight">{item.company}</p>
                        <p className="text-[11px] text-[#8B8B8B]">{item.role}</p>
                      </div>
                      <span className="text-[10px] text-[#C0C0BE] shrink-0">{item.period}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Контакты */}
              <section className="mb-6">
                <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-2.5">
                  Контакты
                </h2>
                <div className="bg-white rounded-2xl border border-[#EDEDEB] divide-y divide-[#F2F2F0]">
                  {contacts.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 px-3.5 py-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F5F5F3] flex items-center justify-center">
                        <Icon name={c.icon} size={14} className="text-[#5A5A5A]" />
                      </div>
                      <span className="text-[13px] text-[#1A1A1A]">{c.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Общие чаты */}
              <section>
                <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-2.5">
                  Общие чаты
                </h2>
                <div className="bg-white rounded-2xl border border-[#EDEDEB] divide-y divide-[#F2F2F0]">
                  {chats.map((chat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-3.5 py-3 hover:bg-[#FAFAF8] transition-colors cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#F5F5F3] flex items-center justify-center text-sm">
                        {chat.emoji}
                      </div>
                      <div className="flex-1">
                        <p className="text-[13px] font-medium text-[#1A1A1A] leading-tight">{chat.name}</p>
                        <p className="text-[11px] text-[#ABABAB]">{chat.members}</p>
                      </div>
                      <Icon name="ChevronRight" size={14} className="text-[#CCCCCA]" />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
