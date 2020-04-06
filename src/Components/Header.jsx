import React from "react";

function Header(props) {
  function switchMode() {
    props.switchMode();
  }

  return (
    <header className={props.darkMode ? "header-dark" : undefined}>
      <div className="row">
        <div
          className={
            props.darkMode
              ? "brand-title-dark brand-title-mobile"
              : "brand-title brand-title-mobile"
          }
        >
          Where in the world?
        </div>
        <div className="mode-switch">
          <button
            onClick={switchMode}
            style={{
              backgroundColor: props.darkMode && "hsl(209, 23%, 22%)",
              color: props.darkMode && "#fff",
            }}
          >
            <i className="far fa-moon switch-icon"></i> Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
