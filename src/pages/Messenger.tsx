import { useState } from "react";
import Icon from "@/components/ui/icon";

const AVATAR_URL =
  "https://cdn.poehali.dev/projects/26dd1934-cbc7-4b73-84ae-c57f8c4bcf36/files/ac5ca109-7ac6-4ba9-b58c-d31d2e4c4eb8.jpg";

type ChatType = "colleague" | "external" | "group" | "client" | "vendor";

interface Chat {
  id: number;
  name: string;
  initials: string;
  avatarBg: string;
  lastMessage: string;
  time: string;
  unread?: number;
  type: ChatType;
  company?: string;
  companyEmoji?: string;
  muted?: boolean;
  pinned?: boolean;
  role?: string;
  online?: boolean;
}

const TYPE_META: Record<ChatType, { label: string; color: string; lightBg: string; textColor: string }> = {
  colleague: { label: "Коллега",     color: "#3B82F6", lightBg: "#EFF6FF", textColor: "#2563EB" },
  client:    { label: "Заказчик",    color: "#F59E0B", lightBg: "#FFFBEB", textColor: "#D97706" },
  vendor:    { label: "Подрядчик",   color: "#8B5CF6", lightBg: "#F5F3FF", textColor: "#7C3AED" },
  external:  { label: "Партнёр",     color: "#10B981", lightBg: "#ECFDF5", textColor: "#059669" },
  group:     { label: "Группа",      color: "#6B7280", lightBg: "#F3F4F6", textColor: "#4B5563" },
};

const ALL_CHATS: Chat[] = [
  {
    id: 1,
    name: "Дизайн & продукт",
    initials: "ДП",
    avatarBg: "#E8F0FF",
    lastMessage: "Маша: Обновила макеты в Figma, смотрите 👀",
    time: "10:42",
    unread: 3,
    type: "group",
    pinned: true,
  },
  {
    id: 2,
    name: "Стратегия 2026",
    initials: "С2",
    avatarBg: "#F0F9EB",
    lastMessage: "Вы: Ок, встречаемся в среду",
    time: "09:15",
    type: "group",
    pinned: true,
  },
  {
    id: 3,
    name: "Кирилл Новиков",
    initials: "КН",
    avatarBg: "#FEE2E2",
    lastMessage: "Кинул тебе PR на ревью, посмотри когда будет время",
    time: "Вчера",
    unread: 1,
    type: "colleague",
    company: "Яндекс",
    companyEmoji: "🟡",
    role: "Senior Dev",
    online: true,
  },
  {
    id: 4,
    name: "Маша Орлова",
    initials: "МО",
    avatarBg: "#FEF3C7",
    lastMessage: "Спасибо, буду на онлайне!",
    time: "Вчера",
    type: "colleague",
    company: "Яндекс",
    companyEmoji: "🟡",
    role: "UX Designer",
    online: true,
  },
  {
    id: 5,
    name: "Максим Горин",
    initials: "МГ",
    avatarBg: "#FEF3C7",
    lastMessage: "Вы: Покажем презентацию во вторник",
    time: "Вс",
    type: "client",
    company: "Сбер",
    companyEmoji: "🟢",
    role: "Заказчик",
  },
  {
    id: 6,
    name: "Ольга Трофимова",
    initials: "ОТ",
    avatarBg: "#FFEDD5",
    lastMessage: "Когда будет демо? Нужно согласовать с командой",
    time: "Пт",
    unread: 4,
    type: "client",
    company: "Ozon",
    companyEmoji: "🔵",
    role: "Заказчик",
  },
  {
    id: 7,
    name: "Антон Белов",
    initials: "АБ",
    avatarBg: "#EDE9FE",
    lastMessage: "Скинул счёт на почту, проверьте",
    time: "Пн",
    unread: 2,
    type: "vendor",
    company: "Студия «Форма»",
    companyEmoji: "🎨",
    role: "Дизайнер",
  },
  {
    id: 8,
    name: "Елена Кравцова",
    initials: "ЕК",
    avatarBg: "#F3E8FF",
    lastMessage: "Договор подписан, жду оплату",
    time: "Вс",
    type: "vendor",
    company: "LegalPro",
    companyEmoji: "⚖️",
    role: "Юрист",
  },
  {
    id: 9,
    name: "Игорь Власов",
    initials: "ИВ",
    avatarBg: "#D1FAE5",
    lastMessage: "Привет! Есть минута обсудить партнёрство?",
    time: "Пт",
    type: "external",
    company: "VK",
    companyEmoji: "🔵",
    role: "Партнёр",
    online: true,
  },
  {
    id: 10,
    name: "Дима Фролов",
    initials: "ДФ",
    avatarBg: "#E0E7FF",
    lastMessage: "Вы: Встреча в 14:00, не забудь",
    time: "Пн",
    type: "colleague",
    company: "Яндекс",
    companyEmoji: "🟡",
    role: "Аналитик",
    muted: true,
  },
  {
    id: 11,
    name: "Tech leads",
    initials: "TL",
    avatarBg: "#F1F5F9",
    lastMessage: "Паша: В пятницу ретро, не забудьте",
    time: "Пт",
    type: "group",
    muted: true,
  },
  {
    id: 12,
    name: "Проект «Атлас»",
    initials: "АТ",
    avatarBg: "#FFF7ED",
    lastMessage: "Вы: Финальная версия готова 🎉",
    time: "Чт",
    type: "group",
  },
];

const FOLDERS = [
  { id: "all",        label: "Все",          icon: "Layers" },
  { id: "colleagues", label: "Коллеги",      icon: "Users" },
  { id: "clients",    label: "Заказчики",    icon: "Briefcase" },
  { id: "vendors",    label: "Подрядчики",   icon: "Wrench" },
  { id: "groups",     label: "Группы",       icon: "MessagesSquare" },
];

const MESSAGES = [
  { id: 1, from: "them", text: "Привет! Есть время обсудить дизайн онбординга?", time: "10:30" },
  { id: 2, from: "me", text: "Да, через 10 минут освобожусь", time: "10:31" },
  { id: 3, from: "them", text: "Ок, жду. Кстати, макеты уже в Figma", time: "10:32" },
  { id: 4, from: "them", text: "Обновила иконки и цвета статусов", time: "10:32" },
  { id: 5, from: "me", text: "Отлично, посмотрю сейчас", time: "10:38" },
  { id: 6, from: "them", text: "Обновила макеты в Figma, смотрите 👀", time: "10:42" },
];

function Avatar({ chat, size = 10 }: { chat: Chat; size?: number }) {
  const px = `${size * 4}px`;
  const font = `${Math.round(size * 1.3)}px`;
  return (
    <div
      className="rounded-full flex items-center justify-center font-semibold text-[#4B5563] shrink-0 relative"
      style={{ width: px, height: px, backgroundColor: chat.avatarBg, fontSize: font }}
    >
      {chat.initials}
      {chat.online && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white" />
      )}
    </div>
  );
}

function ChatRow({ chat, active, onClick }: { chat: Chat; active: boolean; onClick: () => void }) {
  const meta = TYPE_META[chat.type];
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-start gap-3.5 px-4 py-3.5 transition-colors text-left relative border-b border-[#F5F5F3] ${
        active ? "bg-[#F7F7F5]" : "hover:bg-[#FAFAF8] bg-white"
      }`}
    >
      {/* Type accent bar */}
      <div
        className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full"
        style={{ backgroundColor: active ? meta.color : "transparent" }}
      />

      <Avatar chat={chat} size={11} />

      <div className="flex-1 min-w-0">
        {/* Row 1: name + time */}
        <div className="flex items-center justify-between gap-2 mb-0.5">
          <div className="flex items-center gap-2 min-w-0">
            <span className={`text-[14px] truncate ${chat.unread ? "font-semibold text-[#1A1A1A]" : "font-medium text-[#1A1A1A]"}`}>
              {chat.name}
            </span>
            {chat.pinned && <Icon name="Pin" size={11} className="text-[#CCCCCA] shrink-0" />}
            {chat.muted && <Icon name="BellOff" size={11} className="text-[#CCCCCA] shrink-0" />}
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {chat.unread ? (
              <span className="text-[11px] font-semibold bg-[#1A1A1A] text-white rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1.5">
                {chat.unread}
              </span>
            ) : null}
            <span className="text-[12px] text-[#ABABAB]">{chat.time}</span>
          </div>
        </div>

        {/* Row 2: role badge + company */}
        <div className="flex items-center gap-1.5 mb-1">
          <span
            className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md"
            style={{ backgroundColor: meta.lightBg, color: meta.textColor }}
          >
            {meta.label}
          </span>
          {chat.company && (
            <span className="text-[11px] text-[#ABABAB] truncate">
              {chat.companyEmoji} {chat.company}
            </span>
          )}
        </div>

        {/* Row 3: last message */}
        <p className="text-[12px] text-[#8B8B8B] truncate leading-relaxed">{chat.lastMessage}</p>
      </div>
    </button>
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
  const badge = TYPE_META[activeChat.type];

  return (
    <div className="h-screen bg-[#F2F2F0] flex overflow-hidden font-golos">

      {/* Sidebar nav */}
      <div className="w-[60px] bg-[#111111] flex flex-col items-center py-5 gap-1 shrink-0">
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center mb-5">
          <span className="text-white text-[13px] font-bold">М</span>
        </div>
        {[
          { icon: "MessageSquare", active: true },
          { icon: "Users", active: false },
          { icon: "Phone", active: false },
          { icon: "Bell", active: false },
          { icon: "Settings", active: false },
        ].map((item, i) => (
          <button
            key={i}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              item.active ? "bg-white/15" : "hover:bg-white/8"
            }`}
          >
            <Icon name={item.icon} size={18} className={item.active ? "text-white" : "text-white/35"} />
          </button>
        ))}
        <div className="mt-auto">
          <div className="relative">
            <img src={AVATAR_URL} alt="me" className="w-9 h-9 rounded-full object-cover ring-2 ring-white/20" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#111]" />
          </div>
        </div>
      </div>

      {/* Chat list — wide */}
      <div className="w-[400px] flex flex-col shrink-0 bg-white border-r border-[#EDEDEB]">

        {/* Header */}
        <div className="px-5 pt-5 pb-4 border-b border-[#F2F2F0]">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-[18px] font-semibold text-[#1A1A1A]">Сообщения</h1>
            <div className="flex gap-1">
              <button className="w-8 h-8 rounded-lg bg-[#F5F5F3] flex items-center justify-center hover:bg-[#EDEDEB] transition-colors">
                <Icon name="Filter" size={14} className="text-[#5A5A5A]" />
              </button>
              <button className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center hover:bg-[#333] transition-colors">
                <Icon name="Plus" size={14} className="text-white" />
              </button>
            </div>
          </div>
          <div className="relative">
            <Icon name="Search" size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#ABABAB]" />
            <input
              className="w-full bg-[#F5F5F3] rounded-xl pl-9 pr-4 py-2.5 text-[14px] text-[#1A1A1A] placeholder:text-[#ABABAB] outline-none"
              placeholder="Поиск по чатам..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Folders */}
        <div className="flex gap-1.5 px-5 py-3 border-b border-[#F2F2F0]">
          {FOLDERS.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFolder(f.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium whitespace-nowrap transition-all ${
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

        {/* List */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          {pinned.length > 0 && (
            <>
              <div className="px-5 pt-4 pb-1 flex items-center gap-2">
                <Icon name="Pin" size={11} className="text-[#CCCCCA]" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#CCCCCA]">Закреплённые</span>
              </div>
              {pinned.map(chat => (
                <ChatRow key={chat.id} chat={chat} active={activeChat.id === chat.id} onClick={() => setActiveChat(chat)} />
              ))}
              <div className="px-5 pt-4 pb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#CCCCCA]">Все чаты</span>
              </div>
            </>
          )}
          {rest.map(chat => (
            <ChatRow key={chat.id} chat={chat} active={activeChat.id === chat.id} onClick={() => setActiveChat(chat)} />
          ))}
        </div>

        {/* Legend */}
        <div className="px-5 py-3 border-t border-[#F2F2F0] flex flex-wrap gap-x-4 gap-y-1.5">
          {Object.entries(TYPE_META).map(([, m]) => (
            <div key={m.label} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
              <span className="text-[11px] text-[#8B8B8B]">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="h-14 bg-white border-b border-[#EDEDEB] flex items-center px-5 gap-3 shrink-0">
          <Avatar chat={activeChat} size={9} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-[#1A1A1A] truncate">{activeChat.name}</span>
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: badge.lightBg, color: badge.textColor }}
              >
                {badge.label}
              </span>
            </div>
            {activeChat.company && (
              <p className="text-[11px] text-[#ABABAB]">{activeChat.companyEmoji} {activeChat.company} · {activeChat.role}</p>
            )}
          </div>
          <div className="flex items-center gap-1">
            {["Phone", "Video", "Info"].map(ic => (
              <button key={ic} className="w-8 h-8 rounded-lg hover:bg-[#F5F5F3] flex items-center justify-center transition-colors">
                <Icon name={ic} size={16} className="text-[#8B8B8B]" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-3 bg-[#F9F9F7]" style={{ scrollbarWidth: "none" }}>
          <div className="flex justify-center mb-2">
            <span className="text-[11px] text-[#ABABAB] bg-white px-3 py-1 rounded-full border border-[#EDEDEB]">Сегодня</span>
          </div>
          {MESSAGES.map(msg => (
            <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
              {msg.from === "them" && <Avatar chat={activeChat} size={8} />}
              <div className={`max-w-[65%] px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed ml-2 mr-2 ${
                msg.from === "me"
                  ? "bg-[#1A1A1A] text-white rounded-br-sm"
                  : "bg-white text-[#1A1A1A] rounded-bl-sm border border-[#EDEDEB]"
              }`}>
                {msg.text}
                <div className={`text-[10px] mt-1 ${msg.from === "me" ? "text-white/40 text-right" : "text-[#CCCCCA]"}`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>

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
          <button className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${message.trim() ? "bg-[#1A1A1A]" : "bg-[#EDEDEB]"}`}>
            <Icon name="Send" size={15} className={message.trim() ? "text-white" : "text-[#ABABAB]"} />
          </button>
        </div>
      </div>
    </div>
  );
}
