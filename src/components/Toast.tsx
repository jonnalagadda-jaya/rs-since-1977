import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  isOpen,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  const bgStyles = {
    success: 'bg-[#004d28] text-white border-emerald-600 shadow-emerald-950/20',
    error: 'bg-red-900 text-white border-red-700 shadow-red-950/20',
    info: 'bg-slate-900 text-white border-slate-700 shadow-slate-950/20',
  }[type];

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-red-300 shrink-0" />,
    info: <Info className="w-5 h-5 text-emerald-300 shrink-0" />,
  }[type];

  return (
    <div className="fixed top-6 right-4 sm:right-6 z-50 max-w-md w-auto animate-fade-in pointer-events-auto">
      <div className={`flex items-center space-x-3 px-5 py-3.5 rounded-2xl border shadow-2xl backdrop-blur-md ${bgStyles}`}>
        {icons}
        <span className="text-xs sm:text-sm font-bold tracking-wide pr-2">
          {message}
        </span>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer ml-auto"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
