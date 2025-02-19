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
    console.log(isExist)
    if(isExist){
        return toast.error("already in cart.")
    }
    saveCart.push(cartItem)

    localStorage.setItem('cart', JSON.stringify(saveCart))

    toast.success("product added to cart.")

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