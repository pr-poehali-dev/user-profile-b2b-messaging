import { useState } from "react";
import Icon from "@/components/ui/icon";

const AVATAR_URL =
  "https://cdn.poehali.dev/projects/26dd1934-cbc7-4b73-84ae-c57f8c4bcf36/files/ac5ca109-7ac6-4ba9-b58c-d31d2e4c4eb8.jpg";

const TOTAL_STEPS = 5;

const statuses = [
  { emoji: "🟢", label: "Доступен" },
  { emoji: "🌴", label: "В отпуске" },
  { emoji: "🤙", label: "На встрече" },
  { emoji: "🔕", label: "Не беспокоить" },
  { emoji: "🏠", label: "Работаю дома" },
];

export default function OnboardingScreen() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(0);

  const progress = (step / TOTAL_STEPS) * 100;

  const canNext = () => {
    if (step === 1) return name.trim().length > 0;
    if (step === 2) return role.trim().length > 0;
    if (step === 3) return company.trim().length > 0;
    return true;
  };

  return (
    <div className="flex flex-col h-full">
      {/* Progress */}
      <div className="pt-4 pb-5 px-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] text-[#ABABAB]">Шаг {step} из {TOTAL_STEPS}</span>
          {step > 1 && (
            <button
              onClick={() => setStep(s => s - 1)}
              className="text-[11px] text-[#8B8B8B] hover:text-[#1A1A1A] transition-colors flex items-center gap-0.5"
            >
              <Icon name="ChevronLeft" size={13} />
              Назад
            </button>
          )}
        </div>
        <div className="h-1 bg-[#EDEDEB] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1A1A1A] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 flex flex-col">

        {/* Step 1 — Имя */}
        {step === 1 && (
          <div className="flex flex-col flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-1">Знакомство</p>
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] leading-tight mb-1">Как тебя зовут?</h2>
            <p className="text-[13px] text-[#ABABAB] mb-8">Коллеги увидят это имя в мессенджере</p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full bg-white border border-[#E5E5E2] rounded-2xl px-4 py-3.5 text-[15px] text-[#1A1A1A] placeholder:text-[#CCCCCA] outline-none focus:border-[#1A1A1A] transition-colors"
                placeholder="Имя"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                className="w-full bg-white border border-[#E5E5E2] rounded-2xl px-4 py-3.5 text-[15px] text-[#1A1A1A] placeholder:text-[#CCCCCA] outline-none focus:border-[#1A1A1A] transition-colors"
                placeholder="Фамилия"
              />
            </div>
          </div>
        )}

        {/* Step 2 — Должность */}
        {step === 2 && (
          <div className="flex flex-col flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-1">Работа</p>
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] leading-tight mb-1">Кем ты работаешь?</h2>
            <p className="text-[13px] text-[#ABABAB] mb-8">Укажи свою должность</p>
            <input
              className="w-full bg-white border border-[#E5E5E2] rounded-2xl px-4 py-3.5 text-[15px] text-[#1A1A1A] placeholder:text-[#CCCCCA] outline-none focus:border-[#1A1A1A] transition-colors"
              placeholder="Например: Менеджер продукта"
              value={role}
              onChange={e => setRole(e.target.value)}
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {["Дизайнер", "Разработчик", "Маркетолог", "CEO", "Аналитик"].map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-3 py-1.5 rounded-xl text-[13px] border transition-colors ${
                    role === r
                      ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                      : "bg-white text-[#5A5A5A] border-[#E5E5E2] hover:border-[#ABABAB]"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 — Компания */}
        {step === 3 && (
          <div className="flex flex-col flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-1">Место работы</p>
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] leading-tight mb-1">Где работаешь?</h2>
            <p className="text-[13px] text-[#ABABAB] mb-8">Компания и город</p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full bg-white border border-[#E5E5E2] rounded-2xl px-4 py-3.5 text-[15px] text-[#1A1A1A] placeholder:text-[#CCCCCA] outline-none focus:border-[#1A1A1A] transition-colors"
                placeholder="Название компании"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
              <input
                className="w-full bg-white border border-[#E5E5E2] rounded-2xl px-4 py-3.5 text-[15px] text-[#1A1A1A] placeholder:text-[#CCCCCA] outline-none focus:border-[#1A1A1A] transition-colors"
                placeholder="Город"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Step 4 — Фото */}
        {step === 4 && (
          <div className="flex flex-col flex-1 items-center">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-1 self-start">Фото</p>
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] leading-tight mb-1 self-start">Добавь фото</h2>
            <p className="text-[13px] text-[#ABABAB] mb-8 self-start">Коллеги сразу узнают тебя</p>
            <div className="relative mb-6">
              <img
                src={AVATAR_URL}
                alt="avatar"
                className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-lg"
              />
              <button className="absolute bottom-0 right-0 w-9 h-9 bg-[#1A1A1A] rounded-full flex items-center justify-center shadow-md">
                <Icon name="Camera" size={16} className="text-white" />
              </button>
            </div>
            <button className="w-full bg-white border border-[#E5E5E2] rounded-2xl px-4 py-3.5 text-[14px] text-[#5A5A5A] flex items-center justify-center gap-2 hover:bg-[#F5F5F3] transition-colors">
              <Icon name="Upload" size={16} className="text-[#8B8B8B]" />
              Загрузить из галереи
            </button>
          </div>
        )}

        {/* Step 5 — Статус */}
        {step === 5 && (
          <div className="flex flex-col flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ABABAB] mb-1">Финал</p>
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] leading-tight mb-1">Твой статус</h2>
            <p className="text-[13px] text-[#ABABAB] mb-6">Коллеги увидят, когда ты доступен</p>
            <div className="flex flex-col gap-2.5">
              {statuses.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedStatus(i)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-left transition-all ${
                    selectedStatus === i
                      ? "border-[#1A1A1A] bg-white shadow-sm"
                      : "border-[#E5E5E2] bg-white hover:border-[#ABABAB]"
                  }`}
                >
                  <span className="text-xl">{s.emoji}</span>
                  <span className={`text-[14px] font-medium ${selectedStatus === i ? "text-[#1A1A1A]" : "text-[#5A5A5A]"}`}>
                    {s.label}
                  </span>
                  {selectedStatus === i && (
                    <div className="ml-auto w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                      <Icon name="Check" size={11} className="text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom button */}
      <div className="pt-4 pb-2">
        {step < TOTAL_STEPS ? (
          <button
            onClick={() => { if (canNext()) setStep(s => s + 1); }}
            className={`w-full h-12 rounded-2xl text-[15px] font-medium transition-all ${
              canNext()
                ? "bg-[#1A1A1A] text-white hover:bg-[#333]"
                : "bg-[#EDEDEB] text-[#ABABAB] cursor-not-allowed"
            }`}
          >
            Далее
          </button>
        ) : (
          <button
            onClick={() => setStep(1)}
            className="w-full h-12 rounded-2xl bg-[#1A1A1A] text-white text-[15px] font-medium hover:bg-[#333] transition-colors"
          >
            Готово — открыть профиль
          </button>
        )}
      </div>
    </div>
  );
}
