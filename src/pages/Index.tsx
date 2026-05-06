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

const projects = [
  { name: "Запуск B2B-платформы", desc: "15 000+ компаний, рост ARR x3" },
  { name: "Редизайн онбординга", desc: "Конверсия +42% за квартал" },
  { name: "Внутренний мессенджер", desc: "50 000 пользователей, 0→1" },
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
    <div className="min-h-screen bg-[#F7F7F5] font-golos">
      <div className="max-w-[480px] mx-auto px-4 py-10 pb-16">

        {/* Header nav */}
        <div className="flex items-center justify-between mb-10">
          <button className="flex items-center gap-1.5 text-sm text-[#8B8B8B] hover:text-[#1A1A1A] transition-colors">
            <Icon name="ChevronLeft" size={16} />
            Назад
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#EDEDEB] transition-colors">
            <Icon name="MoreHorizontal" size={18} className="text-[#8B8B8B]" />
          </button>
        </div>

        {/* Hero — аватар и имя */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="relative mb-5">
            <img
              src={AVATAR_URL}
              alt="Алексей Соколов"
              className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md"
            />
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full ring-2 ring-white" />
          </div>
          <h1 className="text-[22px] font-semibold text-[#1A1A1A] tracking-tight mb-1">
            Алексей Соколов
          </h1>
          <p className="text-[15px] text-[#5A5A5A] mb-3">
            Старший менеджер продукта
          </p>
          <div className="flex items-center gap-1.5 text-[13px] text-[#8B8B8B]">
            <Icon name="MapPin" size={13} />
            Москва, Россия
          </div>
        </div>

        {/* Кнопки действий */}
        <div className="flex gap-3 mb-10">
          <button className="flex-1 flex items-center justify-center gap-2 h-11 bg-[#1A1A1A] text-white text-[14px] font-medium rounded-xl hover:bg-[#333] transition-colors">
            <Icon name="MessageCircle" size={16} />
            Написать
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 h-11 bg-white text-[#1A1A1A] text-[14px] font-medium rounded-xl border border-[#E5E5E2] hover:bg-[#F0F0EE] transition-colors">
            <Icon name="UserPlus" size={16} />
            Добавить в чат
          </button>
        </div>

        {/* Место работы */}
        <section className="mb-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-3">
            Место работы
          </h2>
          <div className="bg-white rounded-2xl border border-[#EDEDEB] overflow-hidden">
            <div className="flex items-center gap-3.5 px-4 py-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF9DB] flex items-center justify-center text-lg">
                🏢
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-[#1A1A1A]">Яндекс</p>
                <p className="text-[13px] text-[#8B8B8B]">Старший менеджер продукта</p>
              </div>
              <span className="text-[12px] text-[#ABABAB] shrink-0">2021 — сейчас</span>
            </div>
          </div>
        </section>

        {/* Опыт */}
        <section className="mb-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-3">
            Опыт работы
          </h2>
          <div className="bg-white rounded-2xl border border-[#EDEDEB] overflow-hidden divide-y divide-[#F2F2F0]">
            {experience.map((item, i) => (
              <div key={i} className="flex items-center gap-3.5 px-4 py-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F5F5F3] flex items-center justify-center text-base">
                  {item.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-medium text-[#1A1A1A] leading-tight">{item.company}</p>
                  <p className="text-[12px] text-[#8B8B8B]">{item.role}</p>
                </div>
                <span className="text-[11px] text-[#C0C0BE] shrink-0">{item.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Проекты */}
        <section className="mb-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-3">
            Ключевые проекты
          </h2>
          <div className="flex flex-col gap-2.5">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#EDEDEB] px-4 py-3.5 flex items-start gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] mt-[7px] shrink-0" />
                <div>
                  <p className="text-[14px] font-medium text-[#1A1A1A] leading-tight">{p.name}</p>
                  <p className="text-[12px] text-[#8B8B8B] mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Контакты */}
        <section className="mb-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-3">
            Контакты
          </h2>
          <div className="bg-white rounded-2xl border border-[#EDEDEB] overflow-hidden divide-y divide-[#F2F2F0]">
            {contacts.map((c, i) => (
              <div key={i} className="flex items-center gap-3.5 px-4 py-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#F5F5F3] flex items-center justify-center">
                  <Icon name={c.icon} size={15} className="text-[#5A5A5A]" />
                </div>
                <span className="text-[14px] text-[#1A1A1A]">{c.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Общие чаты */}
        <section>
          <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-3">
            Общие чаты
          </h2>
          <div className="bg-white rounded-2xl border border-[#EDEDEB] overflow-hidden divide-y divide-[#F2F2F0]">
            {chats.map((chat, i) => (
              <div
                key={i}
                className="flex items-center gap-3.5 px-4 py-3.5 hover:bg-[#FAFAF8] transition-colors cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F5F5F3] flex items-center justify-center text-base">
                  {chat.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-[#1A1A1A] leading-tight">{chat.name}</p>
                  <p className="text-[12px] text-[#ABABAB]">{chat.members}</p>
                </div>
                <Icon name="ChevronRight" size={15} className="text-[#CCCCCA]" />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}