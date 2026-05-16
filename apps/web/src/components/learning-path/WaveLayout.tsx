import React from 'react'

export const WAVE = [0.27, 0.4, 0.56, 0.73, 0.56, 0.4] as const

type Props = {
  children: React.ReactNode
}

export const WaveLayout: React.FC<Props> = ({ children }) => {
  return <div className="py-6 flex flex-col items-stretch">{children}</div>
}
