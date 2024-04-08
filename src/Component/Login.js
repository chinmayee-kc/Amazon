// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//   const navigate = useNavigate();
//   const [input, setInput] = useState({
//     email : "",
//     password : "",
// });
// const handleLogin = (e) =>{
//   e.preventDefault();
//   const loggeduser =  JSON.parse(localStorage.getItem("user"));
//   if(
//      input.email === loggeduser.email &&
//      input.password === loggeduser.password
//      )
//      {
//       localStorage.setItem("loggedin",true)
//        navigate("/");
//   }
//   else{
//     alert("wrong email or password")
//   }
// }
//   return (
//     <>
//     <section 
//       className='vh-100 bg-image'
//       style={{
//         backgroundImage:
//         "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
//       }}
//       >
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//             <div className='form-outline'>
//               <input 
//                name='email'
//                value={input.email}
//                onChange={(e) =>
//                  setInput({
//                     ...input,
//                     [e.target.name] : e.target.value,
//                 })
//               }
//                  type='email'
//                  id='form3Example3cg'
//               />
//                <label>Your Email</label>
//             </div>

//            <div className='form-outline'>
//               <input 
//                name='password'
//                value={input.password}
//                onChange={(e) =>
//                  setInput({
//                     ...input,
//                     [e.target.name] : e.target.value,
//                 })
//               }
//                  type='password'
//                  id='form3Example4cg'
//               />
//                <label>Password</label>
//             </div>
//             <div className='d-flex justify-content-center'>
//             <button 
//             type='submit'
//             >
//                 Login
//             </button>
//         </div>

//         </form>



//       </section>

//     </>
   
//   )
// }

// export default Login

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        if (loggedUser && input.email === loggedUser.email && input.password === loggedUser.password) {
            localStorage.setItem('loggedin', true);
            navigate('/');
        } else {
            setError('Incorrect email or password');
        }
    };

    return (
        <section className='login-container vh-100 bg-image'>
            <h2 className=' d-flex justify-content-center'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-group mb-10 mt-10'>
                    <input
                        name='email'
                        value={input.email}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        type='email'
                        id='form3Example3cg'
                        className='form-control '
                    />
                    <label htmlFor='form3Example3cg'>Email</label>
                </div>

                <div className='form-group '>
                    <input
                        name='password'
                        value={input.password}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        type='password'
                        id='form3Example4cg'
                        className='form-control '
                    />
                    <label htmlFor='form3Example4cg'>Password</label>
                </div>

                {error && <div className='error'>{error}</div>}

                <div className='d-flex justify-content-center'>
                    <button type='submit' className='btn-primary'>
                        Login
                    </button>
                </div>

                    <p>
                    Don't have an account?
                    <a href='/register'>
                        <u className='navigate-link'>Register here</u>
                    </a>
                </p>
            </form>
        </section>
    );
};

export default Login;
