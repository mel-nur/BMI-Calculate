const kategoriler = [
    {
        limit: 18.5,
        isim: "Zayıf",
        renk: "warning",
        diyet: [
            "Kalori alımını artırın (günde +300/500 kalori)",
            "Kuruyemiş, avokado gibi sağlıklı yağlar tüketin",
            "Öğün sayısını artırın, ara öğünler ekleyin",
            "Protein ağırlıklı beslenin (yumurta, tavuk, balık)",
        ],
    },
    {
        limit: 25,
        isim: "Normal",
        renk: "success",
        diyet: [
            "Dengeli beslenmeye devam edin",
            "Bol su için (günde 2/2.5 litre)",
            "Sebze ve meyveyi eksik etmeyin",
            "Haftada 3/4 gün orta tempolu egzersiz yapın",
        ],
    },
    {
        limit: 30,
        isim: "Fazla Kilolu",
        renk: "warning",
        diyet: [
            "Şeker ve işlenmiş gıdaları azaltın",
            "Porsiyonları küçültün",
            "Beyaz un yerine tam tahıl tercih edin",
            "Günlük tempolu yürüyüş yapın (30 dk)",
        ],
    },
    {
        limit: Infinity,
        isim: "Obez",
        renk: "danger",
        diyet: [
            "Bir diyetisyene/doktora başvurun",
            "Şekerli içecekleri tamamen bırakın",
            "Kızartma yerine haşlama/fırın tercih edin",
            "Düzenli ve düşük etkili egzersize başlayın",
        ],
    },
];

import { Link } from "react-router";

function Result({result}) {

    const kategori = kategoriler.find((k) => Number(result) < k.limit)
    return(
        <div className="container mt-5" style={{ maxWidth: "560px" }}>
            <div className="card shadow-lg border-0 p-4 text-center">
                <h4 className="text-muted mb-2">Vücut Kitle Endeksiniz</h4>
                <h1 className={`display-3 fw-bold text-${kategori.renk}`}>{result}</h1>

                <div className="mb-4">
                    <span className={`badge bg-${kategori.renk} fs-5 px-3 py-2`}>
                        {kategori.isim}
                    </span>
                </div>

                <h5 className="text-start fw-semibold mb-3">Size Özel Diyet Önerileri</h5>
                <ul className="list-group list-group-flush text-start mb-4">
                    {kategori.diyet.map((madde, index) => (
                        <li key={index} className="list-group-item">✅ {madde}</li>
                    ))}
                </ul>

                <div className="d-grid">
                    <Link to="/" className="btn btn-outline-secondary">
                        Yeniden Hesapla
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Result