import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AllPetshelter = (props) => {
    const [ allPets, setAllPets] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/petshelter')
            .then((res)=>{
                console.log(res.data);
                setAllPets(res.data);
            })
            .catch((err)=>console.log(err));

    }, []);
    return (
        <div className="pet">
            <div>
                <h1>Pet Shelter</h1>
                <p><a href="">Add a pet to the Shelter</a></p>
            </div>
            <h3>These pets are looking for a good home</h3>
                <div>
                    {
                        allPets.map(( pet, index) =>(
                            <div key={ index }>
                                <p>{ pet.petname }</p>
                                <p>{ pet.pettype }</p>
                                <div>
                                    <p><Link to = {"/petshelter/" + pet._id}>Details</Link></p> |
                                    <p>Edit</p>
                                </div>
                            </div>
                            ))
                        }
                </div>
        </div>
    )
}

export default AllPetshelter;