import React from "react";
import {Route , Routes} from "react-router-dom";
import Dashboard from "./routes/Dashboard.jsx";
import Login from "./routes/Login.jsx";
import SignUp from "./routes/SignUp.jsx";
import Success from "./routes/Success.jsx";

const App = () =>{



    return(
        <div>

            <Routes >
                <Route  path="/" element={<Dashboard />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/success" element={<Success />}/>

            </Routes>



        </div>
    )

}
export default App;
