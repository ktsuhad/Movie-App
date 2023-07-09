import HomePage from "../Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../app/App.scss";
import Details from "../Pages/Detailes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailes/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
