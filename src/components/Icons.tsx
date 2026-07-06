import React from 'react';
import logoImage from '../assets/brand/logo.png';

export function NeedleThreadIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Needle */}
      <line x1="4" y1="20" x2="16" y2="8" strokeWidth="2" />
      {/* Eye of the needle */}
      <circle cx="15" cy="9" r="1" fill="currentColor" />
      {/* Thread loops wrapping around and coming out of eye */}
      <path
        d="M15 9 C 18 6, 20 12, 17 15 C 14 18, 12 12, 15 9"
        strokeWidth="1.5"
        strokeDasharray="1 1"
        className="animate-pulse"
      />
      <path
        d="M17 15 C 19 17, 21 14, 20 10 C 19 6, 11 4, 8 8"
        strokeWidth="1"
      />
    </svg>
  );
}

export function HeartHandIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function ThaiyalLogo({ className = 'w-32 h-auto' }: { className?: string }) {
  return <img src={logoImage} alt="Thaiyal India" className={className} />;
}
