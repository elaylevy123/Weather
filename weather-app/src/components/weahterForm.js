import React from "react";

export default function WeatherForm() {
    return (
        <nav className="container-fluid bg-warning p-2">
            <div className="container">
              <div className="row">
                <div className="logo col-auto text-light">
                    <h2>weather</h2>
                </div>
                  <div className="d-flex col-md-4">
                      <input id="id_input" placeholder="search for town weather.." type="search"
                             className="form-control" />
                      <button id="search_btn" className="btn btn-dark">Search</button>
                  </div>
              </div>
            </div>
        </nav>
    )
}