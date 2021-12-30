import React from 'react'
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import "../Styles/index.css"
import { Link } from "react-router-dom"
import axios from 'axios';
const SingleProduct = (props) => {

    let product = props.product;

    return (
        <div>
            <Container fluid className="pro ">
                <Row className="row2">
                    <Col xs={4} className=" pro-col m-3">
                    <p>
                           <b >Id: </b> 
                           {product._id}
                        </p>
                        <p>
                           <b >Name: </b> 
                           {product.name}
                        </p>
                        <p>
                            <b>Charges: </b>
                            {product.charges}
                        </p>
                        <p>
                            <b>Description: </b>
                            {product.description}
                            </p>
                    <Button className=" pr-btn"as={Link} to={"/products/edit/"+ product._id} variant="outline-danger">Edit</Button>
                    <Button className="mx-1 pr-btn" variant="outline-danger" onClick={() => {
                        axios.delete("http://localhost:4000/api/products/" + product._id).then((res)=>{
                            console.log("deleted");
                            props.onDelete();
                        })
                    }}>Delete</Button>    
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SingleProduct