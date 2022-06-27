import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";

export default function Login(){
    const [formError,setFormError] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const [data, setData] = useState({
        username : '',
        password :'',
    });
    const handleSubmet = (e) =>{
        // console.log(e);
        const {name , value} = e.target;
        setData((prev)=> ({...prev, [name] : value}))
        console.log(data);
    }
    const handleSubmition = (e) =>{
        e.preventDefault();
        setFormError(validation(data));
        setIsSubmit(true);
    }
    useEffect(()=>{
        if(Object.keys(formError).length === 0 && isSubmit){
            console.log(data);
        }
    },[formError])
    const validation = (value) =>{
        // console.log("vvvvv",value);
        const errors = {};
        console.log(data.username.length);
        if(!value.username){
            errors.username ="username is required !!";
        }
        if(!value.password){
            errors.password ="password is required !!";
        }
        return errors;
    }
    return(
        <>
            <form noValidate onSubmit={handleSubmition}>
                <div className={style.Login}>
                    <div className={style.card}>
                   <div>
                   <label>Username</label>
                    <input type="text" name="username" value={data.username} onChange={(e)=>handleSubmet(e)} required/>
                   </div>
                   <span className={style.spans}>{formError.username}</span>
                    <div>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password} onChange={(e)=>handleSubmet(e)}/>
                    <span className={style.spans}>{formError.password}</span>
                    </div>
                    <Link to="/" className={style.Link}>Sign up Account</Link>
                    <input type="submit" className={style.button} value="Login"/>
                    </div>
                </div>
            </form>
        </>
    )
}