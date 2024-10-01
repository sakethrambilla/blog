import { ChartLine, FileText, Images, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React from "react";

function DashboardMenu() {
  return (
    <div className="group sticky top-0 flex h-screen flex-col gap-8 border-r-2 px-4 py-12">
      <Link
        href={"/dashboard"}
        className="duration-300items-center flex gap-2 transition-all hover:scale-125"
      >
        <LayoutDashboard size={25} />
      </Link>
      <Link
        href={"/dashboard/gallery"}
        className="group flex items-center gap-2 transition-all duration-300 hover:scale-125"
      >
        <Images size={25} />
      </Link>
      <Link
        href={"/dashboard/gallery"}
        className="group flex items-center gap-2 transition-all duration-300 hover:scale-125"
      >
        <FileText size={25} />
      </Link>
      <Link
        href={"/dashboard/gallery"}
        className="group flex items-center gap-2 transition-all duration-300 hover:scale-125"
      >
        <ChartLine size={25} />
      </Link>
    </div>
  );
}

export default DashboardMenu;
