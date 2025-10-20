const Header = () => {

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    return (
        <header>
            <h1>GYM</h1>
            <nav>
                <a href="/">Home</a>
                isLoggedIn && (
                    <a href="/logout">Login</a>
                ) : (
                    <a href="/login">Logout</a>
                )
                <a href="/actividades">Actividades</a>
            </nav>
        </header>
    )
}

export default Header;