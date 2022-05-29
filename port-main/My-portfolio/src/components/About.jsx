import React from 'react'
import "./About.css"
export default function About() {
    return (
        <div className='about' id='about'>
        <div className='about-container'>
        <div className='aboutme-text'>
           <h1>About Me</h1>
           <div className='dash'>
           <div className='hr-line'></div ><div className='hr-line-orange'></div><div className='hr-line'></div>

           </div>

        </div>

        <div className='aboutme-container'>
            <div className='aboutme-img'>
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/02/Famous_graphic_designer_portfolios_jpg_LR4w6-rk.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces" alt="" />
            </div>
            <div className='aboutme-text-section'>
            <div className='about-me-summary'>
                <p>Hi Everyone, I am Rahul Gupta from Deoria, Uttar Pradesh. I have completed my Higher Secondary Education in Science from Deoria Senior Secondary School, Deoria. I learned C++ in my Higher Secondary and I started developing my passion towards coding, this interest has always been growing and drawn me towards Masai School. So, after compliting my Higher Secondary, I joined the Full Stack Web Development programme at Masai School Bengaluru, Karnataka and Now, I have the required technical skills along with soft skills like Time Management, Communication and Team Management that is required by one.   
                </p>
            </div>
            <div className='about-me-highlight'>
                <h3>Here are a Few Highlights:</h3>
                <ul>
                    <li className='aboutme-highlighted-text'>Full-Stack web development</li>
                    <li className='aboutme-highlighted-text'>Interactive Front End as per the design</li>
                    <li className='aboutme-highlighted-text'>React for building user interfaces </li>
                    <li className='aboutme-highlighted-text'>Managing database</li>


                </ul>
            </div>
            <div className="profile-options">
                <a href='#contact'>

                
              <button className="btn primary-btn">
                  {""}
                  Hire Me{" "}
              </button>
              </a>
              <a href="https://drive.google.com/file/d/19Dk5jaOVSP_uo851H3b4majs9CL1nxNc/view?usp=sharing" target="blank">
                  <button className="btn highlighted-btn">Get Resume</button>
              </a>
          </div>
        </div>
        </div>
        </div>
        </div>
    )
}
