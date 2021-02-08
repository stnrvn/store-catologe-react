const initialState = {
  isLoading: false,
  products: [],
  productById: []
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_START':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_DATA':
      return {
        ...state,
        products: state.products.concat(action.payload),
        isLoading: false
      }
    case 'PRODUCT_BY_ID':
      return {
        ...state,
        productById: state.productById.concat(action.payload),
        isLoading: false
      }
      default:
        return state
  }
}

export default productReducer