import React from 'react';
import logo from '../assets/images/home/innoqon.png';
import heroimg from '../assets/images/home/1.png';
import comp from '../assets/images/home/images-home-c880482c.jpg'
import listening from '../assets/images/home/home-right-9a8b1b79.jpg'
import compname from '../assets/images/home/compname.png';
import '../pages/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <div>
      <div className='hero-sec'>
        <div className="head"></div>
        {/* nav section  start*/}
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Demo</a>
          <a href="#">Company</a>
          <a href="#">Stories</a>
          <button>Login</button>
        </nav>
        {/* nav section end*/}

        {/* main section start*/}
        <div className="main_sec">
          <div className='cont1'>
            <div className='txtcont'>
              <h1>A powerful solution for social media management.</h1>
              <p>Our all-in-one social media management platform unlocks the full potential of social to transform not just your marketing strategy—but every area of your organization.</p>
              <div className="btns">
                <button>Start Your Free Trial</button>
                <p>Request a demo <FontAwesomeIcon icon="fa-regular fa-arrow-right" /></p>
              </div>
              <p>No credit card required</p>

            </div>

            <img className='heroimg' src={heroimg} alt="" />
          </div>

        </div>
        {/* main section end*/}

      </div>
      {/* trusted companies */}
      <div>
        <img className='comp' src={comp} alt="" />
      </div>

      {/* section 2 */}
      <div className='cont2'>
        <div className="imgsec">
          <img src={listening} alt="img2" />
        </div>
        <div className="txtcont2">
          <p>Listening</p>
          <h2>Understand your audience</h2>
          <p>Uncover trends and actionable insights from
social data to inform brand and business strategy.</p>
          <a href=''>Explore our Listening features</a>
          <div className='kbtns'>
             <p>Listening</p>
             <p>Publishin</p>
             <p>Engagement</p>
             <p>Analytics</p>
             <p>Advocacy</p>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className='cont3'>
        <div className="txtcont3">
          <h3>Trusted by 30,000 world-class brands and organizations of all sizes</h3>
          <p>Sprout customers are industry leaders who embrace social media as a vital part of their over all business strategies—and the key to making deeper connections with their audience</p>
        </div>
        <div className='imgsec'>
          <img src={compname} alt="" />
        </div>
      </div>

      {/* section 4 */}
      <div className='cont2'>
        <div className="imgsec">
          <img src={listening} alt="img2" />
        </div>
        <div className="txtcont2">
          <p>Listening</p>
          <h2>Understand your audience</h2>
          <p>Uncover trends and actionable insights from
social data to inform brand and business strategy.</p>
          <a href=''>Explore our Listening features</a>
          <div className='kbtns'>
             <p>Listening</p>
             <p>Publishin</p>
             <p>Engagement</p>
             <p>Analytics</p>
             <p>Advocacy</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
