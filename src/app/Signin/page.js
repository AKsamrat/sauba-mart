'use client';
import { useContext, useState } from 'react';
// import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import regImg from '../../../public/reg.jpg';
import { useForm } from 'react-hook-form';
// import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { getAuth, updateProfile } from 'firebase/auth';
// import app from '../Firebase/Firebase.config';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
// const auth = getAuth(app);

const page = () => {
  // const { createUser } = useContext(AuthContext);
  const [showPassword, setPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location?.state ? location.state : '/';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const { email, password } = data;
    if (password.length < 6) {
      setRegisterError('Password Should be minium 6 Charecter');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Minimun add one upper case');
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError('Minimun add one lower case');
      return;
    }
    setRegisterError('');

    // createUser(email, password)
    //   .then(result => {
    //     updateProfile(auth.currentUser, {
    //       displayName: data.name,
    //       photoURL: data.photo,
    //     }).then(result => {
    //       toast('successfully register');
    //       navigate(from, { replace: true });
    //       // if (result.user) {
    //       // }
    //     });
    //   })
    //   .catch(error => {
    //     toast('Email and Pass Problem');
    //     console.log(data);
    //   });
    reset();
  };

  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="flex flex-col lg:flex-row justify-center gap-7">
          <div className="text-center lg:text-left">
            <Image className="h-[75vh]" src={regImg} alt="" />
          </div>
          <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
            <form
              className="space-y-3 items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="text-3xl font-medium mb-3">Log in to Exclusive</h1>
              <p className="font-semibold text-sm mb-6">
                Enter Your Details Below
              </p>

              <div className="form-control ">
                <label className="">
                  <span className="">Email</span>
                </label>
                <input
                  {...register('email', { required: true })}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 dark:text-gray-800"
                  required
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  {...register('password', { required: true })}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  required
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 dark:text-gray-800"
                />
                <span
                  className="absolute top-3 right-2"
                  onClick={() => setPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              {registerError ? (
                <p className="text-md font-semibold text-red-600">
                  {registerError}
                </p>
              ) : (
                <p></p>
              )}
              <div className="form-control mt-4">
                <input
                  className="px-3 py-2 bg-[#DB4444] text-white w-full rounded-md"
                  type="submit"
                  value="Log In"
                ></input>
              </div>
              <button
                // onClick={() => handleSocialLogin(googleLogin)}
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full  space-x-2 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 text-green-800"
              >
                <p className="flex justify-center items-center gap-3 p-2 text-xl font-bold">
                  {' '}
                  <span className="text-4xl">
                    <FcGoogle />
                  </span>
                  Login with Google
                </p>
              </button>
            </form>
            <p className="text-xs text-center sm:px-6 dark:text-gray-600 py-3">
              Don't have an account?
              <Link
                to={'/Signup'}
                rel="noopener noreferrer"
                href="/Signup"
                className="underline dark:text-gray-800 text-[#00C2CB] font-bold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
