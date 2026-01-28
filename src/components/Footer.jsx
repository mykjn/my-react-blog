export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-quote">
                    "Your Word is a lamp to my feet and a light to my path."
                </p>
                <p className="footer-meta">
                    @ {year} ALMWTD · All rights reserved
                </p>
            </div>
        </footer>
    );
}