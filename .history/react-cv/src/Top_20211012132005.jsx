import React  from "react";
import { HamburgerArrow } from 'react-animated-burgers'

export default function Top() {
    state = {
        isActive: false
      }
    
      toggleButton = () => {
        this.setState({
          isActive: !this.state.isActive
        })
      }

    return (
        <section id="sec-1">
            <div>
               
            </div>
            <div class="marbre">
                <div class="container">
                    <h1>Mickaël Boï</h1>
                    <p>Mickael Dev Junior</p>
                    <a href="#sec-2" class="title-btn">En savoir plus</a>
                </div>
            </div>
        
    </section >
    )
}