import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token]=useToken(user || gUser)
  if (token) {
    navigate(from, { replace: true });
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="card lg:w-1/4 w-ful bg-base-100 shadow-xl mx-auto lg:mt-10">
      <div className="card-body">
        <h2 className="card-title justify-center">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>

          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
            type="email"
            placeholder="example@example.com"
            className="input input-bordered"
          />
          <label class="label">
            
            {errors.email?.type === "required" && (
              <span class="label-text-alt">{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span class="label-text-alt">{errors.email.message}</span>
            )}
            

          </label>

          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password must be 6 characters or longer",
              },
            })}
            type="password"
            placeholder="******"
            className="input input-bordered"
          />
          <label class="label">
            {errors.password?.type === "required" && (
              <span class="label-text-alt">{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span class="label-text-alt">{errors.password.message}</span>
            )}
            {error && (
              <span class="label-text-alt">Incorrect email or password</span>
            )}
          </label>

          

          <Link to="" className="text-accent text-xs mt-1">
            Forgot Password ?
          </Link>

          <div className="card-actions justify-end">
            {
              loading || gLoading ?<button class="btn loading w-full mt-3 text-white">loading</button>:<button
              type="submit"
              className="btn btn-accent w-full mt-3 text-white"
            >
              Login
            </button>
            }
          </div>
        </form>
        <p className="text-xs">
          New to Doctors Portal ?{" "}
          <Link to="/signup" className="text-secondary ">
            Create Account
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline w-full mt-3"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
