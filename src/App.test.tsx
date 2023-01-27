import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test.only('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/Home - 34 Combe street Swindon/i)
    expect(linkElement).toBeInTheDocument()
})
