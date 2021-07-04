import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import { AiOutlineHome } from 'react-icons/ai';
import { MdPets } from 'react-icons/md';

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
        <div>
            <div className="listHeader">
                <h1><MdPets />Pet Shelter</h1>
                <Link to = {'/petshelter/'}>Back to Home</Link>
            </div>
            <div className="detailHeader">
                    <h2 className="editPage">Details about: {pet.petname}</h2>
                    <div>
                    <button className="deleteButton" onClick={ deletePet }><AiOutlineHome /> Adapt {pet.petname}</button>
                    </div>
                    
                </div>
            <div className="petPage">
                <div className="petDetails">
                    <div className="petBio">
                        <h4>Pet Type: {pet.pettype}</h4>
                        <h4>Skills: </h4>
                        <p>{pet.firstskill}</p>
                        <p>{pet.secondskill}</p>
                        <p>{pet.thirdskill}</p>
                    </div>
                    <div className="petDescription">
                        <h4>Description:</h4>
                        <p>{pet.petdescription}</p>
                        
                        </div>
                    
                </div>
                <img src={pet.petimage} alt={pet.name} className="imgpet"/>
                <br />
                <br />
            
            </div>
        </div>
        

    )
}

export default DetailPetshelter;