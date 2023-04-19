import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import {useEffect} from 'react';
import axios from 'axios';
import './API.css'
import { AxiosError } from 'axios';


// import axios from 'axios';

function API(){
    const[text,settext] = useState("");
    const[res,setres] = useState([]);
    const[error,seterror] = useState("");
    // const main = async () => {
    // await axios.get('<url>')
    // }
    const func_1=()=>{
        Axios.get((`https://api.github.com/search/users?q=${text}`)).then((response)=>{
            console.log(response.data.items);
            // console.log(response.data.avatar_url);
            // console.log(response.data.html_url);
            setres(response.data.items);
            seterror("");
        }).catch((error)=>{
            seterror(error.message);
            setres("");
        })
    }
    const func=(event)=>{
        settext(event.target.value);
    }
    return(
        <div>
            <h1 className='mrg_top'>Github API</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter Github username" aria-label="Recipient's username" aria-describedby="button-addon2" value={text} onChange={func}></input>
                <button class="btn btn-primary" type="button" id="button-addon2" onClick={func_1}>Submit</button><br></br>
            </div>
            {error!=="" && <h1>{error}</h1>}
                {
                        res.map((item,key)=>{
                            return <div class="rounded container bg-success">
                                <h1>Profile Number {key}</h1>
                                {console.log(item)}
                                <p>{item.login}</p>
                                <img src={item.avatar_url} class="rounded mx-auto d-block"></img>
                                <a href={item.html_url}><span className='span'>Profile URL</span></a>
                            </div>
                            
                        }) 
                        
                    
                }
        </div>
    )
}

export default API;