import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout } = useAuth0();
  const signOut = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    sessionStorage.clear();
  };
  return <button onClick={() => signOut()}>Log Out</button>;
};
