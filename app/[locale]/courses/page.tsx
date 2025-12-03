import Link from 'next/link';
import Image from 'next/image';

// Helper function to render text with bold formatting
function renderText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default async function CoursesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await import(`@/messages/${locale}.json`).then(m => m.default);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
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

      {/* 课程标题 */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
          {t.course.title}
        </h1>
      </div>

      {/* 课程图片 */}
      <div className="mb-12">
        <div className="relative w-4/5 aspect-square max-w-2xl mx-auto overflow-hidden rounded-lg bg-gray-50">
          <Image
            src="/images/cup_exercise.jpg"
            alt={t.course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 640px"
            priority
          />
        </div>
      </div>

      {/* 课程介绍 */}
      {t.course.intro && (
        <section className="mb-20">
          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed mb-8">
              {t.course.intro.description.split('**').map((part: string, i: number) => 
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
              )}
            </p>

            {t.course.intro.whatYouLearn && (
              <div className="space-y-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">
                  {t.course.intro.whatYouLearn.title}
                </h2>

                {t.course.intro.whatYouLearn.foundations && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {t.course.intro.whatYouLearn.foundations.title}
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {t.course.intro.whatYouLearn.foundations.content.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gray-400 mr-3 mt-1.5">•</span>
                          <span>{renderText(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {t.course.intro.whatYouLearn.medium && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {t.course.intro.whatYouLearn.medium.title}
                    </h3>
                    <p className="text-gray-600">{renderText(t.course.intro.whatYouLearn.medium.content)}</p>
                  </div>
                )}

                {t.course.intro.whatYouLearn.story && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {t.course.intro.whatYouLearn.story.title}
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {t.course.intro.whatYouLearn.story.content.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gray-400 mr-3 mt-1.5">•</span>
                          <span>{renderText(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {t.course.intro.whatYouLearn.masters && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {t.course.intro.whatYouLearn.masters.title}
                    </h3>
                    <p className="text-gray-600">{renderText(t.course.intro.whatYouLearn.masters.content)}</p>
                  </div>
                )}

                {t.course.intro.whatYouLearn.projects && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {t.course.intro.whatYouLearn.projects.title}
                    </h3>
                    <p className="text-gray-600">{renderText(t.course.intro.whatYouLearn.projects.content)}</p>
                  </div>
                )}

                {t.course.intro.whatYouLearn.final && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {t.course.intro.whatYouLearn.final.title}
                    </h3>
                    <p className="text-gray-600">
                      {t.course.intro.whatYouLearn.final.content.split(/(\*\*.*?\*\*|_.*?_)/g).map((part: string, i: number) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={i}>{part.slice(2, -2)}</strong>;
                        }
                        if (part.startsWith('_') && part.endsWith('_')) {
                          return <em key={i}>{part.slice(1, -1)}</em>;
                        }
                        return part;
                      })}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 分隔线 */}
      <div className="border-t border-gray-200 my-16"></div>

      {/* 学习理念 */}
      <section className="mb-20 border-b border-gray-100 pb-12">
        <h2 className="text-xl font-medium text-gray-900 mb-6">
          {t.course.learningPhilosophy.title}
        </h2>
        <ul className="space-y-3">
          {t.course.learningPhilosophy.points.map((point: string, index: number) => (
            <li key={index} className="flex items-start text-gray-600">
              <span className="text-gray-400 mr-3 mt-1.5">•</span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 课程列表 */}
      <section>
        <h2 className="text-xl font-medium text-gray-900 mb-8">
          {locale === 'zh' ? '课程内容' : locale === 'fr' ? 'Contenu du Cours' : 'Course Content'}
        </h2>
        <div className="space-y-8">
          {t.course.lessons.map((lesson: any) => (
            <div
              key={lesson.number}
              className="border-b border-gray-100 pb-8 last:border-0"
            >
              <div className="flex items-start mb-4">
                <span className="text-sm text-gray-400 mr-4 font-mono w-8">
                  {String(lesson.number).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-medium text-gray-900 flex-1">
                  {lesson.title}
                </h3>
              </div>
              {lesson.content && lesson.content.length > 0 && (
                <ul className="ml-12 space-y-2">
                  {lesson.content.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                      <span className="text-gray-300 mr-3 mt-1.5">—</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

