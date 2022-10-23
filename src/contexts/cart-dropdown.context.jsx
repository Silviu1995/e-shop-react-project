import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity +1 }
        : cartItem
    
        )
    }
    return [...cartItems,{...productToAdd,quantity: 1}]
}

const deleteCartItem = (cartItems,productToDelete) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDelete.id
    )
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id)
      
    }
    return cartItems.map((cartItem)=>
        cartItem.id === productToDelete.id
        ? {...cartItem, quantity: cartItem.quantity -1}
        : cartItem
    )
}

const removeCheckoutItem = (cartItems,itemToRemove) =>  cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
      
   
    



export const DropdownContext = createContext({
currentDropdown: false,
setCurrentDropdown: () => {},
cartItems: [],
addItemToCart: () => {},
DeleteItemFromCart: () => {},
totalQuantity: 0,
cartTotal: 0
});

export const DropdownProvider = ({children}) => {
    const [currentDropdown, setCurrentDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [totalQuantity,setTotalQuantity] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const DeleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems,productToDelete))
    }
    const RemoveItemFromCheckout = (itemToRemove) => {
        setCartItems(removeCheckoutItem(cartItems, itemToRemove))
    }
    useEffect(()=> {
        const newQuantity = cartItems.reduce((total,cartItem) => total + cartItem.quantity , 0)
        
        setTotalQuantity(newQuantity)
    },[cartItems])

    useEffect(()=> {
        const newTotalPrice = cartItems.reduce((total,cartItem) => total + cartItem.price * cartItem.quantity , 0)
        
        setCartTotal(newTotalPrice)
    },[cartItems])

    const value = {
        currentDropdown,
        setCurrentDropdown,
        cartItems,
        addItemToCart,
        totalQuantity,
        DeleteItemFromCart,
        RemoveItemFromCheckout,
        cartTotal
    }
    console.log(value)


    return <DropdownContext.Provider value={value} > {children} </DropdownContext.Provider>
}