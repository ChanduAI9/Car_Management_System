import React, { Component } from 'react';

class Ad extends Component {
    state = {  }
    
    render() { 
        return (  
            <div className="ad-box">
                <h4>Special Offer</h4>
                <p>Buy your dream car today at a special discounted price!</p>
                <button className="ad-btn">Learn More</button>
            </div>
        );
    }
}

export default Ad;
