import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
