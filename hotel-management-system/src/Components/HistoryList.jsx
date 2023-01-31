import React from "react";
import Room from "./Room";
import notFound from "../images/notfound.svg";
import History from "../Components/History";

export default function HistoryList(props) {
    const { history : data } = props
  return (
    <>
      {!data  ? (
        <>
          <div className="container my-5">
            <div className="card shadow-lg border-0 p-4">
              <div className="row">
                <div className="col-md-6 col-12 my-auto">
                  <img src={notFound} alt="not found" className="img-fluid" />
                </div>
                <div className="col-md-6 col-12 mx-auto">
                  <div className="empty-search">
                    <h3 className="display-4">
                      Unfortunately no history matched your search parameters
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
          <div class="container table-responsive py-5"> 
          <h2 className="mt-4 pt-4">Your history.</h2>
            <table class="table table-bordered table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Fullname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phonenumber</th>
                  <th scope="col">Checkin Time</th>
                  <th scope="col">Checkout Time</th>
                  <th scope="col">Payment Type</th>
                  <th scope="col">payment Status</th>
                </tr>
              </thead>
              <tbody>
                  {data.map((item) => {
                      return <History key={item.id} history={item} />;
                    })}
              </tbody>
            </table>
          </div>
      )}
    </>
  );
}
