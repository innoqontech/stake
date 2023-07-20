import React from 'react';
import './Pricing.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Price from '../components/Price';

import subaru from '../assets/images/stories/subaru.png'
import columbia from '../assets/images/stories/columbia.png'
import shopify from '../assets/images/stories/shopify.png'
import companies from '../assets/images/stories/companies.png';

const Pricing = () => {
  return (
    <div>
      <Header />

        {/* section1 */}
      <div className="backsec1">
        <div className="inbacksec1">
            <p>Discover the perfect plan for your unique needs - and your budget.</p>
            <p>Maximize your business potential with a plan that's customized to your unique needs - only pay for what you need, when you need it.</p>
        </div>
      </div>

      {/* section2 */}
      <div className="prices">
        <div className="inprices">
                <div className="price">
                    <div className="uppersec">
                        <h2>Free Tools</h2>
                        <p>$249 per month</p>
                        <p>Each additional user+$199/mo</p>
                        <button className="getstart">
                            Get Started For Free
                        </button>
                        <div className='blue-line'></div>
                        <p className='demoreq'>Request a Demo</p>
                    </div>
                    <div className="bottomsec">
                        <p>Includes:</p>
                        <div className="pros">
                            <ul>
                                <li>5 social profiles</li>
                                <li>All-in-one social inbox</li>
                                <li>Publish, schedule, draft andqueue posts</li>
                                <li>Social content calendar</li>
                                <li>Profiles, keywords and locations monitoring</li>
                                <li>Tasking and social CRM tools</li>
                                <li>Group, profile and post-level reporting</li>
                                <li>Paid promotion tools to boost Facebook posts</li>
                                <li>iOS and Android mobile apps</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="price">
                    <div className="uppersec">
                        <h2>Free Tools</h2>
                        <p>$249 per month</p>
                        <p>Each additional user+$199/mo</p>
                        <button className="getstart">
                        Start Your Free Trial
                        </button>
                        <div className='blue-line'></div>
                        <p className='demoreq'>Request a Demo</p>
                    </div>
                    <div className="bottomsec">
                        <p>Includes all Free Tools, plus:</p>
                        <div className="pros">
                            <ul>
                                <li>Unlimited social profiles</li>
                                <li>Competitive reports for Instagram, Facebook and Twitter</li>
                                <li>Incoming and outgoing message content tagging</li>
                                <li>Custom work flows for multiple approvers and steps</li>
                                <li>Scheduling for optimals end times</li>
                                <li>Response rate and time analysis reports</li>
                                <li>Trend analysis for Twitter keywords and hashtags</li>
                                <li>Paid social reporting for Facebook, Instagram, Twitter and LinkedIn</li>
                                <li>Helpdesk, CRM and Social Commerce integrations.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="price">
                    <div className="uppersec">
                        <h2>Free Tools</h2>
                        <p>$249 per month</p>
                        <p>Each additional user+$199/mo</p>
                        <button className="getstart">
                        Start Your Free Trial
                        </button>
                        <div className='blue-line'></div>
                        <p className='demoreq'>Request a Demo</p>
                    </div>
                    <div className="bottomsec">
                        <p>Includes all Starter features, plus:</p>
                        <div className="pros">
                            <ul>
                                <li>Message Spike Alerts for increased message activity</li>
                                <li>Digital asset and content library</li>
                                <li>Chatbots with automation tools</li>
                                <li>Saved and suggested replies</li>
                                <li>Inbox rule builder for automated actions</li>
                                <li>Automated Link Tracking</li>
                                <li>Twitter surveys to define CSAT or NPS</li>
                                <li>External approvals</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="price">
                    <div className="uppersec">
                        <h2>Free Tools</h2>
                        <p>$249 per month</p>
                        <p>Each additional user+$199/mo</p>
                        <button className="getstart">
                        Talk to Sales
                        </button>
                        <div className='blue-line'></div>
                        <p className='demoreq'>Request a Demo</p>
                    </div>
                    <div className="bottomsec">
                        <p>Includes all Professional features, plus:</p>
                        <div className="pros">
                            <ul>
                                <li>Tailored implementation and onboarding to get teams up and running quickly</li>
                                <li>Premier consulting services</li>
                                <li>24/6 prioritized customer support</li>
                            </ul>
                        </div>
                        <p>Customize further without premium add-ons, including:</p>
                        <div className="pros">
                            <ul>
                                <li>Social Listening to uncover emerging trends, brand influencers and competitive intel</li>
                                <li>Premium Analytics to measure success across all social channels</li>
                                <li>Employee Advocacy solutions to amplify your brand’s organic reach</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </div>


      {/* section3 */}

      <div className="blue-back">
        <div className="inblue-back">
            <div className="lefcont">
                <h2>Trusted by 30,000
world-class brands and 
organizations of all sizes</h2>
                <p>Sprout customers are industry leaders who embrace social 
media as a vital part of their over all business strategies—and
the key to making deeper connections with their audience.</p>
            </div>
            <div className="righcont">
                <img src={companies} alt="" />
            </div>
        </div>
      </div>


        {/* section before footer */}
        <div className="joinus">
            <div className="injoinus">
                <h1>Join our 5,000 happy customers</h1>
                <div className="logos">
                    <img src={subaru} alt="" />
                    <img src={columbia} alt="" />
                    <img src={shopify} alt="" />
                    <img src={subaru} alt="" />
                    <img src={columbia} alt="" />
                    <img src={shopify} alt="" />
                </div>
            </div>
        </div>


      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Pricing
