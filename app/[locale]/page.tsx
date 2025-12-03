import Link from 'next/link';
import Image from 'next/image';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await import(`@/messages/${locale}.json`).then(m => m.default);

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-3">
          {t.home.title}
        </h1>
        <p className="text-lg text-gray-500">
          {t.home.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 创意绘画课程入口 */}
        <Link 
          href={`/${locale}/courses`}
          className="group border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors bg-white"
        >
          <div className="aspect-square relative overflow-hidden bg-gray-50">
            <Image
              src="/images/course.jpg"
              alt={t.home.creativePainting.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              {t.home.creativePainting.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {t.home.creativePainting.description}
            </p>
            <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              <span>{t.home.creativePainting.button}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Portfolio入口 */}
        <Link 
          href={`/${locale}/portfolio`}
          className="group border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors bg-white"
        >
          <div className="aspect-square relative overflow-hidden bg-gray-50">
            <Image
              src="/images/portfolio.jpg"
              alt={t.home.portfolio.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              {t.home.portfolio.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {t.home.portfolio.description}
            </p>
            <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              <span>{t.home.portfolio.button}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

