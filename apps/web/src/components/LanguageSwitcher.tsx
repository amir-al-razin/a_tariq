import { useLanguage } from '../hooks/useLanguage'

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage()

  return (
    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        color: 'inherit',
      }}
      aria-label="Language"
    >
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        <button
          onClick={() => changeLanguage('en')}
          aria-pressed={language === 'en'}
          style={{
            cursor: 'pointer',
            padding: '0.35rem 0.75rem',
            borderRadius: '999px',
            border: '1px solid #d1d5db',
            background: language === 'en' ? '#0f172a' : 'transparent',
            color: language === 'en' ? '#f8fafc' : 'inherit',
            fontWeight: language === 'en' ? 700 : 500,
            letterSpacing: '0.01em',
          }}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage('bn')}
          aria-pressed={language === 'bn'}
          style={{
            cursor: 'pointer',
            padding: '0.35rem 0.75rem',
            borderRadius: '999px',
            border: '1px solid #d1d5db',
            background: language === 'bn' ? '#0f172a' : 'transparent',
            color: language === 'bn' ? '#f8fafc' : 'inherit',
            fontWeight: language === 'bn' ? 700 : 500,
            letterSpacing: '0.01em',
          }}
        >
          BN
        </button>
      </div>
    </div>
  )
}
