import React from 'react';
import { Link } from '@reach/router';

const PetHeader = () => {
    return (

        <div>
            <h1>Pet Shelter</h1>
            <p><Link to ="/petshelter/">See All Pets</Link></p>
        </div>
    )
}

export default PetHeader;
