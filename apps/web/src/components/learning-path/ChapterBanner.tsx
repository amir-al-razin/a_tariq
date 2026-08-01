import * as m from '#/paraglide/messages.js'

type Props = {
  chapterId: number
  lessonCount: number
  titleEn: string
  titleAr: string
  subtitleI18nKey: string
  accentColor?: string
}

export const ChapterBanner: React.FC<Props> = ({
  chapterId,
  lessonCount,
  titleEn,
  titleAr,
  subtitleI18nKey,
  accentColor,
}) => {
  const getMessage = (key: string) => {
    // @ts-ignore
    return m[key] ? m[key]() : key
  }

  const bg = 'bg-neutral-100 dark:bg-neutral-900'
  const text = 'text-neutral-900 dark:text-neutral-100'
  const sub = 'text-neutral-600 dark:text-neutral-400'

  return (
    <div
      className={`mx-4 mt-5 mb-3 rounded-3xl ${bg}`}
    >
      <div className="flex flex-row items-center justify-between px-5 py-5">
        <div className="flex-1 pr-3">
          <p
            className="font-english-semibold text-[13px] mb-1.5"
            style={{ color: accentColor }}
          >
            {m['volume.chapterMeta'] ? m['volume.chapterMeta']({ id: chapterId, count: lessonCount }) : `Chapter ${chapterId} · ${lessonCount} lessons`}
          </p>
          <h2 className={`font-english-semibold text-[20px] leading-7 ${text}`}>
            {titleEn}
          </h2>
          <p className={`font-english mt-0.5 text-[13px] ${sub}`}>
            {getMessage(subtitleI18nKey)}
          </p>
        </div>
        <div
          className={`font-arabic-semibold text-[20px] text-right ${sub}`}
          dir="rtl"
        >
          {titleAr}
        </div>
      </div>
    </div>
  )
}
