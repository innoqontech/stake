import React from 'react'
import './Price.css';

const Price = () => {
  return (
        <div className="inprices">
            <div className="price">
                <div className="uppersec">
                    <h1>Free Tools</h1>
                    <p>$249 per month</p>
                    <p>Each additional user+$199/mo</p>
                    <button className="getstart">
                        Get Started For Free
                    </button>
                    <div className='blue-line'></div>
                    <p className='demoreq'>Request a Demo</p>
                </div>
                <div className="bottomsec">
                    <p>Inclueds:</p>
                    <div className="pros">
                        <ul>
                            <li>first con</li>
                            <li>first con</li>
                            <li>first con</li>
                            <li>first con</li>
                            <li>first con</li>
                            <li>first con</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Price
