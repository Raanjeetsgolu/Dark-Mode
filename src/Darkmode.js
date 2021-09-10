import React, { useState, useEffect } from "react";
import articles from "./data";

const getStroagetheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const Darkmode = () => {
  const [theme, settheme] = useState(getStroagetheme());

  const changemode = () => {
    if (theme === "light-theme") {
      settheme("dark-theme");
    } else {
      settheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="darkmode">
      <div className="darkmode_header">
        <h1>Dark Mode Project</h1>
        <button onClick={changemode}>Toggle</button>
      </div>
      <div className="darkmode_content">
        {articles.map((item) => (
          <>
            <h1>{item.title}</h1>
            <p>
              <span>{item.length} min read</span>
            </p>
            <p>{item.snippet}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Darkmode;
