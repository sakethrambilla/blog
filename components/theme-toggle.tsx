"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  function handleToggle() {
    {
      theme === "light" ? setTheme("dark") : setTheme("light");
    }
  }

  return (
    <div onClick={handleToggle}>{theme === "light" ? <Sun /> : <Moon />}</div>
  );
}

export default ThemeToggle;
