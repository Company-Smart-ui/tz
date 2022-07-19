import React from 'react';
import style from './users.module.scss'
import face from './face.webp'
const Gi = ({className ,children})=>{
    return <div style={{gridArea:className}} className={className}>{children}  </div>
}



const One =({online})=>{
    return    <div className="card-grid">
        <Gi className="photo   "> <img src={face} alt="face"/> </Gi>
        <Gi className="name   "> Mr. smith </Gi>
        <Gi className="status"> {online?"online":"offline"} </Gi>
        <Gi className="registration"> Toronto</Gi>
        <Gi className="age">35 year </Gi>
        <Gi className="action"> <button onClick={()=>{
            console.log(1)}} disabled={!online}  >Chat </button> </Gi>
    </div>
}
export const User = () => {
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
        <One/>
        <One online/>
        <One/>
        <One  online/>

        </section>
    );
};
