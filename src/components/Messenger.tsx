import React, { useState, FC, ReactNode } from "react";

type MessengerProps = {
  children: ReactNode;
};

const Messenger: FC<MessengerProps> = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggleMessenger = () => {
    setActive(!active);
  };

  const messengerButtonStyles: React.CSSProperties = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: active ? "#007aff" : "#ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const messengerContentStyles: React.CSSProperties = {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "300px",
    height: "400px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    display: active ? "block" : "none",
    zIndex: 9999,
  };

  return (
    <>
      <div style={messengerButtonStyles} onClick={toggleMessenger}>
        <i className="fa fa-comments" aria-hidden="true"></i>
      </div>
      <div style={messengerContentStyles}>{children}</div>
    </>
  );
};

export default Messenger;
