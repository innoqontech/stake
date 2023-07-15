import React from 'react'
import '../components/Footer.css'

function Footer() {
  return (
    <div className='foot'>

        <div className="outfoot">
            <div className="infoot">
                <div className="col1">
                    <div>
                        <h3>Contact with us</h3>
                        <p>connect@stack.com</p>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <a>Help Center</a>
                        <br />
                        <a>FAQs</a>
                        <br />
                        <a>Ticket Status</a>
                    </div>
                </div>
                <div className="col2">
                    <h3>Solutions</h3>
                    <ul>
                        <li>Enterprise</li>
                        <li>Agencies</li>
                        <li>Small Business</li>
                        <li>Social Management</li>
                        <li>Customer Care</li>
                        <li>Industries</li>
                        <li>Data & Intelligence</li>
                    </ul>
                </div>
                <div className="col3">
                    <h3>Platform</h3>
                    <ul>
                        <li>Analytics</li>
                        <li>Engagement</li>
                        <li>Publishing</li>
                        <li>Business Operations</li>
                        <li>Automation</li>
                        <li>Team Management</li>
                    </ul>
                </div>
                <div className="col4">
                    <h3>Integrations</h3>
                    <ul>
                        <li>Facebook Management</li>
                        <li>Twitter Management</li>
                        <li>Instagram Management</li>
                        <li>LinkedIN Management</li>
                        <li>Pinterest Management</li>
                        <li>Whats App Management</li>
                        <li>Youtube Management</li>
                        <li>All Integrations</li>
                    </ul>
                </div>
                <div className="col5">
                    <h3>Company</h3>
                    <ul>
                        <li>About Sprout</li>
                        <li>Pricing</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                        <li>Our Stories</li>
                        <li>Investors</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div className="col6">
                    <h3>Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Resource Center</li>
                        <li>Social Media</li>
                        <li>Agency Partner Directory</li>
                        <li>Affiliate and Referrals</li>
                        <li>Brand Assets</li>
                        <li>Free Social Media Tools</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footfot">
            <div>
                icons
            </div>
            <div className="copyright">
                <p>©Copyright 2023 Innoqon Tech. All Rights Reserved.</p>
                <p>Privacy | Terms | Disclosure Policy | Cookies</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
