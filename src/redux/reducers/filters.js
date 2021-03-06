const initialState = {
  category: 0,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
}

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SORT_BY':
      return { ...state, sortBy: payload }
    case 'SET_CATEGORY':
      return { ...state, category: payload }
    default:
      return state
  }
}

export default filters
