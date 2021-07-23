import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import { GiMusicSpell } from 'react-icons/gi';
import { GrLike } from 'react-icons/gr';

const DetailMusicland = (props) => {
    const { id } = props;
    const [music, setMusic] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/musicland/" + id)
            .then((res) => {
                console.log(res.data);
                setMusic(res.data);
            })
            .catch((err) =>{
                console.log(err);
            });
    },[]);

    const deleteMusic = () =>{
        axios.delete('http://localhost:8000/api/musicland/' + id)
            .then((res) =>{
                console.log(res.data);
                navigate('/musicland');
            })
            .catch((err) =>{
                console.log(err);
                navigate('/musicsheleter');
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
            <div className="detailHeader">
                    <h2 className="editPage">Concert Detail: {music.concertname}</h2>
                    <div>
                    <button className="deleteButton" onClick={ deleteMusic }>Leave {music.concertname}</button>
                    </div>
                    
                </div>
                <br/>
            <div className="musicPage">
                <div className="musicDetails">
                    <div className="musicBio">
                        <h4>Concert Date:{music.concertdate}</h4>
                        <p>{music.firstskill}</p>
                        <p>{music.secondskill}</p>
                        <p>{music.thirdskill}</p>
                    </div>
                    <div className="musicDescription">
                        <h4>Concert Location:</h4>
                        <p>{music.concertlocation}</p>
                    </div>
                    
                </div>
                <img src={music.concertimage} alt={music.name} className="imgmusic"/>
                
            </div>
            <div>
                <h2>Like this Concert <GrLike /></h2>
            </div>
        </div>
        

    )
}

export default DetailMusicland;