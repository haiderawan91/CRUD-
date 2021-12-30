import React from 'react'
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import "../Styles/index.css"
import { useState } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import SingleProduct from './SingleProduct';
import Footer from './Footer';
// import about from "../Images/about.jpg"
const Products = () => {
    const [products, setProducts] = React.useState([]);
    const [hasError, sethasError] = React.useState(false);

    const getData = () => {
        axios
            .get("http://localhost:4000/api/products/")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
                sethasError(true);
            });

    };

    React.useEffect(function () {
        console.log("Sending Ajax call");
        getData();
    }, []);
    return (
        <div>
            <Container fluid className="products ">
                <Row className="row">
                    <Col className="pro-col col-12 col-6 d-flex justify-content-center">
                        <h3>Our Services</h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="product-menu">
                <Row>
                    <Col xs={3} className="pro-menu-col ">
                    <Button as={Link} to="/products/create"variant="outline-danger" class="btn btn-get-Started" className="btn btn-get-Started">Add Service</Button>{' '}
                    
                    </Col>
                    
                </Row>
            </Container>
            {products.length === 0 && !hasError && <p>Loading...</p>}
            {hasError && <p>Something Wrong Happened</p>}
            {products.map((p) => (
                <SingleProduct product={p} onDelete={getData}/>
                ))}
            <Footer/>

        </div>
    );
}

export default Products;