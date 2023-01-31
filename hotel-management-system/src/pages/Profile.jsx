import React,{ useState } from "react";
import axios from "axios";


const Profile = () => {
  const [error, setError] = useState("");
  const user = localStorage.getItem("userModel");
  const userOb = JSON.parse(user);
  console.log(userOb);

  const [credentials, setCredentials] = useState({
    fullName: undefined,
    name: undefined,
    phoneNumber: undefined,
    birthdate: undefined,
    avatarUrl: undefined
  });

  const handleChange = (e) =>{
    setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  };

  const submitUpdate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.put(`http://localhost:5200/api/v1/users/info/${userOb.id}`, credentials).then(function (response) {
        if(response) {
          alert(response.data.message);
          window.location.reload(false);
        }
        else{
          alert(response.error.message);
        }
      });

    } catch (err) {
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
            <h2>Edit your profile.</h2>
            <hr className="colorgraph" />
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4">
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
              <label>Email</label>
              <div className="form-group">
                  <input disabled="true" type="text" className="form-control input-lg" placeholder={userOb.email}/>
              </div>
              <label>Full name</label>
              <div className="form-group">
                  <input type="text" name="fullName" id="fullName" className="form-control input-lg" placeholder={userOb.fullName}  onChange={handleChange} />
              </div>
              <label>Name</label>
              <div className="form-group">
                  <input type="text" name="name" id="name" className="form-control input-lg" placeholder={userOb.name}  onChange={handleChange} />
              </div>
              <label>Phone number</label>
              <div className="form-group">
                <input type="tel" name="phoneNumber" id="phoneNumber" className="form-control input-lg" placeholder={userOb.phoneNumber}  onChange={handleChange} />
              </div>
              <label>Date of birth</label>
              <div className="form-group">
                  <input type="datetime-local" name="birthdate" id="birthdate" className="form-control input-lg" onChange={handleChange} />
              </div>
              <label>Avatar url</label>
              <div className="form-group">
                  <input type="text" name="avatarUrl" id="avatarUrl" className="form-control input-lg" placeholder={userOb.avatarUrl} onChange={handleChange} />
              </div>
            </div>
            </div>  
            
            <hr className="colorgraph" />
            <div className="row">
              <div className="col-xs-12 col-md-6" />
              <div className="col-xs-12 col-md-2"><a href="#" className="btn btn-success btn-block btn-lg"  onClick={submitUpdate}>Save</a></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
