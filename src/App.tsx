import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Agent Sandbox</h1>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Compteur : {count}
      </button>
      <button
        type="button"
        onClick={() => setCount((c) => Math.max(0, c - 1))}
        disabled={count === 0}
      >
        Décrémenter
      </button>
      <button type="button" onClick={() => setCount(0)} disabled={count === 0}>
        Réinitialiser
      </button>
    </main>
  )
}
