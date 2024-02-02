import React,{useEffect} from "react";
import MainLayout from "../../../componenets/MainLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {useDispatch,useSelector} from 'react-redux';
import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import {getUserProfile, updateProfile} from "../../../services/index/users";
import ProfilePicture from "../../../componenets/ProfilePicture";
import { userActions } from "../../../store/reducers/userReducer";
import toast from "react-hot-toast";

const ProfilePage = () => {
const dispatch = useDispatch();
const userState = useSelector(state => state.user);
const navigate = useNavigate();
const queryClient = useQueryClient();
const {data: profileData,isLoading:profileIsLoading,error:profileError} = useQuery({
    queryFn:() => {
        return getUserProfile({token:userState.userInfo.token});
    },
    queryKey:['profile']
})

const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return updateProfile({
        token:userState.userInfo.token,
        userData:{name,email,password},
       
      })
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem('account',JSON.stringify(data));
      queryClient.invalidateQueries({
        queryKey:['profile']
      })
      toast.success('Profile Updated Successfully');
      
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });


  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");

    }
  },[navigate,userState.userInfo])
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",

    },
    values:{
        name:profileIsLoading ? "" : profileData.name,
        email: profileIsLoading ? "" :profileData.email,
    },
    mode: "onChange",
  });
  const submitHandler = (data) => {
    const {name,email,password}=data;
    mutate({name,email,password});

  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
            <p>{profileData?.name}</p>
            <ProfilePicture avatar={profileData?.avatar}/>

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
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "The Name Must Be  At Least 1 Character",
                  },
                  required: {
                    value: true,
                    message: "The Name Is Required",
                  },
                })}
                placeholder="Enter Your Name"
                className={`placeholder:text-[#959ead] text-dark-hard rounded-lg px-5 py-4 font-bold block outline-none border ${
                  errors.name ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.name?.message && (
                <p className="text-red-500 text-xm mt-1">
                  {" "}
                  {errors.name?.message}
                </p>
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
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "The Email Is Required",
                  },
                })}
                placeholder="Enter Your Email"
                className={`placeholder:text-[#959ead] text-dark-hard rounded-lg px-5 py-4 font-bold block outline-none border ${
                  errors.email ? "border-red-500" : "border-[#c3cad9] "
                }`}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xm mt-1">
                  {" "}
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
               New Password (Optional)
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                placeholder="Enter New  Password"
                className={`placeholder:text-[#959ead] text-dark-hard rounded-lg px-5 py-4 font-bold block outline-none border ${
                  errors.password ? "border-red-500" : "border-[#c3cad9] "
                }`}
              />
              {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>


            <button
              type="submit"
              disabled={!isValid || profileIsLoading }
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-80 disabled:cursor-not-allowed "
            >
              Register
            </button>

          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;