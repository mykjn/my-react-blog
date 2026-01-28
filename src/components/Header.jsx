import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <button
                className={`hamburger ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
                aria-label="Menu"
            >
                <span />
                <span />
                <span />
            </button>

            {open && <div className="menu-backdrop" onClick={() => setOpen(false)} />}

            <nav className={`header-nav ${open ? "open" : ""}`}>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </nav>
        </header>
    );
}