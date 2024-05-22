import React from "react";
import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button text="to the collection" disabled={false}/>
                <Button text="shop all bags" disabled={false}/>
                <Button text="pre-orders" disabled={true}/>
            </nav>
            <main>
                <Product
                    label="Best seller"
                    image={bag_1}
                    title="handy"
                    price="400"
                />
                <Product
                    label="Best seller"
                    image={bag_2}
                    title="stylish"
                    price="250"
                />
                <Product
                    label="New collection"
                    image={bag_3}
                    title="simple"
                    price="300"
                />
                <Product
                    label="New collection"
                    image={bag_4}
                    title="trendy"
                    price="150"
                />
            </main>
            <footer>
                <Tile title="the brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi delectus fuga fugiat in non nulla repellat sint soluta voluptas?  </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi delectus fuga fugiat in non nulla repellat sint soluta voluptas?  </p>
                </Tile>
                <Tile
                    image={brand}
                    imgdescription="Brand"
                />
                <Tile
                    image={our_story}
                    imgdescription="Our Story"
                />
                <Tile title="our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi delectus fuga fugiat in non nulla repellat sint soluta voluptas?  </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi delectus fuga fugiat in non nulla repellat sint soluta voluptas?  </p>
                </Tile>
            </footer>
        </>
    )
}

export default App
