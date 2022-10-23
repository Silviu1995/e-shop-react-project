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





export const DropdownContext = createContext({
currentDropdown: false,
setCurrentDropdown: () => {},
cartItems: [],
addItemToCart: () => {},
totalQuantity: 0,
sumCartQuantity: () =>{}
});

export const DropdownProvider = ({children}) => {
    const [currentDropdown, setCurrentDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [totalQuantity,setTotalQuantity] = useState(0)
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    useEffect(()=> {
        const newQuantity = cartItems.reduce((total,cartItem) => total + cartItem.quantity , 0)
        
        setTotalQuantity(newQuantity)
    },[cartItems])

    const value = {currentDropdown,setCurrentDropdown,cartItems,addItemToCart,totalQuantity}
    console.log(value)


    return <DropdownContext.Provider value={value} > {children} </DropdownContext.Provider>
}