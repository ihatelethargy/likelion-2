import React from "react";
import Card from "../../components/card";
import "./Main.scss";

function Main({ data }) {
    console.log(data?.items, "get");
    return (
        <>
            <div className="Main">
                {data?.items.map((v) => {
                    return <Card key={v.id.videoId} data={v.id.videoId} />;
                })}
            </div>
        </>
    );
}

export default Main;
