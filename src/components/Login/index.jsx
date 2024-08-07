import { Link } from 'react-router-dom';
// import styles from './login_styles.module.css' ;
import styles from '../styles.module.css' ;
import { useState } from 'react';
import axios from 'axios' ;
import { Loader } from '../Loader';

const Signup = (props) => {
    const [error , setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data , setData] = useState({
        email: "",
        password: "",
        appType: props.appType
    });

    const handleChange = ({currentTarget: input}) =>  {
        setData({...data, [input.name]:input.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try{
            const url = "https://jwtauthwrapper-server.onrender.com/api/signin" ;
            const {data: res }= await axios.post(url , data);
            localStorage.setItem("token", res.data);
            setIsLoading(false);
            window.location = "/"
        }catch (err){
            if(err.response && 
                err.response.status >= 400 &&
                err.response.status <= 500
            ){
                setError(err.response.data.message);
            }
            setIsLoading(false);
        }
    }

    return(
        <div className={styles.login_container}>
            {isLoading && <Loader/>}

            {!isLoading && <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className= {styles.form_container} onSubmit={handleSubmit}>
                        <h1>Login</h1>

                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />

                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />

                        {error && <div className= {styles.error_msg}>{error}</div>}
                        
                        <button type='submit' className={styles.green_btn}>
                            Sign In
                        </button>
                    </form>
                </div>

                <div className={styles.right}>
                    <h1>Create New Account</h1>
                    <Link to='/signup'>
                        <button type='button' className={styles.white_btn}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>}
        </div>
    )
}

export default Signup