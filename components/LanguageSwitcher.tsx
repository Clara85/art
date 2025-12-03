'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n';

const localeNames: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  zh: '中'
};

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex gap-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`px-3 py-1 text-sm transition-colors ${
            currentLocale === locale
              ? 'text-gray-900 font-medium'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {localeNames[locale]}
        </button>
      ))}
    </div>
  );
}

