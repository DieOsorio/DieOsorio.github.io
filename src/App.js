import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import logo from "./assets/mylogo.png";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <nav className="navbar bg-light">
            <div className="container-fluid">
              <Link to="/">
                <img
                  style={{ width: "30px" }}
                  src={logo}
                  alt="logo"
                  className="navbar-brand"
                />
              </Link>
            </div>
          </nav>
        </header>
        <main>
          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
