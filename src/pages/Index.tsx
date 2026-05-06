import { useState } from "react";
import Icon from "@/components/ui/icon";
import PhoneShell from "@/components/PhoneShell";
import MessengerMobile from "@/components/MessengerMobile";

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

const companies = [
  { name: "Яндекс", domain: "yandex.ru", emoji: "🟡" },
  { name: "Сбер", domain: "sber.ru", emoji: "🟢" },
  { name: "VK", domain: "vk.com", emoji: "🔵" },
  { name: "Авито", domain: "avito.ru", emoji: "🟠" },
  { name: "Тинькофф", domain: "tinkoff.ru", emoji: "⚫" },
  { name: "Ozon", domain: "ozon.ru", emoji: "🔵" },
];

const statuses = [
  { emoji: "🟢", label: "Доступен" },
  { emoji: "🌴", label: "В отпуске" },
  { emoji: "🤙", label: "На встрече" },
  { emoji: "🔕", label: "Не беспокоить" },
  { emoji: "🏠", label: "Работаю дома" },
];

const roles = ["Дизайнер", "Разработчик", "Маркетолог", "CEO", "Аналитик"];

function ProfileScreen() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <button className="flex items-center gap-1.5 text-sm text-[#8B8B8B] hover:text-[#1A1A1A] transition-colors">
          <Icon name="ChevronLeft" size={16} />
          Назад
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#EDEDEB] transition-colors">
          <Icon name="MoreHorizontal" size={18} className="text-[#8B8B8B]" />
        </button>
      </div>
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative mb-4">
          <img src={AVATAR_URL} alt="Алексей Соколов" className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-md" />
          <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-white" />
        </div>
        <h1 className="text-[20px] font-semibold text-[#1A1A1A] tracking-tight mb-1">Алексей Соколов</h1>
        <p className="text-[14px] text-[#5A5A5A] mb-3">Старший менеджер продукта</p>
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
      <div className="flex gap-2.5 mb-8">
        <button className="flex-1 flex items-center justify-center gap-2 h-10 bg-[#1A1A1A] text-white text-[13px] font-medium rounded-xl hover:bg-[#333] transition-colors">
          <Icon name="MessageCircle" size={15} />Написать
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 h-10 bg-white text-[#1A1A1A] text-[13px] font-medium rounded-xl border border-[#E5E5E2] hover:bg-[#F0F0EE] transition-colors">
          <Icon name="UserPlus" size={15} />Добавить в чат
        </button>
      </div>
      <section className="mb-6">
        <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-2.5">Место работы</h2>
        <div className="bg-white rounded-2xl border border-[#EDEDEB]">
          <div className="flex items-center gap-3 px-3.5 py-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF9DB] flex items-center justify-center text-base">🏢</div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-[#1A1A1A]">Яндекс</p>
              <p className="text-[12px] text-[#8B8B8B]">Старший менеджер продукта</p>
            </div>
            <span className="text-[11px] text-[#ABABAB] shrink-0">2021 — сейчас</span>
          </div>
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-2.5">Контакты</h2>
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
      <section>
        <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-2.5">Общие чаты</h2>
        <div className="bg-white rounded-2xl border border-[#EDEDEB] divide-y divide-[#F2F2F0]">
          {chats.map((chat, i) => (
            <div key={i} className="flex items-center gap-3 px-3.5 py-3 hover:bg-[#FAFAF8] transition-colors cursor-pointer">
              <div className="w-8 h-8 rounded-xl bg-[#F5F5F3] flex items-center justify-center text-sm">{chat.emoji}</div>
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

function WebOnboarding() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
  const [companySearch, setCompanySearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(0);

  const inputCls = "w-full bg-white border border-[#E5E5E2] rounded-xl px-3.5 py-2.5 text-[14px] text-[#1A1A1A] placeholder:text-[#CCCCCA] outline-none focus:border-[#1A1A1A] transition-colors";
  const labelCls = "text-[11px] font-semibold text-[#8B8B8B] uppercase tracking-wider mb-1.5 block";

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-[#EDEDEB] w-[560px] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-[#F2F2F0]">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-7 h-7 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
            <Icon name="UserRound" size={14} className="text-white" />
          </div>
          <h1 className="text-[18px] font-semibold text-[#1A1A1A]">Заполни профиль</h1>
        </div>
        <p className="text-[13px] text-[#ABABAB] pl-10">Коллеги увидят эту информацию в мессенджере</p>
      </div>

      <div className="px-8 py-6 flex flex-col gap-6 flex-1">

        {/* Фото + имя */}
        <div className="flex items-start gap-5">
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="relative">
              <img src={AVATAR_URL} alt="avatar" className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#EDEDEB]" />
              <button className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-[#1A1A1A] rounded-lg flex items-center justify-center shadow">
                <Icon name="Camera" size={11} className="text-white" />
              </button>
            </div>
            <span className="text-[10px] text-[#ABABAB]">Фото</span>
          </div>
          <div className="flex-1 flex flex-col gap-2.5">
            <div className="flex gap-2.5">
              <div className="flex-1">
                <label className={labelCls}>Имя</label>
                <input className={inputCls} placeholder="Алексей" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="flex-1">
                <label className={labelCls}>Фамилия</label>
                <input className={inputCls} placeholder="Соколов" value={surname} onChange={e => setSurname(e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Должность */}
        <div>
          <label className={labelCls}>Должность</label>
          <input className={inputCls} placeholder="Например: Менеджер продукта" value={role} onChange={e => setRole(e.target.value)} />
          <div className="mt-2 flex flex-wrap gap-1.5">
            {roles.map(r => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`px-2.5 py-1 rounded-lg text-[12px] border transition-colors ${
                  role === r ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "bg-[#F7F7F5] text-[#5A5A5A] border-[#EDEDEB] hover:border-[#ABABAB]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Компания */}
        <div>
          <label className={labelCls}>Компания</label>
          {selectedCompany === null ? (
            <div className="relative">
              <Icon name="Search" size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#ABABAB]" />
              <input
                className="w-full bg-white border border-[#E5E5E2] rounded-xl pl-9 pr-3.5 py-2.5 text-[14px] text-[#1A1A1A] placeholder:text-[#CCCCCA] outline-none focus:border-[#1A1A1A] transition-colors"
                placeholder="Поиск компании..."
                value={companySearch}
                onChange={e => setCompanySearch(e.target.value)}
              />
              {companySearch.length > 0 && (
                <div className="mt-1 bg-white border border-[#E5E5E2] rounded-xl overflow-hidden shadow-sm">
                  {companies
                    .filter(c => c.name.toLowerCase().includes(companySearch.toLowerCase()))
                    .map((c, _) => {
                      const idx = companies.indexOf(c);
                      return (
                        <button
                          key={idx}
                          onClick={() => { setSelectedCompany(idx); setCompanySearch(""); }}
                          className="w-full flex items-center gap-3 px-3.5 py-2.5 hover:bg-[#F7F7F5] transition-colors text-left border-b border-[#F2F2F0] last:border-0"
                        >
                          <span className="text-base leading-none">{c.emoji}</span>
                          <div>
                            <p className="text-[13px] font-medium text-[#1A1A1A]">{c.name}</p>
                            <p className="text-[11px] text-[#ABABAB]">{c.domain}</p>
                          </div>
                        </button>
                      );
                    })}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3 px-3.5 py-2.5 bg-[#F7F7F5] border border-[#1A1A1A] rounded-xl">
              <span className="text-base leading-none">{companies[selectedCompany].emoji}</span>
              <div className="flex-1">
                <p className="text-[13px] font-medium text-[#1A1A1A]">{companies[selectedCompany].name}</p>
                <p className="text-[11px] text-[#ABABAB]">{companies[selectedCompany].domain}</p>
              </div>
              <button onClick={() => setSelectedCompany(null)} className="text-[#ABABAB] hover:text-[#1A1A1A] transition-colors">
                <Icon name="X" size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Статус */}
        <div>
          <label className={labelCls}>Статус</label>
          <div className="grid grid-cols-5 gap-2">
            {statuses.map((s, i) => (
              <button
                key={i}
                onClick={() => setSelectedStatus(i)}
                className={`flex flex-col items-center gap-1.5 py-2.5 px-1 rounded-xl border text-center transition-all ${
                  selectedStatus === i
                    ? "border-[#1A1A1A] bg-[#F7F7F5] shadow-sm"
                    : "border-[#E5E5E2] bg-white hover:border-[#ABABAB]"
                }`}
              >
                <span className="text-xl leading-none">{s.emoji}</span>
                <span className={`text-[10px] leading-tight ${selectedStatus === i ? "text-[#1A1A1A] font-medium" : "text-[#8B8B8B]"}`}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 py-5 border-t border-[#F2F2F0] flex items-center justify-between gap-4">
        <p className="text-[12px] text-[#ABABAB]">Всё можно изменить позже в настройках</p>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] text-white text-[14px] font-medium rounded-xl hover:bg-[#333] transition-colors shrink-0">
          Готово
          <Icon name="ArrowRight" size={15} />
        </button>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-[#DDDBD4] font-golos flex items-center justify-center py-12 px-8">
      <div className="flex items-center gap-16">

        {/* Мессенджер — телефон */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[12px] font-medium text-[#8B8B8B] tracking-wide uppercase">Мессенджер</span>
          <PhoneShell>
            <MessengerMobile />
          </PhoneShell>
        </div>

        {/* Стрелка */}
        <div className="flex items-center gap-2 mt-6">
          <div className="w-10 h-px bg-[#ABABAB]" />
          <Icon name="ArrowRight" size={18} className="text-[#ABABAB]" />
        </div>

        {/* Регистрация — форма */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[12px] font-medium text-[#8B8B8B] tracking-wide uppercase">Регистрация</span>
          <WebOnboarding />
        </div>

        {/* Стрелка */}
        <div className="flex items-center gap-2 mt-6">
          <div className="w-10 h-px bg-[#ABABAB]" />
          <Icon name="ArrowRight" size={18} className="text-[#ABABAB]" />
        </div>

        {/* Профиль — телефон */}
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