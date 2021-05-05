import React from 'react';
 function Footer1()
{
    return( 
    <footer style={{"bottom":"0","position":"relative","border":"10px solid white"}} class="site-footer" className={'background-black'}>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h4>About</h4>
            <p class="text-justify">TechLearn.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. TechLearn focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h4>Categories</h4>
            <ul class="footer-links">
              <li><a href="http://TechLearn.com/category/Java/">Java</a></li>
              <li><a href="http://TechLearn.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://TechLearn.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://TechLearn.com/category/python/">Python</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="http://localhost:3000/AboutUs">About Us</a></li>
              <li><a href="http://localhost:3000/ContactUs">Contact Us</a></li>
              <li><a href="https://github.com/rktheprince/TechLearnApplication">Contribute</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
             <div className="text-center text-black" style={{position:"absolute",bottom:"13px",left:"350px"}}>Copyright &copy; {new Date().getFullYear()} All Rights Reserved by TechLearn
            </div>
          </div>
        </div>
      </div>
</footer>
      );
}
export default Footer1;