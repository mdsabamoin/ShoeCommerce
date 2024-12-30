import ReactDOM from "react-dom";
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { Context } from "../Store/ContextProvider";
import Button from 'react-bootstrap/Button';

const Model = () => {
      const ctx = useContext(Context);
    let grandTotal = [];
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th colSpan={4} style={{ textAlign: 'center', verticalAlign: 'middle' }}><h2>Cart Details</h2></th>
                </tr>
                <tr>
                    <th>Shoe Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {ctx.Cart.map((item)=>
                    {
                        const totalQuantity  = item.Large + item.Medium + item.Small;
                        const TotalPrice = item.price*totalQuantity;
                        grandTotal.push(TotalPrice);
                        return  <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                        {item.Large > 0?`L ${item.Large }    `:""}
                        {item.Medium > 0?`M ${item.Medium}    `:""}
                        {item.Small > 0?`S ${item.Small}    `:""}
                        </td>
                        <td>{TotalPrice}</td>
                    </tr> })}
                    <tr>
                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><h5>GRAND TOTAL</h5></td>
                        <td colSpan={3}  style={{ textAlign: 'center', verticalAlign: 'middle' }}><h5>{grandTotal.reduce((acc,item)=>acc + item,0)}</h5></td>
                    </tr>
                    <tr>
                       
                        <td colSpan={4}>
                        <div style={{float:"right",marginRight:"5em"}}>
                        <div style={{display:"flex",justifyContent:"space-around",width:"12.5em",}}>
                        <Button variant="success"  onClick={()=>{ctx.setopenCart(false)}}>Purchase</Button>
                        <Button variant="danger"  onClick={()=>{ctx.setopenCart(false)}}>Cancel</Button>
                        </div>
                        </div> 
                          </td>
                          
                        
                    </tr>
               
            </tbody>
        </Table>
    );
}

const placeToPort = document.getElementById("aboveAll");


const Cart = () => {

    const ctx = useContext(Context);

    return (ctx.openCart && ctx.Cart.length>0 && ReactDOM.createPortal(<Model/>, placeToPort));
}

export default Cart;