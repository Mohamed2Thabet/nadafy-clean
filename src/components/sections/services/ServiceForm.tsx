"use client";

import { services } from "@/config/services";
import React, { useState } from "react";
import { FaPhoneAlt, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

/**
 * Service booking form component
 * Modern card styling with UAE phone input (+971)
 */
export default function ServiceForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    serviceType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const serviceOptions = [
    { value: "", label: "اختر الخدمة المطلوبة" },
    ...services.map((service) => ({
      value: service.title,
      label: service.title,
    })),
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 9) {
      setFormData((prev) => ({
        ...prev,
        phoneNumber: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: `+971${formData.phoneNumber}`,
          email: "customer@service-form.com",
          service: formData.serviceType,
          message: `
            طلب خدمة جديد (الإمارات)
            
            الاسم: ${formData.fullName}
            رقم الهاتف: +971${formData.phoneNumber}
            الخدمة: ${formData.serviceType}
          `,
        }),
      });

      if (!response.ok) {
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        phoneNumber: "",
        serviceType: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <section
      className="py-20 bg-light-bg-primary dark:bg-dark-bg-primary"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Main Card */}
        <div className="bg-gradient-to-br from-[#0B1929] via-[#0F3D91] to-[#0F2744] text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-900/50">
          
          {/* Heading */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-accent/20 rounded-full border border-accent/30 text-accent font-cairo text-xs font-bold">
              <FaCheckCircle className="text-[#F59E0B]" />
              نقدم خدماتنا في جميع أنحاء الإمارات
            </div>
            <h2 className="font-cairo text-3xl md:text-4xl font-black text-white mb-4">
              اطلب خدمتك الآن بسهولة
            </h2>
            <p className="font-cairo text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              أدخل بياناتك وسيتواصل معك فريقنا في أقرب وقت لتأكيد حجزك وتحديد الموعد المناسب.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="الاسم الكريم"
                required
                className="
                  w-full
                  px-4
                  py-3.5
                  rounded-xl
                  bg-white/10
                  backdrop-blur-md
                  text-white
                  placeholder:text-slate-400
                  border
                  border-white/20
                  focus:border-accent
                  focus:bg-white/15
                  focus:outline-none
                  transition-all
                  duration-300
                  font-cairo
                "
              />
            </div>

            {/* Phone Number */}
            <div>
              <div className="flex items-center gap-2">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="50xxxxxxx"
                  required
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    bg-white/10
                    backdrop-blur-md
                    text-white
                    placeholder:text-slate-400
                    border
                    border-white/20
                    focus:border-accent
                    focus:bg-white/15
                    focus:outline-none
                    transition-all
                    duration-300
                    font-cairo
                    dir-ltr
                  "
                />

                {/* Country Code */}
                <div
                  className="
                    min-w-[80px]
                    h-[52px]
                    rounded-xl
                    bg-white/15
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    font-cairo
                    dir-ltr
                    text-sm
                  "
                >
                  +971
                </div>
              </div>
            </div>

            {/* Service Type Select */}
            <div className="relative">
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="
                  w-full
                  px-4
                  py-3.5
                  rounded-xl
                  appearance-none
                  cursor-pointer
                  bg-white/10
                  backdrop-blur-md
                  text-white
                  border
                  border-white/20
                  focus:border-accent
                  focus:bg-white/15
                  focus:outline-none
                  transition-all
                  duration-300
                  font-cairo
                "
              >
                {serviceOptions.map((service) => (
                  <option
                    key={service.value}
                    value={service.value}
                    disabled={service.value === ""}
                    hidden={service.value === ""}
                    className="text-slate-900 bg-white"
                  >
                    {service.label}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-slate-300">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full
                  py-3.5
                  px-6
                  rounded-xl
                  bg-gradient-to-r
                  from-[#F59E0B]
                  to-[#D97706]
                  hover:from-[#D97706]
                  hover:to-[#F59E0B]
                  disabled:opacity-70
                  text-white
                  font-bold
                  font-cairo
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  shadow-lg
                  shadow-orange-500/20
                "
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
              </button>
            </div>
          </form>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mt-6 p-4 rounded-xl border border-emerald-500 bg-emerald-500/20">
              <p className="text-center text-emerald-300 font-bold font-cairo">
                ✓ تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mt-6 p-4 rounded-xl border border-rose-500 bg-rose-500/20">
              <p className="text-center text-rose-300 font-bold font-cairo">
                حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
