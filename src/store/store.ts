import {create} from "zustand"

type state = {
    username:string;
    email:string;
    role:string;
    password:string;

}

type Action={
    setUsername : (username:string )=> void;
    setEmail : (email:string)=> void;
    setRole:(role:string)=> void;
    setPassword:(password:string )=> void;
}

 export const loginStore = create<state & Action>((set)=>({
    username:"",
    email:"",
    role:"ADMIN",
    password:"",
    setUsername:(username1)=> set(()=>({username:username1})),
    setEmail:(email1)=> set(()=>({email:email1})),
    setRole:(role1)=> set(()=>({role:role1})),
    setPassword:(password1)=> set(()=>({password:password1})),
    

}))