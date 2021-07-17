import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import { AiOutlineHome } from 'react-icons/ai';
import { IoStorefrontSharp } from 'react-icons/io5';

const DetailProductmanager = (props) => {
    const { id } = props;
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/productmanager/" + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) =>{
                console.log(err);
            });
    },[]);

    const deleteProduct = () =>{
        axios.delete('http://localhost:8000/api/productmanager/' + id)
            .then((res) =>{
                console.log(res.data);
                navigate('/productmanager');
            })
            .catch((err) =>{
                console.log(err);
                navigate('/productsheleter');
            });
    }
    return (
        <div>
            <div className="listHeader">
                <h1><IoStorefrontSharp />Product Manager</h1>
                <Link to = {'/productmanager/'}>Back to Home</Link>
            </div>
            <div className="detailHeader">
                    <h2 className="editPage">Details about: {product.productname}</h2>
                    <div>
                    <button className="deleteButton" onClick={ deleteProduct }><AiOutlineHome /> BUY {product.productname}</button>
                    </div>
                    
                </div>
            <div className="productPage">
                <div className="productDetails">
                    <div className="productBio">
                        <h4>Product Price: {product.producttype}</h4>
                        <h4>This item includes: </h4>
                        <p>{product.firstskill}</p>
                        <p>{product.secondskill}</p>
                        <p>{product.thirdskill}</p>
                    </div>
                    <div className="productDescription">
                        <h4>Description:</h4>
                        <p>{product.productdescription}</p>
                        
                        </div>
                    
                </div>
                <img src={product.productimage} alt={product.name} className="imgproduct"/>
                <br />
                <br />
            
            </div>
        </div>
        

    )
}

export default DetailProductmanager;