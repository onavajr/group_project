import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import { MdPets,  } from 'react-icons/md';

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

    const deletePet = (petId) =>{
        axios.delete('http://localhost:8000/api/petshelter/' + petId)
            .then((res) =>{
                console.log(res.data);
                let filteredPet = allPets.filter((singlePet) => {
                    return singlePet._id !== petId;
                })

                setAllPets(filteredPet);

            })
            .catch((err) =>{
                console.log(err);
                navigate('/petsheleter');
            });
    }

    return (
        <div >
            <div className="listHeader">
                <h1><MdPets />Pet Shelter</h1>
                <Link to = {'/petshelter/new/'}>Add pet to the shelter</Link>
            </div>
            <div className="pet">
                <h2>These pets are looking for a good home</h2>
                    <br/>
                    <table>
                        <thead>
                            <tr>
                                <th>Pet Name</th>
                                <th>Pet Type</th>
                                <th>Edit or Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allPets.map(( pet, index) =>(
                                    <tr key={ index }>
                                        <td>
                                            { pet.petname }
                                        </td>
                                        <td>
                                            { pet.pettype }
                                        </td>
                                        <td>
                                            <Link to = {"/petshelter/" + pet._id}>Details</Link> | 
                                            <Link to = {"/petshelter/"+ pet._id + '/edit'}> Edit</Link> 
                                            {/*  reserve for other apps: | <button onClick={() => deletePet(pet._id)}>Delete</button> */}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default AllPetshelter;

