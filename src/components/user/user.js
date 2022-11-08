import React from 'react';
import style from './users.module.scss'
import {API} from "../../App";
const Gi = ({className ,children})=>{
    return <div style={{gridArea:className}} className={className}>{children}  </div>
}



const One =({userData})=>{
    const {name , photo , online , registration , age } = userData
    return    <div className="card-grid">
        <Gi className="photo   "> <img src={API+photo} alt="face"/> </Gi>
        <Gi className="name   ">  {name} </Gi>
        <Gi className="status"> { online?"online":"offline"} </Gi>
        <Gi className="registration"> {registration}</Gi>
        <Gi className="age">{age} </Gi>
        <Gi className="action"> <button onClick={()=>{
            console.log(1)}} disabled={!online}  >Chat </button> </Gi>
    </div>
}
export const User = ({users  } ) => {
    return (
        <section className={style.users}>
                <h2>our users  </h2>
            <div className="card-grid lg-only">
                <Gi className="photo   "> photo </Gi>
                <Gi className="name   "> name </Gi>
                <Gi className="status">status </Gi>
                <Gi className="registration">registration</Gi>
                <Gi className="age">age </Gi>
                <Gi className="action">action  </Gi>
            </div>
            {
                users.map((userData ,i)=>{
                    return <One userData={userData} key={i}/>
                })
            }
        </section>
    );
};
