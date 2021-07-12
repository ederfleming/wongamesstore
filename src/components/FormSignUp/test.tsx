import { MockedProvider } from '@apollo/client/testing'

import { render, screen } from 'utils/test-utils'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })

  it('should render the text to sign up', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })
})
