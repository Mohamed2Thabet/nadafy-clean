# 📂 هيكل المشروع - Project Structure

## نظرة عامة

هذا المشروع مبني باستخدام Next.js 14 مع App Router، TypeScript، و Tailwind CSS.

## الهيكل الكامل

```
nadafy-clean/
│
├── public/                          # الملفات الثابتة
│   ├── robots.txt                  # ملف robots للـ SEO
│   └── images/                     # الصور (يجب إضافتها)
│
├── src/                            # المجلد الرئيسي للكود
│   │
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx             # Root Layout (RTL + Theme)
│   │   ├── page.tsx               # الصفحة الرئيسية
│   │   ├── loading.tsx            # Loading UI
│   │   ├── error.tsx              # Error UI
│   │   ├── not-found.tsx          # 404 Page
│   │   ├── globals.css            # Global Styles
│   │   ├── sitemap.ts             # Sitemap Generator
│   │   ├── manifest.ts            # PWA Manifest
│   │   ├── icon.tsx               # Favicon Generator
│   │   ├── apple-icon.tsx         # Apple Touch Icon
│   │   │
│   │   ├── about/                 # صفحة من نحن
│   │   │   └── page.tsx
│   │   │
│   │   ├── services/              # صفحات الخدمات
│   │   │   ├── page.tsx          # قائمة الخدمات
│   │   │   └── [slug]/           # صفحات ديناميكية
│   │   │       └── page.tsx
│   │   │
│   │   ├── faq/                   # صفحة الأسئلة الشائعة
│   │   │   └── page.tsx
│   │   │
│   │   └── contact/               # صفحة التواصل
│   │       └── page.tsx
│   │
│   ├── components/                 # المكونات
│   │   │
│   │   ├── ui/                    # مكونات UI الأساسية
│   │   │   ├── Button.tsx        # زر قابل لإعادة الاستخدام
│   │   │   ├── Input.tsx         # حقل إدخال
│   │   │   ├── Select.tsx        # قائمة منسدلة
│   │   │   ├── Textarea.tsx      # حقل نص متعدد الأسطر
│   │   │   ├── Container.tsx     # حاوية للمحتوى
│   │   │   ├── SectionTitle.tsx  # عنوان القسم
│   │   │   └── ThemeToggle.tsx   # زر تبديل الثيم
│   │   │
│   │   ├── layout/                # مكونات التخطيط
│   │   │   ├── Header.tsx        # الهيدر (مع قائمة موبايل)
│   │   │   ├── Footer.tsx        # الفوتر
│   │   │   └── ClientLayout.tsx  # Client Wrapper
│   │   │
│   │   └── sections/              # أقسام الصفحات
│   │       │
│   │       ├── home/              # أقسام الصفحة الرئيسية
│   │       │   ├── HeroSection.tsx
│   │       │   ├── WhyChooseUsSection.tsx
│   │       │   ├── BeforeAfterSection.tsx
│   │       │   └── ReviewsSection.tsx
│   │       │
│   │       ├── services/          # أقسام الخدمات
│   │       │   └── ServicesGrid.tsx
│   │       │
│   │       ├── faq/               # أقسام FAQ
│   │       │   └── FAQAccordion.tsx
│   │       │
│   │       └── contact/           # أقسام التواصل
│   │           └── ContactForm.tsx
│   │
│   ├── config/                     # ملفات الإعدادات
│   │   ├── site.ts                # إعدادات الموقع العامة
│   │   ├── services.ts            # بيانات الخدمات
│   │   ├── reviews.ts             # بيانات التقييمات
│   │   ├── faq.ts                 # بيانات الأسئلة الشائعة
│   │   └── whyChooseUs.ts         # بيانات لماذا نحن
│   │
│   ├── types/                      # TypeScript Types
│   │   └── index.ts               # جميع التعريفات
│   │
│   └── providers/                  # Context Providers
│       └── ThemeProvider.tsx      # Theme Context
│
├── .env.example                    # مثال لملف البيئة
├── .eslintrc.json                 # إعدادات ESLint
├── .gitignore                     # ملفات Git المتجاهلة
├── next.config.js                 # إعدادات Next.js
├── package.json                   # المكتبات والأوامر
├── postcss.config.js              # إعدادات PostCSS
├── tailwind.config.ts             # إعدادات Tailwind
├── tsconfig.json                  # إعدادات TypeScript
├── README.md                      # الوثائق الرئيسية
├── SETUP.md                       # دليل الإعداد
├── TROUBLESHOOTING.md             # دليل حل المشاكل
└── PROJECT_STRUCTURE.md           # هذا الملف
```

## شرح المجلدات الرئيسية

### 📁 `src/app/`
يحتوي على جميع الصفحات والمسارات باستخدام Next.js App Router.

**الملفات الخاصة:**
- `layout.tsx` - التخطيط الرئيسي (يطبق على جميع الصفحات)
- `page.tsx` - محتوى الصفحة
- `loading.tsx` - واجهة التحميل
- `error.tsx` - واجهة الأخطاء
- `not-found.tsx` - صفحة 404

### 📁 `src/components/`
يحتوي على جميع المكونات القابلة لإعادة الاستخدام.

**التقسيم:**
- `ui/` - مكونات UI الأساسية (Button, Input, etc.)
- `layout/` - مكونات التخطيط (Header, Footer)
- `sections/` - أقسام الصفحات الكبيرة

### 📁 `src/config/`
يحتوي على جميع البيانات والإعدادات الثابتة.

**الملفات:**
- `site.ts` - معلومات الموقع، SEO، روابط التواصل
- `services.ts` - قائمة الخدمات
- `reviews.ts` - تقييمات العملاء
- `faq.ts` - الأسئلة الشائعة
- `whyChooseUs.ts` - مميزات الشركة

### 📁 `src/types/`
يحتوي على تعريفات TypeScript للأنواع المستخدمة في المشروع.

### 📁 `src/providers/`
يحتوي على Context Providers (مثل ThemeProvider).

## أنواع المكونات

### Server Components (افتراضي)
المكونات التي لا تحتاج إلى تفاعل من المستخدم:
- `page.tsx` files
- `layout.tsx` (الجزء الخارجي)
- معظم أقسام المحتوى

### Client Components (`'use client'`)
المكونات التي تحتاج إلى تفاعل:
- `Header.tsx` (قائمة موبايل)
- `ThemeToggle.tsx` (تبديل الثيم)
- `ContactForm.tsx` (نموذج)
- `FAQAccordion.tsx` (Framer Motion)
- `ThemeProvider.tsx` (Context)

## المسارات (Routes)

```
/                           → الصفحة الرئيسية
/about                      → من نحن
/services                   → جميع الخدمات
/services/[slug]            → صفحة خدمة محددة
  ├── /services/residential-deep-cleaning
  ├── /services/steam-cleaning
  ├── /services/office-commercial-cleaning
  ├── /services/ac-cleaning
  ├── /services/sanitization-disinfection
  └── /services/marble-polishing
/faq                        → الأسئلة الشائعة
/contact                    → تواصل معنا
```

## نظام الألوان

### Tailwind Classes المخصصة

```css
/* Accent Color */
bg-accent                   → #00A3AD
text-accent                 → #00A3AD
border-accent               → #00A3AD

/* Light Mode */
bg-light-bg-primary         → #F8F9FA
bg-light-bg-secondary       → #FFFFFF
bg-light-bg-tint            → #E0F7FA
text-light-text-primary     → #363636
text-light-text-secondary   → #666666
bg-light-navy               → #10365B

/* Dark Mode */
bg-dark-bg-primary          → #0A2540
bg-dark-bg-secondary        → #10365B
bg-dark-bg-elevated         → #16436F
text-dark-text-primary      → #FFFFFF
text-dark-text-secondary    → #E0F7FA
```

## الخطوط

**Cairo Font** من Google Fonts:
- يدعم العربية بشكل كامل
- يستخدم في جميع النصوص
- محسّن للأداء مع Next.js Font Optimization

```typescript
const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
})
```

## المكتبات المستخدمة

### الأساسية
- **Next.js 14** - Framework
- **React 18** - UI Library
- **TypeScript** - Type Safety

### التصميم
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icons

### الخطوط
- **Google Fonts (Cairo)** - Arabic Typography

## أفضل الممارسات

### 1. تنظيم الملفات
- كل مكون في ملف منفصل
- استخدم أسماء واضحة ووصفية
- اتبع نمط PascalCase للمكونات

### 2. TypeScript
- استخدم Types لجميع البيانات
- تجنب `any`
- استخدم Interfaces للـ Props

### 3. Performance
- استخدم Server Components عندما يكون ممكناً
- استخدم `'use client'` فقط عند الحاجة
- استخدم Dynamic Imports للمكونات الثقيلة

### 4. SEO
- استخدم Metadata API في كل صفحة
- استخدم Semantic HTML
- أضف Alt Text للصور

## الإضافات المستقبلية

### مقترحات للتطوير:
- [ ] إضافة نظام حجز متقدم
- [ ] تكامل مع Google Analytics
- [ ] إضافة Blog
- [ ] تكامل مع نظام دفع
- [ ] إضافة Dashboard للإدارة
- [ ] تكامل مع WhatsApp Business API
- [ ] إضافة نظام تقييمات حقيقي
- [ ] Multi-language support (English)

---

**تم التحديث:** 2024
