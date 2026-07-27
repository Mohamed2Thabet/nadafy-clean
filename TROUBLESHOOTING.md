# 🔧 دليل حل المشاكل - Troubleshooting Guide

## المشاكل الشائعة وحلولها

### 1. خطأ: "useTheme must be used within a ThemeProvider"

**السبب:** مكون يحاول استخدام `useTheme` قبل تحميل `ThemeProvider`.

**الحل:**
- تأكد من أن جميع المكونات التي تستخدم `useTheme` تحتوي على `'use client'` في أول سطر
- تأكد من أن `ThemeProvider` يغلف جميع المكونات في `layout.tsx`
- امسح الكاش وأعد تشغيل السيرفر:

```bash
rm -rf .next
npm run dev
```

### 2. خطأ: PowerShell لا يسمح بتشغيل npm

**الخطأ:**
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded
because running scripts is disabled on this system.
```

**الحل:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 3. خطأ: Tailwind CSS - "class does not exist"

**السبب:** استخدام class غير معرف في Tailwind.

**الحل:**
- تحقق من `tailwind.config.ts` أن جميع الألوان معرفة بشكل صحيح
- تأكد من أن `content` يشمل جميع الملفات:

```typescript
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
```

### 4. الخط العربي لا يظهر بشكل صحيح

**الحل:**
- تأكد من أن `layout.tsx` يحتوي على:

```typescript
const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
})
```

- تأكد من أن HTML يحتوي على `dir="rtl"`:

```typescript
<html lang="ar" dir="rtl" className={cairo.variable}>
```

### 5. الوضع الداكن لا يعمل

**الحل:**
1. تحقق من أن `tailwind.config.ts` يحتوي على:
```typescript
darkMode: 'class',
```

2. تحقق من أن `ThemeProvider` يعمل بشكل صحيح
3. افتح Developer Tools وتحقق من أن `<html>` يحتوي على class `dark` عند التبديل

### 6. خطأ في البناء (Build Error)

**الحل:**
```bash
# امسح الكاش
rm -rf .next
rm -rf node_modules
rm package-lock.json

# أعد التثبيت
npm install

# أعد البناء
npm run build
```

### 7. الصور لا تظهر

**الحل:**
- تأكد من أن الصور في مجلد `public/`
- استخدم Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="وصف"
  width={1200}
  height={600}
/>
```

### 8. خطأ: "Module not found"

**الحل:**
```bash
# تأكد من تثبيت جميع المكتبات
npm install

# إذا استمرت المشكلة
npm install --legacy-peer-deps
```

### 9. الموقع بطيء في التطوير

**الحل:**
- استخدم Turbopack (أسرع):
```bash
npm run dev -- --turbo
```

- أو قلل عدد الملفات المراقبة في `next.config.js`:
```javascript
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
```

### 10. خطأ في TypeScript

**الحل:**
```bash
# تحقق من الأخطاء
npm run build

# إذا كانت أخطاء Type فقط، يمكنك تجاهلها مؤقتاً في next.config.js:
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // استخدم بحذر!
  },
}
```

## أوامر مفيدة للتشخيص

### فحص المكتبات المثبتة
```bash
npm list
```

### فحص إصدار Next.js
```bash
npm list next
```

### تحديث المكتبات
```bash
npm update
```

### فحص الأخطاء في الكود
```bash
npm run lint
```

### مسح الكاش بالكامل
```bash
rm -rf .next node_modules package-lock.json
npm install
```

## نصائح للأداء

### 1. تحسين الصور
- استخدم WebP format
- ضغط الصور قبل رفعها
- استخدم `priority` للصور المهمة

### 2. تقليل حجم Bundle
```bash
# تحليل حجم Bundle
npm install -D @next/bundle-analyzer

# في next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# تشغيل التحليل
ANALYZE=true npm run build
```

### 3. استخدام Dynamic Imports
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

## الحصول على المساعدة

إذا لم تجد حلاً لمشكلتك:

1. **Next.js Documentation**: https://nextjs.org/docs
2. **Tailwind CSS Documentation**: https://tailwindcss.com/docs
3. **GitHub Issues**: https://github.com/vercel/next.js/issues
4. **Stack Overflow**: https://stackoverflow.com/questions/tagged/next.js

## معلومات النظام

للحصول على معلومات النظام للمساعدة في التشخيص:

```bash
node -v
npm -v
npx next info
```

---

**آخر تحديث:** 2024
