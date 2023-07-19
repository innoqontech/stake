import React from 'react';
import heroimg from '../assets/images/home/1.png';
import comp from '../assets/images/home/images-home-c880482c.jpg'
import listening from '../assets/images/home/home-right-9a8b1b79.jpg'
import compname from '../assets/images/home/compname.png';
import '../pages/Home.css';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <div className='hero-sec'>
        
        {/* nav section end*/}
        <Header />
        {/* main section start*/}
        <div className="main_sec">
          <div className='cont1'>
            <div className='txtcont'>
              <h1>A powerful solution for social media management.</h1>
              <p>Our all-in-one social media management platform unlocks the full potential of social to transform not just your marketing strategy—but every area of your organization.</p>
              <div className="btns">
                <button>Start Your Free Trial </button>
                <p>Request a demo <span><i class="fa-solid fa-arrow-right"></i></span> </p>
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
          <p className='txt'>Listening</p>
          <h2>Understand your audience</h2>
          <p>Uncover trends and actionable insights from
social data to inform brand and business strategy.</p>
          <a href=''>Explore our Listening features</a>
          <div className='kbtns'>
             <p className='active'>Listening</p>
             <p>Publishing</p>
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
      <div className='cont4'>
        <div className="txtcont2">
          <p>Listening</p>
          <h2>Understand your audience</h2>
          <p>Uncover trends and actionable insights from
social data to inform brand and business strategy.</p>
          <a href=''>Explore our Listening features</a>
          <div className='kbtns'>
             <p>Listening</p>
             <p className='active'>Publishing</p>
             <p>Engagement</p>
             <p>Analytics</p>
             <p>Advocacy</p>
          </div>
        </div>
        <div className="imgsec">
          <img src={listening} alt="img2" />
        </div>
      </div>
      
      {/* section 5 */}
      <div className="cont5">
        <div className='incont5'>
          <h3>Change the way you see social,transform the way you do business</h3>
          <p>Customers share why they choose Sprout’s social media management software and solutions.</p>
          <div className="wvideo">
            <span className='vidlogo'><i class="fa-solid fa-circle-play"></i></span>
            <p>Watch Video</p>
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div className='cont2'>
        <div className="imgsec">
          <img src={listening} alt="img2" />
        </div>
        <div className="txtcont2">
          <p className='txt'>Listening</p>
          <h2>Understand your audience</h2>
          <p>Uncover trends and actionable insights from
social data to inform brand and business strategy.</p>
          <a href=''>Explore our Listening features</a>
          <div className='kbtns'>
             <p>Listening</p>
             <p>Publishing</p>
             <p className='active'>Engagement</p>
             <p>Analytics</p>
             <p>Advocacy</p>
          </div>
        </div>
      </div>

      {/* section 7 */}
      <div className='cont6'>
        <div className="incont6">
          <h3>Experience the future with our innovative tech product.</h3>
          <div className='btns'>
            <button>Request a Demo</button>
            <button>Watch Video</button>
          </div>
          <p>No credit card required</p>
        </div>
      </div>

      {/* section 8 */}
      <Newsletter />

      {/* section 9 */}
      <Footer />
    </div>
  )
}

export default Home
