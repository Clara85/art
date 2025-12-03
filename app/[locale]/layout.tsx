import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-100">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-medium text-gray-900">Art Portfolio</h1>
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}

