import React from 'react'
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import './Demo.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

import st1 from '../assets/images/stories/Stake3.png'
import st3 from '../assets/images/stories/Stake3.png'
import st2 from '../assets/images/stories/Stake3.png'
import poimg from '../assets/images/stories/domphoto.png'


const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];
  
const companySizes = ["1-10", "11-50", "51-100", "101-500", "500+"];


const Demo = () => {

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };



    const [activeDiv, setActiveDiv] = useState('div1');

    const handleDivClick = (divId) => {
        setActiveDiv(divId);
    };

    return (
        <div>
            <Header />

            {/* section2 */}
            <div className="formreq">
                <div className="informreq">
                    <div className="formleft">
                        <div className="up">
                            <h1>Request a personalized demo of Sprout Social</h1>
                            <p>
                                We look forward to showing you how our platform’s powerful
                                data, flexible tools and intuitive user experience can help you
                                connect with your audience at scale and gather critical
                                insights that move your business forward.</p>
                        </div>
                        <div className="dwn">
                            <p>What can I expect?</p>
                            <ul>
                                <li>A brief conversation to assess what Sprout can do to help your social strategy</li>
                                <li>Live product demo with insight into how to get the most
                                    benefit from Sprout</li>
                                <li>Discuss your social media goals to determine the best path
                                    forward for your business</li>
                                <li>No commitment required</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mainform">
                        <h2>Request a demo</h2>
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row">
                                <label className="form-label">First Name</label>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    rules={{ required: "First Name is required" }}
                                    render={({ field }) => <input className="form-input" {...field} />}
                                />
                                {errors.firstName && (
                                    <p className="form-error">{errors.firstName.message}</p>
                                )}
                            </div>

                            <div className="form-row">
                                <label className="form-label">Last Name</label>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    rules={{ required: "Last Name is required" }}
                                    render={({ field }) => <input className="form-input" {...field} />}
                                />
                                {errors.lastName && (
                                    <p className="form-error">{errors.lastName.message}</p>
                                )}
                            </div>

                            <div className="form-row">
                                <label className="form-label">Business Email</label>
                                <Controller
                                    name="businessEmail"
                                    control={control}
                                    rules={{
                                        required: "Business Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    }}
                                    render={({ field }) => <input className="form-input" {...field} />}
                                />
                                {errors.businessEmail && (
                                    <p className="form-error">{errors.businessEmail.message}</p>
                                )}
                            </div>

                            <div className="form-row">
                                <label className="form-label">Phone Number</label>
                                <Controller
                                    name="phoneNumber"
                                    control={control}
                                    rules={{
                                        required: "Phone Number is required",
                                        minLength: {
                                            value: 10,
                                            message: "Phone Number must be at least 10 digits"
                                        },
                                        maxLength: {
                                            value: 11,
                                            message: "Phone Number can be up to 11 digits"
                                        }
                                    }}
                                    render={({ field }) => <input className="form-input" {...field} />}
                                />
                                {errors.phoneNumber && (
                                    <p className="form-error">{errors.phoneNumber.message}</p>
                                )}
                            </div>

                            <div className="form-row">
                                {/* Add more form fields for Company Name, Country, Company Size, Notes, and Marketing Agency */}
                                <label className="form-label">Company Name</label>
                                <Controller
                                    name="companyName"
                                    control={control}
                                    rules={{ required: "Company Name is required" }}
                                    render={({ field }) => <input className="form-input" {...field} />}
                                />
                                {errors.lastName && (
                                    <p className="form-error">{errors.lastName.message}</p>
                                )}
                            </div>

                            <div className="form-row">
                                <label className="form-label">Country</label>
                                <Controller
                                    name="country"
                                    control={control}
                                    rules={{ required: "Please select a country" }}
                                    render={({ field }) => (
                                        <select {...field} className="feild">
                                            <option value="">
                                                Select a country
                                            </option>
                                            {countries.map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                />
                                {errors.country && <p>{errors.country.message}</p>}
                            </div>

                            <div className="form-row">
                                <label className="form-label">Company Size</label>
                                <Controller
                                    name="companySize"
                                    control={control}
                                    rules={{ required: "Please select a company size" }}
                                    render={({ field }) => (
                                        <select {...field} className='feild'>
                                            <option value="">Select a company size</option>
                                            {companySizes.map((size) => (
                                                <option key={size} value={size}>
                                                    {size}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                />
                                {errors.companySize && <p>{errors.companySize.message}</p>}
                            </div>

                            <div className="form-row">
                                <label className="form-label">Do you work at a marketing agency?</label>
                                <Controller
                                    name="marketingAgency"
                                    control={control}
                                    rules={{ required: "Please select an option" }}
                                    render={({ field }) => (
                                        <div className='radios'>
                                            <input type="radio" {...field} value="yes" />
                                            <label>Yes</label>
                                            <input type="radio" {...field} value="no" />
                                            <label>No</label>
                                        </div>
                                    )}
                                />
                                {errors.marketingAgency && <p>{errors.marketingAgency.message}</p>}
                            </div>
                            <div className='form-row'>
                                <label className='form-label'>Notes</label>
                                <Controller
                                    name="notes"
                                    control={control}

                                    render={({ field }) => <textarea {...field} className='feild' />}
                                />
                                {errors.notes && <p>{errors.notes.message}</p>}
                            </div>

                            <button type="submit" className="form-submit-btn">
                                Submit
                            </button>
                            <p className="disclaimer">
                                Stake is committed to your privacy. By submitting this form, you acknowledge Stake uses your information in accordance with its <a href="#">Privacy Policy</a>. You may unsubscribe from our communications at any time. To opt out, Please email <a href="#">privacy@stake.com</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>


            {/* section3 */}
            <div className="potential">
                <div className="inpotential">
                    <h1>Unlock the potential of social media
                        to drive real business growth</h1>
                    <div className="boxes">
                        <div className="box b1">
                            <img src={st1} alt="" />
                            <p className="cnt">500,000+</p>
                            <p>customer queries resolved in three months</p>
                        </div>
                        <div className="box b2">
                            <img src={st2} alt="" />
                            <p className="cnt">164.4%</p>
                            <p>YoY increase in total social followers</p>
                        </div>
                        <div className="box b3">
                            <img src={st3} alt="" />
                            <p className="cnt">839%</p>
                            <p>YoY increase in engagement across social</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* section4 */}
            <div className="every">
                <div className="inevery">
                    <div className="upp">
                        <h1>Everything you want to do on social—
                            and everything you didn’t know you
                            could</h1>
                        <p>
                            Equipped with simplified scheduling and publishing workflows, your team has more time to create
                            compelling content that inspires your audience.</p>
                    </div>
                    {/* make this down div out of this above div than only green color will perfectly applied */}
                </div>
            </div>

            <div className="down">
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
                    </div>

            <Newsletter />

            <Footer />
        </div>
    )
}

export default Demo
