import React, { useState } from "react"



const Context = React.createContext({
    ShoeDetails: [],
    Cart:[],
    openCart:false,
    isFilled: false,
    presentInCart:false,
    name: "",
    description: "",
    price: "",
    LargeQuantity: "",
    MediumQuantity: "",
    SmallQuantity: "",
    setopenCart:()=>{},
    setShoeDetails: () => { },
    setisFilled: () => { },
    setName: () => { },
    setDescription: () => { },
    setPrice: () => { },
    setLargeQuantity: () => { },
    setMediumQuantity: () => { },
    setSmallQuantity: () => { },
    setCart: ()=>{},
    setPresentInCart: ()=>{}
})

const ContextProvider = (props) => {

    const [ShoeDetails, setShoeDetails] = useState([]);
    const [openCart, setopenCart] = useState(false);
    const [isFilled, setisFilled] = useState(false);
    const [presentInCart,setPresentInCart] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [LargeQuantity, setLargeQuantity] = useState("");
    const [MediumQuantity, setMediumQuantity] = useState("");
    const [SmallQuantity, setSmallQuantity] = useState("");
    const [Cart, setCart] = useState([]);
    // {"name":"","price":"","Large":0,"Medium":0,"Small":0}
    return <Context.Provider value={{ ShoeDetails,Cart,presentInCart, isFilled,openCart, name, description, price, LargeQuantity, MediumQuantity, SmallQuantity,setopenCart,setPresentInCart, setCart,setName, setDescription, setPrice, setLargeQuantity, setMediumQuantity, setSmallQuantity, setisFilled, setShoeDetails }}>{props.children}</Context.Provider>
}

export { Context, ContextProvider }