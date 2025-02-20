import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
createRoot(document.getElementById("root")).render(
  <>
    <Auth0Provider
    domain={"dev-ywj0lm7olnjjz1xy.us.auth0.com"}
    clientId={"Ujoq5CV1WDMcidtJ5kUYp4pgl9o7xITn"}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
    </Auth0Provider>
  </>
);
