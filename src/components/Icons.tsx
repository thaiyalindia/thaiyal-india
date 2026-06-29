import React from 'react';

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

export function ThaiyalLogo({ className = 'w-32 h-auto', showText = true }: { className?: string, showText?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 220"
      className={className}
      id="thaiyal-logo-svg"
    >
      {/* Tamil Stylized Lettering "தையல்" (Maroon #922544) */}
      <g stroke="#922544" strokeWidth="9.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Left top horizontal bar */}
        <path d="M 25,12 H 160" />
        
        {/* Left double loops */}
        {/* Loop 1 */}
        <circle cx="70" cy="55" r="22" />
        {/* Loop 2 */}
        <circle cx="125" cy="55" r="22" />
        
        {/* Tail loop on the middle character */}
        <path d="M 125,77 C 145,77 155,60 155,40 C 155,20 145,12 135,12" />
        
        {/* Right character */}
        <path d="M 190,12 H 265 C 295,12 315,35 295,60 C 275,80 235,80 215,80 C 195,80 190,105 215,105 C 245,105 295,85 305,55" />
        
        {/* Sweeping thread cradle */}
        <path d="M 95,120 C 95,160 185,178 245,158 C 290,143 310,105 300,75 C 290,45 255,25 220,15" />
      </g>

      {/* English Branding text in Teal #16a3ba */}
      {showText && (
        <g fill="#16a3ba" fontFamily="system-ui, -apple-system, sans-serif">
          <text 
            x="178" 
            y="126" 
            textAnchor="middle" 
            fontSize="38" 
            fontWeight="bold" 
            letterSpacing="-0.02em"
          >
            Thaiyal
          </text>
          <text 
            x="185" 
            y="196" 
            textAnchor="middle" 
            fontSize="23" 
            fontWeight="bold" 
            letterSpacing="0.45em"
          >
            INDIA
          </text>
        </g>
      )}
    </svg>
  );
}
