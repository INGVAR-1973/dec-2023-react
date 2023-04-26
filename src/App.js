import {Launches} from "./components/Launches";
import {Users} from "./components/Users";
import {useState} from "react";
import {UserPosts} from "./components/UserPosts";



const App = () => {
    const [userId,setUserId]=useState(null);

    return(
      <div>
          {/*<Posts/>*/}
          {/*/<Launches/>*/}
          <Users setUserId={setUserId}/>
          {userId && <UserPosts userId={userId} />}
      </div>
  );
};
export  {App};