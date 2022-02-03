import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }, props) => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(linkUrl, params, "PARAMS");
    console.log(props, "PROPS");
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => navigate(`${params.url}}${linkUrl}`)}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
