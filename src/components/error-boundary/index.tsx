import type { ReactElement, ReactNode } from 'react'
import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary'

interface ErrorBoundaryProps {
  children: ReactNode
  fallbackRender?: (props: FallbackProps) => ReactElement
}

export default function ErrorBoundary({
  children,
  fallbackRender,
}: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      fallbackRender={fallbackRender ?? defaultFallbackErrorUI}
    >
      {children}
    </ReactErrorBoundary>
  )
}

function defaultFallbackErrorUI({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <section role="alert" className="bg-red-700 text-white text-center p-8">
      <h2 className="text-3xl font-bold mb-2">Oops!!</h2>
      <p className="mb-5">{error.message}</p>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="px-3 py-1 text-sm rounded-full bg-white text-red-700 font-semibold"
      >
        Try Again
      </button>
    </section>
  )
}
