import { useState } from "react";
import {useNavigate} from "react-router"
import { HesaplaButton } from "./Buttons";
import alertify from "alertifyjs"
import "alertifyjs/build/css/alertify.min.css"


function Calculate({setResult}) {
    const [size, setSize] = useState(null);
    const [weight, setWeight] = useState(null);
    const navigate = useNavigate()

    const sizeCal = (size) => Number(size)/100;

    const calculate = () => {
        if(weight && size) {
            const bmi = weight / (sizeCal(size) * sizeCal(size));
            setResult(bmi.toFixed(2))
            navigate("/result")
        }
        else {
            alertify.error("Lütfen boy ve kilo giriniz.")
        } 
    } 
 return (
    <div className="container mt-5" style={{ maxWidth: "480px" }}>
        <div className="card shadow-lg border-0 p-4">
            <h2 className="text-center mb-4 fw-bold">BMI Hesapla</h2>

            <div className="mb-3">
                <label className="form-label fw-semibold">Boy (cm)</label>
                <input
                    type="number"
                    className="form-control form-control-lg border-secondary"
                    placeholder="Örn: 170"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="form-label fw-semibold">Kilo (kg)</label>
                <input
                    type="number"
                    className="form-control form-control-lg border-secondary"
                    placeholder="Örn: 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>

            <div className="d-grid">
                <HesaplaButton onClick={calculate}>Hesapla</HesaplaButton>
            </div>
        </div>
    </div>
 )
}
 export default Calculate