import './App.css'
import { CountProvider } from './modules/count/context/count-context-provider'
import { useCountStore } from './modules/count/hooks/useCountStore'

export function App() {
  return (
    <CountProvider initialCount={3}>
      <Component />
    </CountProvider>
  )
}

function Component() {
  const { count, increment } = useCountStore((state) => state)

  return (
    <>
      <h1>Vite + React + Zustand</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
      </div>
    </>
  )
}
