import React, { useState } from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  width: string;
  margin: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const x = event.clientX - buttonRect.left;
    const y = event.clientY - buttonRect.top;
    setGradientPosition({ x, y });
  };

  const gradientStyle: React.CSSProperties = {
    background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, #FF385C 0%,#E61E4D 27.5%,#E31C5F 40%,#D70466 57.5%,#BD1E59 75%,#BD1E59 100%)`,
    width: `${props.width}`,
    margin: `${props.margin}`,
  };

  return (
    <button
      className="gradient-button"
      onMouseMove={handleMouseMove}
      style={gradientStyle}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
