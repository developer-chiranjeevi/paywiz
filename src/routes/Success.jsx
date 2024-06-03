import React,{useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {auth,db} from "../../firebase/firebase";
import {onAuthStateChanged} from "firebase/auth";
import {onSnapshot, query, collection,where,doc ,setDoc} from "firebase/firestore";

const Success = () =>{
    const [uid, setUid] = useState("");
    const [docId, setDocId] = useState(""); 
    const loacation = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() =>{

        const updateStatus = async(id) =>{
           const billRef = await doc(db, "userBills",id);
           await setDoc(billRef, {status:true},{merge:true})
        }

        const getDocID = async() =>{
            const collectionRef = query(collection(db, "userBills"), where("invoiceID","==",queryParams.get('invoice')))

            await onSnapshot(collectionRef,(snapShot)=>{
                snapShot.docs.map((doc) => updateStatus(doc.id));
            }) 
        }

        onAuthStateChanged(auth,(user)=>{
            if(user){
                //set UID in user state
               setUid(user.uid);
               getDocID();
            }else{
                //navigate to login page
                navigate("/login");
            }
        })
    })
    
    

    return(
        <div className="w-full h-[calc(100vh)] flex items-center justify-center bg-gray-200">
            <div className="bg-white w-72 lg:w-96 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-60 h-60 mx-auto lg:w-96 lg:h-96">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h1 className="capitalize text-center text-2xl mb-8">payment success</h1>
            </div>

        </div>
    )
};


export default Success;