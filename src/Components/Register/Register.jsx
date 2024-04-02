import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {register} = useContext(AuthContext)
    const handlerRegister = e => {
        e.preventDefault();
        const form = e.target 
        const name = form.name.value 
        const email = form.email.value
        const password = form.password.value
        register(email, password)
        .then( result => {
            const user = result.user
            if(user) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Register Success!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch( err => {
            if(err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${err.message}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                  })
            }
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlerRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <Link to='/login' className="label-text-alt link link-hover">
                  Have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A]">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
