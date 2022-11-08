
import './App.scss';

import {Video} from "./components/video/video";
import {Header} from "./components/header/header";
import {User} from "./components/user/user";
import {useEffect, useState} from "react";
import {Loader} from "./components/loader/loader";

export const API = "http://smart-tz/"

function App() {

     const [data , setData] = useState({});
 useEffect(()=>{

     fetch("http://tz.smart-ui.pro/")
         .then((data)=>{
            return data.json();
         }
         )
         .then((resp)=>{
             setData(resp)
         })
 },[])
    const valid = data.hasOwnProperty("users")&&data.hasOwnProperty("video");


    if(!valid){
        return  <Loader/>
    }
    const { users, video } = data;
  return (
      <div className={'container'}>
        <Header />
            <main  >
                <Video video={video}/>
                <User users={users}/>
            </main>
        <footer/>
      </div>

  );
}

export default App;


