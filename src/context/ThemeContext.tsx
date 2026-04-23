import { useState,createContext, useContext } from "react";

type Theme = "light" | "dark";
interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    function toggleTheme() {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return themeContext;
}