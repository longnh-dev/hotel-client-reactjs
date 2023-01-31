import React,{ useState } from "react";
import axios from "axios";


const ChangePassword = () => {
  const [error, setError] = useState("");
  const user = localStorage.getItem("userModel");
  const userOb = JSON.parse(user);

  const [credentials, setCredentials] = useState({
    oldPassword: undefined,
    password: undefined,
    confirmPassword: undefined
  });

  const handleChange = (e) =>{
    setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  };

  const submitUpdatePassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.put(`http://localhost:5200/api/v1/users/${userOb.id}/changepassword?oldPassword=${credentials.oldPassword}&password=${credentials.password}&confirmPassword=${credentials.confirmPassword}`).then(function (response) {
        if(response) {
          alert(response.data.message);
        }
      });
    } 
    catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <br />
      <br />
      <div className="row" id="main">
        <div className="col-md-12">
          <form role="form">
            <h2>Change your password.</h2>
            <hr className="colorgraph" />
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4">
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="form-group">
                  <input type="password" name="oldPassword" id="oldPassword" className="form-control input-lg" placeholder="Old Password"  onChange={handleChange} />
              </div>
              <div className="form-group">
                  <input type="password" name="password" id="password" className="form-control input-lg" placeholder="New password"  onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="password" name="confirmPassword" id="confirmPassword" className="form-control input-lg" placeholder="Confirm password" onChange={handleChange} />
              </div>
            </div>
            </div>  
            <hr className="colorgraph" />
            <div className="row">
              <div className="col-xs-12 col-md-6" />
              <div className="col-xs-12 col-md-2"><a href="#" className="btn btn-success btn-block btn-lg" onClick={submitUpdatePassword}>Change</a></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
