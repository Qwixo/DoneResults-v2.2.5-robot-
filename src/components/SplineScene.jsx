import React, { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineScene({ scene, className }) {
  return (
    <Suspense 
      fallback={
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        style={{ width: '100%', height: '100%' }}
        className={className}
      />
    </Suspense>
  )
}
