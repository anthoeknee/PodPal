import type { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
  statsPanel: ReactNode
  actionBar: ReactNode
  shopPanel?: ReactNode
}

export default function MainLayout({ children, statsPanel, actionBar, shopPanel }: MainLayoutProps) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-800">
      {/* 3D Viewport - Central Focus */}
      <div className="absolute inset-0 z-0">
        {children}
      </div>

      {/* Stats Panel - Top Left/Full Width Mobile */}
      <div className="absolute top-0 left-0 right-0 md:right-auto md:top-4 md:left-4 z-20 p-4 md:p-0">
        {statsPanel}
      </div>

      {/* Action Bar - Bottom Full Width */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
        {actionBar}
      </div>

      {/* Shop Panel - Right Side Desktop, Full Screen Mobile */}
      {shopPanel && (
        <div className="fixed md:absolute top-0 right-0 bottom-0 z-30 w-full md:w-96 md:p-4">
          {shopPanel}
        </div>
      )}
    </div>
  )
}
