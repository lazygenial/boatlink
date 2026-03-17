import { Boat } from '@/lib/types';

export const mockBoats: Boat[] = [
  {
    id: 'bl-101',
    title: 'يخت اللؤلؤة الفاخر',
    city: 'مدينة الكويت',
    type: 'يخت فاخر',
    capacity: 15,
    duration: '4 ساعات',
    price: 180,
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'يخت أنيق مجهز لجلسات خاصة واحتفالات مميزة مع طاقم محترف.',
    features: ['غرفتان مكيفتان', 'نظام صوتي', 'ضيافة مجانية', 'رحلات غروب']
  },
  {
    id: 'bl-102',
    title: 'قارب الصيد البحار',
    city: 'السالمية',
    type: 'قارب صيد',
    capacity: 8,
    duration: '6 ساعات',
    price: 120,
    image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494947665470-20322015e3a8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'رحلات صيد مخصصة للهواة والمحترفين مع معدات صيد أساسية.',
    features: ['معدات صيد', 'صندوق تبريد', 'مرشد بحري', 'مظلة أمامية']
  },
  {
    id: 'bl-103',
    title: 'قارب العائلة الهادئ',
    city: 'الخيران',
    type: 'رحلة عائلية',
    capacity: 10,
    duration: '3 ساعات',
    price: 95,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'قارب مريح لرحلات نهارية للعائلات مع جلسات واسعة.',
    features: ['سترات نجاة للأطفال', 'جلسات مظللة', 'تبريد مياه', 'مناسب للأطفال']
  },
  {
    id: 'bl-104',
    title: 'يخت المناسبات الملكي',
    city: 'مارينا كرسنت',
    type: 'يخت فاخر',
    capacity: 20,
    duration: '5 ساعات',
    price: 250,
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'يخت فاخر للفعاليات الخاصة مع تجهيزات متكاملة للاحتفال.',
    features: ['منطقة شواء', 'خدمة تصوير', 'صالة VIP', 'موسيقى احترافية']
  },
  {
    id: 'bl-105',
    title: 'قارب الغوص الأزرق',
    city: 'جزيرة فيلكا',
    type: 'أنشطة بحرية',
    capacity: 12,
    duration: '6 ساعات',
    price: 160,
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'مثالي لرحلات الغوص والسنوركلينغ مع معدات سلامة متقدمة.',
    features: ['معدات غوص', 'مدرب معتمد', 'مقاعد خلفية', 'حمام بحري']
  },
  {
    id: 'bl-106',
    title: 'قارب كورنيش الكويت',
    city: 'الشويخ',
    type: 'رحلة سياحية',
    capacity: 14,
    duration: '2 ساعات',
    price: 80,
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'جولة سريعة على كورنيش الكويت بإطلالات بانورامية رائعة.',
    features: ['مرشد سياحي', 'جلسات خارجية', 'مشروبات باردة', 'مناسب للمجموعات']
  },
  {
    id: 'bl-107',
    title: 'قارب صيد الجون',
    city: 'الدوحة',
    type: 'قارب صيد',
    capacity: 6,
    duration: '4 ساعات',
    price: 110,
    image: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'قارب صيد مجهز بالكامل للرحلات الصباحية والمسائية في الجون.',
    features: ['GPS ملاحي', 'عدة صيد احترافية', 'صندوق ثلج', 'طاقم مساعد']
  },
  {
    id: 'bl-108',
    title: 'يخت الأحمدي الفاخر',
    city: 'الأحمدي',
    type: 'يخت فاخر',
    capacity: 18,
    duration: '8 ساعات',
    price: 300,
    image: 'https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'يخت رحلة يوم كامل مع خدمات ضيافة فاخرة وتجربة بحرية راقية.',
    features: ['طاهٍ خاص', 'مناطق استرخاء', 'ألعاب مائية', 'كابتن محترف']
  }
];
