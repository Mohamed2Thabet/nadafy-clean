# 🚀 دليل النشر - Deployment Guide

## خيارات النشر

### 1. Vercel (موصى به - الأسهل والأسرع)

Vercel هي الشركة المطورة لـ Next.js، وتوفر أفضل تجربة نشر.

#### الخطوات:

1. **إنشاء حساب على Vercel**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخول باستخدام GitHub

2. **رفع الكود إلى GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **استيراد المشروع في Vercel**
   - انقر "New Project"
   - اختر المستودع من GitHub
   - Vercel سيكتشف Next.js تلقائياً
   - انقر "Deploy"

4. **إعداد متغيرات البيئة**
   - في لوحة تحكم Vercel
   - اذهب إلى Settings → Environment Variables
   - أضف المتغيرات من `.env.example`

5. **ربط Domain مخصص (اختياري)**
   - اذهب إلى Settings → Domains
   - أضف domain الخاص بك
   - اتبع التعليمات لتحديث DNS

#### المميزات:
- ✅ نشر تلقائي عند كل Push
- ✅ Preview Deployments للـ Pull Requests
- ✅ SSL مجاني
- ✅ CDN عالمي
- ✅ Analytics مدمج

---

### 2. Netlify

#### الخطوات:

1. **إنشاء حساب على Netlify**
   - اذهب إلى [netlify.com](https://netlify.com)

2. **رفع الكود إلى GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **استيراد المشروع**
   - انقر "New site from Git"
   - اختر GitHub
   - اختر المستودع

4. **إعدادات البناء**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

5. **إضافة متغيرات البيئة**
   - Site settings → Environment variables
   - أضف المتغيرات المطلوبة

---

### 3. خادم VPS (Ubuntu/Debian)

#### المتطلبات:
- Ubuntu 20.04+ أو Debian 11+
- Node.js 18+
- Nginx
- PM2

#### الخطوات:

1. **تثبيت Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **تثبيت PM2**
   ```bash
   sudo npm install -g pm2
   ```

3. **رفع الكود إلى السيرفر**
   ```bash
   # على جهازك المحلي
   git clone YOUR_REPO_URL
   cd nadafy-clean
   
   # أو استخدم SCP/SFTP لرفع الملفات
   ```

4. **تثبيت المكتبات والبناء**
   ```bash
   npm install
   npm run build
   ```

5. **تشغيل التطبيق مع PM2**
   ```bash
   pm2 start npm --name "nadafy-clean" -- start
   pm2 save
   pm2 startup
   ```

6. **إعداد Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/nadafy-clean
   ```

   أضف:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   sudo ln -s /etc/nginx/sites-available/nadafy-clean /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **إعداد SSL مع Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

### 4. Docker

#### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### الأوامر:

```bash
# بناء الصورة
docker build -t nadafy-clean .

# تشغيل الحاوية
docker run -p 3000:3000 nadafy-clean

# أو استخدم docker-compose
docker-compose up -d
```

---

## متغيرات البيئة للإنتاج

قم بإنشاء ملف `.env.production`:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Contact Information
NEXT_PUBLIC_WHATSAPP_NUMBER=966500000000
NEXT_PUBLIC_PHONE=+966 50 000 0000
NEXT_PUBLIC_EMAIL=info@your-domain.com

# Social Media
NEXT_PUBLIC_TWITTER=https://twitter.com/yourhandle
NEXT_PUBLIC_INSTAGRAM=https://instagram.com/yourhandle
NEXT_PUBLIC_FACEBOOK=https://facebook.com/yourpage

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## التحقق بعد النشر

### 1. اختبار الأداء
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 2. اختبار SEO
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### 3. اختبار الأمان
- [SSL Labs](https://www.ssllabs.com/ssltest/)
- [Security Headers](https://securityheaders.com/)

### 4. اختبار الموبايل
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- اختبار على أجهزة حقيقية

---

## الصيانة والتحديثات

### تحديث الموقع

#### Vercel/Netlify:
```bash
git add .
git commit -m "Update content"
git push origin main
# النشر سيحدث تلقائياً
```

#### VPS:
```bash
cd /path/to/nadafy-clean
git pull origin main
npm install
npm run build
pm2 restart nadafy-clean
```

### النسخ الاحتياطي

```bash
# نسخ احتياطي للكود
git push origin main

# نسخ احتياطي للبيانات (إذا كان هناك قاعدة بيانات)
# أضف أوامر النسخ الاحتياطي هنا
```

---

## المراقبة

### PM2 Monitoring (VPS)

```bash
# عرض الحالة
pm2 status

# عرض اللوجات
pm2 logs nadafy-clean

# عرض الموارد
pm2 monit
```

### Vercel Analytics

- مدمج تلقائياً في Vercel
- اذهب إلى Dashboard → Analytics

---

## استكشاف الأخطاء

### الموقع لا يعمل بعد النشر

1. تحقق من اللوجات:
   ```bash
   # Vercel
   vercel logs
   
   # PM2
   pm2 logs nadafy-clean
   ```

2. تحقق من متغيرات البيئة
3. تحقق من إعدادات DNS
4. تحقق من Firewall

### بطء في التحميل

1. فعّل CDN
2. ضغط الصور
3. استخدم Caching
4. فعّل Gzip/Brotli

---

## الأمان

### Best Practices:

1. **استخدم HTTPS دائماً**
2. **فعّل Security Headers**
   ```nginx
   add_header X-Frame-Options "SAMEORIGIN" always;
   add_header X-Content-Type-Options "nosniff" always;
   add_header X-XSS-Protection "1; mode=block" always;
   ```

3. **حدّث المكتبات بانتظام**
   ```bash
   npm audit
   npm update
   ```

4. **استخدم Environment Variables للمعلومات الحساسة**

5. **فعّل Rate Limiting**

---

## الدعم

للمساعدة في النشر:
- 📧 Email: support@your-domain.com
- 📱 WhatsApp: +966 50 000 0000

---

**بالتوفيق في النشر! 🚀**
