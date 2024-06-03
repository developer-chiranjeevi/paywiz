import React,{useState} from "react";
import {auth} from "../../firebase/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";

const Login = () =>{

    const navigate = useNavigate();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [onLoad, setOnLoad] = useState(false);



    const loginUser = async() =>{
        //method to login user with email and password
        setOnLoad(true);
        try{
            const res = await signInWithEmailAndPassword(auth, email, password);
            const user = await res.user;
            if(user){
                navigate("/");
            }           
        }catch(error){
            alert(error.message);
            setOnLoad(false);
        }
    }


    return(

        <div className="">
            <div className="w-full h-[calc(100vh)] bg-gray-200 flex items-center justify-center">
                <div className="w-96 h-fit bg-white rounded-lg p-5 ">
                    <h1 className="text-center text-xl text-gray-800 font-semibold" >SignIn</h1>
                    <div className="mt-6">
                        <h1 className="">Enter Your Email Address</h1>
                        <input onChange={(event) => setEmail(event.target.value)} className="w-full border-2 border-gray-400 rounded-lg pt-2 focus:outline-none"/>
                    </div>
                    <div className="mt-6">
                        <h1 className="">Enter Your Password</h1>
                        <input type="password" onChange={(event) => setPassword(event.target.value)} className="w-full border-2 border-gray-400 rounded-lg pt-2 focus:outline-none"/>
                    </div>
                    <div className="mt-4 ">
                        <button onClick={loginUser} className="bg-blue-600 text-white w-full py-2 rounded-lg ">
                            {
                                onLoad?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto animate-spin">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                    :
                                    "SignIn"

                            }
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;