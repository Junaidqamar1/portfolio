import React from 'react'
import "./styles/contact.css"
import point from "./assets/point.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";

const Contact = () => {
    return (
        <div className='contact'>
            <h1 className="font1 contacthead">CONTACT</h1>
            <div className='content'>
                <div className="info " data-aos="fade-rigth">
                    <div className="add det">
                        <img src={point} alt="" />
                        <p>
                            Address:
                            98 mackenzi rd, kamarhati kolkata
                            700058 ,west bengal india</p>
                    </div>
                    <div className="email det">
                        <img src={email} alt="" />
                        <p>Email:
                            junaidqamar8753@gmail.com
                            abelisraelromero@gmail.com
                        </p>
                    </div>
                    <div className="phone det">
                        <img src={phone} alt="" />
                        <p>
                            Phone:
                            +91 8100076402
                        </p>
                    </div>
                </div>
                <div className="form font3" >
                        <h2 className='font1 from-head'>CONTACT ME</h2>
                    <form name="submit-to-google-sheet" className="submit-to-google-sheet" method="POST">
                        <label>NAME : </label>
                        <input type="text" name="NAME" required />
                        <label>EMAIL : </label>
                        <input type="email" name="EMAIL" id="email" />
                        <label>PHONE NO:</label>
                        <input type="number" name="PHONE" id="" />
                        <label>ABOUT : </label>
                        <input type="text" name="ABOUT" id="password" />
                        <button className="glow-on-hover bet" type="button">submit</button>
                    </form>
                    {/* <div class="link">
                        <a href="https://www.instagram.com/its_junaid_qamar/" target="_blank"> <img
                            src="assets/insta.svg" alt="" /></a>
                        <a href="https://www.facebook.com/junaid qamar/" target="_blank"><img src="assets/facebook.svg"
                            alt="" /></a>
                        <a href="juanidqamar8753@gmail.com" target="_blank"><img src="assets/email2.png" alt="" /></a>
                        <a href="#" target="_blank"><img src="assets/linke.svg" alt="" /></a>
                    </div> */}

                </div>
            </div>

        </div>
    )
}

export default Contact