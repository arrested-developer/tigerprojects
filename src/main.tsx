import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import global styles before pages
import "./style/global.scss";

// import page level components
import Home from "./pages/home";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There&apos;s nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
