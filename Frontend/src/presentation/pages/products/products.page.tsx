import React from 'react';
import {ProductCard} from './product-card/product-card';
import './products.page.css';

function Products(): React.JSX.Element {

    console.log('product');
    return (
        <div className="products-container">
            <ProductCard name = "A" price = "2 PLN" image= "https://sklepgalicja.pl/images/kuchnia/2022/Winston_garnek.jpg"/>
            <ProductCard name = "B" price = "2 PLN" image= "https://sklepgalicja.pl/images/kuchnia/2022/Winston_garnek.jpg"/>
            <ProductCard name = "C" price = "2 PLN" image= "https://sklepgalicja.pl/images/kuchnia/2022/Winston_garnek.jpg"/>
            <ProductCard name = "D" price = "2 PLN" image= "https://sklepgalicja.pl/images/kuchnia/2022/Winston_garnek.jpg"/>
            <ProductCard name = "E" price = "2 PLN" image= "https://sklepgalicja.pl/images/kuchnia/2022/Winston_garnek.jpg"/>
            <ProductCard name = "E" price = "2 PLN" image= "https://sklepgalicja.pl/images/kuchnia/2022/Winston_garnek.jpg"/>
            <ProductCard name = "E" price = "2 PLN" image= "https://sklepgalicja.pl/images/kuchnia/2022/Winston_garnek.jpg"/>
            <ProductCard name = "E" price = "2 PLN" image= "https://sklepgalicja.pl/images/kuchnia/2022/Winston_garnek.jpg"/>


        </div>
    );
};


export default Products;