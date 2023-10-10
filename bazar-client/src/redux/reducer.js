const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
const GET_ALL_PRODUCT = "GET_ALL_PRODUCT"


const initialState = {
    products: [],
    product: []
}


const rootReducer=(state = initialState, { type, payload })=>{
    switch(type){
        case GET_ALL_PRODUCTS:
            return {...state.products,  products: payload}
            case GET_ALL_PRODUCT: 
            return {...state.product, product: payload}
        default:
            return {...state}
    }
  }

  export default rootReducer;