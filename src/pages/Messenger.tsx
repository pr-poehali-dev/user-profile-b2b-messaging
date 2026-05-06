import { useState } from "react";
import Icon from "@/components/ui/icon";

const AVATAR_URL =
  "https://cdn.poehali.dev/projects/26dd1934-cbc7-4b73-84ae-c57f8c4bcf36/files/ac5ca109-7ac6-4ba9-b58c-d31d2e4c4eb8.jpg";

type ChatType = "colleague" | "external" | "group" | "client" | "vendor";

interface Chat {
  id: number;
  name: string;
  avatar?: string;
  initials?: string;
  color?: string;
  lastMessage: string;
  time: string;
  unread?: number;
  type: ChatType;
  company?: string;
  companyEmoji?: string;
  muted?: boolean;
  pinned?: boolean;
  role?: string;
}

const ALL_CHATS: Chat[] = [
  // Закреплённые
  {
    id: 1,
    name: "Дизайн & продукт",
    initials: "ДП",
    color: "#E8F0FF",
    lastMessage: "Маша: Обновила макеты в Figma, смотрите",
    time: "10:42",
    unread: 3,
    type: "group",
    pinned: true,
  },
  {
    id: 2,
    name: "Стратегия 2026",
    initials: "26",
    color: "#F0F9EB",
    lastMessage: "Вы: Ок, встречаемся в среду",
    time: "09:15",
    type: "group",
    pinned: true,
  },

  // Коллеги
  {
    id: 3,
    name: "Кирилл Новиков",
    initials: "КН",
    color: "#FFF0F0",
    lastMessage: "Кинул тебе PR на ревью",
    time: "Вчера",
    unread: 1,
    type: "colleague",
    company: "Яндекс",
    companyEmoji: "🟡",
    role: "Senior Dev",
  },
  {
    id: 4,
    name: "Маша Орлова",
    initials: "МО",
    color: "#FFF8E6",
    lastMessage: "Спасибо, буду на онлайне!",
    time: "Вчера",
    type: "colleague",
    company: "Яндекс",
    companyEmoji: "🟡",
    role: "UX Designer",
  },
  {
    id: 5,
    name: "Дима Фролов",
    initials: "ДФ",
    color: "#F0F0FF",
    lastMessage: "Вы: Встреча в 14:00, не забудь",
    time: "Пн",
    type: "colleague",
    company: "Яндекс",
    companyEmoji: "🟡",
    role: "Аналитик",
    muted: true,
  },

  // Внешние
  {
    id: 6,
    name: "Антон Белов",
    initials: "АБ",
    color: "#E8F5F0",
    lastMessage: "Скинул счёт на почту",
    time: "Пн",
    unread: 2,
    type: "vendor",
    company: "Студия «Форма»",
    companyEmoji: "🎨",
    role: "Дизайнер",
  },
  {
    id: 7,
    name: "Елена Кравцова",
    initials: "ЕК",
    color: "#FFF0FA",
    lastMessage: "Договор подписан, жду оплату",
    time: "Вс",
    type: "vendor",
    company: "LegalPro",
    companyEmoji: "⚖️",
    role: "Юрист",
  },
  {
    id: 8,
    name: "Максим Горин",
    initials: "МГ",
    color: "#F5F0FF",
    lastMessage: "Вы: Покажем презентацию во вторник",
    time: "Вс",
    type: "client",
    company: "Сбер",
    companyEmoji: "🟢",
    role: "Заказчик",
  },
  {
    id: 9,
    name: "Ольга Трофимова",
    initials: "ОТ",
    color: "#FFF5EE",
    lastMessage: "Когда будет демо?",
    time: "Пт",
    unread: 4,
    type: "client",
    company: "Ozon",
    companyEmoji: "🔵",
    role: "Заказчик",
  },
  {
    id: 10,
    name: "Игорь Власов",
    initials: "ИВ",
    color: "#EEFAF5",
    lastMessage: "Привет! Есть минута?",
    time: "Пт",
    type: "external",
    company: "VK",
    companyEmoji: "🔵",
    role: "Партнёр",
  },

  // Групповые
  {
    id: 11,
    name: "Tech leads",
    initials: "TL",
    color: "#EEF0F5",
    lastMessage: "Паша: В пятницу ретро, не забудьте",
    time: "Пт",
    type: "group",
    muted: true,
  },
  {
    id: 12,
    name: "Проект «Атлас»",
    initials: "АТ",
    color: "#FFF3E0",
    lastMessage: "Вы: Финальная версия готова",
    time: "Чт",
    type: "group",
  },
];

const FOLDERS = [
  { id: "all", label: "Все", icon: "MessageSquare" },
  { id: "colleagues", label: "Коллеги", icon: "Users" },
  { id: "clients", label: "Заказчики", icon: "Briefcase" },
  { id: "vendors", label: "Подрядчики", icon: "Wrench" },
  { id: "groups", label: "Группы", icon: "LayoutGrid" },
];

const TYPE_BADGE: Record<ChatType, { label: string; bg: string; text: string }> = {
  colleague: { label: "Коллега", bg: "bg-blue-50", text: "text-blue-600" },
  client: { label: "Заказчик", bg: "bg-amber-50", text: "text-amber-600" },
  vendor: { label: "Подрядчик", bg: "bg-purple-50", text: "text-purple-600" },
  external: { label: "Партнёр", bg: "bg-green-50", text: "text-green-600" },
  group: { label: "Группа", bg: "bg-gray-100", text: "text-gray-500" },
};

const MESSAGES = [
  { id: 1, from: "them", text: "Привет! Есть время обсудить дизайн онбординга?", time: "10:30" },
  { id: 2, from: "me", text: "Да, через 10 минут освобожусь", time: "10:31" },
  { id: 3, from: "them", text: "Ок, жду. Кстати, макеты уже в Figma", time: "10:32" },
  { id: 4, from: "them", text: "Обновила иконки и цвета статусов", time: "10:32" },
  { id: 5, from: "me", text: "Отлично, посмотрю сейчас", time: "10:38" },
  { id: 6, from: "them", text: "Обновила макеты в Figma, смотрите 👀", time: "10:42" },
];

function Avatar({ chat, size = "md" }: { chat: Chat; size?: "sm" | "md" | "lg" }) {
  const sz = size === "sm" ? "w-8 h-8 text-[11px]" : size === "lg" ? "w-11 h-11 text-[15px]" : "w-10 h-10 text-[13px]";
  return (
    <div
      className={`${sz} rounded-full flex items-center justify-center font-semibold text-[#5A5A5A] shrink-0 relative`}
      style={{ backgroundColor: chat.color }}
    >
      {chat.initials}
      {chat.companyEmoji && (
        <span className="absolute -bottom-0.5 -right-0.5 text-[10px] leading-none">{chat.companyEmoji}</span>
      )}
    </div>
  );
}

export default function Messenger() {
  const [activeFolder, setActiveFolder] = useState("all");
  const [activeChat, setActiveChat] = useState<Chat>(ALL_CHATS[0]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const filtered = ALL_CHATS.filter(c => {
    const matchFolder =
      activeFolder === "all" ||
      (activeFolder === "colleagues" && c.type === "colleague") ||
      (activeFolder === "clients" && c.type === "client") ||
      (activeFolder === "vendors" && c.type === "vendor") ||
      (activeFolder === "groups" && c.type === "group");
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchFolder && matchSearch;
  });

  const pinned = filtered.filter(c => c.pinned);
  const rest = filtered.filter(c => !c.pinned);

  const badge = TYPE_BADGE[activeChat.type];

  return (
    <div className="h-screen bg-[#F2F2F0] flex overflow-hidden font-golos">

      {/* Sidebar nav */}
      <div className="w-16 bg-[#1A1A1A] flex flex-col items-center py-5 gap-1 shrink-0">
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center mb-4">
          <span className="text-white text-[14px] font-bold">М</span>
        </div>
        {[
          { icon: "MessageSquare", active: true },
          { icon: "Users", active: false },
          { icon: "Phone", active: false },
          { icon: "Bell", active: false },
        ].map((item, i) => (
          <button
            key={i}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              item.active ? "bg-white/15" : "hover:bg-white/8"
            }`}
          >
            <Icon name={item.icon} size={18} className={item.active ? "text-white" : "text-white/40"} />
          </button>
        ))}
        <div className="mt-auto">
          <div className="relative">
            <img src={AVATAR_URL} alt="me" className="w-9 h-9 rounded-full object-cover ring-2 ring-white/20" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#1A1A1A]" />
          </div>
        </div>
      </div>

      {/* Chat list panel */}
      <div className="w-72 bg-white border-r border-[#EDEDEB] flex flex-col shrink-0">
        {/* Header */}
        <div className="px-4 pt-5 pb-3">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-[17px] font-semibold text-[#1A1A1A]">Сообщения</h1>
            <button className="w-7 h-7 rounded-lg bg-[#F5F5F3] flex items-center justify-center hover:bg-[#EDEDEB] transition-colors">
              <Icon name="Plus" size={15} className="text-[#5A5A5A]" />
            </button>
          </div>
          {/* Search */}
          <div className="relative">
            <Icon name="Search" size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ABABAB]" />
            <input
              className="w-full bg-[#F5F5F3] rounded-xl pl-8 pr-3 py-2 text-[13px] text-[#1A1A1A] placeholder:text-[#ABABAB] outline-none"
              placeholder="Поиск..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Folders */}
        <div className="flex gap-1 px-3 pb-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {FOLDERS.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFolder(f.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12px] font-medium whitespace-nowrap transition-all shrink-0 ${
                activeFolder === f.id
                  ? "bg-[#1A1A1A] text-white"
                  : "text-[#8B8B8B] hover:bg-[#F5F5F3]"
              }`}
            >
              <Icon name={f.icon} size={12} />
              {f.label}
            </button>
          ))}
        </div>

        {/* Chat list */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          {pinned.length > 0 && (
            <>
              <div className="px-4 py-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#CCCCCA]">Закреплённые</span>
              </div>
              {pinned.map(chat => (
                <ChatRow key={chat.id} chat={chat} active={activeChat.id === chat.id} onClick={() => setActiveChat(chat)} />
              ))}
              <div className="px-4 py-1.5 mt-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#CCCCCA]">Остальные</span>
              </div>
            </>
          )}
          {rest.map(chat => (
            <ChatRow key={chat.id} chat={chat} active={activeChat.id === chat.id} onClick={() => setActiveChat(chat)} />
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Chat header */}
        <div className="h-14 bg-white border-b border-[#EDEDEB] flex items-center px-5 gap-3 shrink-0">
          <Avatar chat={activeChat} size="sm" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-[#1A1A1A] truncate">{activeChat.name}</span>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${badge.bg} ${badge.text}`}>
                {badge.label}
              </span>
            </div>
            {activeChat.company && (
              <p className="text-[11px] text-[#ABABAB] truncate">{activeChat.companyEmoji} {activeChat.company} · {activeChat.role}</p>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded-lg hover:bg-[#F5F5F3] flex items-center justify-center transition-colors">
              <Icon name="Phone" size={16} className="text-[#8B8B8B]" />
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-[#F5F5F3] flex items-center justify-center transition-colors">
              <Icon name="Video" size={16} className="text-[#8B8B8B]" />
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-[#F5F5F3] flex items-center justify-center transition-colors">
              <Icon name="Info" size={16} className="text-[#8B8B8B]" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-3" style={{ scrollbarWidth: "none" }}>
          <div className="flex justify-center mb-2">
            <span className="text-[11px] text-[#ABABAB] bg-white px-3 py-1 rounded-full border border-[#EDEDEB]">Сегодня</span>
          </div>
          {MESSAGES.map(msg => (
            <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
              {msg.from === "them" && (
                <Avatar chat={activeChat} size="sm" />
              )}
              <div className={`max-w-[65%] px-3.5 py-2.5 rounded-2xl text-[14px] leading-relaxed ml-2 mr-2 ${
                msg.from === "me"
                  ? "bg-[#1A1A1A] text-white rounded-br-sm"
                  : "bg-white text-[#1A1A1A] rounded-bl-sm border border-[#EDEDEB]"
              }`}>
                {msg.text}
                <div className={`text-[10px] mt-1 ${msg.from === "me" ? "text-white/50 text-right" : "text-[#ABABAB]"}`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white border-t border-[#EDEDEB] px-5 py-3 flex items-center gap-3">
          <button className="w-8 h-8 rounded-lg hover:bg-[#F5F5F3] flex items-center justify-center transition-colors shrink-0">
            <Icon name="Paperclip" size={16} className="text-[#ABABAB]" />
          </button>
          <input
            className="flex-1 bg-[#F5F5F3] rounded-xl px-4 py-2.5 text-[14px] text-[#1A1A1A] placeholder:text-[#ABABAB] outline-none"
            placeholder="Написать сообщение..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button className="w-8 h-8 rounded-lg hover:bg-[#F5F5F3] flex items-center justify-center transition-colors shrink-0">
            <Icon name="Smile" size={16} className="text-[#ABABAB]" />
          </button>
          <button
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
              message.trim() ? "bg-[#1A1A1A] hover:bg-[#333]" : "bg-[#EDEDEB]"
            }`}
          >
            <Icon name="Send" size={15} className={message.trim() ? "text-white" : "text-[#ABABAB]"} />
          </button>
        </div>
      </div>

      {/* Right panel — profile info */}
      <div className="w-64 bg-white border-l border-[#EDEDEB] flex flex-col shrink-0">
        <div className="flex flex-col items-center pt-8 pb-5 px-5 border-b border-[#EDEDEB]">
          <Avatar chat={activeChat} size="lg" />
          <h2 className="text-[14px] font-semibold text-[#1A1A1A] mt-3 text-center">{activeChat.name}</h2>
          {activeChat.role && (
            <p className="text-[12px] text-[#8B8B8B] mt-0.5">{activeChat.role}</p>
          )}
          {activeChat.company && (
            <span className="mt-2 text-[11px] text-[#5A5A5A] bg-[#F5F5F3] px-2.5 py-1 rounded-lg">
              {activeChat.companyEmoji} {activeChat.company}
            </span>
          )}
          <span className={`mt-2 text-[11px] font-medium px-2.5 py-1 rounded-full ${badge.bg} ${badge.text}`}>
            {badge.label}
          </span>
        </div>
        <div className="px-4 py-4 flex flex-col gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#CCCCCA] mb-1">Действия</p>
          {[
            { icon: "UserRound", label: "Открыть профиль" },
            { icon: "BellOff", label: "Отключить уведомления" },
            { icon: "Pin", label: "Закрепить чат" },
            { icon: "Trash2", label: "Удалить чат" },
          ].map((a, i) => (
            <button
              key={i}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] hover:bg-[#F5F5F3] transition-colors text-left w-full ${
                a.label === "Удалить чат" ? "text-red-500" : "text-[#5A5A5A]"
              }`}
            >
              <Icon name={a.icon} size={15} className={a.label === "Удалить чат" ? "text-red-400" : "text-[#ABABAB]"} />
              {a.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatRow({ chat, active, onClick }: { chat: Chat; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 transition-colors text-left ${
        active ? "bg-[#F5F5F3]" : "hover:bg-[#FAFAF8]"
      }`}
    >
      <Avatar chat={chat} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <span className="text-[13px] font-medium text-[#1A1A1A] truncate">{chat.name}</span>
          <span className="text-[11px] text-[#ABABAB] shrink-0">{chat.time}</span>
        </div>
        <div className="flex items-center justify-between gap-1">
          <p className="text-[12px] text-[#8B8B8B] truncate flex items-center gap-1">
            {chat.muted && <Icon name="BellOff" size={11} className="text-[#CCCCCA] shrink-0" />}
            {chat.lastMessage}
          </p>
          {chat.unread && (
            <span className="text-[10px] font-semibold bg-[#1A1A1A] text-white rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 shrink-0">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
