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

const CART_KEY = 'cartItems'

type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
}

export const CartContextDEfaultValues = {
  items: []
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

  return (
    <CartContext.Provider
      value={{
        items: data?.games.map((game) => ({
          id: game.id,
          img: `http://localhost:1337/${game.cover?.url}`,
          title: game.name,
          price: formatPrice(game.price)
        }))
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
