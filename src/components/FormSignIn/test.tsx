import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    render(<FormSignIn />)

    //verificar textfield de email
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    //verificar textfield de password
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    //verificar botão
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()
  })
  it('should render the forgot password link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /forgot your password/i })
    ).toBeInTheDocument()
  })
  it('should render the text to sign up', () => {
    render(<FormSignIn />)

    //text
    expect(screen.getByText(/don't have an account\?/i)).toBeInTheDocument()
    //link
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
  })
})
