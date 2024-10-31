import loginImg from "../assets/login-img.svg";
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="min-h-screen grid place-items-center bg-slate-200">
      <section className="w-screen max-w-screen-sm text-center ">
        <img src={loginImg} alt="login" className="mb-8" />
        <h1>
          <button onClick={() => loginWithRedirect()} className="btn">LOG IN / SIGN UP</button>
        </h1>
      </section>
    </div>
  );
};

export default Login