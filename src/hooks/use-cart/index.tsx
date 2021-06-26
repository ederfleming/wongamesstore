// 1- Criar um contexto importando CreateContext e exportá-lo
// 2- Tipar o context informando o tipo de dado que ele pode receber
// 3- Criar um export Type e um export const sendo os valores default do context
// 4- Criar um context Provider (CartProvider) recebendo um children e tipá-lo
// 5- retornar um CartContext.Provider passando value={{}}
// 6- criar o hook 'useCart' passando o CartContext dentro do useContext
// 7- exportar o cartProvider e o useCart

// import { createContext, useContext } from 'react'

// export type CartContextData = {}

// export const CartContextDEfaultValues = {}

// export const CartContext = createContext<CartContextData>(
//   CartContextDEfaultValues
// )
// export type CartProviderProps = {
//   children: React.ReactNode
// }

// const CartProvider = ({ children }: CartProviderProps) => {
//   return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
// }

// const useCart = () => useContext(CartContext)
