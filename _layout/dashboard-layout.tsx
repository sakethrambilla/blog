import { ReactNode } from "react";

interface DashboardLayout {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayout) {
  return <div>{children}</div>;
}

export default DashboardLayout;
