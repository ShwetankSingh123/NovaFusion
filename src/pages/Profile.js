import React, { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/Firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(FirebaseContext);
  const navigate=useNavigate();

  useEffect(()=>{
    navigate("/profile")
  },[])
 

  return (
    <div style={{justifyContent:"center", alignItems:"center",margin:"100px",marginLeft:"500px"}}>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User_ID: {user?.uid}</h5>
              <p className="card-text">User_Email: {user?.email}</p>
             <button  class="btn btn-primary" ><Link to="/cart" style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Go To Cart</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
