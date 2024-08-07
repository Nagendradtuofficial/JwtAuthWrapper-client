import { Link , useNavigate} from 'react-router-dom';
// import styles from './signup_styles.module.css' ;
import styles from '../styles.module.css' ;
import { useState } from 'react';
import axios from 'axios' ;
import { Loader } from '../Loader';
const Signup = (props) => {
    const [error , setError] = useState('');
    const [isLoading , setIsLoading] = useState(false);
    const [data , setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        appType: props.appType
    });

    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) =>  {
        setData({...data, [input.name]:input.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try{
            const url = "https://jwtauthwrapper-server.onrender.com/api/signup" ;
            const {data: res }= await axios.post(url , data);
            setIsLoading(false);
            navigate("/login");
            console.log(res.message);
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
        <div className={styles.signup_container}>
            {isLoading && <Loader/>}

            {!isLoading && <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to='/login'>
                        <button type='button' className={styles.white_btn}>
                            Sign In
                        </button>
                    </Link>
                </div>

                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create New Account</h1>
                        <input
                            type='text'
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />

                        <input
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />

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

                        {error && <div className={styles.error_msg}>{error}</div>}

                        <button type='submit' className={styles.green_btn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>}
        </div>
    )
}

export default Signup