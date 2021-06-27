// 1- Criar um contexto importando CreateContext e exportá-lo
// 2- Tipar o context informando o tipo de dado que ele pode receber
// 3- Criar um export Type e um export const sendo os valores default do context
// 4- Criar um context Provider (CartProvider) recebendo um children e tipá-lo
// 5- retornar um CartContext.Provider passando value={{}}
// 6- criar o hook 'useCart' passando o CartContext dentro do useContext
// 7- exportar o cartProvider e o useCart

import { createContext, useContext, useEffect, useState } from 'react'

import { useQueryGames } from 'graphql/queries/games'

import formatPrice from 'utils/format-price'
import { getStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'

const CART_KEY = 'cartItems'

type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
}

export const CartContextDEfaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00'
}

export const CartContext = createContext<CartContextData>(
  CartContextDEfaultValues
)
export type CartProviderProps = {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: { where: { id: cartItems } }
  })

  const total = data?.games.reduce((acc, game) => {
    return acc + game.price
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
