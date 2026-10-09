import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { FormikInput } from '../lib/input';
import { FormikPhoneInput } from '../lib/phoneInput';
import { STORE_INFO } from '../data/storeData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast?: (message: string, type?: 'success' | 'error') => void;
}

// Validation Schema using Yup
const ContactModalSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(2, 'First name is too short')
    .required('First name is required'),
  lastName: Yup.string()
    .trim()
    .min(1, 'Last name is required')
    .required('Last name is required'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email address is required'),
  phone: Yup.string()
    .trim()
    .min(6, 'Please enter a valid phone number')
    .required('Phone number is required'),
  comments: Yup.string()
    .trim()
    .optional(), // Comments are NOT mandatory
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
  };

  const handleSubmit = async (values: FormValues, { resetForm, setSubmitting }: any) => {
    setSubmitStatus('idle');
    setStatusMessage('');

    // Template variables passed to EmailJS
    const templateParams = {
      first_name: values.firstName,
      last_name: values.lastName,
      from_name: `${values.firstName} ${values.lastName}`,
      from_email: values.email,
      phone: values.phone,
      comments: values.comments || 'No comments provided',
      to_email: 'rssince1977@gmail.com',
      reply_to: values.email,
    };

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_qc0u1qj';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_l07rxs2';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'kjQM3nLuaik0ZUOea';

    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log('EmailJS Success Response:', response);

      if (onShowToast) {
        onShowToast('Request has been submitted', 'success');
      } else {
        setSubmitStatus('success');
        setStatusMessage('Request has been submitted');
      }
      resetForm();
      onClose();
    } catch (err: any) {
      console.error('EmailJS Delivery Error:', err);
      const detail = err?.text || err?.message || 'Email delivery failed. Please check your EmailJS Service ID and Template ID.';
      if (onShowToast) {
        onShowToast(`Unable to send email: ${detail}`, 'error');
      } else {
        setSubmitStatus('error');
        setStatusMessage(`Unable to send email: ${detail}`);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-900/20 relative p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 border-b border-slate-100 pb-4 pr-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#004d28]">
              SHOWROOM INQUIRY FORM
            </h2>
          </div>
        </div>

        {/* Feedback Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start space-x-3 text-xs font-semibold animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-[#004d28] shrink-0 mt-0.5" />
            <span>{statusMessage}</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 flex items-start space-x-3 text-xs font-semibold animate-fade-in">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Formik Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={ContactModalSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">

              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormikInput
                  label="First Name"
                  name="firstName"
                  placeholder="e.g. Rajesh"
                  required
                />

                <FormikInput
                  label="Last Name"
                  name="lastName"
                  placeholder="e.g. Kumar"
                  required
                />
              </div>

              {/* Email & Phone Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormikInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="e.g. rajesh@example.com"
                  required
                />

                <FormikPhoneInput
                  label="Phone Number"
                  name="phone"
                  required
                />
              </div>

              {/* Comments / Message - NOT Mandatory */}
              <FormikInput
                label="Comments / Inquiry Message (Optional)"
                name="comments"
                as="textarea"
                rows={3}
                placeholder="Tell us about the fabric, readymade size, saree type, or school/industrial uniform requirement..."
              />

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#004d28] hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Request</span>
                    </>
                  )}
                </button>
              </div>

            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
};
