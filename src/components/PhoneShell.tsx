import Icon from "@/components/ui/icon";

interface PhoneShellProps {
  children: React.ReactNode;
}

export default function PhoneShell({ children }: PhoneShellProps) {
  return (
    <div className="relative w-[390px] flex-shrink-0">
      <div className="relative bg-[#1C1C1E] rounded-[52px] p-[11px] shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute -left-[3px] top-[108px] w-[3px] h-7 bg-[#2C2C2E] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[152px] w-[3px] h-14 bg-[#2C2C2E] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[214px] w-[3px] h-14 bg-[#2C2C2E] rounded-l-sm" />
        <div className="absolute -right-[3px] top-[152px] w-[3px] h-20 bg-[#2C2C2E] rounded-r-sm" />
        <div className="bg-[#F7F7F5] rounded-[43px] overflow-hidden" style={{ height: 780 }}>
          {/* Status bar */}
          <div className="relative flex items-center justify-between px-8 pt-[14px] pb-0 shrink-0">
            <span className="text-[13px] font-semibold text-[#1A1A1A] z-10">9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-[10px] w-[120px] h-[34px] bg-[#1C1C1E] rounded-full z-20" />
            <div className="flex items-center gap-[5px] z-10">
              <Icon name="Signal" size={13} className="text-[#1A1A1A]" />
              <Icon name="Wifi" size={13} className="text-[#1A1A1A]" />
              <Icon name="Battery" size={14} className="text-[#1A1A1A]" />
            </div>
          </div>
          {/* Content */}
          <div
            className="overflow-y-auto px-4 pt-3 pb-8"
            style={{ height: 780 - 48, scrollbarWidth: "none" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
