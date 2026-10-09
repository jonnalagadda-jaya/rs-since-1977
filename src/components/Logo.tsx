import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'emerald';
  showSubtext?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'emerald',
  showSubtext = true
}) => {
  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-36',
  };

  const textColor = {
    emerald: 'text-[#004d28]',
    light: 'text-white',
    dark: 'text-slate-900',
  }[variant];

  const subtextColor = {
    emerald: 'text-emerald-800',
    light: 'text-amber-300',
    dark: 'text-slate-600',
  }[variant];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="RS SINCE - 1977 Logo"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-sm`}
        onError={(e) => {
          // Fallback to inline SVG if image doesn't load
          e.currentTarget.style.display = 'none';
        }}
      />
      <div>
        {showSubtext && (
          <div className={`text-[12px] font-bold tracking-widest uppercase mt-0.5 ${subtextColor}`}>
            Fabrics • Gents Readymades • Sarees
          </div>
        )}
      </div>
    </div>
  );
};
