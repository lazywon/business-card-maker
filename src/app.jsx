import { upload } from "@testing-library/user-event/dist/upload";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Main from "./components/main/main";

function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route
            path="/main"
            element={<Main FileInput={FileInput} authService={authService} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
