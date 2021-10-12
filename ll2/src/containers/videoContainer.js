import React, { useEffect, useState } from "react";

import { fetchData } from "../lib/api";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "../pages/detail";
import Main from "../pages/main";
import Header from "../components/header";

function VideoContainer() {
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const data = await fetchData(query);
        setData(data.data);
    };

    const onChangeInput = (e) => {
        setQuery(e.target.value);
    };

    const onSearchHandler = () => {
        getData();
        setQuery("");
    };

    const [query, setQuery] = useState("");
    const [data, setData] = useState(null);

    return (
        <Router>
            <Header
                onChangeInput={onChangeInput}
                onSearchHandler={onSearchHandler}
            />
            <Switch>
                <Route exact path="/">
                    <Main data={data} />
                </Route>
                <Route path="/detail">
                    <Detail data={data} />
                </Route>
                <Route path="*">
                    <h1> 404 NOT FOUND </h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default VideoContainer;
