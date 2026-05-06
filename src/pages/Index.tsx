import Icon from "@/components/ui/icon";
import PhoneShell from "@/components/PhoneShell";
import OnboardingScreen from "@/components/OnboardingScreen";

const AVATAR_URL =
  "https://cdn.poehali.dev/projects/26dd1934-cbc7-4b73-84ae-c57f8c4bcf36/files/ac5ca109-7ac6-4ba9-b58c-d31d2e4c4eb8.jpg";

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

function ProfileScreen() {
  return (
    <>
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
        <p className="text-[14px] text-[#5A5A5A] mb-3">
          Старший менеджер продукта
        </p>
        <div className="flex items-center gap-2 mb-2">
          <span className="flex items-center gap-1.5 bg-[#FFF3CD] text-[#9A6C00] text-[12px] font-medium px-3 py-1 rounded-full">
            🌴 В отпуске до 20 мая
          </span>
        </div>
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
    </>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-[#DDDBD4] font-golos flex items-center justify-center py-12 px-8">
      <div className="flex items-start gap-10">

        {/* Левый телефон — онбординг */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[12px] font-medium text-[#8B8B8B] tracking-wide uppercase">Регистрация</span>
          <PhoneShell>
            <OnboardingScreen />
          </PhoneShell>
        </div>

        {/* Стрелка */}
        <div className="flex items-center self-center mt-8">
          <div className="flex items-center gap-2 text-[#ABABAB]">
            <div className="w-12 h-px bg-[#ABABAB]" />
            <Icon name="ArrowRight" size={18} className="text-[#ABABAB]" />
          </div>
        </div>

        {/* Правый телефон — готовый профиль */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[12px] font-medium text-[#8B8B8B] tracking-wide uppercase">Профиль</span>
          <PhoneShell>
            <ProfileScreen />
          </PhoneShell>
        </div>

      </div>
    </div>
  );
}
