import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value 
        const password = form.password.value
        login(email, password)
        .then( result => {
            const user = result.user
            if(user) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login Success!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            navigate('/')
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to='/register' className="label-text-alt link link-hover">
                  Do you want register?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A]">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
