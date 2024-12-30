import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useContext, useState } from 'react';
import { Context } from '../Store/ContextProvider';


const SellerForm = () => {

   
    const ctx = useContext(Context);

    const FormHandler = (event) => {
        event.preventDefault();
        const obj = {
            "name": ctx.name,
            "description": ctx.description,
            "price": ctx.price,
            "Large": ctx.LargeQuantity,
            "Medium": ctx.MediumQuantity,
            "Small": ctx.SmallQuantity
        }
        
       if(ctx.LargeQuantity > 0 || ctx.MediumQuantity >0 || ctx.SmallQuantity > 0){
        ctx.setShoeDetails((previousState) => [...previousState, obj]);
        
       } 
        ctx.setName("");
        ctx.setDescription("");
        ctx.setPrice("");
        ctx.setLargeQuantity("");
        ctx.setMediumQuantity("");
        ctx.setSmallQuantity("");
    }

    return <><Button onClick={()=>ctx.setopenCart(true)} variant="success" style={{ height: "3em", float: "right" ,position:"fixed",right:"2px"}}>
        Cart<Badge bg="secondary">{ctx.Cart.length}</Badge>
    </Button>
     {!ctx.openCart && <Container className="d-flex">
            <Form onSubmit={FormHandler}>
                <Row>
                    <Col>
                        <Form.Label>ShoeName</Form.Label>
                        <Form.Control type='text' onChange={e => ctx.setName(e.target.value)} value={ctx.name} />
                    </Col>
                    <Col>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type='text' onChange={e => ctx.setDescription(e.target.value)} value={ctx.description} />
                    </Col>
                    <Col>
                        <Form.Label>price</Form.Label>
                        <Form.Control type='number' onChange={e => ctx.setPrice(e.target.value)} value={ctx.price} />
                    </Col>

                    <Col>


                        <Col className="d-flex" >
                            <Col >
                                <Form.Label>Large</Form.Label>
                                <Form.Control style={{ display: "flex", justifyContent: "end", alignItems: "center" }} type='number' onChange={e => ctx.setLargeQuantity(e.target.value)} value={ctx.LargeQuantity} />
                            </Col>
                            <Col>
                                <Form.Label>Medium</Form.Label>
                                <Form.Control style={{ display: "flex", justifyContent: "end", alignItems: "center" }} type='number' onChange={e => ctx.setMediumQuantity(e.target.value)} value={ctx.MediumQuantity} />
                            </Col>
                            <Col>
                                <Form.Label>Small</Form.Label>
                                <Form.Control style={{ display: "flex", justifyContent: "end", alignItems: "center" }} type='number' onChange={e => ctx.setSmallQuantity(e.target.value)} value={ctx.SmallQuantity} />
                            </Col>
                        </Col>
                    </Col>

                    <Col className="d-flex align-items-end" >
                        <Form.Label></Form.Label>
                        <Button variant="primary" type="submit" style={{ height: "3em" }}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

        </Container>}
    </>
}

export default SellerForm;