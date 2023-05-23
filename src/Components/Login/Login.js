
import { useRef } from 'react';
import classes from './Login.module.css';
const Login = props => {
    const enterEmail = useRef();
    const enterPassword = useRef();    

    const loginFormHandler = (e) =>{
        e.preventDefault(); 
        console.log(enterEmail.current.value,enterPassword.current.value);
        const enteredEmail = enterEmail.current.value.trim();
        const enteredPassword = enterPassword.current.value.trim();
        if(enteredEmail.includes('@') && enteredPassword.length > 6 ){
            console.log('Welcome To Login Valid');
            props.loginData(enteredEmail,enteredPassword);
            enterEmail.current.value = '';
            enterPassword.current.value = '';
        }else{
            console.log('Sorry Try Again');
            enterEmail.current.value = '';
            enterPassword.current.value = '';
        }
        
    }
    return (
        <div className={classes['login-container']}>
        <div className={classes.center}>
        <h1>Login</h1>
        <form action="" onSubmit={loginFormHandler}>
            <div className={classes['text-field']}>
                <input type="text" ref={enterEmail}/>
                <span></span>
                <label htmlFor="">Email</label>
            </div>
            <div className={classes['text-field']}>
                <input type="password" ref={enterPassword}/>
                <span></span>
                <label htmlFor="">Password</label>
            </div>
            <div className={classes.pass}>Forget Password?</div>
            <button className={classes.button}>Login</button>
        </form>
    </div>
    </div>
    )
    
}
export default Login;