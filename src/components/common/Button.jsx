import React from 'react';


const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  className = '', 
  disabled = false 
}) => {
  const baseClasses = `
    px-4 py-2 
    border-3 border-neo-black 
    bg-neo-white 
    hover:bg-neo-gray 
    transition-all duration-300 
    font-bold
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-neo'}
  `;


  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};


export default Button;