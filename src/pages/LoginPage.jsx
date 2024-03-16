import { useState } from "react"
import { Link } from "react-router-dom";
import { LoginWrapper } from "./loginPage.styled"
import { useAuthContext } from "../context/authContext";
function LoginPage() {
    const {login}=useAuthContext();
    
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const emailHandler=(e)=>{
        setEmail(e.target.value);
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value);
    } 

    const loginHandler= async (e)=>{
        e.preventDefault();
        const payload={email,password}
       
        try{
            const response =await fetch("https://65edcc3708706c584d9a9e72.mockapi.io/products/1");
            const data=await response.json();
            console.log(data);
                       
            login("token_value");
            
        }catch(err){
            console.log(err)
        }


    }

    return (
        <LoginWrapper>
            
            <form action="">
            <h1>ВХОД</h1>
            <Link to="/registration" >Регистрация</Link>
            <br/>
            <br/>
            
                <div>
                    <label>Введите email</label>
                    <input type="text" value={email} onChange={emailHandler}/>
                </div>
                <div>
                    <label>Введите пароль</label>
                    <input type="text" value={password} onChange={passwordHandler}/>
                </div>
                <button onClick={loginHandler}>Войти</button>
            </form>
        </LoginWrapper>

    )
}

export default LoginPage