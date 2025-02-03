import { useState } from "react";

// Composant enfant recevant des props et affichant son contenu
function Enfant({ valeur, onAction, children }) {
    return (
        <div style={{ borderRadius: "8px", border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <p>Valeur reçue du parent : {valeur}</p>
            <button onClick={() => onAction(valeur => valeur + 1)}>Incrémenter</button>
            <div>{children}</div> {/* Affichage du contenu passé en tant que children */}
        </div>
    );
}

// Composant parent qui gère l'état et transmet les données
function Parent(props) {
    const [compteur, setCompteur] = useState(0);

    return (
        <div style={{borderRadius:"8px", textAlign: "center", marginTop: "20px", padding: "20px" }} {...props}>
            <h1>Transmission de données entre composants</h1>
            <p>Compteur dans le parent : {compteur}</p>
            {/* Passage de données et d'un callback à l'enfant */}
            <Enfant valeur={compteur} onAction={setCompteur}>
                <p>Ce texte est passé via children.</p>
            </Enfant>
        </div>
    );
}

export default Parent;
