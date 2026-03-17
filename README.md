# BoatLink - Next.js 14 App

تطبيق BoatLink هو منصة عربية لحجز القوارب في الكويت مبنيّة باستخدام:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## التشغيل محليًا

```bash
npm install
npm run dev
```

افتح: `http://localhost:3000`

## الأوامر

```bash
npm run dev      # تشغيل بيئة التطوير
npm run build    # بناء نسخة الإنتاج
npm run start    # تشغيل نسخة الإنتاج
npm run lint     # فحص جودة الكود
```

## الصفحات
- `/` الصفحة الرئيسية
- `/boats` جميع القوارب
- `/boats/[id]` تفاصيل القارب
- `/list-your-boat` أضف قاربك
- `/dashboard` لوحة الطلبات

## ملاحظات هندسية
- البيانات الحالية تجريبية في `data/mockBoats.ts` وجاهزة للاستبدال لاحقًا بمصدر مثل Supabase.
- التصميم يدعم RTL والعربية بالكامل من `app/layout.tsx`.
- المكوّنات الأساسية القابلة لإعادة الاستخدام موجودة في `components/`.
