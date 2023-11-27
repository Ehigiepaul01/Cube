import React from 'react';
// import { FaLinkedin } from "react-icons/fa";

const SubscriptionSection = () => {
  return (
    <section className="subscription">
      <div className="sub-container">
        <p>Subscribe to our mailing list to get latest updates</p>

        <div className="form">
          <form action="">
            <input type="email" name="email" id="email" placeholder="Email" />
          </form>

          <button>Subscribe</button>
        </div>

        <div className="social-links">
          {/* <FaLinkedin /> */}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
