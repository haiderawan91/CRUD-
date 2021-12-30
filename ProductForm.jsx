import React from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router'
import { Container, Row, Col, Button, FloatingLabel, Form } from 'react-bootstrap';
const ProductForm = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const isEditing = id ? "true" : "false";

    React.useEffect(function () {
        if (isEditing)
            axios
                .get("http://localhost:4000/api/products" + params.id)
                .then((res) => {
                    setProduct(res.data);
                })
                .catch((err) => {
                    console.log(err);

                });
    }, []);

    const [product, setProduct] = React.useState({
        name: "",
        charges: "",
        description: "",
    });
    return (
        <div>

            <Container fluid className="products ">
                <Row className="row">
                    <Col className="pro-col col-12 col-6 d-flex justify-content-center mb-5">
                        <h3>Services Form</h3>
                    </Col>
                </Row>
            </Container>
            <FloatingLabel
                controlId="floatingInput"
                label="Service Name"
                className="mb-3 mx-5"

            >
                <Form.Control type="text" value={product.name}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setProduct({ ...product, name: e.target.value });
                    }} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInpur" className="mb-3 mx-5" label="Services Charges">
                <Form.Control type="text" value={product.charges}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setProduct({ ...product, charges: e.target.value });
                    }} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3 mx-5">
                <Form.Control as="textarea" value={product.description}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setProduct({ ...product, description: e.target.value });
                    }} />
            </FloatingLabel>
            <Button className=" ms-5 mt-2 mx-2" variant="outline-success" onClick={(e) => {
                //   setSending(true);
                axios.post("http://localhost:4000/api/products/", product).then((res) => {
                    console.log(res.data);
                    //   setSending(false);
                    navigate("/products");
                }).catch((err) => {
                    console.log(err);
                });
            }}>Add</Button>
        
            <Button className="mt-2" variant="outline-success" onClick={(e) => {
                axios.put("http://localhost:3000/api/products/" + params.id, product).then((res) => {
                    console.log(res.data);
                    //   setSending(false);\\\\\\\\\\\
                    navigate("/products");
                }).catch((err) => {
                    console.log(err);
                });
            }}>
                Edit</Button>{' '}


        </div>
    )
}

export default ProductForm