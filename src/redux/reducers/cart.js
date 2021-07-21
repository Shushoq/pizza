const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TOTAL_PRICE':
      return { ...state, totalPrice: payload }
    case 'SET_TOTAL_COUNT':
      return { ...state, totalCount: payload }
    case 'ADD_TO_CART': {
      return {
        ...state,
        items: {
          ...state.items,
          [payload.id]: !state.items[payload.id]
            ? [payload]
            : [...state.items[payload.id], payload],
        },
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + payload.price,
      }
    }
    case 'REMOVE_FROM_CART':
      return { ...state }
    default:
      return state
  }
}

export default cart
