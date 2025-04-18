import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import ContactForm from '../ContactForm/ContactForm'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "88eb4045-d1f6-465c-b900-1ac908bbaea2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  
  
  return (
    <div className='contact'>
        <div className="contact-col">
    <h3>Send us a meesage <img src={msg_icon} alt="" /></h3>
    <p>Our university is always here to support you on your academic journey. Whether you have questions about admissions, programs, or campus life, feel free to reach out to us anytime.</p>
    <ul>
        <li><img src={mail_icon} alt="" />contact@edusity.edu</li>
        <li> <img src={phone_icon} alt="" />+1 (123) 456-7890</li>
        <li><img src={location_icon} alt="" />123 Edusity Avenue, Cityville <br /> State, 12345</li>
 

    </ul>
        </div>
      <div className="contact-col">
    <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
