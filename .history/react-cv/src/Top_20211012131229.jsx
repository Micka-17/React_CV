import React from "react";
import Burger from '@animated-burgers/burger-rotate'

export default function Top () {
    return (
    <section id="sec-1">
        // default state, other props are passed down to the wrapping element
<Burger {...props}/>

// open state
<Burger isOpen={ true } />

// some burgers, such as arrow, supports direction
// (left - default, up, right, down)
<Burger direction="right" />


// By default, div will be rendered as a wrapping element
// You can pass a different wrapping component
<Burger Component="button" type="button" />

// results in
<button class="burger" type="button>
  <div class="burger-lines">
</button>
        <div class="marbre">
            <div class="container">
                <h1>Mickaël Boï</h1>
                <p>Mickael Dev Junior</p>
                <a href="#sec-2" class="title-btn">En savoir plus</a>
            </div>
        </div>
    </section>
    )
}