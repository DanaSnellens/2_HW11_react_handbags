import React from "react";

function Product( {label, image, title, price }) {
    return (
        <>
            <article>
            <span> {label} </span>
                <img src={image} alt="bag-image"/>
                <p>The {title} bag</p>
                <h4>€{price},-</h4>
            </article>
        </>

    )

}

export default Product;
