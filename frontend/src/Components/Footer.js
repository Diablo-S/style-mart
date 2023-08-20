import React from "react";

function Footer() {
    return (
        <div className="footer">
            <hr className="footer_rule" />
            <p className="footer_content">
                Designed by - &nbsp; &#8226; Shreyash Negi&nbsp;
            </p>
            <div id="social">
                <a href="https://instagram.com">
                    <img src="/images/instagram.png" alt="" width="2.5%" />
                </a>
                &nbsp;&nbsp;
                <a href="https://twitter.com">
                    <img src="/images/twitter.png" alt="" width="2.5%" />
                </a>
                &nbsp;&nbsp;
                <a href="https://facebook.com">
                    <img src="/images/facebook.png" alt="" width="2.5%" />
                </a>
                &nbsp;&nbsp;
                <a href="https://linkedin.com">
                    <img src="/images/linkedin.png" alt="" width="2.5%" />
                </a>
            </div>
            <hr className="footer_rule" />
        </div>
    );
}

export default Footer;
