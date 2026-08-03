interface TariqLogoProps {
  className?: string
  iconOnly?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function TariqLogo({ className = '', iconOnly = false, size = 'md' }: TariqLogoProps) {
  const sizeClasses = {
    sm: {
      badge: 'w-8 h-8 rounded-xl',
      svg: 'w-5 h-5',
      text: 'text-lg',
    },
    md: {
      badge: 'w-10 h-10 rounded-2xl',
      svg: 'w-6 h-6',
      text: 'text-[22px]',
    },
    lg: {
      badge: 'w-12 h-12 rounded-2xl',
      svg: 'w-7 h-7',
      text: 'text-2xl',
    },
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Morning Star / Rub el Hizb Badge - Zero borders, Zero shadows */}
      <div className={`flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 transition-colors shrink-0 ${currentSize.badge}`}>
        <svg
          viewBox="0 0 32 32"
          className={`transition-transform duration-300 ease-out group-hover:rotate-45 ${currentSize.svg}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer Rub el Hizb Star (8-pointed geometry) */}
          <rect
            x="7"
            y="7"
            width="18"
            height="18"
            rx="2.5"
            className="fill-neutral-900 dark:fill-neutral-100 transition-colors"
          />
          <rect
            x="7"
            y="7"
            width="18"
            height="18"
            rx="2.5"
            transform="rotate(45 16 16)"
            className="fill-neutral-900 dark:fill-neutral-100 transition-colors"
          />

          {/* Middle Negative Space Carving */}
          <rect
            x="10.5"
            y="10.5"
            width="11"
            height="11"
            rx="1.5"
            className="fill-neutral-100 dark:fill-neutral-900 transition-colors"
          />
          <rect
            x="10.5"
            y="10.5"
            width="11"
            height="11"
            rx="1.5"
            transform="rotate(45 16 16)"
            className="fill-neutral-100 dark:fill-neutral-900 transition-colors"
          />

          {/* Inner Glowing Morning Star Core */}
          <rect
            x="13.5"
            y="13.5"
            width="5"
            height="5"
            rx="0.75"
            className="fill-neutral-500 dark:fill-neutral-400 transition-colors"
          />
          <rect
            x="13.5"
            y="13.5"
            width="5"
            height="5"
            rx="0.75"
            transform="rotate(45 16 16)"
            className="fill-neutral-500 dark:fill-neutral-400 transition-colors"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex items-center gap-2">
          <span className={`font-english-bold tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors ${currentSize.text}`}>
            Tariq
          </span>
        </div>
      )}
    </div>
  )
}

export default TariqLogo
