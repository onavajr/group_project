import React from 'react';
import { Link } from '@reach/router';
import { IoStorefrontSharp,  } from 'react-icons/io5';
import { FaHome,  } from 'react-icons/fa';

const ProductHeader = () => {
    return (

        <div className="frontPage">
            <h4>Welcome to!!</h4>
            <h1><IoStorefrontSharp />Product Manager</h1>
            <h4>Here at product manager, we give you a unique, and isotic products<br/>
                with different a type of Items</h4>
            <img className="product cover" src="https://previews.123rf.com/images/dimbar76/dimbar762003/dimbar76200300028/142283341-collage-of-photos-of-products-and-birds.jpg" />
            <Link to = {'/productmanager/login'}>Login to see all products</Link><br></br>
            <small className="small">Warning! some products are not suitable for young audiences.</small>
        </div>
    )
}

export default ProductHeader;
