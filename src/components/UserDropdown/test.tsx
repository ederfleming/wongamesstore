import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/test-utils'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Eder" />)

    expect(screen.getByText(/eder/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Eder" />)

    // open menu
    userEvent.click(screen.getByText(/eder/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
