export const setTotalPrice = () => ({
  type: 'SET_TOTAL_PRICE',
  payload: null,
})

export const setTotalCount = () => ({
  type: 'SET_TOTAL_COUNT',
  payload: null,
})

export const addToCart = (items) => ({
  type: 'ADD_TO_CART',
  payload: items,
})

export const removeFromCart = () => ({
  type: 'REMOVE_FROM_CART',
  payload: null,
})
 