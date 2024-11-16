import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>BreakBuddy</h4>
        <ul>
          <li><a href="#home" >Home</a></li>
          <li><a href="#testimonials" >Testimonials</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>About</h4>
        <ul>
          <li>Blog</li>
          <li>FAQs</li>
          <li>Our Supporters</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Legal</h4>
        <ul>
          <li>Privacy policy</li>
          <li>Terms and conditions</li>
          <li>Cookies</li>
        </ul>
      </div>
      <div className="footer-column social">
        <h4>Follow Us</h4>
        { <div className="social-icons">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEvt1U0rRkEYxvHfQykrsrFSXoqFKFl5KQsfQ76AslA2VvZKSfkG8jFkIUXWkuRtZaVsWCg0NUfTOFHPeLJg6tQ953Rf/3uue2ZOQ4tHo8X66gCDeMXNT8BzwDaWo/AmVkshKWAE55lgP25LIN8BBkqtyi3awVKseAsrJdWH3LomD8cmX5aK1wGm0RGFn3Ec4wl0xfgJJ+jBLMbQjj18KipfwT16o9AVhmJ8iJkYX2A9Cqb5YWuvYSNdeTOAB3TGp87FeexXH5oBVLkBdIdxtCWkYNVCKWAXi1FkDgcJ4AyjpYBwKEMvqhFW0hcnj+guBYSd9pIATjGZzD+s/6oH1wgXXxjpLgrz4PlbIniEqX9AddD+uEV1R7/o3a/89IsqzpPfAXF0UxkpbL/qAAAAAElFTkSuQmCC"/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjNJREFUSEvF1UnITWEYB/DfhyLCRlamQiEJkSQskFJfMmS2sTEsFBmKLJTIELKyYCF9hoxRSuykJJIyJpKyYUVW5vfRe+t0Oqd7U7fvrds95x2e///5/5/nPR3aPDraHF+3AYzEVszEeGqJ/MEz3MNxvCkrUpXBBpxAL3zAA7yqkXIyJmIofmATThX3lgGm5IAvsAhvW/QosryBYZiKJ41zZYCrWIAxeN9C8LVJvr34krJdh0cpo+tYUgcQQYN9gBRHD8zDOPzCS9zNc7ezlMMzwCCMqAP4ii5sLEQPfS9iegk0jD2ddP+EwTiDUGA++tUB/MYR7Mgbgvn9zGgb7qBnZn4oV80sRDXFCCJL855/E2UPYuMB7MoHluVD8X+plMHy5NWFZOjCbHAsn0/yxXwQqwUIZjvzejxvR398KwGE1p9TOe9LvuzJayHvqiLxqgyiYbbkAwezXANT44U/xdEA2J96YHdeOIs1zQCO5S6OM1Ful7OuV0oAwTQYFyWK9xXNPChm0DA5SjCkCpOjw+emSjmM15hdMjkA+9R5EDoHi/UFtkOymTMqynQlPhbmo0znICStNDkuq/hVNVow60wV9h23cLPAvBHvMQYkkqPrAIL94lSaY1u8KopJTUj311OcSyRX1wFMSiyDRWwMg9+VZKl7jeDXEF5NyzEqJYrJxnUdBj/MksT8TzxPjdgbo7LZMd8XcQvH+macLLKo+6L9zwfnaNX13m2fzBalb76t7Rn8BcJ+cxlsKeBhAAAAAElFTkSuQmCC"/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEvd1b1rFVEQBfBfNKAQsYqFoBiFIEIUESstlYAhYJQQIoJFLETsFUXxD9DGQrERCdjYWAiBFDYS0gQFxRSpEhIQBbESwS9I7sA+WNbdzb4Hr8nt9s6dc+6cO3O2R5dXT5fxbT2CPvzcRLbduI9RHMRfPMYd7MX57Hs9cPISbcciJvCphuQNzpTE17Afl/CyFc8TDGAF33AB8yUgJ/C+hvwd3uIFPhQr2Ikf6M0AnuEevuQAL2fJVRwh740k3XRZBbEXtz5VyJ7DayzgOB7VVPAcU/l4XqJdOIxZ9Hc4Hw9ws4pgH1bxPXXBng4JQp4nVQTbsIwDHYJH2hEsVRHE/sWsxVoP3Q5XdOChYkKZVcQc3MXRdtBxHU+bEIxgpk3wGLLBNM1/mhDEmejjKw1J/uF01sb/pVS5aTz4EG6nR5usIQq/uZoaI/q/dJURhOGdxC2cqwH/hZjsV3WV5gnO4mFKOFYwwbL8GMZraWpD+9pVrCCseDwZ1RiGsSPJ9Btf8RnhpHHjj5sBt+Jb74/WtPLG57ou0QbqWz0ZBzSqswAAAABJRU5ErkJggg=="/>
            <i class="bx bxl-facebook-square"></i>
        </div> }
        
      </div>
    </footer>
  );
};

export default Footer;
