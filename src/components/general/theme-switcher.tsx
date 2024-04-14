"use client";

import { useState, useEffect } from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme, ThemeProvider } from "next-themes";

import IconButton from "@/components/general/icon-button";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
    // setTheme(theme === "system" || theme === "dark" ? "dark" : "light");
  }, []);

  if (!mounted) {
    return (
      <IconButton>
        <Sun />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={toggleTheme}>
      {theme === "dark" ? <Sun /> : <MoonStar />}
    </IconButton>
  );
};

const ThemedThemeSwitcher = () => (
  // <ThemeProvider defaultTheme="dark">
    <ThemeSwitcher />
  // </ThemeProvider>
);

export default ThemedThemeSwitcher;

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
