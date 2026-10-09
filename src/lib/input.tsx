import React from 'react';
import { useField } from 'formik';

interface FormikInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    as?: 'input' | 'textarea' | 'select';
    rows?: number;
    disabled?: boolean;
    required?: boolean;
    children?: React.ReactNode;
}

export const FormikInput: React.FC<FormikInputProps> = ({
    label,
    name,
    type = 'text',
    placeholder,
    as = 'input',
    rows = 3,
    disabled,
    required,
    children,
}) => {
    const [field, meta] = useField(name);
    const isError = meta.touched && Boolean(meta.error);

    const inputBaseClass = `w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#004d28] focus:outline-none focus:ring-2 focus:ring-[#004d28]/20 transition-all duration-200 shadow-2xs ${
        isError ? 'border-red-500 bg-red-50/40 text-red-950 focus:border-red-500 focus:ring-red-500/20' : ''
    }`;

    return (
        <div className="form-group flex flex-col space-y-1.5">
            <label htmlFor={name} className="text-xs font-bold text-slate-800">
                {label}{required && <span className="text-red-500 ml-0.5">*</span>}
            </label>

            {as === 'textarea' ? (
                <textarea
                    {...field}
                    id={name}
                    rows={rows}
                    placeholder={placeholder}
                    className={inputBaseClass}
                    disabled={disabled}
                />
            ) : as === 'select' ? (
                <select
                    {...field}
                    id={name}
                    className={inputBaseClass}
                    disabled={disabled}
                >
                    {children}
                </select>
            ) : (
                <input
                    {...field}
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    className={inputBaseClass}
                    disabled={disabled}
                />
            )}

            {isError && <span className="text-[11px] font-bold text-red-500 mt-0.5">{meta.error}</span>}
        </div>
    );
};