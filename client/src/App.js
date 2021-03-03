import "./App.css";
import LoginButton from "./Components/LoginButton";
import LogOutButton from "./Components/LogOutButton";
import Profile from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <LoginButton />
      <LogOutButton />
      <Profile />
    </div>
  );
}

export default App;
