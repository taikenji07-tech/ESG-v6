
import React, { useState } from 'react';
import { validateEmailWithAI, validatePhoneNumberWithAI } from './geminiService';
import type { Language } from './types';

interface OnboardingFormProps {
    t: (key: string, replacements?: Record<string, string | number>) => string;
    onSubmit: (data: {
        name: string;
        fullName: string;
        email: string;
        phone: string;
        university: string;
    }) => void;
    language: Language;
}

interface FormData {
    name: string;
    fullName: string;
    email: string;
    phone: string;
    university: string;
}

const universities = [
  "Universiti Tun Hussein Onn Malaysia (UTHM)",
  "Universiti Sains Malaysia (USM)",
  "Universiti Kebangsaan Malaysia (UKM)",
  "Universiti Putra Malaysia (UPM)",
  "Universiti Teknologi Malaysia (UTM)",
  "Universiti Islam Antarabangsa Malaysia (UIAM)",
  "Universiti Utara Malaysia (UUM)",
  "Universiti Malaysia Sarawak (UNIMAS)",
  "Universiti Malaysia Sabah (UMS)",
  "Universiti Pendidikan Sultan Idris (UPSI)",
  "Universiti Sains Islam Malaysia (USIM)",
  "Universiti Teknologi MARA (UiTM)",
  "Universiti Malaysia Terengganu (UMT)",
  "Universiti Malaya (UM)",
  "Universiti Teknikal Malaysia Melaka (UTeM)",
  "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
  "Universiti Malaysia Perlis (UniMAP)",
  "Universiti Sultan Zainal Abidin (UniSZA)",
  "Universiti Malaysia Kelantan (UMK)",
  "Universiti Pertahanan Nasional Malaysia (UPNM)"
];


export const OnboardingForm: React.FC<OnboardingFormProps> = ({ t, onSubmit, language }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        fullName: '',
        email: '',
        phone: '',
        university: '',
    });
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name as keyof FormData];
                return newErrors;
            });
        }
    };

    const validateForm = async (): Promise<boolean> => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = t('error_required');
            isValid = false;
        }
        if (!formData.fullName.trim()) {
            newErrors.fullName = t('error_required');
            isValid = false;
        }
        if (!formData.university.trim()) {
            newErrors.university = t('error_required');
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = t('error_required');
            isValid = false;
        }
        if (!formData.phone.trim()) {
            newErrors.phone = t('error_required');
            isValid = false;
        }

        if (!isValid) {
            setErrors(newErrors);
            return false;
        }

        setIsSubmitting(true);
        
        // Parallel AI validation
        const [emailResult, phoneResult] = await Promise.all([
            validateEmailWithAI(formData.email),
            validatePhoneNumberWithAI(formData.phone)
        ]);
        
        let aiValidationPassed = true;
        if (!emailResult.isValid) {
            const translatedReason = language === 'ms' ? await translateToMalay(emailResult.reason) : emailResult.reason;
            newErrors.email = translatedReason;
            aiValidationPassed = false;
        }
        if (!phoneResult.isValid) {
            const translatedReason = language === 'ms' ? await translateToMalay(phoneResult.reason) : phoneResult.reason;
            newErrors.phone = translatedReason;
            aiValidationPassed = false;
        }
        
        if (!aiValidationPassed) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return false;
        }
        
        return true;
    };
    
    // Helper function for Malay translation, needs to be defined within the file or imported.
    const translateToMalay = async (text: string) => {
        // This is a placeholder for the actual translation logic,
        // which would typically involve an API call.
        // For now, we'll just return the original text with a marker.
        // In a real app, you would import this from your geminiService.
         try {
            const { translateToMalay } = await import('./geminiService');
            return await translateToMalay(text);
        } catch (e) {
            console.error("Translation service not available");
            return text;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;

        const isValid = await validateForm();
        if (isValid) {
            onSubmit(formData);
        }
    };

    return (
        <div className="flex justify-center items-start min-h-full p-4 md:py-12 animate-fade-in-up">
            <div className="w-full max-w-md bg-surface-b p-8 rounded-3xl shadow-2xl border border-border-color">
                <h2 className="text-3xl font-bold text-center mb-2 text-text-main">{t('onboarding_title')}</h2>
                <p className="text-center text-text-dim mb-8">{t('onboarding_subtitle')}</p>
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                        <label htmlFor="name" className="onboarding-label">{t('label_name')}</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t('placeholder_name')} className="onboarding-input" required />
                        {errors.name && <p className="onboarding-error">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="fullName" className="onboarding-label">{t('label_fullname')}</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder={t('placeholder_fullname')} className="onboarding-input" required />
                        {errors.fullName && <p className="onboarding-error">{errors.fullName}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="onboarding-label">{t('label_email')}</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('placeholder_email')} className="onboarding-input" required />
                        {errors.email && <p className="onboarding-error">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="onboarding-label">{t('label_phone')}</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('placeholder_phone')} className="onboarding-input" required />
                        {errors.phone && <p className="onboarding-error">{errors.phone}</p>}
                    </div>
                    <div>
                        <label htmlFor="university" className="onboarding-label">{t('label_university')}</label>
                        <select 
                            id="university" 
                            name="university" 
                            value={formData.university} 
                            onChange={handleChange} 
                            className="onboarding-input" 
                            required
                        >
                            <option value="" disabled>{t('placeholder_university')}</option>
                            {universities.map(uni => (
                                <option key={uni} value={uni}>{uni}</option>
                            ))}
                        </select>
                        {errors.university && <p className="onboarding-error">{errors.university}</p>}
                    </div>

                    <button type="submit" disabled={isSubmitting} className="onboarding-submit-button">
                        {isSubmitting ? t('btn_submitting') : t('btn_lets_go')}
                    </button>
                </form>
            </div>
        </div>
    );
};
