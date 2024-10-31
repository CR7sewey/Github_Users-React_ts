import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppProvider from "./context.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={`${process.env.DOMAIN}`}
      clientId={`${process.env.CLIENT_ID}`}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <AppProvider>
        <App />
      </AppProvider></Auth0Provider>,
  </StrictMode>
);