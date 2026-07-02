import { Link } from "react-router";

function NotFound() {
    return (
        <div className="container mt-5 text-center" style={{ maxWidth: "500px" }}>
            <div className="card shadow-lg border-0 p-5">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <h4 className="mb-3">Sayfa Bulunamadı</h4>
                <p className="text-muted mb-4">
                    Aradığınız sayfa mevcut değil ya da taşınmış olabilir.
                </p>
                <div className="d-grid">
                    <Link to="/" className="btn btn-outline-primary">
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
