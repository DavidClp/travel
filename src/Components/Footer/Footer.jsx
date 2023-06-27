import React, {useEffect} from 'react'
import './footer.scss'
import video2 from '../../assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

  //Lets create a react hook to add a scroll animation
  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} lopp autoPlay muted typeof='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEPP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="email" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
              ENVIAR <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/> Travel
              </a>
            </div>

            <div className="footerParagraph" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea numquam tempora minus necessitatibus quas mollitia nihil reiciendis soluta dolore.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>

          <div className="footerLinks grid">
          {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                SUA AGENCIA
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Serviços
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>
            </div>

          {/* Group two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                TripAdvisor
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago
              </li>
            </div>

          {/* Group three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Oceania
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>CPPYRIGHTS RESERVED - CLIPEL CODE 2023</small>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer