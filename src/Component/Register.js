// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         name : "",
//         email : "",
//         password : "",
//     });

//     // to store value in localstorage
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         localStorage.setItem("user", JSON.stringify(input));
//         navigate("/login");
//     };
//   return (
//     <>
//     <section 
//     className='vh-100 bg-image'
//     style={{
//         backgroundImage:
//         "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
//     }}
//     ><h2>Create an account</h2>
//     <form onSubmit={handleSubmit}> 
//         <div className='form-outline'>
//            <input
//            name='name'
//            value={input.name}
//            onChange={(e) =>
//              setInput({
//                 ...input,
//                 [e.target.name] : e.target.value,
//             })
//           }
//            type='text'
//            id='form3Example1cg'
//            className='form-control'
//            />
//               <label>Your Name</label>
//         </div>

//         <div className='form-outline'>
//            <input
//                 name='email'
//                 value={input.email}
//                 onChange={(e) =>
//                   setInput({
//                      ...input,
//                      [e.target.name] : e.target.value,
//                  })
//                }
//            type='email'
//            id='form3Example3cg'
//            className='form-control'
//            />
//               <label>Your Email</label>
//         </div>

//         <div className='form-outline'>
//            <input
//                 name='password'
//                 value={input.password}
//                 onChange={(e) =>
//                   setInput({
//                      ...input,
//                      [e.target.name] : e.target.value,
//                  })
//                }
//            type='password'
//            id='form3Example4cg'
//            className='form-control'
//            />
//               <label>Password</label>
//         </div>

//         <div className='d-flex justify-content-center'>
//             <button 
//             type='submit'
//             >
//                 Register
//             </button>
//         </div>
//         <p>Have already an account?
//             <a href='/login'>
//                 <u>Login here</u>
//             </a>
//         </p>
//     </form>
    
//     </section>
//     </>
//   )
// }

// export default Register

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
    // const [errors, setError] = useState({});
    // const handleChange(e)[
    //     set
    

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = {}
//         if(!input.name.trim()) {
//             validationErrors.name = "'username is required"
//         }
//         if(!input.email.trim()){
//             validationErrors.email = "email is required"
//         }else if(/\S+@\S\.\S+/.test(input.email)){
//              validationErrors.email = "email is not valid"
//         }
//         if(!input.password.trim()){
//             validationErrors.password = "password is required"
//         }else if(input.password.length < 6){
//              validationErrors.password = "password should be at least  6 char"
//         }
//          if(input.confirmPassword !== input.password){
//             validationErrors.confirmPassword = "password not matched"
//          }
     
//         localStorage.setItem('user', JSON.stringify(input));
//         navigate('/login');
//     };

//     return (
//         <section className='register-container vh-100'>
//             <h2 className='create-main'>Create an account</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='form-group'>
//                     <input
//                         name='name'
//                         value={input.name}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
                            
//                         }
//                         type='text'
//                         id='form3Example1cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example1cg'>Username</label>
//                 </div>

//                 <div className='form-group'>
//                     <input
//                         name='email'
//                         value={input.email}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='email'
//                         id='form3Example3cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example3cg'>Email</label>
//                 </div>

//                 <div className='form-group'>
//                     <input
//                         name='password'
//                         value={input.password}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='password'
//                         id='form3Example4cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example4cg'>Password</label>
//                 </div>
//                 <div className='form-group'>
//                     <input
//                         name='confirmPassword'
//                         value={input.confirmPassword}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='password'
//                         id='form3Example5cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example4cg'>Confirm Password</label>
//                 </div>

//                 <div className='d-flex justify-content-center'>
//                     <button type='submit'>Register</button>
//                 </div>
//                 <p>
//                     Have already an account?
//                     <a href='/login'>
//                         <u>Login here</u>
//                     </a>
//                 </p>
//             </form>
//         </section>
//     );
// };

// export default Register;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Register = () => {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [formFeedback, setFormFeedback] = useState({ errors: {}, successMessage: '' });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = {};

//         if (!input.name.trim()) {
//             validationErrors.name = 'Username is required';
//         }
//         if (!input.email.trim()) {
//             validationErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(input.email)) {
//             validationErrors.email = 'Email is not valid';
//         }
//         if (!input.password.trim()) {
//             validationErrors.password = 'Password is required';
//         } else if (input.password.length < 6) {
//             validationErrors.password = 'Password should be at least 6 characters long';
//         }
//         if (input.confirmPassword !== input.password) {
//             validationErrors.confirmPassword = 'Passwords do not match';
//         }

//         setFormFeedback({ ...formFeedback, errors: validationErrors });

//         if (Object.keys(validationErrors).length === 0) {
//             localStorage.setItem('user', JSON.stringify(input));
//             navigate('/login');
//             setFormFeedback({ ...formFeedback, successMessage: 'Signed in successfully!' });
//         }
//     };

//     return (
//         <section className='register-container vh-100'>
//             <h2 className='create-main'>Create an account</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='form-group'>
//                     <input
//                         name='name'
//                         value={input.name}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='text'
//                         id='form3Example1cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example1cg'>Username</label>
//                     {formFeedback.errors.name && <span className="error">{formFeedback.errors.name}</span>}
//                 </div>

//                 <div className='form-group'>
//                     <input
//                         name='email'
//                         value={input.email}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='email'
//                         id='form3Example3cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example3cg'>Email</label>
//                     {formFeedback.errors.email && <span className="error">{formFeedback.errors.email}</span>}
//                 </div>

//                 <div className='form-group'>
//                     <input
//                         name='password'
//                         value={input.password}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='password'
//                         id='form3Example4cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example4cg'>Password</label>
//                     {formFeedback.errors.password && <span className="error">{formFeedback.errors.password}</span>}
//                 </div>
//                 <div className='form-group'>
//                     <input
//                         name='confirmPassword'
//                         value={input.confirmPassword}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='password'
//                         id='form3Example5cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example5cg'>Confirm Password</label>
//                     {formFeedback.errors.confirmPassword && <span className="error">{formFeedback.errors.confirmPassword}</span>}
//                 </div>

//                 {formFeedback.successMessage && <div className="success">{formFeedback.successMessage}</div>}

//                 <div className='d-flex justify-content-center'>
//                     <button type='submit'>Register</button>
//                 </div>
//                 <p>
//                     Have already an account?
//                     <a href='/login'>
//                         <u>Login here</u>
//                     </a>
//                 </p>
//             </form>
//         </section>
//     );
// };

// export default Register;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [formFeedback, setFormFeedback] = useState({ errors: {}, successMessage: '' });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = {};

//         if (!input.name.trim()) {
//             validationErrors.name = 'Username is required';
//         }
//         if (!input.email.trim()) {
//             validationErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(input.email)) {
//             validationErrors.email = 'Email is not valid';
//         }
//         if (!input.password.trim()) {
//             validationErrors.password = 'Password is required';
//         } else if (input.password.length < 6) {
//             validationErrors.password = 'Password should be at least 6 characters long';
//         } else if (!/(?=.*\d)(?=.*[A-Z])/.test(input.password)) {
//             validationErrors.password = 'Password should contain at least one digit and one uppercase letter';
//         }
//         if (input.confirmPassword !== input.password) {
//             validationErrors.confirmPassword = 'Passwords do not match';
//         }

//         setFormFeedback({ ...formFeedback, errors: validationErrors });

//         if (Object.keys(validationErrors).length === 0) {
//             localStorage.setItem('user', JSON.stringify(input));
//             navigate('/login');
//             setFormFeedback({ ...formFeedback, successMessage: 'Signed in successfully!' });
//         }
//     };

//     return (
//         <section className='register-container vh-100'>
//             <h2 className='create-main'>Create an account</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='form-group'>
//                     <input
//                         name='name'
//                         value={input.name}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='text'
//                         id='form3Example1cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example1cg'>Username</label>
//                     {formFeedback.errors.name && <span className="error">{formFeedback.errors.name}</span>}
//                 </div>

//                 <div className='form-group'>
//                     <input
//                         name='email'
//                         value={input.email}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='email'
//                         id='form3Example3cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example3cg'>Email</label>
//                     {formFeedback.errors.email && <span className="error">{formFeedback.errors.email}</span>}
//                 </div>

//                 <div className='form-group'>
//                     <input
//                         name='password'
//                         value={input.password}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='password'
//                         id='form3Example4cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example4cg'>Password</label>
//                     {formFeedback.errors.password && <span className="error">{formFeedback.errors.password}</span>}
//                 </div>
//                 <div className='form-group'>
//                     <input
//                         name='confirmPassword'
//                         value={input.confirmPassword}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='password'
//                         id='form3Example5cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example5cg'>Confirm Password</label>
//                     {formFeedback.errors.confirmPassword && <span className="error">{formFeedback.errors.confirmPassword}</span>}
//                 </div>

//                 {formFeedback.successMessage && <div className="success">{formFeedback.successMessage}</div>}

//                 <div className='d-flex justify-content-center'>
//                     <button type='submit'>Register</button>
//                 </div>
//                 <p>
//                     Have already an account?
//                     <a href='/login'>
//                         <u>Login here</u>
//                     </a>
//                 </p>
//             </form>
//         </section>
//     );
// };

// export default Register;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [formFeedback, setFormFeedback] = useState({ errors: {}, successMessage: '' });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = {};

//         if (!input.name.trim()) {
//             validationErrors.name = 'Username is required';
//         }
//         if (!input.email.trim()) {
//             validationErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(input.email)) {
//             validationErrors.email = 'Email is not valid';
//         }
//         if (!input.password.trim()) {
//             validationErrors.password = 'Password is required';
//         } else if (input.password.length < 6) {
//             validationErrors.password = 'Password should be at least 6 characters long';
//         } else if (!/(?=.*\d)(?=.*[A-Z])/.test(input.password)) {
//             validationErrors.password = 'Password should contain at least one digit and one uppercase letter';
//         }
//         if (input.confirmPassword !== input.password) {
//             validationErrors.confirmPassword = 'Passwords do not match';
//         }

//         setFormFeedback({ ...formFeedback, errors: validationErrors });

//         if (Object.keys(validationErrors).length === 0) {
//             localStorage.setItem('user', JSON.stringify(input));
//             navigate('/login');
//             setFormFeedback({ errors: {}, successMessage: 'Signed in successfully!' });
//         }
//     };

//     return (
//         <section className='register-container vh-100'>
//             <h2>Create an account</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Your form inputs */}
//                 {/* Display validation errors */}
//                 {Object.keys(formFeedback.errors).map((fieldName, index) => (
//                     <div key={index} className="error">
//                         {formFeedback.errors[fieldName]}
//                     </div>
//                 ))}

//                 {/* Display success message */}
//                 {formFeedback.successMessage && <div className="success">{formFeedback.successMessage}</div>}

//                 <div className='d-flex justify-content-center'>
//                     <button type='submit'>Register</button>
//                 </div>
//                 <p>
//                     Have already an account?
//                     <a href='/login'>
//                         <u>Login here</u>
//                     </a>
//                 </p>
//             </form>
//         </section>
//     );
// };

// export default Register;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [successMessage, setSuccessMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = {};
//         if (!input.name.trim()) {
//             validationErrors.name = 'Username is required';
//         }
//         if (!input.email.trim()) {
//             validationErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(input.email)) {
//             validationErrors.email = 'Email is not valid';
//         }
//         if (!input.password.trim()) {
//             validationErrors.password = 'Password is required';
//         } else if (input.password.length < 6) {
//             validationErrors.password = 'Password should be at least 6 characters long';
//         } else if (!/(?=.*[A-Z])(?=.*\d)/.test(input.password)) {
//             validationErrors.password = 'Password should contain at least one uppercase letter and one digit';
//         }
//         if (input.confirmPassword !== input.password) {
//             validationErrors.confirmPassword = 'Passwords do not match';
//         }
//         setErrors(validationErrors);
//         if (Object.keys(validationErrors).length === 0) {
//             localStorage.setItem('name', JSON.stringify(input));
//             navigate('/login');
//             setSuccessMessage('Signed up successfully!');
//         }
//     };
    
    
//     return (
//         <section className='register-container vh-100'>
//             <h2 className='create-main'>Create an account</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='form-group'>
//                     <input
//                         name='name'
//                         value={input.name}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='text'
//                         id='form3Example1cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example1cg'>Username</label>
//                     {errors.name && <span className="error">{errors.name}</span>}
//                 </div>

//                 <div className='form-group'>
//                     <input
//                         name='email'
//                         value={input.email}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='email'
//                         id='form3Example3cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example3cg'>Email</label>
//                     {errors.email && <span className="error">{errors.email}</span>}
//                 </div>

//                 <div className='form-group'>
//                     <input
//                         name='password'
//                         value={input.password}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='password'
//                         id='form3Example4cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example4cg'>Password</label>
//                     {errors.password && <span className="error">{errors.password}</span>}
//                 </div>
//                 <div className='form-group'>
//                     <input
//                         name='confirmPassword'
//                         value={input.confirmPassword}
//                         onChange={(e) =>
//                             setInput({
//                                 ...input,
//                                 [e.target.name]: e.target.value,
//                             })
//                         }
//                         type='password'
//                         id='form3Example5cg'
//                         className='form-control'
//                     />
//                     <label htmlFor='form3Example5cg'>Confirm Password</label>
//                     {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
//                 </div>

//                 {successMessage && <div className="success">{successMessage}</div>}

//                 <div className='d-flex justify-content-center'>
//                     <button type='submit'>Register</button>
//                 </div>
//                 <p>
//                     Have already an account?
//                     <a href='/login'>
//                         <u>Login here</u>
//                     </a>
//                 </p>
//             </form>
//         </section>
//     );
// };

// export default Register;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!input.name.trim()) {
            validationErrors.name = 'Username is required';
        }
        if (!input.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(input.email)) {
            validationErrors.email = 'Email is not valid';
        }
        if (!input.password.trim()) {
            validationErrors.password = 'Password is required';
        } else if (input.password.length < 6) {
            validationErrors.password = 'Password should be at least 6 characters long';
        } else if (!/(?=.*[A-Z])(?=.*\d)/.test(input.password)) {
            validationErrors.password = 'Password should contain at least one uppercase letter and one digit';
        }
        if (input.confirmPassword !== input.password) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            localStorage.setItem('user', JSON.stringify(input));
            setSuccessMessage('Signed up successfully!');
            navigate('/login');
            // Reset success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };

    return (
        <section className='register-container vh-100'>
            <h2 className='create-main'>Create an account</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                        name='name'
                        value={input.name}
                        onChange={(e) =>
                            setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                            })
                        }
                        type='text'
                        id='form3Example1cg'
                        className='form-control'
                    />
                    <label htmlFor='form3Example1cg'>Username</label>
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className='form-group'>
                    <input
                        name='email'
                        value={input.email}
                        onChange={(e) =>
                            setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                            })
                        }
                        type='email'
                        id='form3Example3cg'
                        className='form-control'
                    />
                    <label htmlFor='form3Example3cg'>Email</label>
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className='form-group'>
                    <input
                        name='password'
                        value={input.password}
                        onChange={(e) =>
                            setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                            })
                        }
                        type='password'
                        id='form3Example4cg'
                        className='form-control'
                    />
                    <label htmlFor='form3Example4cg'>Password</label>
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className='form-group'>
                    <input
                        name='confirmPassword'
                        value={input.confirmPassword}
                        onChange={(e) =>
                            setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                            })
                        }
                        type='password'
                        id='form3Example5cg'
                        className='form-control'
                    />
                    <label htmlFor='form3Example5cg'>Confirm Password</label>
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>

                {successMessage && <div className="success">{successMessage}</div>}

                <div className='d-flex justify-content-center'>
                    <button type='submit'>Register</button>
                </div>
                <p>
                    Have already an account?
                    <a href='/login'>
                        <u className='navigate-link'>Login here</u>
                    </a>
                </p>
            </form>
        </section>
    );
};

export default Register;






