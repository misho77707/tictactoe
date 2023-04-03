import React from 'react';

const Popup = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "block" : "none";
    console.log(show)
  return (
    <div id="back" style={{display: showHideClassName}}>
    <div style={{display: showHideClassName,textAlign: 'center'}}>
      <section className="popup-main">
        <button id="restart" onClick={() => window.location.reload(false)}>Restart?</button>
        <p id='Child'>{children}</p>
      </section>
    </div>
    </div>
  );
};

export default Popup;