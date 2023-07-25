import React from 'react'
import { useState } from 'react';
import './Features.css';
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

import he from '../assets/images/features/1.png'
import lg1 from '../assets/images/features/fea1.png'
import lg2 from '../assets/images/features/fea2.png'
import lg3 from '../assets/images/features/fea3.png'
import lg4 from '../assets/images/features/fea4.png'
import lg5 from '../assets/images/features/fea5.png'
import lg6 from '../assets/images/features/fea6.png'
import poimg from '../assets/images/features/competitive_analysis.png'
import amalogo from '../assets/images/features/amalogo.png'
import top1 from '../assets/images/features/top1.png'
import top2 from '../assets/images/features/top2.png'
import top3 from '../assets/images/features/top3.png'
import top4 from '../assets/images/features/top4.png'
import top5 from '../assets/images/features/top5.png'
import block1img from '../assets/images/features/3.png'
import block2img from '../assets/images/features/4.png'
import block3img from '../assets/images/features/5.png'
import block4img from '../assets/images/features/6.png'
import sociomed from '../assets/images/features/sociomed.png'
import lockimg from '../assets/images/features/9.png'
import features1 from '../assets/images/features/features2.png'
import features2 from '../assets/images/features/features3.png'
import features3 from '../assets/images/features/features4.png'


const Features = () => {

    const [activeDiv, setActiveDiv] = useState('div1');

    const handleDivClick = (divId) => {
        setActiveDiv(divId);
    };



    const DIV = styled.div`
        display: flex;
        align-self: center;
        justify-content: center;
        position: relative;
        background-color: #0A3960;
        
                
        .infirstsec{
            display: flex;
            align-items: flex-end;
            justify-content: center;
            color: white;
            padding-top: 40px;
        }

        .infirstsec::before{
            content: "";
            position: absolute;
            right: 0;
            height: 100%;
            width: 600px;
            top: 0;
            border-radius: 50% 0 0 50%;
            background-color: #2079C3;
            z-index:  0;
        }

        .leftcontainer{
            width: 500px;
            padding-bottom: 70px;
        }

        .firs{
            padding-bottom: 20px;
        }

        .secon{
            padding: 20px 0;
        }

        .leftcontainer h1{
            font-size: 50px;
        }

        .rightcontainer{
            z-index: 1;
        }

        .rightsec{
            width: 400px;
        }

        .butttns{
            padding: 10px 20px;
            cursor: pointer;
        }

        .butttns:hover{
            transition: 0.3s ease;
            background-color: #2079C3;
            color: white;
        }
    `

    const SEC2 = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

        .inseci2{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 20px;
        }
        
        .inseci2 p{
            font-weight: 700;
            font-size: 18px;
        }
        
        .loogos{
            display: flex;
        }
        
        .loogos img{
            width: 150px;
        }
    `

    const Sec3 = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    
        .inevery{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 30px 0;
        }
        
        .upp{
            width: 928px;
            padding-bottom: 20px;
        }
        
        .upp h1{
            padding-bottom: 8px;
        }
    `

    const SEC4 = styled.div`
    
        display: flex;
        align-items: center;
        position: relative;
        padding: 30px 0;

    

        
    `

    const SEC5 = styled.div`
    
    .insec5{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-top: 40px;
    }
    
    .ama{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid lightgrey;
        padding: 50px;
    }
    
    .ama img{
        width: 80px;
        padding-right: 30px;
        border-right: 2px solid lightgrey;
    }
    
    .ama p, span{
        padding-left: 30px;
        width: 600px;
    }
    
    .top50{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 40px;
    }
    
    .top50 p{
        font-size: 30px;
    }
    
    .imgs img{
        width: 200px;
    }
        
    `

    const SEC6 = styled.div`
    
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background: rgb(0,212,255);
        background: linear-gradient(90deg, rgba(0,212,255,0.1561624649859944) 100%, rgba(0,212,255,1) 100%);

        
        .insection_6{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .head__sec{
            text-align: left;
            padding-top: 40px;
            width: 900px;
        }
        .head__sec h1, p{
            padding-bottom: 20px;
        }

        .sec_img{
            width: 400px;
        }

        .blocks{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            padding: 30px 0;
        }

        .sec_cont{
            width: 500px;
            padding-left: 20px;
        }

        .sec_cont h1{
            padding: 20px 0;
        }
        
    `

    const SEC7 = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 0;
    
        .insection_7{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0C5689;
            color: white;
        }
        .insection_7 img{
            width: 400px;
        }
        
        .insection_7 .sec_cont{
            width: 500px;
            padding: 20px 20px;
        }
        
        .insection_7 .sec_cont h1{
            padding: 20px 0;
        }
        
        .insection_7 .sec_cont p{
            padding-bottom: 20px;
        }
        
        .bbttnns{
            cursor: pointer;
        }
        
        .bbttnns button{
            padding: 10px;
            background-color: transparent;
            color: white;
            cursor: pointer;
            text-decoration: underline;
        }
    `

    const SEC8 = styled.div`
    
        display: flex;
        justify-content: center;
        padding: 40px 0;

        .insection_8{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #002138;
            color: white;
        }
        
        .insection_8 img{
            width: 150px;
            padding: 40px;
        }
        
        .insection_8 .sec_cont{
            width: 600px;
            padding-right: 40px;
        }
        
        .insection_8 .sec_cont h1{
            padding-bottom: 20px;
        }
        
        .insection_8 .sec_cont p{
            padding-bottom: 20px;
        }
        .insection_8 .sec_cont button{
            padding: 10px;
            background-color: transparent;
            color: white;
            cursor: pointer;
            text-decoration: underline;
        }
        
        .insection_8 .sec_cont div{
            cursor: pointer;
        }
    `

    const SEC9 = styled.div`
        display: flex;
        justify-content: center;
        background-color: #026661;
        padding: 40px 0;
    
        
        .insection_9{
            display: flex;
            align-items: center;
            color: white;
        }

        .leeeffft{
            width: 250px;
            padding-right: 200px;
        }

        .leeeffft *{
            margin-bottom: 20px;
        }

        .demo {
            padding: 10px 30px;
            cursor: pointer;
        }

        .leeeffft div{
            cursor: pointer;
        }

        .leeeffft div button{
            cursor: pointer;
            padding: 10px;
            background-color: transparent;
            color: white;
        }

        .riiight{
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(3, 120px);
        }

        .riiight div{
            background-color: #083F3F;
            border-radius: 10px;
            text-align: left;
            color: white;
            padding-left: 10px;
        }

        .riiight div h2{
            font-size: 16px;
            padding: 15px 0;
        }

        .riiight div i{
            padding: 20px 0;
            font-size: 20px;
        }
    `

  return (
    <div>
      <Header />
      
      <DIV className="firstsec">
        <div className="infirstsec">
            <div className="leftcontainer">
                <p className='firs'>Enterprise Social Media Management</p>
                <h1>Transform social insights into business intelligence</h1>
                <p className='secon'>Staying one step ahead of the competition while meeting the needs of consumers is key to your success. Stake equips companies with the social management and business intelligence solutions you need to maintain your competitive and innovative edge.</p>
                <button className="butttns">
                    Request a Demo
                </button>
            </div>
            <div className="rightcontainer">
                <img src={he} alt="rightimgperson" className="rightsec" />
            </div>
        </div>
      </DIV>

        <SEC2 className="seci2">
            <div className="inseci2">
                <p>Trusted by 30,000+world-class brands and organizations of all sizes</p>
                <div className="loogos">
                    <img src={lg1} alt="" />
                    <img src={lg2} alt="" />
                    <img src={lg3} alt="" />
                    <img src={lg4} alt="" />
                    <img src={lg5} alt="" />
                    <img src={lg6} alt="" />
                </div>
            </div>
        </SEC2>

        <Sec3>
            <div className="inevery">
                <div className="upp">
                    <h1>Capture real-time audience insights</h1>
                    <p>Insights from social listening can support cross-functional departments from sales to HR,inform your
next product launch and even uncover new business opportunities. Stake’s listening tool shave
multiple intelligence benefits and use-cases.</p>
                </div>
            </div>
        </Sec3>

        <SEC4 className="downm">
                <div className="le_cont">
                    <img src={poimg} alt="" />
                </div>
                <div className="rig_cont">
                    <div className={`bxes ${activeDiv === 'div1' ? 'active' : ''}`} onClick={() => handleDivClick('div1')}>
                        <h2>Publishing and Scheduling</h2>
                        <p>Plan, organize, schedule and deliver content as a team with cross-network social publishing.</p>
                    </div>
                    <div className={`bxes ${activeDiv === 'div2' ? 'active' : ''}`} onClick={() => handleDivClick('div2')}>
                        <h2>Publishing and Scheduling</h2>
                        <p>Plan, organize, schedule and deliver content as a team with cross-network social publishing.</p>
                    </div>
                    <div className={`bxes ${activeDiv === 'div3' ? 'active' : ''}`} onClick={() => handleDivClick('div3')}>
                        <h2>Publishing and Scheduling</h2>
                        <p>Plan, organize, schedule and deliver content as a team with cross-network social publishing.</p>
                    </div>
                    <div className={`bxes ${activeDiv === 'div4' ? 'active' : ''}`} onClick={() => handleDivClick('div4')}>
                        <h2>Publishing and Scheduling</h2>
                        <p>Plan, organize, schedule and deliver content as a team with cross-network social publishing.</p>
                    </div>
                    <div className={`bxes ${activeDiv === 'div5' ? 'active' : ''}`} onClick={() => handleDivClick('div5')}>
                        <h2>Publishing and Scheduling</h2>
                        <p>Plan, organize, schedule and deliver content as a team with cross-network social publishing.</p>
                    </div>
                </div>
            </SEC4>

            <SEC5 className="sec5">
                <div className="insec5">
                    <div className="ama">
                        <img src={amalogo} />
                        <div>
                            <p>“I love the social listening tools. Listening not only helps us better understand what the conversations are about our brand in the digital space, it lets us make sure we’re dominating share of voice in our industry in a relevant, impactful and positive way.”</p>
                            <br />
                            <span> Kara Wenman Digital, Content Marketing Manager, Amazon</span>
                        </div>
                    </div>
                    <div className="top50">
                        <p>Working with our customers to create the best experience</p>
                        <div className="imgs">
                            <img src={top1} alt="" />
                            <img src={top2} alt="" />
                            <img src={top3} className='mid' />
                            <img src={top4} alt="" />
                            <img src={top5} alt="" />
                        </div>
                    </div>
                </div>
            </SEC5>

            <SEC6 className='section_6'>
                <div className="insection_6">
                    <div className='head__sec'>
                        <h1>Demonstrate the impact and ROI of social</h1>
                        <p>Analyzing campaign results and content performance helps maximize positive outcomes, but
    predetermined metrics and prepackaged market research reports can limit you. Stake’s analytics
    tools give you the flexibility to tailor reports and share the data that matters most across your org.</p>
                    </div>
                    <div className="blocks">
                        <img src={block1img} alt="" className="sec_img" />
                        <div className="sec_cont">
                            <h1>Optimize campaign performance</h1>
                            <p>Monitor the ongoing impact of campaigns across channels and make adjustments to high or low-performing campaigns in real time.</p>
                        </div>
                    </div>
                    <div className="blocks">
                        <div className="sec_cont">
                            <h1>Optimize campaign performance</h1>
                            <p>Monitor the ongoing impact of campaigns across channels and make adjustments to high or low-performing campaigns in real time.</p>
                        </div>
                        <img src={block2img} alt="" className="sec_img" />
                    </div>
                    <div className="blocks">
                        <img src={block3img} alt="" className="sec_img" />
                        <div className="sec_cont">
                            <h1>Optimize campaign performance</h1>
                            <p>Monitor the ongoing impact of campaigns across channels and make adjustments to high or low-performing campaigns in real time.</p>
                        </div>
                    </div>
                    <div className="blocks">
                        <div className="sec_cont">
                            <h1>Optimize campaign performance</h1>
                            <p>Monitor the ongoing impact of campaigns across channels and make adjustments to high or low-performing campaigns in real time.</p>
                        </div>
                        <img src={block4img} alt="" className="sec_img" />
                    </div>
                </div>

            </SEC6>

            <SEC7 className='section_7'>
                <div className="insection_7">
                    <img src={sociomed} alt="" />
                    <div className="sec_cont">
                        <h1>Trusted partnerships & integrations
across leading platforms</h1>
                        <p>Stake builds and maintains strong network partnerships and integrations to
help you unify your customer touch points and keep pace with changes in
the social landscape.</p>
                        <div className="bbttnns">
                            <button className='stakeint'>See all Stake Integrations</button>
                            <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </div>
                    </div>
                </div>

            </SEC7>

            <div className="topfeatures">
                <div className="intopfeatures">
                    <h1>Top features for Enterprise social media management</h1>
                    <div className="gridcont">
                        <div className="booxx">
                            <h2>Social CRM</h2>
                            <p>Access conversation histories and relevant contact details to offer personalized responses and inturn, build loyalty.</p>
                        </div>
                        <div className="booxx">
                            <h2>Social CRM</h2>
                            <p>Access conversation histories and relevant contact details to offer personalized responses and inturn, build loyalty.</p>
                        </div>
                        <div className="booxx">
                            <h2>Social CRM</h2>
                            <p>Access conversation histories and relevant contact details to offer personalized responses and inturn, build loyalty.</p>
                        </div>
                        <div className="booxx">
                            <h2>Social CRM</h2>
                            <p>Access conversation histories and relevant contact details to offer personalized responses and inturn, build loyalty.</p>
                        </div>
                        <div className="booxx">
                            <h2>Social CRM</h2>
                            <p>Access conversation histories and relevant contact details to offer personalized responses and inturn, build loyalty.</p>
                        </div>
                        <div className="booxx">
                            <h2>Social CRM</h2>
                            <p>Access conversation histories and relevant contact details to offer personalized responses and inturn, build loyalty.</p>
                        </div>
                    </div>
                        <button>Explore More Features</button>
                </div>
            </div>


            <SEC8 className='section_8'>
                <div className="insection_8">
                    <img src={lockimg} alt="" />
                    <div className="sec_cont">
                        <h1>Transparent practices, reliable systems and a secure platform</h1>
                        <p>A relationship with Stake is built on trust. That's why we prioritize security and data privacy for all 30,000+ customers.</p>
                        <div>
                            <button>See Stake’s hosting and security</button>
                            <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </div>
                    </div>
                </div>
            </SEC8>


            <SEC9 className="section_9">
                <div className="insection_9">
                    <div className="leeeffft">
                        <h1>Explore the full Stake platform</h1>
                        <button className='demo'>Request a Demo</button>
                        <div>
                            <button>Start Your Free Trial</button>
                            <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </div>
                    </div>
                    <div className="riiight">
                        <div>
                            <h2>Analytics</h2>
                            <span><i class="fa-solid fa-flask"></i></span>
                        </div>
                        <div>
                            <h2>Engagement</h2>
                            <span><i class="fa-regular fa-envelope"></i></span>
                        </div>
                        <div>
                            <h2>Publishing & Scheduling</h2>
                            <span><i class="fa-regular fa-paper-plane"></i></span>
                        </div>
                        <div>
                            <h2>Analytics</h2>
                            <span><i class="fa-solid fa-flask"></i></span>
                        </div>
                        <div>
                            <h2>Analytics</h2>
                            <span><i class="fa-solid fa-flask"></i></span>
                        </div>
                    </div>
                </div>
            </SEC9>

            <Newsletter/>
            <Footer/>

    </div>
  )
}

export default Features
