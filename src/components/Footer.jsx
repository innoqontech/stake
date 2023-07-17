import React from 'react'
import '../components/Footer.css'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

function Footer() {
  return (
    <div className='foot'>

        <div className="outfoot">
            <div className="infoot">
                <div className="col1">
                    <div>
                        <h4>Contact with us</h4>
                        <a>connect@stack.com</a>
                    </div>
                    <div className='supp'>
                        <h4>Support</h4>
                        <a>Help Center</a>
                        <br />
                        <a>FAQs</a>
                        <br />
                        <a>Ticket Status</a>
                    </div>
                </div>
                <div className="col2">
                    <h4>Solutions</h4>
                    <div>
                        <a>Enterprise</a>
                        <br />
                        <a>Agencies</a>
                        <br />
                        <a>Small Business</a>
                        <br />
                        <a>Social Management</a>
                        <br />
                        <a>Customer Care</a>
                        <br />
                        <a>Industries</a>
                        <br />
                        <a>Data & Intelligence</a>
                    </div>
                </div>
                <div className="col3">
                    <h4>Platform</h4>
                    <div>
                        <a>Analytics</a>
                        <br />
                        <a>Engagement</a>
                        <br />
                        <a>Publishing</a>
                        <br />
                        <a>Business Operations</a>
                        <br />
                        <a>Automation</a>
                        <br />
                        <a>Team Management</a>
                    </div>
                </div>
                <div className="col4">
                    <h4>Integrations</h4>
                    <div>
                        <a>Facebook Management</a>
                        <br />
                        <a>Twitter Management</a>
                        <br />
                        <a>Instagram Management</a>
                        <br />
                        <a>LinkedIN Management</a>
                        <br />
                        <a>Pinterest Management</a>
                        <br />
                        <a>Whats App Management</a>
                        <br />
                        <a>Youtube Management</a>
                        <br />
                        <a>All Integrations</a>
                    </div>
                </div>
                <div className="col5">
                    <h4>Company</h4>
                    <div>
                        <a>About Sprout</a>
                        <br />
                        <a>Pricing</a>
                        <br />
                        <a>Contact Us</a>
                        <br />
                        <a>Careers</a>
                        <br />
                        <a>Our Stories</a>
                        <br />
                        <a>Investors</a>
                        <br />
                        <a>Partners</a>
                    </div>
                </div>
                <div className="col6">
                    <h4>Resources</h4>
                    <div>
                        <a>Blog</a>
                        <br />
                        <a>Resource Center</a>
                        <br />
                        <a>Social Media</a>
                        <br />
                        <a>Agency Partner Directory</a>
                        <br />
                        <a>Affiliate and Referrals</a>
                        <br />
                        <a>Brand Assets</a>
                        <br />
                        <a>Free Social Media Tools</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footfot">
            <div className='brandicons'>
                <i class="fa-brands fa-twitter"></i>    
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-facebook"></i>   
                <i class="fa-brands fa-pinterest"></i>
                <i class="fa-brands fa-google"></i>
            </div>
            <div className="copyright">
                <p>©Copyright 2023 Innoqon Tech. All Rights Reserved.</p>
                <span>Privacy | Terms | Disclosure Policy | Cookies</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
