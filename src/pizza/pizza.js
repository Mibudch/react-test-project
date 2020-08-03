import React, { Component } from 'react';
import Card from '../card/card';
import { pizza } from '../description/description.js'

class Pizza extends Component {
    render() {
        return (
            <div>
                {pizza.map((el, i) => {
                    return (
                        <Card 
                            key= {i}
                            name = {el.pizzaName}
                            price ={el.price}
                            description={el.description}
                            specification={el.specification}
                        />
                    )
                })}
            </div>
        )
    }
}
export default Pizza