import React from 'react';
import { Link } from '@reach/router';
import { MdPets,  } from 'react-icons/md';
import { FaHome,  } from 'react-icons/fa';

const PetHeader = () => {
    return (

        <div className="header">
            <h1><MdPets />Pet Shelter</h1>
            <Link className="home" to ="/petshelter/"><FaHome /> See All Pets</Link>
        </div>
    )
}

export default PetHeader;
