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

    const deletePet = () =>{
        axios.delete('http://localhost:8000/api/petshelter/' + id)
            .then((res) =>{
                console.log(res.data);
                navigate('/petshelter');
            })
            .catch((err) =>{
                console.log(err);
                navigate('/petsheleter');
            });
    }
    return (

        <div className="petPage">
            <h1 className="editPage">Pet Details</h1>
            <div className="petDetails">
                <div className="petBio">
                    <h2>Name: {pet.petname}</h2>
                    <h3>Pet Type: {pet.pettype}</h3>
                    <h3>Skills: </h3>
                    <p>{pet.firstskill}</p>
                    <p>{pet.secondskill}</p>
                    <p>{pet.thirdskill}</p>
                </div>
                <div className="petDescription">
                    <h3>Description:</h3>
                    <p>{pet.petdescription}</p>
                    
                    </div>
                
            </div>
            <img src={pet.petimage} alt={pet.name} className="imgpet"/>
            <br />
            <br />
            <button className="createButton" onClick={ deletePet }>Adapt {pet.petname}</button>
        </div>

    )
}

export default DetailPetshelter;