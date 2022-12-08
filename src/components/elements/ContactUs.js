import React from "react";
import Image from "../elements/Image";

const ContactUs = () => {
  return (
    <a
      target="_blank"
      href="https://wa.me/+916360747479"
      rel="noopener noreferrer"
    >
      <button
        onClick={() => console.log("clicked1")}
        className="contact-us-btn"
      >
        <Image
          src={require("./../../assets/images/whatsapp.png")}
          alt="Contact Us"
          width={50}
          height={50}
        />
      </button>
    </a>
  );
};

export default ContactUs;
