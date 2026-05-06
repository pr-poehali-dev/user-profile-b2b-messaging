import { useState } from "react";
import Icon from "@/components/ui/icon";

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
  online?: boolean;
}

const TYPE_META: Record<ChatType, { label: string; color: string; lightBg: string; textColor: string }> = {
  colleague: { label: "Коллега",   color: "#3B82F6", lightBg: "#EFF6FF", textColor: "#2563EB" },
  client:    { label: "Заказчик",  color: "#F59E0B", lightBg: "#FFFBEB", textColor: "#D97706" },
  vendor:    { label: "Подрядчик", color: "#8B5CF6", lightBg: "#F5F3FF", textColor: "#7C3AED" },
  external:  { label: "Партнёр",  color: "#10B981", lightBg: "#ECFDF5", textColor: "#059669" },
  group:     { label: "Группа",   color: "#6B7280", lightBg: "#F3F4F6", textColor: "#4B5563" },
};

const ALL_CHATS: Chat[] = [
  {
    id: 1, name: "Дизайн & продукт", initials: "ДП", avatarBg: "#E8F0FF",
    lastMessage: "Маша: Обновила макеты в Figma 👀", time: "10:42", unread: 3,
    type: "group", pinned: true,
  },
  {
    id: 2, name: "Стратегия 2026", initials: "С2", avatarBg: "#F0F9EB",
    lastMessage: "Вы: Ок, встречаемся в среду", time: "09:15",
    type: "group", pinned: true,
  },
  {
    id: 3, name: "Кирилл Новиков", initials: "КН", avatarBg: "#FEE2E2",
    lastMessage: "Кинул PR на ревью, посмотри", time: "Вчера", unread: 1,
    type: "colleague", company: "Яндекс", companyEmoji: "🟡", online: true,
  },
  {
    id: 4, name: "Маша Орлова", initials: "МО", avatarBg: "#FEF3C7",
    lastMessage: "Спасибо, буду на онлайне!", time: "Вчера",
    type: "colleague", company: "Яндекс", companyEmoji: "🟡", online: true,
  },
  {
    id: 5, name: "Максим Горин", initials: "МГ", avatarBg: "#FEF3C7",
    lastMessage: "Вы: Покажем во вторник", time: "Вс",
    type: "client", company: "Сбер", companyEmoji: "🟢",
  },
  {
    id: 6, name: "Ольга Трофимова", initials: "ОТ", avatarBg: "#FFEDD5",
    lastMessage: "Когда будет демо?", time: "Пт", unread: 4,
    type: "client", company: "Ozon", companyEmoji: "🔵",
  },
  {
    id: 7, name: "Антон Белов", initials: "АБ", avatarBg: "#EDE9FE",
    lastMessage: "Скинул счёт на почту", time: "Пн", unread: 2,
    type: "vendor", company: "Студия «Форма»", companyEmoji: "🎨",
  },
  {
    id: 8, name: "Елена Кравцова", initials: "ЕК", avatarBg: "#F3E8FF",
    lastMessage: "Договор подписан, жду оплату", time: "Вс",
    type: "vendor", company: "LegalPro", companyEmoji: "⚖️",
  },
  {
    id: 9, name: "Игорь Власов", initials: "ИВ", avatarBg: "#D1FAE5",
    lastMessage: "Есть минута обсудить партнёрство?", time: "Пт",
    type: "external", company: "VK", companyEmoji: "🔵", online: true,
  },
  {
    id: 10, name: "Tech leads", initials: "TL", avatarBg: "#F1F5F9",
    lastMessage: "Паша: В пятницу ретро", time: "Пт",
    type: "group", muted: true,
  },
];

const FOLDERS = [
  { id: "all",        label: "Все" },
  { id: "colleagues", label: "Коллеги" },
  { id: "clients",    label: "Заказчики" },
  { id: "vendors",    label: "Подрядчики" },
  { id: "groups",     label: "Группы" },
];

export default function MessengerMobile() {
  const [activeFolder, setActiveFolder] = useState("all");
  const [activeNav, setActiveNav] = useState("chats");

  const filtered = ALL_CHATS.filter(c => {
    if (activeFolder === "colleagues") return c.type === "colleague";
    if (activeFolder === "clients") return c.type === "client";
    if (activeFolder === "vendors") return c.type === "vendor";
    if (activeFolder === "groups") return c.type === "group";
    return true;
  });

  const pinned = filtered.filter(c => c.pinned);
  const rest = filtered.filter(c => !c.pinned);

  const totalUnread = ALL_CHATS.reduce((s, c) => s + (c.unread || 0), 0);

  return (
    <div className="flex flex-col h-full bg-[#F7F7F5]">

      {/* Header */}
      <div className="bg-white px-4 pt-4 pb-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-[20px] font-bold text-[#1A1A1A]">Сообщения</h1>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-[#F5F5F3] flex items-center justify-center">
              <Icon name="Search" size={16} className="text-[#5A5A5A]" />
            </button>
            <button className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center">
              <Icon name="Plus" size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Folder tabs */}
        <div className="flex gap-1.5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {FOLDERS.map(f => {
            const count = f.id === "all"
              ? ALL_CHATS.reduce((s, c) => s + (c.unread || 0), 0)
              : ALL_CHATS.filter(c =>
                  c.type === f.id.replace("colleagues","colleague").replace("clients","client").replace("vendors","vendor").replace("groups","group") as ChatType
                ).reduce((s, c) => s + (c.unread || 0), 0);
            return (
              <button
                key={f.id}
                onClick={() => setActiveFolder(f.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-all shrink-0 ${
                  activeFolder === f.id
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-[#F0F0EE] text-[#5A5A5A]"
                }`}
              >
                {f.label}
                {count > 0 && (
                  <span className={`text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-1 ${
                    activeFolder === f.id ? "bg-white/20 text-white" : "bg-[#1A1A1A] text-white"
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {pinned.length > 0 && (
          <div className="px-4 pt-4 pb-1 flex items-center gap-1.5">
            <Icon name="Pin" size={10} className="text-[#CCCCCA]" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#CCCCCA]">Закреплённые</span>
          </div>
        )}
        {pinned.map(chat => <ChatRow key={chat.id} chat={chat} />)}

        {rest.length > 0 && pinned.length > 0 && (
          <div className="px-4 pt-3 pb-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#CCCCCA]">Все чаты</span>
          </div>
        )}
        {rest.map(chat => <ChatRow key={chat.id} chat={chat} />)}
      </div>

      {/* Bottom nav */}
      <div className="bg-white border-t border-[#EDEDEB] flex items-center justify-around px-2 py-2">
        {[
          { id: "chats", icon: "MessageSquare", label: "Чаты" },
          { id: "people", icon: "Users", label: "Люди" },
          { id: "calls", icon: "Phone", label: "Звонки" },
          { id: "profile", icon: "UserRound", label: "Профиль" },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveNav(item.id)}
            className="flex flex-col items-center gap-0.5 px-3 py-1 relative"
          >
            <div className="relative">
              <Icon
                name={item.icon}
                size={22}
                className={activeNav === item.id ? "text-[#1A1A1A]" : "text-[#CCCCCA]"}
              />
              {item.id === "chats" && totalUnread > 0 && (
                <span className="absolute -top-1 -right-1.5 text-[9px] font-bold bg-[#1A1A1A] text-white rounded-full min-w-[14px] h-[14px] flex items-center justify-center px-0.5">
                  {totalUnread}
                </span>
              )}
            </div>
            <span className={`text-[10px] font-medium ${activeNav === item.id ? "text-[#1A1A1A]" : "text-[#CCCCCA]"}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ChatRow({ chat }: { chat: Chat }) {
  const meta = TYPE_META[chat.type];
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white mb-[1px] active:bg-[#F5F5F3] transition-colors">
      {/* Color bar */}
      <div className="relative shrink-0">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-[13px] text-[#4B5563]"
          style={{ backgroundColor: chat.avatarBg }}
        >
          {chat.initials}
        </div>
        {chat.online && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-white" />
        )}
        {/* Type dot */}
        <span
          className="absolute top-0 left-0 w-3 h-3 rounded-full ring-2 ring-white"
          style={{ backgroundColor: meta.color }}
        />
      </div>

      <div className="flex-1 min-w-0">
        {/* Name + time */}
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className={`text-[15px] truncate ${chat.unread ? "font-semibold text-[#1A1A1A]" : "font-medium text-[#1A1A1A]"}`}>
              {chat.name}
            </span>
            {chat.muted && <Icon name="BellOff" size={11} className="text-[#CCCCCA] shrink-0" />}
          </div>
          <span className={`text-[12px] shrink-0 ${chat.unread ? "text-[#1A1A1A] font-medium" : "text-[#ABABAB]"}`}>
            {chat.time}
          </span>
        </div>

        {/* Badge + company */}
        <div className="flex items-center gap-1.5 mb-0.5">
          <span
            className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md shrink-0"
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

        {/* Last message + unread */}
        <div className="flex items-center justify-between gap-2">
          <p className="text-[12px] text-[#8B8B8B] truncate flex-1">{chat.lastMessage}</p>
          {chat.unread && (
            <span className="text-[11px] font-bold bg-[#1A1A1A] text-white rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5 shrink-0">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
