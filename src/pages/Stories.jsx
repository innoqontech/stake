import React from 'react';
import '../styles/Stories.css';
// components
import Footer from '../components/Footer';
import Header from '../components/Header';
import Testimonial from '../components/Testimonial';
//images
import calendar from '../assets/images/stories/cal.png'
import coffee from '../assets/images/stories/cff.png'
import vidlogo from '../assets/images/stories/vidlogo.png'
import lg from '../assets/images/stories/1.png';
import lg1 from '../assets/images/stories/8.jpg';
import c1 from '../assets/images/stories/comp1.png';
import caseS from '../assets/images/stories/casestudy.png';
import photo from '../assets/images/stories/photo.jpg';
import img1 from '../assets/images/stories/vid-3.jpg'
import img2 from '../assets/images/stories/vid-2.jpg'
import img3 from '../assets/images/stories/vid-1.jpg'
import log1 from '../assets/images/stories/lg-1.jpg'
import log2 from '../assets/images/stories/lg-2.jpg'
import log3 from '../assets/images/stories/lg-3.jpg'
import Newsletter from '../components/Newsletter';

function Stories() {
  return (
    <div>
      {/* nav component */}
      <Header />
    
        <div className='msec'>
            <div className="inmsec">
                <div className="leftcont">
                    <h1>Customer joy is our priority</h1>
                    <p>At Sprout, what matters most are the business owners, agencies, brands, causes and communities that trust us to help them succeed.</p>
                    <span className="lg">
                        <img src={lg1} alt="" />
                    </span>
                </div>
                <div className="rightcont">
                    <img src={lg} alt="" />
                </div>
            </div>
        </div>

        <div className="comps">
            <div className="incomps">
                <h2>30,000 organizations and brands of all sizes rely on Sprout</h2>
                <div className="complgs">
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                    <img src={c1} alt="" />
                </div>
            </div>
        </div>

        {/* section3 */}

        <div className='casestudy'>
            <div className="incasestudy">
                <div className="left-cont">
                    <p className='heading'>Featured Case Study</p>
                    <p className='contn'>Sprout gives us the ability to see what types
                    of campaigns are working in real time, as
                    well as the ability to adjust appropriately. I
                    don’t think we’ve ever had a tool that’s
                    been able to so quickly provide us with
                    feedback.</p>
                    <p className='para'>Luka Dukich, Senior Digital Content Manager with the Chicago Bulls</p>
                    <button className='btn-blue'>Read Case Study</button>
                </div>
                <div className="right-cont">
                    <div className='img-container'>
                            <img src={vidlogo} alt="" className="playicon" />
                            <img src={caseS} alt="" className='myimg'/>
                        </div>
                    
                </div>
            </div>
        </div>

        <div className='testimo'>
            <div className="intestimo">
                <div className="lcont">
                    <p>Sprout Social Reviews</p>
                    <h2 className='ttl'>What our customers say about us</h2>
                </div>
                <div className='containers'>
                    <Testimonial
                    title="Great social media management"
                    description="Sprout Social is a great tool to use for social media management and social listening. My favorite part about Sprout Social is the combined social messaging inbox."
                    name="Christina S"
                    occupation="Social Media & Digital Content Specialist"
                    profilePicture={photo}
                    />
                    <Testimonial
                    title="My favorite social media management app"
                    description="Sprout Social is well designed and offers nearly every feature I could ask for. With analytics, scheduling, inbox management and more, this app is pretty much a one stop shop."
                    name="Bradley C"
                    occupation="Director of Marketing and Communications"
                    profilePicture={photo}
                    />
                    <Testimonial
                    title="Put Sprout Social in your life"
                    description="Love the amazing customer service, helpful articles and guides, the online community (#sproutchat). I have yet to find something I dislike about the platform."
                    name="Shannon R"
                    occupation="Communications and Social Media Specialist"
                    profilePicture={photo}
                    />
                </div>
            </div>
            <div className="intestimo2">
                {/* //casestudy */}
                <h2>See how Sprout helps organizations and <br /> brands meet their business goals</h2>
                <div className="vidowcontent">
                    <div className="con">
                        <div className='img-container'>
                            <img src={vidlogo} alt="" className="play-icon" />
                            <img className='vidimg' src={img1} alt="video" />
                        </div>
                        <img className='lgimg' src={log1} alt="logo" />
                        <p>See how Marquette University uses Sprout Social to manage numerous profiles and networks to engage, inform and communicate with students on and off campus.</p>
                        <span>Read case study</span>
                    </div>
                    <div className="con">
                        <div className='img-container'>
                            <img src={vidlogo} alt="" className="play-icon" />
                            <img className='vidimg' src={img1} alt="video" />
                        </div>
                        <img className='lgimg' src={log1} alt="logo" />
                        <p>See how Marquette University uses Sprout Social to manage numerous profiles and networks to engage, inform and communicate with students on and off campus.</p>
                        <span>Read case study</span>
                    </div>
                    <div className="con">
                        <div className='img-container'>
                            <img src={vidlogo} alt="" className="play-icon" />
                            <img className='vidimg' src={img1} alt="video" />
                        </div>
                        <img className='lgimg' src={log1} alt="logo" />
                        <p>See how Marquette University uses Sprout Social to manage numerous profiles and networks to engage, inform and communicate with students on and off campus.</p>
                        <span>Read case study</span>
                    </div>
                </div>
            </div>
        </div>


        {/* section4 */}

        <div className="greenback">
            <div className="ingb">
                <div>
                    <h1>80%+</h1>
                    <p>reduction in average
time to first response</p>
                </div>
                <div>
                    <h1>1,002%</h1>
                    <p>increase in total social
engagements</p>
                </div>
                <div>
                    <h1>2X</h1>
                    <p>increase in average
client retainer</p>
                </div>
            </div>
        </div>


        {/* section7 */}
        <div className="blueback">
            <div className="inblueback">
                <div className="left_cont">
                    <img src={calendar} alt="" />
                    <p className='hd'>Schedule a personalized demo</p>
                    <p className='txt'>Speak to an expert and see for yourself what social media management can be like when you’re using the right tools.</p>
                    <button className="btn">
                        Request a Demo
                    </button>
                </div>
                <div className="right_cont">
                    <img src={calendar} alt="" />
                    <p className='hd'>Try Sprout for free for 30 days</p>
                    <p className='txt'>Take Sprout for a spin. No credit card required. No software to install. Change plans or cancel anytime.</p>
                    <button className="btn">
                        Start Your Free Trial
                    </button>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />

    </div>
  )
}

export default Stories
