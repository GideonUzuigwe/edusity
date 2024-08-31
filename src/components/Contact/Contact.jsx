import React from "react";
import "./Contact.css";
import mes_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_col">
        <h3>
          Send Us a Message <img src={mes_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          dolorem ea quis deleniti sit reiciendis, minima, tenetur eligendi ut
          impedit debitis ducimus cum. Voluptatibus porro quas ratione dolorum
          maiores dicta.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@fod_code.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +44 7892 8989 89
          </li>
          <li>
            <img src={location_icon} alt="" />7 Westmorland Road, London UK
          </li>
        </ul>
      </div>
      <div className="contact_col">
        <form>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your text"
            required
          ></textarea>
          <button className="btn dark_btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
