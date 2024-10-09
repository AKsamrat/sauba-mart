'use client';
import { useState } from 'react';
import regImg from '../../../public/reg.jpg';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Image from 'next/image';

// const auth = getAuth(app);

const Page = () => {
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
  const onSubmit = async data => {
    const { email, password } = data;
    console.log(data);

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
    const res = await fetch('http://localhost:3000/Signup/api', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
    if (res.status === 200) {
      reset();
    }
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
  };

  return (
    <div className="my-10">
      <div className=" min-h-screen bg-base-200">
        <div className="flex flex-col lg:flex-row justify-center gap-7">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-3 text-center">
              Sign Up Now!
            </h1>
            <Image className="h-[75vh]" src={regImg} alt="" />
          </div>
          <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <p className="font-semibold text-2xl mb-4">
                Enter Your Details Below
              </p>
              <div className="mt-4">
                <label className="">
                  <span className="">Name</span>
                </label>
                <input
                  {...register('name', { required: true })}
                  name="name"
                  type="text"
                  placeholder="name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 dark:text-gray-800"
                  required
                />
                {errors.name && <span>This field is required</span>}
                <label className="">
                  <span className="">Photo url</span>
                </label>
                <input
                  {...register('photo', { required: true })}
                  name="photo"
                  type="text"
                  placeholder="url"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 dark:text-gray-800"
                  required
                />
                {errors.photo && <span>This field is required</span>}
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
                  value="Create Account"
                ></input>
              </div>
            </form>

            <p className="text-xs text-center sm:px-6 dark:text-gray-600 py-3">
              Have an account?
              <Link
                to={'/Signin'}
                rel="noopener noreferrer"
                href="/Signin"
                className="underline dark:text-gray-800 text-[#00C2CB] font-bold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
