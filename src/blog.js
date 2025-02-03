import React from "react";

// Données factices pour les articles
const articles = [
    { id: 1, titre: "Introduction à React", contenu: "React est une bibliothèque JavaScript populaire..." },
    { id: 2, titre: "Les Hooks en React", contenu: "Les Hooks permettent d'utiliser l'état dans les composants fonctionnels..." },
    { id: 3, titre: "Optimisation des performances", contenu: "Découvrez comment optimiser les performances de vos applications React..." },
];

// Composant affichant une liste d'articles
function ListeArticles() {
    return (
        <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "left" }}>
            <h1>Blog</h1>
            {articles.map((article) => (
                <div key={article.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
                    <h2>{article.titre}</h2>
                    <p>{article.contenu}</p>
                </div>
            ))}
        </div>
    );
}

export default ListeArticles;
