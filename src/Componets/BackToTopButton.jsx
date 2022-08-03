import React from "react";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="button">
        {backToTopButton && (
          <button
            style={{
              position: "fixed",
              backgroundColor: "black",
              color: "white",
              bottom: "40px",
              right: "50px",
              height: "40px",
              width: "40px",
              fontSize: "30px",
            }}
            onClick={scrollUp}
          >
            ^
          </button>
        )}
      </div>
    </>
  );
};

export default BackToTopButton;
