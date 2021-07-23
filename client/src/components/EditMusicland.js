import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import MusicForm from './MusicForm';
import { GiMusicSpell } from 'react-icons/gi';
import { BsPencil } from 'react-icons/bs';
import DetailMusicland from './DetailMusicland';



const EditMusicLand = (props) => {
    const { id } = props;
    const [ editMusic, setEditMusic] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/musicland/" + id)
            .then((res)=>{
                console.log(res.data);
                setEditMusic(res.data);
            })
            .catch((err) =>{
                console.log(err);
                navigate("/musicland");
            });
    },[]);

    const[errors, setErrors] = useState({

    });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/musicland/' + id, editMusic)
            .then((res) =>{
                console.log(res.data);
                navigate('/musicland/' + id);
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                setErrors(err.response.data.errors)
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
            <div className="editHeader">
                <h1 className="header-logo"><GiMusicSpell /> Music Land</h1>
                <div>
                    
                    <button><Link to = {'/musicland/'}>Home</Link></button>
                    <button><Link to = {'/musicland/new/'}>New</Link></button>
                    <button><Link to = {'/musicland/concertpage/'}>Browse</Link></button>
                    <button>Account</button>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
            <h2>Edit {editMusic.concertname}</h2>
            <div className="editForm">
                <MusicForm
                    submitHandler={submitHandler}
                    errors={ errors }
                    music={ editMusic}
                    setMusic={setEditMusic}
                    labelButton = { "Update Music"} />
                <button className = "editButton" onClick={ submitHandler}><BsPencil /> Update Music</button>
            </div>
            
            
        </div>
        
    )
}

export default EditMusicLand;