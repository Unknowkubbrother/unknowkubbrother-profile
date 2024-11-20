import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const App: React.FC = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Layout />
      <Routes>
        {/* Redirect from root to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
};

export default App;
