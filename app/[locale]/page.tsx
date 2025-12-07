import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('home');

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-3">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-500">
          {t('subtitle')}
        </p>
      </div>

      {/* 第一行：课程和作品集 */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* 创意绘画课程入口 */}
        <Link 
          href={`/${locale}/courses`}
          className="group border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors bg-white"
        >
          <div className="aspect-square relative overflow-hidden bg-gray-50">
            <Image
              src="/images/course.jpg"
              alt={t('creativePainting.title')}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              {t('creativePainting.title')}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {t('creativePainting.description')}
            </p>
            <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              <span>{t('creativePainting.button')}</span>
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
              alt={t('portfolio.title')}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              {t('portfolio.title')}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {t('portfolio.description')}
            </p>
            <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              <span>{t('portfolio.button')}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* 第二行：Interactive Games */}
      <div className="flex justify-center md:justify-start">
        <a 
          href={`/game.html?lang=${locale}`}
          className="group border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors bg-white block w-full md:w-1/2 lg:w-1/3 max-w-md"
        >
          <div className="aspect-square relative overflow-hidden bg-gray-50">
            <Image
              src="/images/space_games.jpg"
              alt={t('interactiveGames.title')}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              {t('interactiveGames.title')}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {t('interactiveGames.description')}
            </p>
            <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              <span>{t('interactiveGames.button')}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </div>

    </div>
  );
}

