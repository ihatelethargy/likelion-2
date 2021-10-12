import React from "react";
import "./Header.scss";

function Header({ onChangeInput, onSearchHandler }) {
    return (
        <>
            <div className="Header">
                <input
                    className="Header__input"
                    type="text"
                    onChange={onChangeInput}
                />
                <button className="Header__button" onClick={onSearchHandler}>
                    Search
                </button>
            </div>
        </>
    );
}

export default Header;
