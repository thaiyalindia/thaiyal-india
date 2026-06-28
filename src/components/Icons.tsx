import React from 'react';
import logoImage from '../assets/logo.png';

export function ThaiyalLogo({ className = 'w-32 h-auto' }: { className?: string }) 
{
  return (
    <img
      src={logoImage}
      alt="Thaiyal India"
      className={className}
    />
  );
}
