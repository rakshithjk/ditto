import React from "react";
import Image from "../elements/Image";

const ContactUs = () => {
  return (
    <a
      target="_blank"
      href="https://wa.me/message/RZ2QR7CR45J4E1"
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
        Contact us
      </button>
    </a>
  );
};

export default ContactUs;
