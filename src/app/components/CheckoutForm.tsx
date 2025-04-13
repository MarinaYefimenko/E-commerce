'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface CheckoutFormProps {
  onBack: () => void;
  onSubmit: (data: CheckoutFormData) => void;
}

export interface CheckoutFormData {
  name: string;
  email: string;
  address: string;
  phone?: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<CheckoutFormData>>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [touched, setTouched] = useState<Partial<CheckoutFormData>>({});

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<CheckoutFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const isValid = validateForm();
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    if (name === 'email' && value.trim()) {
      if (!validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Invalid email format' }));
      } else {
        setErrors(prev => ({ ...prev, email: undefined }));
      }
    }
  };

  return (
    <div className="space-y-4">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
      >
        <FaArrowLeft />
        Back to cart
      </button>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 block w-full h-12 rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-1 block w-full h-12 rounded-md border ${
              touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
            } shadow-sm focus:border-black focus:ring-black sm:text-sm px-4`}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Delivery Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 block w-full h-12 rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+1 (555) 555-5555"
            className="mt-1 block w-full h-12 rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg transition-colors ${
            isFormValid 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          To Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm; 