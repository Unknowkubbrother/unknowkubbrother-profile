import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const App: React.FC = () => {
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
