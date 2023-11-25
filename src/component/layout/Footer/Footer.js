import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import Email from "@mui/icons-material/Email"
import "./Footer.css"
const Footer = () => {
  return (
    <div id="footer">
    <div className="leftFooter">
        Visit our website for shopping online.
    </div>
    <div className="Midfooter">
        <h3>ShopOnline</h3>
        <p>Shop what you like</p>
        <p>Copyrights 2023 &copy; agrajkatiyar</p>
    </div>
    <div className="rightFooter">
    <p>Connect with developer</p>
    <a href="http://www.linkedin.com/in/agrajkatiyar"><LinkedInIcon/></a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=agrajkatiyar7@gmail.com&su=SUBJECT&body=BODY"><Email/>agrajkatiyar7@gmail.com</a><br/>
    </div>
    </div>
  )
}

export default Footer