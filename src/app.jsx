import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./app.css";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
