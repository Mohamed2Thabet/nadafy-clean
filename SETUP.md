# 🚀 دليل الإعداد والتشغيل - Nadafy Clean Setup Guide

## المتطلبات الأساسية

قبل البدء، تأكد من تثبيت:

- **Node.js** 18.17 أو أحدث
- **npm** أو **yarn** أو **pnpm**
- محرر نصوص (VS Code موصى به)

## خطوات التثبيت

### 1. تثبيت المكتبات

إذا كنت تستخدم PowerShell وواجهت مشكلة في تشغيل npm، قم بتشغيل هذا الأمر أولاً:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

ثم قم بتثبيت المكتبات:

```bash
npm install
```

أو باستخدام yarn:

```bash
yarn install
```

أو باستخدام pnpm:

```bash
pnpm install
```

### 2. إعداد ملف البيئة (اختياري)

انسخ ملف `.env.example` إلى `.env.local`:

```bash
cp .env.example .env.local
```

ثم عدّل القيم حسب احتياجاتك:

```env
NEXT_PUBLIC_SITE_URL=https://bariqclean.sa
NEXT_PUBLIC_WHATSAPP_NUMBER=966500000000
NEXT_PUBLIC_PHONE=+966 50 000 0000
NEXT_PUBLIC_EMAIL=info@bariqclean.sa
```

### 3. تشغيل السيرفر المحلي

```bash
npm run dev
```

الموقع سيعمل على: **http://localhost:3000**

### 4. البناء للإنتاج

```bash
npm run build
npm start
```

## 🔧 حل المشاكل الشائعة

### مشكلة: PowerShell لا يسمح بتشغيل npm

**الحل:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### مشكلة: خطأ في Tailwind CSS

تأكد من أن ملف `tailwind.config.ts` يحتوي على المسارات الصحيحة:

```typescript
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
```

### مشكلة: خطأ في ThemeProvider

تأكد من أن جميع الملفات التي تستخدم `useTheme` تحتوي على `'use client'` في أول سطر.

### مشكلة: الخط العربي لا يظهر

تأكد من أن ملف `layout.tsx` يحتوي على:

```typescript
const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
})
```

## 📁 هيكل الملفات المهمة

```
nadafy-clean/
├── src/
│   ├── app/                    # الصفحات والمسارات
│   ├── components/             # المكونات القابلة لإعادة الاستخدام
│   ├── config/                 # ملفات الإعدادات والبيانات
│   ├── types/                  # تعريفات TypeScript
│   └── providers/              # Context Providers
├── public/                     # الملفات الثابتة
├── tailwind.config.ts          # إعدادات Tailwind
├── tsconfig.json              # إعدادات TypeScript
└── package.json               # المكتبات والأوامر
```

## 🎨 تخصيص الموقع

### تغيير معلومات الشركة

عدّل ملف `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: 'بريق كلين - Bariq Clean',
  contact: {
    phone: '+966 50 000 0000',  // غيّر هنا
    email: 'info@bariqclean.sa', // غيّر هنا
    address: 'الرياض، المملكة العربية السعودية',
  },
  links: {
    whatsapp: 'https://wa.me/966500000000', // غيّر هنا
    // ...
  },
}
```

### إضافة خدمة جديدة

عدّل ملف `src/config/services.ts`:

```typescript
{
  id: '7',
  slug: 'new-service-slug',
  title: 'اسم الخدمة الجديدة',
  description: 'وصف الخدمة',
  icon: 'FaIcon', // اسم الأيقونة من react-icons
  features: [
    'ميزة 1',
    'ميزة 2',
    'ميزة 3',
  ],
  price: 'يبدأ من 299 ريال',
}
```

### تغيير الألوان

عدّل ملف `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    DEFAULT: '#00A3AD', // اللون الأساسي
    hover: '#008A93',   // لون الـ hover
  },
  // ...
}
```

## 🚀 النشر على الإنتاج

### Vercel (موصى به)

1. ادفع الكود إلى GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. استورد المشروع من GitHub
4. Vercel سيكتشف Next.js تلقائياً
5. انقر Deploy

### Netlify

```bash
npm run build
```

ثم ارفع مجلد `.next` و `public` إلى Netlify.

### خادم خاص

```bash
npm run build
npm start
```

أو استخدم PM2:

```bash
npm install -g pm2
pm2 start npm --name "nadafy-clean" -- start
```

## 📊 الأداء والتحسين

### تحسين الصور

ضع الصور في مجلد `public/images/` واستخدم:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="وصف الصورة"
  width={1200}
  height={600}
  priority
/>
```

### تحسين SEO

عدّل ملف `src/app/layout.tsx` لإضافة metadata:

```typescript
export const metadata: Metadata = {
  title: 'عنوان الموقع',
  description: 'وصف الموقع',
  keywords: ['كلمة مفتاحية 1', 'كلمة مفتاحية 2'],
}
```

## 🔒 الأمان

- لا تشارك ملف `.env.local` أبداً
- استخدم متغيرات البيئة للمعلومات الحساسة
- فعّل HTTPS في الإنتاج
- استخدم Content Security Policy

## 📞 الدعم الفني

إذا واجهت أي مشاكل:

1. تحقق من [Next.js Documentation](https://nextjs.org/docs)
2. تحقق من [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. ابحث في [GitHub Issues](https://github.com/vercel/next.js/issues)

## ✅ قائمة التحقق قبل النشر

- [ ] تم تحديث معلومات الاتصال في `src/config/site.ts`
- [ ] تم تحديث رابط WhatsApp
- [ ] تم إضافة الصور الحقيقية
- [ ] تم اختبار جميع الصفحات
- [ ] تم اختبار النموذج
- [ ] تم اختبار الوضع الداكن
- [ ] تم اختبار على الموبايل
- [ ] تم تحسين SEO
- [ ] تم إضافة Google Analytics (اختياري)
- [ ] تم اختبار السرعة على PageSpeed Insights

---

**بالتوفيق! 🎉**
