import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from './App.tsx'

afterEach(cleanup)

const getCounter = () => screen.getByRole('button', { name: /^Compteur : / })
const getReset = () => screen.getByRole('button', { name: 'Réinitialiser' })

describe('App', () => {
  it('incrémente le compteur au clic', () => {
    render(<App />)
    const button = getCounter()
    expect(button.textContent).toBe('Compteur : 0')
    fireEvent.click(button)
    expect(button.textContent).toBe('Compteur : 1')
  })

  describe('bouton Réinitialiser', () => {
    it('ramène le compteur à 0 quand il est supérieur à 0', () => {
      render(<App />)
      fireEvent.click(getCounter())
      fireEvent.click(getReset())
      expect(getCounter().textContent).toBe('Compteur : 0')
    })

    it('est désactivé quand le compteur vaut 0', () => {
      render(<App />)
      expect(getReset()).toHaveProperty('disabled', true)
      fireEvent.click(getCounter())
      expect(getReset()).toHaveProperty('disabled', false)
      fireEvent.click(getReset())
      expect(getReset()).toHaveProperty('disabled', true)
    })

    it('après réinitialisation, un clic sur le compteur affiche 1', () => {
      render(<App />)
      fireEvent.click(getCounter())
      fireEvent.click(getCounter())
      fireEvent.click(getReset())
      fireEvent.click(getCounter())
      expect(getCounter().textContent).toBe('Compteur : 1')
    })

    it('ramène à 0 après plusieurs clics, pas à la valeur moins 1', () => {
      render(<App />)
      for (let i = 0; i < 5; i++) fireEvent.click(getCounter())
      expect(getCounter().textContent).toBe('Compteur : 5')
      fireEvent.click(getReset())
      expect(getCounter().textContent).toBe('Compteur : 0')
    })

    it('a pour nom accessible « Réinitialiser » et est accessible au clavier', () => {
      render(<App />)
      fireEvent.click(getCounter())
      const reset = getReset()
      expect(reset.tagName).toBe('BUTTON')
      expect(reset.getAttribute('type')).toBe('button')
      reset.focus()
      expect(document.activeElement).toBe(reset)
    })
  })
})
