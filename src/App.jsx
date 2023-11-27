import "./App.css";
import authContext from "./context/authContext";
import Auth from "./Auth";
import { useState } from "react";

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const loginAuth = () => {
    setAuthStatus(true);
  };

  return (
    <authContext.Provider value={{ status: authStatus, login: loginAuth }}>
      <Auth />
    </authContext.Provider>
  );
}

export default App;
