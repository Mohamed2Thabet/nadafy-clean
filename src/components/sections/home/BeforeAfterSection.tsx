import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

/**
 * Before/After section showcasing cleaning service results
 * UAE Arabic Cleaning Services positioning
 */
export default function BeforeAfterSection() {
 const examples = [
  {
    id: "1",
    title: "تنظيف الفلل",
    category: "تنظيف شامل",
    afterImg: "/images/Villa-Cleaning.jpeg",
  },
  {
    id: "2",
    title: "تنظيف المنازل",
    category: "تنظيف سكني",
    afterImg: "/images/House-Cleaning.png",
  },
  {
    id: "3",
    title: "تنظيف الكنب بالبخار",
    category: "تنظيف مفروشات",
    afterImg: "/images/Sofa-Cleaning.jpeg",
  },
  {
    id: "4",
    title: "تنظيف السجاد والستائر",
    category: "تنظيف مفروشات",
    afterImg: "/images/Carpet-Cleaning.jpeg",
  },
  {
    id: "5",
    title: "تنظيف ما بعد التشطيب",
    category: "تنظيف عميق",
    afterImg: "/images/Post-Construction-Cleaning.jpg",
  },
  {
    id: "6",
    title: "تنظيف وتعقيم الخزانات",
    category: "تعقيم وتطهير",
    afterImg: "/images/Water-Tank-Cleaning.jpg",
  },
];

  return (
    <section className="py-20 bg-light-bg-primary dark:bg-dark-bg-primary">
      <Container>
        <SectionTitle subtitle="نقدّم أعلى مستوى من الدقة والنظافة في جميع إمارات الدولة">
          نتائج أعمالنا الاحترافية
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div
              key={example.id}
              className="bg-white dark:bg-dark-bg-elevated rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col group"
            >
              <div className="p-4 bg-slate-50 dark:bg-dark-bg-primary/50 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-cairo font-bold text-lg text-slate-900 dark:text-white text-center">
                  {example.title}
                </h3>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={example.afterImg}
                  alt={`${example.title} - نداء النظافة`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>

              <div className="p-4 text-center mt-auto">
                <span className="inline-block px-4 py-1.5 bg-[#2196F3]/10 text-[#0F3D91] dark:text-[#2196F3] rounded-full text-xs font-cairo font-bold">
                  {example.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
