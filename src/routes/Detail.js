import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";

function Detail() {
    const location = useLocation();
    if (location.state) {
        return (
            <div id="Details">
                <span id="Detail-title">{location.state.title}</span>
                <span id="Detail-year">{location.state.year}</span>
                <img id="Detail-img" src={location.state.poster} alt={location.state.title} title={location.state.title} />
                <ul id="Detail-genres">{location.state.genres.map((genre, index) => <li key={index} className="Detail__genres">{genre}</li>)}</ul>
                <span id="Detail-runtime">runtime: {location.state.runtime}</span>
                <span id="Detail-summary__title">summary</span>
                <span id="Detail-summary">{location.state.summary}</span>
            </div>
        )
    } else {
        window.location.href = "/"
        return null;
    }
}


export default Detail