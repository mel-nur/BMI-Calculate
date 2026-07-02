import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark px-4">
            <Link to="/" className="navbar-brand fw-bold">⚖️ BMI Hesaplayıcı</Link>
            <div className="navbar-nav">
                <Link to="/" className="nav-link">Hesapla</Link>
                <Link to="/bmi" className="nav-link">BMI Nedir</Link>
            </div>
        </nav>
    )
}
export default Navbar