import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import * as m from '#/paraglide/messages.js'

export const HomeScreen = () => {
  const volumes = [
    {
      id: 1,
      title: m.home_volume1(),
      subtitle: m.home_volume1subtitle1(),
      locked: false,
    },
    {
      id: 2,
      title: m.home_volume2(),
      subtitle: m.home_volume2subtitle1(),
      locked: false,
    },
    {
      id: 3,
      title: m.home_volume3(),
      subtitle: m.home_volume3subtitle1(),
      locked: false,
    },
  ]

  return (
    <div className="flex-1 bg-neutral-50 px-6 py-8 dark:bg-neutral-900 min-h-screen">
      <div className="max-w-[1024px] mx-auto w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2 mb-2">
          <h1 className="font-english-semibold text-[34px] leading-[40px] tracking-[-0.4px] text-neutral-900 dark:text-neutral-100">
            {m.home_title()}
          </h1>
          <p className="font-english text-[16px] leading-[26px] text-neutral-500 dark:text-neutral-400">
            {m.home_subtitle()}
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {volumes.map((vol) => {
            if (vol.locked) {
              return (
                <div
                  key={vol.id}
                  className="w-full flex flex-row items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-100 p-5 dark:border-neutral-700 dark:bg-neutral-800"
                >
                  <div className="flex flex-col gap-1">
                    <h2 className="font-english-semibold text-[22px] leading-[28px] tracking-[-0.1px] text-neutral-400 dark:text-neutral-500">
                      {vol.title}
                    </h2>
                    <p className="font-english text-[14px] leading-[22px] text-neutral-400 dark:text-neutral-600">
                      {m.home_locked()}
                    </p>
                  </div>
                  <Lock size={18} color="#9A8F7B" />
                </div>
              )
            }

            return (
              <motion.div
                key={vol.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Link
                  to="/volume/$volumeId"
                  params={{ volumeId: vol.id }}
                  className="block w-full rounded-2xl border border-neutral-200 bg-neutral-100 p-5 dark:border-neutral-700 dark:bg-neutral-800"
                >
                  <h2 className="font-english-semibold text-[22px] leading-[28px] tracking-[-0.1px] text-neutral-900 dark:text-neutral-100">
                    {vol.title}
                  </h2>
                  <p className="mt-1 font-english text-[14px] leading-[22px] text-neutral-500 dark:text-neutral-400">
                    {vol.subtitle}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
