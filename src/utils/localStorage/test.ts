import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem(', () => {
  it('Should return the item from localStorage', () => {
    window.localStorage.setItem(
      'WONGAMES_cartItems',
      JSON.stringify(['1', '2'])
    )

    expect(getStorageItem('cartItems')).toStrictEqual(['1', '2'])
  })
})
describe('setStorageItem(', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('Should add the item to localStorage', () => {
    setStorageItem('cartItems', ['1', '2'])

    expect(window.localStorage.getItem('WONGAMES_cartItems')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
