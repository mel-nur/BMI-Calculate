import { useEffect, useState } from 'react'
import './App.css'
import Calculate from './components/Calculate';
import Result from './components/Result';
import { Route, Routes } from 'react-router';
import Bmi from "./components/Bmi";
import Layout from './Layout/Layout';
import NotFound from './components/NotFound';

function App() {

  const [result, setResult] = useState(() => {
    const bmi = localStorage.getItem("bmiResult")
    return bmi ? JSON.parse(bmi) : null
  });

  useEffect(() => {
    if(result !== null)
      localStorage.setItem("bmiResult", JSON.stringify(result))
  }, [result])
  return (
    <>

    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Calculate setResult={setResult}/>}></Route>
        <Route path="/result" element={<Result result={result}/>}></Route>
        <Route path='/bmi' element={<Bmi/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
