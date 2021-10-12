import React from "react";
import "./Card.scss";

function Card({ data }) {
    console.log(data, "카드");
    return (
        <div className="Card">
            <iframe
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${data}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
}

export default Card;
