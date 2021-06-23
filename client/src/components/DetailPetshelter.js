import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const DetailPetshelter = (props) => {
    const { id } = props;
    const [pet, setPet] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/petshelter/" + id)
            .then((res) => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch((err) =>{
                console.log(err);
            });
    },[]);
    return (
        <div>
            <h1>Pet Details</h1>
            <h1>{pet.petname}</h1>
            <h3>Pet Type: {pet.pettype}</h3>
            <h3>Description:</h3>
            <p>{pet.petdescription}</p>
            <h3>Skills: </h3>
            <p>{pet.firstskill}</p>
            <p>{pet.secondskill}</p>
            <p>{pet.thirdskill}</p>
            <img src={pet.petimage} alt={pet.name} className="imgpet"/>
        </div>
    )
}

export default DetailPetshelter;