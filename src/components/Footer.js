import React from "react";

function Footer() {
  return (
    <footer className="bg-my h-32 flex flex-col justify-center items-center">
      <p>Copyright © 2020 Andrew Nelli, all rights reserved</p>

      <p>
        Made with{" "}
        <span role="img" aria-label="hearth">
          💙
        </span>
        &
        <span role="img" aria-label="coffe">
          ☕
        </span>
      </p>
    </footer>
  );
}

export default Footer;
