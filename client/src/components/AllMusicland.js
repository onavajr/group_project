import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import { GiMusicSpell } from "react-icons/gi";

const AllMusicland = (props) => {
    const [ allMusics, setAllMusics] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/musicland')
            .then((res)=>{
                console.log(res.data);
                setAllMusics(res.data);
            })
            .catch((err)=>console.log(err));

    }, []);

    const deleteMusic = (musicId) =>{
        axios.delete('http://localhost:8000/api/musicland/' + musicId)
            .then((res) =>{
                console.log(res.data);
                let filteredMusic = allMusics.filter((singleMusic) => {
                    return singleMusic._id !== musicId;
                })

                setAllMusics(filteredMusic);

            })
            .catch((err) =>{
                console.log(err);
                navigate('/musicland');
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
                <div>
                    <h1 className="header-logo"><GiMusicSpell /> Music Land</h1>
                </div>
                <div>
                    
                    <button><Link to = {'/musicland/'}>Home</Link></button>
                    <button>Account</button>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
            <br />
            <br />
            <div className="music">
                <h2>Your Upcoming Concerts</h2>
                    <br/>
                    <table>
                        <thead>
                            <tr>
                                <th>Concert Name</th>
                                <th>Date</th>
                                <th>Leave Concert?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allMusics.map(( music, index) =>(
                                    <tr key={ index }>
                                        <td>
                                            { music.concertname }
                                        </td>
                                        <td>
                                            { music.concertdate }
                                        </td>
                                        <td>
                                            <Link to = {"/musicland/" + music._id}>Details</Link> | 
                                            <Link to = {"/musicland/"+ music._id + '/edit'}> Edit</Link> | 
                                            <button onClick={() => deleteMusic(music._id)}>Leave</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="new-browse-button">
                <button><Link to = {'/musicland/new/'}>Add New Concert</Link></button>
                <button><Link to = {'/musicland/concertpage/'}>Browse New Concert</Link></button>
            </div>
        </div>
    )
}

export default AllMusicland;

