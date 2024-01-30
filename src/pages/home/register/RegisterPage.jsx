import React from "react";
import MainLayout from "../../../componenets/MainLayout";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';

const RegisterPage = () => {

const{register,handleSubmit,formState:{errors,isValid},
watch,
}=useForm({
      defaultValues:{
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
      },
      mode:"onChange"

    })    
  const submitHandler = () => {};
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-robot text-2xl font-bold text-center text-dark-hard mb-8">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name",{
                    minLength:{
                        value:1,
                        message:"The Name Must Be  At Least 1 Character"
                    },
                    required:{
                        value:true,
                        message:"The Name Is Required",

                    }
                })}
                placeholder="Enter Your Name"
                className={`placeholder:text-[#959ead] text-dark-hard rounded-lg px-5 py-4 font-bold block outline-none border ${errors.name ?"border-red-500" : "border-[#c3cad9]" }` }
              />
              {errors.name?.message && (
                <p className="text-red-500 text-xm mt-1"> {errors.name?.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email",{
                    
                    required:{
                        value:true,
                        message:"The Email Is Required",

                    }
                })}
                placeholder="Enter Your Email"
                className={`placeholder:text-[#959ead] text-dark-hard rounded-lg px-5 py-4 font-bold block outline-none border ${errors.email ? "border-red-500": "border-[#c3cad9] "}` }
              />
                 {errors.email?.message && (
                <p className="text-red-500 text-xm mt-1"> {errors.email?.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                placeholder="Enter Your Password"
                className="placeholder:text-[#959ead] text-dark-hard rounded-lg px-5 py-4 font-bold block outline-none border border-[#c3cad9] "
              />
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="confirmPassword"
                className="text-[#5a7184] font-semibold block"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
                placeholder="Confirm Your Password"
                className="placeholder:text-[#959ead] text-dark-hard rounded-lg px-5 py-4 font-bold block outline-none border border-[#c3cad9] "
              />
            </div>
            <Link
              to={"/forget-password"}
              className="text-sm font-semibold text-primary"
            >
              Forgot password ?
            </Link>
            <button
              type="submit"
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 "
            >
              Register
            </button>
            <p className="text-sm font-semibold text-[#5a7184] ">
                You Already Have An Account ?<Link to={'/login'} className="text-primary" >
                    Login Now
                </Link>

            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;