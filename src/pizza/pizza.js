import React, { Component } from 'react';
import Card from '../card/card';
import { pizza } from '../description/description.js'
import Header from '../header/header.js'
import '../card/card.css';
class Pizza extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='cardFlex'>
                    {pizza.map((el, i) => {
                        return (
                            <Card
                                key={i}
                                name={el.pizzaName}
                                price={el.price}
                                description={el.description}
                                specification={el.specification}
                                img={`${window.location.origin}/image/${el.pizzaName.toLowerCase()}.jpg`}
                            />
                        )
                    })}
                </div>
            </>
        )
    }
}
export default Pizza