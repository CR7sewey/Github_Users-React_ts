import loginImg from "../assets/login-img.svg";

export const Login = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-200">
      <section className="w-screen max-w-screen-sm text-center ">
        <img src={loginImg} alt="login" className="mb-8" />
        <h1>
          <button className="btn">Login</button>
        </h1>
      </section>
    </div>
  );
};
