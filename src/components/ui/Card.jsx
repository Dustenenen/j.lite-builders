import React from 'react';

const CardContent = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

const Card = ({ children, onClick, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export { Card, CardContent };
