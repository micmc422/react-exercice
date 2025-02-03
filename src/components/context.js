import React, { createContext, useState, useContext } from "react";

// Création du contexte
const ThemeContext = createContext();

// Fournisseur du contexte
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Hook personnalisé pour utiliser le contexte
export function useTheme() {
    return useContext(ThemeContext);
}
