import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import ProductForm from './ProductForm';
import { IoStorefrontSharp } from 'react-icons/io5';
import { BsPencil } from 'react-icons/bs';
import DetailProductmanager from './DetailProductmanager';



const EditProductManager = (props) => {
    const { id } = props;
    const [ editProduct, setEditProduct] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/productmanager/" + id)
            .then((res)=>{
                console.log(res.data);
                setEditProduct(res.data);
            })
            .catch((err) =>{
                console.log(err);
                navigate("/productmanager");
            });
    },[]);
    // const [ newProduct, setNewProduct ] = useState({
    //     productname: "",
    //     producttype: "",
    //     productdescription: "",
    //     firstskill: "",
    //     secondskill: "",
    //     thirdskill:"",
    //     productimage: ""
    // });
    
    const[errors, setErrors] = useState({

    });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/productmanager/' + id, editProduct)
            .then((res) =>{
                console.log(res.data);
                navigate('/productmanager/' + id);
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                setErrors(err.response.data.errors)
            });
    }

    // const inputChange = (e) =>{
    //     console.log("e.target.name " + e.target.name);
    //     console.log("e.target.value " + e.target.value);

    //     let newStateObject = {...newProduct};
    //     newStateObject[e.target.name] = e.target.value;
    //     setNewProduct(newStateObject);
    // }

    return (
        <div>
            <div className="editHeader">
                <h1><IoStorefrontSharp />Product Manager</h1>
                <Link to = {'/productmanager/'}>Back to Home</Link>
            </div>
            <h2>Edit {editProduct.productname}</h2>
            <div className="editForm">
                <ProductForm
                    submitHandler={submitHandler}
                    errors={ errors }
                    product={ editProduct}
                    setProduct={setEditProduct}
                    labelButton = { "Update Product"} />
                <button className = "editButton" onClick={ submitHandler}><BsPencil /> Update Product</button>
            </div>
            
            
        </div>
        
    )
}


// {
//     "productname": "Putol",
//     "producttype": "Pooch",
//     "productdescription": "superdog that can do evrything what you ask for, including laundry!",
//     "firstskill": "Jumping",
//     "secondskill": "Eating",
//     "thirdskill": "Flying",
//     "productimage": "https://images-na.ssl-images-amazon.com/images/I/81VtHOiH%2B3L._SL1500_.jpg"
// }

// 'Sleeping',
//             'Eating',
//             'Jumping',
//             'Flying',
//             'Talking'

export default EditProductManager;