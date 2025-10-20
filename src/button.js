import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
