import React,{useState, useEffect} from "react";
import Table from "../components/Table";
import {auth, db} from "../../firebase/firebase";
import {onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {collection, onSnapshot, query, where} from "firebase/firestore";
const Dashboard = () =>{
    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);

    const [bills, setBills] = useState([])

    useEffect(() =>{
        //if not logged in redirect to sign in page
        //else fetch data

        const getUserBills = async(uid)=>{
            const q = query(collection(db,"userBills"),where("uid","==",uid))
            await onSnapshot(q,(snapShot)=>{
                let datas = []
                snapShot.forEach((doc) => datas.push(doc.data()));
                setBills(datas)
            } )

            
        }
        const getUserDetails = async(uid) =>{
            const collectionRef = await collection(db, "userData");
            await onSnapshot(collectionRef,(snapShot)=>{
                snapShot.forEach((doc) => setUserData(doc.data()))
            }) 
        }
        onAuthStateChanged(auth,(user)=>{
            if(user){
                //set UID in user state
                getUserDetails(user.uid);
                getUserBills(user.uid);
            }else{
                //navigate to login page
                navigate("/login");
            }
        })
    },[])
    console.log(bills)
    return(

        <div className="w-full h-[calc(100vh)] bg-gray-200 flex">
            <div className="w-1/4 h-[calc(100vh)] hidden lg:flex items-center pl-5 ">
                <div className="w-full h-[calc(90vh)] bg-white rounded-lg">
                    <div className="flex flex-col items-center mt-6">
                        <div className="w-24" >
                            <img className="object-contain rounded-full" src="https://i.pinimg.com/736x/09/ee/97/09ee9790e4a873be73302693a56a9bf6.jpg"/>
                            
                        </div>
                        <div className="">
                            <h1 className="text-center text-2xl capitalize">{userData.name}</h1>
                            <h1 className="text-center  capitalize text-gray-800">{userData.designation}</h1>
                        </div>
                    </div>
                    <div className="ml-6">
                        <div className="mt-4">
                            <h1 className=" capitalize">account ID</h1>
                            <h1 className="text-sm text-gray-800">{userData.roll_number}</h1>
                        </div>
                        <div className="mt-4">
                            <h1 className=" capitalize">billing email</h1>
                            <h1 className="text-sm text-gray-800">{userData.email}</h1>
                        </div>
                        <div className="mt-4">
                            <h1 className=" capitalize">billing address</h1>
                            <h1 className="text-sm text-gray-800">{userData.address_1}</h1>
                            <h1 className="text-sm text-gray-800">{userData.address_2}</h1>
                        </div>
                        <div className="mt-4">
                            <h1 className=" capitalize">upcoming invoice</h1>
                            <h1 className="text-sm text-gray-800">{userData.upcoming_ivc}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-3/4 h-[calc(100vh)] p-8 ">
                <div className="w-full bg-white px-4 py-2 rounded-lg">
                    <div className="">
                        <h1 className="capitalize"> aggregated payments</h1>
                        <h1 className="capitalize text-sm text-gray-800 mt-1"> Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
                    </div>
                    <div className="mt-2 flex items-center">
                        <div className="border-2 border-gray-400 w-fit px-8 py-2 rounded-lg">
                            <h1 className="text-green-700">$2000</h1>
                            <h1 className="text-gray-800 text-sm">Paid</h1>
                        </div>
                        <div className="border-2 border-gray-400 w-fit px-8 py-2 rounded-lg ml-4">
                            <h1 className="text-red-700">$400</h1>
                            <h1 className="text-gray-800 text-sm">Pending</h1>
                        </div>


                    </div>

                </div>
                <div className="mt-4">
                    <div className="bg-white w-full py-4 px-2 ">
                        <Table bills={bills} />
                    </div>
                </div>
            </div>
            

        </div>
    )
}
export default Dashboard;