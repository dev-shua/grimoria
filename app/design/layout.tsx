import { CircleUserRoundIcon, HomeIcon, LayoutGridIcon } from "lucide-react";
import { ReactNode } from "react";

const DesignLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-white lg:flex">
      <nav className="p-4 flex justify-center lg:justify-start flex-row lg:flex-col lg:w-[75px] lg:pt-16 lg:items-center gap-4 lg:gap-16 border-b border-white/5 lg:border-b-0 lg:border-r">
        <a
          href="#"
          className="text-gold hover:text-goldTint transition-all w-full flex justify-center"
        >
          <HomeIcon />
        </a>
        <a
          href="#"
          className="text-gold hover:text-goldTint transition-all w-full flex justify-center"
        >
          <LayoutGridIcon />
        </a>
        <a
          href="#"
          className="text-gold hover:text-goldTint transition-all w-full flex justify-center"
        >
          <CircleUserRoundIcon />
        </a>
      </nav>
      {children}
    </div>
  );
};

export default DesignLayout;
