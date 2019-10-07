import React, { Component } from "react";
import StyledCard from "../styles/Card";

export default function Card(props) {
  return (
    <StyledCard>
      <div className="card">
      <div className="card-image"></div>
        <div className="card-text">
          <span className="date">4 days ago</span>
          <h2>Post One</h2>
          <p>OLA OLA OLA OLA OLA OLA OLA OLA OLA OLA OLA OLA OLA OLA OLA OLA OLA OLA OLA </p>
        </div>
        <div className="card-stats">
            <div className="stat">
                <div className="value">4 <sup>m</sup></div>
                <div className="type">read</div>
            </div>
            <div className="stat border">
                <div className="value">5123</div>
                <div className="type">read</div>
            </div>
            <div className="stat">
                <div className="value">32</div>
                <div className="type">read</div>
            </div>
        </div>
      </div>
    </StyledCard>
  );
}
