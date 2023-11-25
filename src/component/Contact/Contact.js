import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import Email from "@mui/icons-material/Email";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactSection">
          <section>
    <h2>About the Project</h2>
    <br></br>
    <p>This project is <b>ShopOnline</b>. A Full-stack website created for shopping online.</p>
    <br></br>
    <p>You can connect with developer at:</p>
    <br></br>
    <p><a href="http://www.linkedin.com/in/agrajkatiyar"><LinkedInIcon/>www.linkedin.com/in/agrajkatiyar</a></p>
    <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=agrajkatiyar7@gmail.com&su=SUBJECT&body=BODY"><Email/>agrajkatiyar7@gmail.com</a>
    </p><br/>
   

  </section>

  <section class="features">
    <h2>FEATURES</h2>
    <br></br>
    <ul>
  <li>
    <strong><h3>User:</h3></strong>
    <br></br>
    <ul class="list">
      <li>Register, log in, recover and update password, and manage profile.</li>
      <li>Explore, search, and filter products. Submit and update product reviews.</li>
      <li>Add items to the cart, create orders, make payments, and view order history.</li>
    </ul>
  </li>
  <li>
    <strong><h3>Admin:</h3></strong>
    <br></br>
    <ul class="list">
      <li>Perform all user tasks and access the dashboard.</li>
      <li>Create, update, and delete products. View the complete product catalog.</li>
      <li>Access and manage all website orders, including updating order status.</li>
      <li>Review and manage product reviews, including the ability to delete them.</li>
    </ul>
  </li>
</ul>
  </section>
  <section class="technologies">
    <h2>TECHNOLOGIES</h2>
    <br></br>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>MongoDB</li>
      <li>Stripe</li>
      <li>Cloudinary</li>
      <li>Material UI</li>
    </ul>
  </section>
    </div>
  );
};

export default Contact;