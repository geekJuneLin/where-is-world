import React from "react";

function Header(props) {
  function switchMode() {
    props.switchMode();
  }

  return (
    <header>
      <div className="row">
        <div className="brand-title">Where in the world?</div>
        <div className="mode-switch">
          <button onClick={switchMode}>
            <i className="far fa-moon switch-icon"></i> Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
