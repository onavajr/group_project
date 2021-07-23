import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const MusicForm   = (props) => { 
    const { submitHandler, errors, music, setMusic, labelButton } = props;

    // const [ music, setMusic ] = useState({
    //     concertname: "",
    //     concertdate: "",
    //     concertlocation: "",
    //     firstskill: "",
    //     secondskill: "",
    //     thirdskill:"",
    //     concertimage: ""
    // });
    
    // const[errors, setErrors] = useState({

    // });

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8000/api/musicshelter/new', music)
    //         .then((res) =>{
    //             console.log(res.data);
    //             navigate('/musicshelter');
    //         })
    //         .catch((err) => {
    //             console.log(JSON.stringify(err));
    //             setErrors(err.response.data.errors)
    //         });
    // }

    const inputChange = (e) =>{
        console.log("e.target.name " + e.target.name);
        console.log("e.target.value " + e.target.value);

        let newStateObject = {...music};
        newStateObject[e.target.name] = e.target.value;
        setMusic(newStateObject);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div  className="musicForm">
                    <div  className="formInput">
                        <label>Concert Name: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="concertname"
                            value={music.concertname}
                            onChange={(e) => inputChange(e)}
                        />
                        {
                            music.concertname && music.concertname.length > 0 && music.concertname.length < 3 ?
                            <span className="error-text"> Music name must be at leats 3 characters long</span>
                            :null
                        }
                        {
                            errors.concertname ?
                                <span className="error-text"> {errors.concertname.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                        <label >Concert Date: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="concertdate"
                            value={music.concertdate}
                            onChange={(e) => inputChange(e)}
                        />
                        {
                            music.concertdate && music.concertdate.length > 0 && music.concertdate.length < 3 ?
                            <span className="error-text"> Music type must be at leats 3 characters long</span>
                            :null
                        }
                        {
                            errors.concertdate ?
                                <span className="error-text"> {errors.concertdate.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                        <label className="formLabe">Location: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="concertlocation"
                            value={music.concertlocation}
                            onChange={(e) => inputChange(e)}
                        />
                        {
                            music.concertlocation && music.concertlocation.length > 0 && music.concertlocation.length < 3 ?
                            <span className="error-text"> Description must be at leats 3 characters long</span>
                            :null
                        }
                        {
                            errors.concertlocation ?
                                <span className="error-text"> {errors.concertlocation.message}</span>
                                :null
                        } 
                    </div>
                    <div  className="formInput">
                        <label className="formLabel">Image URL: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="concertimage"
                            value={music.concertimage}
                            onChange={(e) => inputChange(e)}
                        />  
                    </div>


                    <br/>
                        <img src={music.concertimage} alt={music.name} className="img-create"/>
                    {/* <div className="updateButton" >
                    <button type="submit">{ labelButton }</button>
                    </div> */}
                </div>
            </form>
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

export default MusicForm;