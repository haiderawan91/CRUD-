import React from 'react'
import Card from './Card'
import CardData from './CardData';
import axios from 'axios';

const Services = () => {
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
    React.useEffect(getData, []);
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        {products.length===0? (<p>We have no Products"</p>) : (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-5">
                        {
                            products.map((val,index)=> {
                                return <Card key={index}
                                // imgsrc={val.imgsrc}
                                title={val.name}
                                 />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>)}
        
        </>
    );
};

export default Services