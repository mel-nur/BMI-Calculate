function Bmi() {
    return(
        <div className="container mt-5" style={{ maxWidth: "720px" }}>
            <div className="card shadow-lg border-0 p-4">
                <h1 className="fw-bold mb-4 text-center">BMI (Vücut Kitle Endeksi) Nedir?</h1>

                <p className="fs-5 text-muted lh-lg">
                    Vücut kitle indeksi (VKİ), bir kişinin kilo ve boy oranını değerlendirerek
                    vücut ağırlığının sağlık açısından uygun olup olmadığını belirlemek için kullanılan bir ölçüttür.
                    VKİ, kilogram cinsinden ağırlığın, metre cinsinden boyun karesine bölünmesiyle hesaplanır.
                    Sonuç, bireyin zayıf, normal kilolu, fazla kilolu veya obez kategorilerinden hangisinde
                    olduğunu belirlemek için kullanılır.
                </p>

                <div className="alert alert-info text-center fw-semibold my-4">
                    BMI = kilo (kg) / (boy × boy) (m)
                </div>

                <h5 className="fw-semibold mb-3">Kategoriler</h5>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between">
                        18.5 altı <span className="badge bg-warning">Zayıf</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        18.5 – 24.9 <span className="badge bg-success">Normal</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        25 – 29.9 <span className="badge bg-warning">Fazla Kilolu</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        30 ve üzeri <span className="badge bg-danger">Obez</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Bmi