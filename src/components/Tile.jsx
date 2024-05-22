import React from "react";

function Tile({ image, imgdescription, title, children }) {
    return (
        <section>
            {image && <img src={image} alt={imgdescription} />}
            <h2>{title}</h2>
            {children}
        </section>

    );
}

export default Tile