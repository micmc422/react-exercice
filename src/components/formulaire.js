import React, { useState } from "react";

function FormulaireContact() {
    const [formData, setFormData] = useState({ nom: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données envoyées :", formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto", textAlign: "left" }}>
            <h2>Contactez-nous</h2>
            <label>
                Nom :
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Email :
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Message :
                <textarea name="message" value={formData.message} onChange={handleChange} required />
            </label>
            <br />
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default FormulaireContact;
