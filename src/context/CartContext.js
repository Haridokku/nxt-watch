import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  savedList: [],
  onChangeTheme: () => {},
  moveToSaveList: () => {},
})

export default CartContext
