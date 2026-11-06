import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App.tsx'

describe('App', () => {
  it('incrémente le compteur au clic', () => {
    render(<App />)
    const button = screen.getByRole('button')
    expect(button.textContent).toBe('Compteur : 0')
    fireEvent.click(button)
    expect(button.textContent).toBe('Compteur : 1')
  })
})
