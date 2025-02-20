export const formatprice = (price)=>{
    return Intl.NumberFormat('en-in',{
        style:"currency",
        currency:"USD"
    }).format(price)
}