import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import MusicForm from './MusicForm';
import { BsArrowBarUp } from 'react-icons/bs';
import { GiMusicSpell } from 'react-icons/gi';


const CreateMusicLand = (props) => {
    const [ newMusic, setNewMusic ] = useState({
        concertname: "",
        concertdate: "",
        concertlocation: "",
        concertimage: "",
    });
    
    const[errors, setErrors] = useState({

    });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/musicland/new', newMusic, {
            withCredentials: true
        })
            .then((res) =>{
                console.log(res.data);
                navigate('/musicland/concertpage');
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                console.log(err.response.status)
                if(err.response.status === 401){
                    navigate("/musicland/concertpage")
                }
            });
    }

    const logout = () =>{
        axios.post("http://localhost:8000/api/users/logout",{},{
            withCredentials: true
        })
        .then((res) => {
            console.log(res.data);
            navigate("musicland/login")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    // const inputChange = (e) =>{
    //     console.log("e.target.name " + e.target.name);
    //     console.log("e.target.value " + e.target.value);

    //     let newStateObject = {...newMusic};
    //     newStateObject[e.target.name] = e.target.value;
    //     setNewMusic(newStateObject);
    // }

    return (
        <div>
            <div className="listHeader">
                <h1 className="header-logo"><GiMusicSpell /> Music Land</h1>
                <div>
                    <button><Link to = {'/musicland/'}>Home</Link></button>
                    <button><Link to = {'/musicland/new/'}>New</Link></button>
                    <button><Link to = {'/musicland/concertpage/'}>Browse</Link></button>
                    <button>Account</button>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="createForm">
                <MusicForm
                submitHandler={submitHandler}
                errors={ errors }
                music={ newMusic}
                setMusic={setNewMusic}
                // labelButton={ "Add Music" }
                />
                <button className ="addButton" onClick={ submitHandler}><BsArrowBarUp/> Add Music</button>
            </div>
            
        </div>
    )
}


// {
//     "concertname": "Putol",
//     "concertdate": "Pooch",
//     "concertlocation": "superdog that can do evrything what you ask for, including laundry!",
//     "firstskill": "Jumping",
//     "secondskill": "Eating",
//     "thirdskill": "Flying",
//     "concertimage": "https://images-na.ssl-images-amazon.com/images/I/81VtHOiH%2B3L._SL1500_.jpg"
// }

// 'Sleeping',
//             'Eating',
//             'Jumping',
//             'Flying',
//             'Talking'

export default CreateMusicLand;