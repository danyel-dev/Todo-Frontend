import UserLists from "./components/UserLists";
import Login from "./components/Login";


export default function App() {
  let token = "a"
  
  if(!token) return <Login />;
  return <UserLists />
}
