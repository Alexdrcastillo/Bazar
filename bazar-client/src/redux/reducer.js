const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"

const initialState = {
    products: []
}


const rootReducer=(state = initialState, { type, payload })=>{
    switch(type){
        case GET_ALL_PRODUCTS:
            return {...state.products,  products: payload}
          
        default:
            return {...state}
    }
  }

  export default rootReducer;