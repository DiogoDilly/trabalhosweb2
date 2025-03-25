import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import {api} from "./services/api"


import { ThemeProvider } from "./context/ThemeProvider";
import { useEffect, useState } from "react";

export function App() {
const [profileImg, setProfileImg] = useState(null);
const [userName, setUserName] = UserState(null);



  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
