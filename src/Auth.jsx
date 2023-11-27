import { useContext } from "react";
import authContext from "./context/authContext";

function Auth() {
  const { status, login } = useContext(authContext);
  console.log(status);
  return (
    <div>
      <h1>Giriş yaptın mı?</h1>
      {status ? <p>Ohoo çoktan!</p> : <p>Hayır</p>}
      <button onClick={login}>Giriş yap</button>
    </div>
  );
}

export default Auth;
