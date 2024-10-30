import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <div className="min-h-screen grid place-items-center bg-slate-200">
            <section className="w-screen max-w-screen-sm text-center ">

                <h1>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                    </button></h1>
            </section>
        </div>
    );
};

export default LogoutButton;