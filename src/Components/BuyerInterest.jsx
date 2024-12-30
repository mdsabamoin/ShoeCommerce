import React, { useContext } from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Context } from "../Store/ContextProvider";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';

const BuyerInterest = () => {

    const ctx = useContext(Context);
    
    const LargeQuantityHandler = (ItemReceived)=>{
        ctx.setShoeDetails((previousState)=>(previousState.map((item)=>
            {return item.name == ItemReceived.name?{...item,"Large":Math.max(0,item.Large-1)}:item})));

        const IsPresentinCart = ctx.Cart.some((item)=>item.name === ItemReceived.name)
        const obj = {"name":ItemReceived.name,"price":ItemReceived.price,"Large":1,"Medium":0,"Small":0};
        if(IsPresentinCart){
            ctx.setCart((previousState)=>previousState.map((item)=>{
                return item.name == ItemReceived.name?{...item,"Large":item.Large+1}:item;
             
        }))
            ctx.setPresentInCart(true);
        }else{
           ctx.setCart((previousState)=>[...previousState,obj])
            ctx.setPresentInCart(false);
        }
        // console.log("ctx.Cart",ctx.Cart);

    }
    const MediumQuantityHandler = (ItemReceived)=>{
          ctx.setShoeDetails((previousState)=>(previousState.map((item)=>
            {return item.name == ItemReceived.name?{...item,"Medium":Math.max(0,item.Medium-1)}:item})));

          const IsPresentinCart = ctx.Cart.some((item)=>item.name === ItemReceived.name)
          const obj = {"name":ItemReceived.name,"price":ItemReceived.price,"Large":0,"Medium":1,"Small":0};
          if(IsPresentinCart){
            ctx.setCart((previousState)=>previousState.map((item)=>{
                return item.name == ItemReceived.name?{...item,"Medium":item.Medium+1}:item;
             
        }))
              ctx.setPresentInCart(true);
          }else{
            ctx.setCart((previousState)=>[...previousState,obj])
              ctx.setPresentInCart(false);
          }
          console.log("ctx.Cart",ctx.Cart);
        
    }
    const SmallQuantityHandler = (ItemReceived)=>{
        ctx.setShoeDetails((previousState)=>(previousState.map((item)=>
            {return item.name == ItemReceived.name?{...item,"Small":Math.max(0,item.Small-1)}:item})));

        const IsPresentinCart = ctx.Cart.some((item)=>item.name === ItemReceived.name)
        const obj = {"name":ItemReceived.name,"price":ItemReceived.price,"Large":0,"Medium":0,"Small":1};
        if(IsPresentinCart){

            ctx.setCart((previousState)=>previousState.map((item)=>{
                return item.name == ItemReceived.name?{...item,"Small":item.Small+1}:item;
             
        }))
            ctx.setPresentInCart(true);
        }else{
            ctx.setCart((previousState)=>[...previousState,obj])
            ctx.setPresentInCart(false);
        }
        console.log("ctx.Cart",ctx.Cart);
       
    }
    return<>
     <br/>{ctx.ShoeDetails < 1?<h1>Please Fill the Details</h1>:<Table striped bordered hover>
        {!ctx.openCart && <tbody>
        { ctx.ShoeDetails.map((item) => {
            return <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>

                {item.Large >-1 && <td> <Button variant="secondary" onClick={()=>{LargeQuantityHandler(item)}}>
                    Buy Large<Badge bg="success">{item.Large}</Badge>
                </Button>
                </td>}
                <td>
                {item.Medium >-1 && <Button variant="secondary"  onClick={()=>{MediumQuantityHandler(item)}}>
                    Buy Medium<Badge bg="success">{item.Medium}</Badge>
                </Button>}
                </td>
                <td>
                {item.Small >-1 && <Button variant="secondary"  onClick={()=>{SmallQuantityHandler(item)}}>
                    Buy Small<Badge bg="success">{item.Small}</Badge>
                </Button>}
                </td>
                </tr>
        })}

    </tbody>}
    </Table>}
    </>
}

export default BuyerInterest;