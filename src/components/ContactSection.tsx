import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { FormikInput } from '../lib/input';
import { FormikPhoneInput } from '../lib/phoneInput';
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

// Validation Schema using Yup
const ContactFormSchema = Yup.object().shape({
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

interface ContactSectionProps {
  onShowToast?: (message: string, type?: 'success' | 'error') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
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

    // EmailJS Configuration
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
    <section id="contact" className="scroll-mt-28 py-12 lg:py-16 px-4 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] font-bold text-[#004d28] uppercase tracking-widest bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Contact & Showroom Inquiry</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Get In Touch With RS SINCE - 1977
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Have questions about readymades, silk sarees, fabrics, custom tailoring, or school & industrial uniform orders? Send us an inquiry below!
          </p>
        </div>

        {/* 2-Column Grid: Left Info & Right Formik Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Showroom Quick Details */}
          <div className="lg:col-span-5 bg-[#004d28] text-white p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl border border-emerald-800">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                Direct Inquiry Receiver
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                rssince1977@gmail.com
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                All submitted form inquiries are routed directly to our showroom management team.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-emerald-800/80 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Showroom Address</h4>
                  <p className="text-emerald-100 leading-relaxed">{STORE_INFO.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-300 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Store Hotline</h4>
                  <p className="text-emerald-100">{STORE_INFO.phoneFormatted}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-300 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Official Email</h4>
                  <p className="text-emerald-100">rssince1977@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-950/70 p-4 rounded-2xl border border-emerald-700/60 text-xs text-emerald-200 space-y-1">
              <span className="font-bold text-amber-300 block">✦ Services Offered:</span>
              <p>Gents Readymades • Silk Sarees • Custom Tailoring • School & Industrial Uniforms</p>
            </div>
          </div>

          {/* Right Formik Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-200 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Send Message
              </h3>
            </div>

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

            <Formik
              initialValues={initialValues}
              validationSchema={ContactFormSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-5">

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
                    rows={4}
                    placeholder="Tell us about the fabric, readymade size, saree type, or school/industrial uniform requirement..."
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#004d28] hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                </Form>
              )}
            </Formik>

          </div>

        </div>

      </div>
    </section>
  );
};
