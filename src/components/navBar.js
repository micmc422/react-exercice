import React from "react";

// Données du menu
const menuItems = [
    { id: 1, label: "Accueil", url: "/" },
    { id: 2, label: "Blog", url: "/blog" },
    { id: 3, label: "error", url: "/err" },
    // { id: 4, label: "Contact", url: "/contact" },
];

// Composant Menu de navigation
function MenuNavigation() {
    return (
        <nav style={{ background: "#333", padding: "10px" }}>
            <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 }}>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.url} style={{ color: "white", textDecoration: "none" }}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MenuNavigation;