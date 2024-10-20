import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Landingpage from './Landingpage';
 

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate("");

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/signup/login", { email, password })
            .then((res) => {
                if (res.data === "valid") {
                    navigate(<Landingpage/>);
                } else {
                    alert("Invalid username or password");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="login" > 
           

          
            <section className="form-section " style={{backgroundColor:"gray"}}>
                <div className="form-container">
                    <form onSubmit={submit} className="login-form">
                        <div className="mb-3">
                            <input type="text" name="email" placeholder="Username" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="password" name="password" placeholder="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
 

export default SignupForm;
