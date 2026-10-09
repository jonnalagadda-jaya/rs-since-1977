import React from 'react';
import { useField } from 'formik';
import PhoneInputReact from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = (PhoneInputReact as any).default || PhoneInputReact;

interface FormikPhoneInputProps {
    label: string;
    name: string;
    disabled?: boolean;
    required?: boolean;
}

export const FormikPhoneInput: React.FC<FormikPhoneInputProps> = ({ label, name, disabled, required }) => {
    const [field, meta, helpers] = useField(name);
    const isError = meta.touched && Boolean(meta.error);

    return (
        <div className="form-group phone-group-field flex flex-col space-y-1.5">
            <label htmlFor={name} className="text-xs font-bold text-slate-800">
                {label}{required && <span className="text-red-500 ml-0.5">*</span>}
            </label>

            <div className="w-full">
                <PhoneInput
                    country={'in'}
                    value={field.value}
                    onChange={(value: string) => helpers.setValue(value)}
                    onBlur={() => helpers.setTouched(true)}
                    disabled={disabled}
                    inputProps={{
                        name: name,
                        id: name,
                    }}
                    containerClass="phone-input-container w-full"
                    inputClass={`phone-input-field ${isError ? 'error-input' : ''}`}
                    buttonClass="phone-input-button"
                />
            </div>

            {isError && <span className="text-[11px] font-bold text-red-500 mt-0.5">{meta.error}</span>}
        </div>
    );
};