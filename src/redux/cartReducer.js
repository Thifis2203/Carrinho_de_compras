const initialState = {
    cartItems: []
  };
  
  
  // Reducer para gerenciar as ações no carrinho de compras
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
  
  
      case 'ADD_ITEM': {
        const item = action.payload;
  
  
        const existingItem = state.cartItems.find(
          (i) => i.id === item.id
        );
  
  
        if (existingItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          };
        }
  
  
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...item, quantity: 1 }
          ]
        };
      }
  
  
      case 'REMOVE_ITEM': {
        const itemId = action.payload.id;
  
  
        return {
          ...state,
          cartItems: state.cartItems
            .map((item) =>
              item.id === itemId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0)
        };
      }
  
  
      default:
        return state;
    }
  };
  
  
  export default cartReducer;
  