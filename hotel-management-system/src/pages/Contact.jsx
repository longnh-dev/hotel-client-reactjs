import React,{useState} from 'react'
import axios from 'axios';

const Contact = () => {
    const [error, setError] = useState("");
    const[credential, setCredentials] = useState({
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phoneNumber: undefined,
      message: undefined
    });
    const token = localStorage.getItem("tokenString");

    const handleSendMessage = async (e) => {
        e.preventDefault();
        setError("");
        try {
          await axios.post("http://localhost:5200/api/v1/contact", credential,{headers: {"Authorization" : `Bearer ${token}`, "Content-Type": `application/json`}})
          .then(function (response) {
            if(response) {
              alert(response.data.message);
            }
          });
        } catch (err) {
          if(err){
            alert(err.response.data.message);
          }
        }
      };
      const handleChange = (e) =>{
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
      };
return (
<div className="container contact">
    <div className="row">
        <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
                <h1 className="text-center bg-dark text-white display-4 d-inline-block">Contact us</h1>
                <div className="form-group my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" id="firstName"  onChange={handleChange} placeholder="First Name" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg"  id="lastName"  onChange={handleChange} placeholder="last Name" required />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="email" className="form-control-lg" id="email"  onChange={handleChange} placeholder="Email Address" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="tel" className="form-control-lg"  id="phoneNumber"  onChange={handleChange} placeholder="Phone no." required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <textarea className="form-control" row="20" placeholder="Your message"  id="message" onChange={handleChange} required></textarea>
                    </div>
                </div>
                <div className="mt-5 col-md-6 col-12 mx-auto">
                    <button className="btn btn-outline-dark btn-lg btn-block" onClick={handleSendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Contact