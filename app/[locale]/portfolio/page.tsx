import Link from 'next/link';
import Image from 'next/image';

export default async function PortfolioPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await import(`@/messages/${locale}.json`).then(m => m.default);

  const portfolioImages = [
    { src: '/images/cat_furless.jpg', alt: 'Cat Furless' },
    { src: '/images/portrait_lady.jpg', alt: 'Portrait Lady' },
    { src: '/images/portfolio_1.jpg', alt: 'Fashion Illustration' }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* 返回首页链接 */}
      <Link 
        href={`/${locale}`}
        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-12 transition-colors"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {locale === 'zh' ? '返回首页' : locale === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
      </Link>

      {/* 页面标题 */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
          {t.home.portfolio.title}
        </h1>
        <p className="text-lg text-gray-500">
          {t.home.portfolio.description}
        </p>
      </div>

      {/* 作品集图片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-50 group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

