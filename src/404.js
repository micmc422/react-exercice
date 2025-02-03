function Page404() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 style={{ fontSize: "3rem", color: "#ff0000" }}>404</h1>
            <p>Oups ! La page que vous cherchez n'existe pas.</p>
            <a href="/" style={{ textDecoration: "none", color: "#007bff" }}>
                Retour à l'accueil
            </a>
        </div>
    );
}

export default Page404;