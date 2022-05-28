import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    console.log(email,password);
    
  let signInError;
  const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
  
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate])
  
  if (loading) {
    return <Loading></Loading>
  }
  
  if (error) {
    signInError = <p className='text-red-500'>{ error?.message}</p>
  }
  

    return (
        
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                            
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email" class="input input-bordered" />
                            
                            
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                            
                <input
                    placeholder="password" class="input input-bordered"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     />
                            
                            <label class="label">
    {error.password?.type === 'required' && <span class="label-text-alt text-red-500">{ error.password.message}</span>}                           
    {error.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{ error.password.message}</span>}                             
  </label>
              </div>
              <div class="form-control mt-6">
                {signInError}
                <button class="btn btn-primary" onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>
                <div className='flex gap-3 my-4'>
                  <div>
                  Are you new here?
                  </div>
                  <div>
                  <Link className='font-bold' to='/register'>Please Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
    );
};

export default Login;