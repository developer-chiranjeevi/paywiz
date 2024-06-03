import React from "react";



const SignUp = () =>{



    return(
        <div className="">
            <div className="w-full h-[calc(100vh)] bg-gray-200 flex items-center justify-center">
                <div className="w-96 h-[calc(70vh)] bg-white rounded-lg p-5 ">
                    <h1 className="text-center text-xl text-gray-800 font-semibold" >SignUp</h1>
                    <div className="mt-6">
                        <h1 className="">Enter Your Email Address</h1>
                        <input className="w-full border-2 border-gray-400 rounded-lg pt-2"/>
                    </div>
                    <div className="mt-6">
                        <h1 className="">Enter Your Password</h1>
                        <input className="w-full border-2 border-gray-400 rounded-lg pt-2"/>
                    </div>
                    <div className="mt-6">
                        <h1 className="">Re-Enter Your Password</h1>
                        <input className="w-full border-2 border-gray-400 rounded-lg pt-2"/>
                    </div>
                    <div className="mt-4 ">
                        <button className="bg-blue-600 text-white w-full py-2 rounded-lg ">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default SignUp;