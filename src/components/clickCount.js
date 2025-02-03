import { useState } from "react";

function Compteur() {
    // Déclaration d'un état local "compteur" avec une valeur initiale de 0
    // setCompteur est la fonction qui permet de mettre à jour cet état
    const [compteur, setCompteur] = useState(0);

    // Fonction appelée lorsqu'on clique sur le bouton
    const incrementer = () => {
        setCompteur(prev => prev + 1);
        // Utilisation de la fonction avec la valeur précédente pour éviter des problèmes de mises à jour asynchrones
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Compteur de clics</h1>
            <p>Vous avez cliqué {compteur} fois</p>
            {/* Bouton qui déclenche la fonction incrementer lors d'un clic */}
            <button onClick={incrementer}>Cliquez-moi</button>
        </div>
    );
}


export default Compteur;