"use client"
import toast from 'react-hot-toast'
 
export const getCartData = ()=>{
    let cartData = []
    const cart = localStorage.getItem("cart")
    if(cart){
        cartData = JSON.parse(cart)
    }
    return cartData
}

export const saveCartData = (cartItem)=>{
    const saveCart = getCartData()
    const isExist = saveCart.find((ct)=>ct.id === cartItem.id)
   
    if(isExist){
        return toast.error("already in cart.")
    }
    saveCart.push(cartItem)

    localStorage.setItem('cart', JSON.stringify(saveCart))

    toast.success("product added to cart.")

}
export const getUserData = ()=>{
    let userData = []
    const user = localStorage.getItem("user")
    if(user){
        userData = JSON.parse(user)
    }
    return userData
}
export const getUserToken = ()=>{
    let userData = []
    const user = localStorage.getItem("user")
    if(user){
        userData = JSON.parse(user)
    }
    return userData.token
}
export const deleteCart = (id)=>{
    let carts = getCartData()
    const remaining = carts.filter((cart)=>cart.id !== id)
    localStorage.setItem("cart", JSON.stringify(remaining))
    toast.success("item has been deleted.")
}


// washlist 

export const getwishlistData = ()=>{
    let wishlistData = []
    const wishlist = localStorage.getItem("wishlist")
    if(wishlist){
        wishlistData = JSON.parse(wishlist)
    }
    return wishlistData
}

export const savewishlistData = (wishlist)=>{
    const savewishlist = getwishlistData()
    const isExist = savewishlist.find((wl)=>wl.id === wishlist.id)
    if(isExist){
        return toast.error("already in wishlist.")
    }
    savewishlist.push(wishlist)

    localStorage.setItem('wishlist', JSON.stringify(savewishlist))

    toast.success("product added to wishlist.")

}

export const deletewishlist = (id)=>{
    let wishlists = getwishlistData()
    const remaining = wishlists.filter((wishlist)=>wishlist.id !== id)
    localStorage.setItem("wishlist", JSON.stringify(remaining))
    toast.success("item has been deleted.")
}


// Checkout

export const getCheckOutData = ()=>{
    let CheckOutData = []
    const data = localStorage.getItem("checkoutInfo")
    if(data){
        CheckOutData = JSON.parse(data)
    }
    return CheckOutData
}

export const saveCheckOutData = (checkoutItem)=>{
   
    localStorage.setItem('checkoutInfo', JSON.stringify(checkoutItem))

}
export const getcardPaymentData = ()=>{
    let cardPamentData = []
    const data = localStorage.getItem("cardPamentInfo")
    if(data){
        cardPamentData = JSON.parse(data)
    }
    return cardPamentData
}
// Card payment info
export const saveCardPaymentData = (cardPamentInfo)=>{
   
    localStorage.setItem('cardPamentInfo', JSON.stringify(cardPamentInfo))

}


