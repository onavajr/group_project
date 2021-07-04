import React from 'react';
import { Link } from '@reach/router';
import { MdPets,  } from 'react-icons/md';
import { FaHome,  } from 'react-icons/fa';

const PetHeader = () => {
    return (

        <div className="frontPage">
            <h4>Welcome to!!</h4>
            <h1><MdPets />Pet Shelter</h1>
            <h4>Here at pet shelter, we give you a unique, and isotic pets<br/>
                with different a type of skills</h4>
            <img className="pet cover" src="https://previews.123rf.com/images/dimbar76/dimbar762003/dimbar76200300028/142283341-collage-of-photos-of-pets-and-birds.jpg" />
            <Link to = {'/petshelter/'}>See all pets</Link><br></br>
            <small className="small">Warning! some pets are not suitable for young audiences.</small>
        </div>
    )
}

export default PetHeader;
