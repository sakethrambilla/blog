import MainNavbar from "@/_components/ui/main-navbar";
import { ReactNode } from "react";

interface MainLayout {
  children: ReactNode;
}

function MainLayout({ children }: MainLayout) {
  return (
    <div className="flex min-h-screen w-full flex-col items-start">
      <MainNavbar />
      {children}
    </div>
  );
}

export default MainLayout;
