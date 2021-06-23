import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const CreatePetShelter = (props) => {
    const [ newPet, setNewPet ] = useState({
        petname: "",
        pettype: "",
        petdescription: "",
        firstskill: "",
        secondskill: "",
        thirdskill:"",
        petimage: ""
    });
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/petshelter/new', newPet)
            .then((res) =>{
                console.log(res.data);
                navigate('/petshelter');
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const inputChange = (e) =>{
        console.log("e.target.name " + e.target.name);
        console.log("e.target.value " + e.target.value);

        let newStateObject = {...newPet};
        newStateObject[e.target.name] = e.target.value;
        setNewPet(newStateObject);
    }

    return (
        <div>
            <h1>Create Pets</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Pet Name: </label>
                    <input
                        type="text"
                        name="petname"
                        value={newPet.petname}
                        onChange={(e) => inputChange(e)}
                    />  
                </div>
                <div>
                    <label>Pet Type: </label>
                    <input
                        type="text"
                        name="pettype"
                        value={newPet.pettype}
                        onChange={(e) => inputChange(e)}
                    />  
                </div>
                <div>
                    <label>Description: </label>
                    <input
                        type="text"
                        name="petdescription"
                        value={newPet.petdescription}
                        onChange={(e) => inputChange(e)}
                    />  
                </div>
                <div>
                <label>First Skill: </label>
                    <select
                        type="text"
                        name="firstskill"
                        value={newPet.sfirstskill}
                        onChange={(e) => inputChange(e)}
                    >
                        <option value="Swimming">Swimming</option>
                        <option value="Eating">Eating</option>
                        <option value="Sleeping">Sleeping</option>
                        <option value="Jumping">Jumping</option>
                        <option value="Flying">Flying</option>
                        <option value="Talking">Talking</option>
                        
                    </select>  
                </div>
                <div>
                    <label>Second Skill: </label>
                    <select
                        type="text"
                        name="secondskill"
                        value={newPet.secondskill}
                        onChange={(e) => inputChange(e)}
                    >
                        <option value="Eating">Eating</option>
                        <option value="Sleeping">Sleeping</option>
                        <option value="Jumping">Jumping</option>
                        <option value="Flying">Flying</option>
                        <option value="Talking">Talking</option>
                        <option value="Swimming">Swimming</option>
                    </select>
                </div>
                <div>
                <label>Third Skill: </label>
                    <select
                        type="text"
                        name="thirdskill"
                        value={newPet.thirdskill}
                        onChange={(e) => inputChange(e)}
                    >
                        <option value="Talking">Talking</option>
                        <option value="Eating">Eating</option>
                        <option value="Sleeping">Sleeping</option>
                        <option value="Jumping">Jumping</option>
                        <option value="Flying">Flying</option>
                        
                        <option value="Swimming">Swimming</option>
                    </select> 
                </div>
                <div>
                    <label>Image URL: </label>
                    <input
                        type="text"
                        name="petimage"
                        value={newPet.petimage}
                        onChange={(e) => inputChange(e)}
                    />  
                </div>
                <button type="submit">Add Pet</button>
            </form>
        </div>
    )
}


// {
//     "petname": "Putol",
//     "pettype": "Pooch",
//     "petdescription": "superdog that can do evrything what you ask for, including laundry!",
//     "firstskill": "Jumping",
//     "secondskill": "Eating",
//     "thirdskill": "Flying",
//     "petimage": "https://images-na.ssl-images-amazon.com/images/I/81VtHOiH%2B3L._SL1500_.jpg"
// }

// 'Sleeping',
//             'Eating',
//             'Jumping',
//             'Flying',
//             'Talking'

export default CreatePetShelter;