import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { RegistrationWrapper } from "./registrationPage.styled"
function RegistrationPage() {
    const navigation=useNavigate();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const emailHandler=(e)=>{
        setEmail(e.target.value);
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value);
    } 

    const registrationHandler= async (e)=>{
        e.preventDefault();
        const payload={email,password}
        const response =await fetch("https://65edcc3708706c584d9a9e72.mockapi.io/products/1");
        const data=await response.json();
        console.log(data);
        navigation('/login');

    }

    return (
        <RegistrationWrapper>
            
            <form action="">
            <h1>РЕГИСТРАЦИЯ</h1>
                <div>
                    <label>Введите email</label>
                    <input type="text" value={email} onChange={emailHandler}/>
                </div>
                <div>
                    <label>Введите пароль</label>
                    <input type="text" value={password} onChange={passwordHandler}/>
                </div>
                <button onClick={registrationHandler}>Зарегистрироваться</button>
            </form>
        </RegistrationWrapper>

    )
}

export default RegistrationPage