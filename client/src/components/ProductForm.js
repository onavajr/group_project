import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const ProductForm   = (props) => { 
    const { submitHandler, errors, product, setProduct, labelButton } = props;

    // const [ product, setProduct ] = useState({
    //     productname: "",
    //     producttype: "",
    //     productdescription: "",
    //     firstskill: "",
    //     secondskill: "",
    //     thirdskill:"",
    //     productimage: ""
    // });
    
    // const[errors, setErrors] = useState({

    // });

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8000/api/productmanager/new', product)
    //         .then((res) =>{
    //             console.log(res.data);
    //             navigate('/productmanager');
    //         })
    //         .catch((err) => {
    //             console.log(JSON.stringify(err));
    //             setErrors(err.response.data.errors)
    //         });
    // }

    const inputChange = (e) =>{
        console.log("e.target.name " + e.target.name);
        console.log("e.target.value " + e.target.value);

        let newStateObject = {...product};
        newStateObject[e.target.name] = e.target.value;
        setProduct(newStateObject);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div  className="productForm">
                    <div  className="formInput">
                        <label>Product Name: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="productname"
                            value={product.productname}
                            onChange={(e) => inputChange(e)}
                        />
                        {
                            product.productname && product.productname.length > 0 && product.productname.length < 3 ?
                            <span className="error-text"> Product name must be at leats 3 characters long</span>
                            :null
                        }
                        {
                            errors.productname ?
                                <span className="error-text"> {errors.productname.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                        <label >Product Type: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="producttype"
                            value={product.producttype}
                            onChange={(e) => inputChange(e)}
                        />
                        {
                            product.producttype && product.producttype.length > 0 && product.producttype.length < 3 ?
                            <span className="error-text"> Product type must be at leats 3 characters long</span>
                            :null
                        }
                        {
                            errors.producttype ?
                                <span className="error-text"> {errors.producttype.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                        <label className="formLabe">Description: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="productdescription"
                            value={product.productdescription}
                            onChange={(e) => inputChange(e)}
                        />
                        {
                            product.productdescription && product.productdescription.length > 0 && product.productdescription.length < 3 ?
                            <span className="error-text"> Description must be at leats 3 characters long</span>
                            :null
                        }
                        {
                            errors.productdescription ?
                                <span className="error-text"> {errors.productdescription.message}</span>
                                :null
                        } 
                    </div>
                    <div  className="formInput">
                    <label className="formLabel">First Skill: </label>
                        <select
                            className="textBox"
                            type="text"
                            name="firstskill"
                            value={product.firstskill}
                            onChange={(e) => inputChange(e)}
                        >
                            <option></option>
                            <option value="Running">Running</option>
                            <option value="Talking">Talking</option>
                            <option value="Eating">Eating</option>
                            <option value="Sleeping">Sleeping</option>
                            <option value="Jumping">Jumping</option>
                            <option value="Flying">Flying</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                        {
                            errors.firstskill ?
                                <span className="error-text"> {errors.firstskill.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                        <label className="formLabel">Second Skill: </label>
                        <select
                            className="textBox"
                            type="text"
                            name="secondskill"
                            value={product.secondskill}
                            onChange={(e) => inputChange(e)}
                        >
                            <option></option>
                            <option value="Eating">Eating</option>
                            <option value="Sleeping">Sleeping</option>
                            <option value="Running">Running</option>
                            <option value="Jumping">Jumping</option>
                            <option value="Flying">Flying</option>
                            <option value="Talking">Talking</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                        {
                            errors.secondskill ?
                                <span className="error-text"> {errors.secondskill.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                    <label className="formLabel">Third Skill: </label>
                        <select
                            className="textBox"
                            type="text"
                            name="thirdskill"
                            value={product.thirdskill}
                            onChange={(e) => inputChange(e)}
                        >
                            <option></option>
                            <option value="Running">Running</option>
                            <option value="Talking">Talking</option>
                            <option value="Eating">Eating</option>
                            <option value="Sleeping">Sleeping</option>
                            <option value="Jumping">Jumping</option>
                            <option value="Flying">Flying</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                        {
                            errors.thirdskill ?
                                <span className="error-text"> {errors.thirdskill.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                        <label className="formLabel">Image URL: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="productimage"
                            value={product.productimage}
                            onChange={(e) => inputChange(e)}
                        />  
                    </div>
                    <br/>
                        
                    {/* <div className="updateButton" >
                    <button type="submit">{ labelButton }</button>
                    </div> */}
                </div>
            </form>
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

export default ProductForm;