import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import { GiMusicSpell,  } from 'react-icons/gi';

const MusicPage = (props) => {
    const [ allMusics, setAllMusics] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/musicland')
            .then((res)=>{
                console.log(res.data);
                setAllMusics(res.data);
            })
            .catch((err)=>console.log(err));

    }, []);

    // const deleteMusic = (musicId) =>{
    //     axios.delete('http://localhost:8000/api/musicland/' + musicId)
    //         .then((res) =>{
    //             console.log(res.data);
    //             let filteredMusic = allMusics.filter((singleMusic) => {
    //                 return singleMusic._id !== musicId;
    //             })

    //             setAllMusics(filteredMusic);

    //         })
    //         .catch((err) =>{
    //             console.log(err);
    //             navigate('/musicland');
    //         });
    // }
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
        <div >
            <div className="listHeader">
                <h1 className="header-logo"><GiMusicSpell /> Music Land</h1>
                <div>
                    
                    <button><Link to = {'/musicland/'}>Home</Link></button>
                    <button>Account</button>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
            <div className="music">
                <h2>Performing Musicians</h2>
                    <br/>
                    <table>
                        <thead>
                            <tr>
                                <th>Cover images</th>
                                <th>Concert Name</th>
                                <th>Date</th>
                                <th>Join Concert?</th>
                                
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allMusics.map(( music, index) =>(
                                    <tr key={ index }>
                                        <td>
                                            <img src={music.concertimage} alt={music.name} className="img-browse"/>
                                        </td>
                                        <td>
                                            { music.concertname }
                                        </td>
                                        <td>
                                            { music.concertdate }
                                        </td>
                                        <td> 

                                            
                                            {/* <Link to = {"/musicland/" + music._id}>Details</Link> | 
                                            <Link to = {"/musicland/"+ music._id + '/edit'}> Edit</Link> |  */}
                                            {/* <button onClick={() => deleteMusic(music._id)}>Join Live Concert</button> */}
                                            <button>Join Concert</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            </div>
            <br />
            <br />
            <div className="new-browse-button">
                <button><Link to = {'/musicland/new/'}>Add New Concert</Link></button>
                <button><Link to = {'/musicland/concertpage/'}>Browse New Concert</Link></button>
            </div>
        </div>
    )
}

export default MusicPage;
