import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  let signInError; 

  if (error) {
    (
      
      signInError = <p className='text-red-500'>Error: {error?.message}</p>
    
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
     (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }

  console.log(email, password);
    
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Register Now!</h1>
      
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password" class="input input-bordered" />
        </div>
              <div class="form-control mt-6">
                {signInError}
                <button
                  onClick={() => createUserWithEmailAndPassword(email, password)}
                  class="btn btn-primary">Register</button>
                <div className='flex gap-3 my-4'>
                  <div>
                  Already have an account?
                  </div>
                  <div>
                  <Link className='font-bold' to='/login'>Please Login</Link>
                  </div>
                </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;