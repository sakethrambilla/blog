import DashboardMenu from "@/components/dashboard-menu";
import DashboardNavbar from "@/components/dashboard-navbar";
import { ReactNode } from "react";

interface DashboardLayout {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayout) {
  return (
    <div className="flex min-h-screen w-full">
      <DashboardMenu />
      <div className="flex h-full w-full flex-col">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
