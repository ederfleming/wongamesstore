import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // verificar ser tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // Verificar se tem o heading principal do banner
    expect(
      screen.getByRole('heading', { name: /All your games in one place/i })
    ).toBeInTheDocument()

    // verificar subtitle
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming plataform/i
      })
    ).toBeInTheDocument()

    // verificar title do content
    expect(
      screen.getByRole('heading', { name: /Auth Title/i })
    ).toBeInTheDocument()

    // verificar se renderiza o children
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
