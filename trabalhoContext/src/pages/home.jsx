import { useTheme } from "../context/ThemeContext";
import { Github, Instagram, Youtube, Linkedin, Sun, Moon } from "lucide-react";
import foto from "./img/carlinhos.jpg";

import "./style.css";
export function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <div className="profile">
        <img className="foto" src={foto} alt="homem bonito" />
        <h1 className="title">@maykbrito</h1>
      </div>
      <div className="toggle-container" onClick={toggleTheme}>
        <div className={`toggle-switch ${theme === "dark" ? "dark" : "light"}`}>
          {theme === "dark" ? (
            <Moon size={20} color="black" />
          ) : (
            <Sun size={20} color="black" />
          )}
        </div>
      </div>

      <div className="link-btns">
        <button>increva-se ao NLW</button>
        <button>Baixe meu e-book</button>
        <button>Veja meu protifolio</button>
        <button>conheça o explorer</button>
      </div>
      <div className="social">
        <Github size={20} /> <Instagram size={20} /> <Youtube size={20} /><Linkedin size={20} />
      </div>
    </div>
  );
}
