import '../RootLayout.scss'
import DropMenu from './DropMenu';
import React, { useState } from 'react'
// Nav bar
import sunnyLogo  from '../assets/logo.svg'
import burger from '../assets/icon-hamburger.svg'

// Header stuff
import imgHeaderMobile from '../assets/mobile/image-header.jpg'
import arrowDown from '../assets/icon-arrow-down.svg'


// Main stuff
import imageTransformMobile from '../assets/mobile/image-transform.jpg'
import pinkGlass from '../assets/mobile/image-stand-out.jpg'
import graphDesign from '../assets/mobile/image-graphic-design.jpg'
import photoImage from '../assets/mobile/image-photography.jpg'


// Client testimony things
import clientOneImage from '../assets/image-emily.jpg'
import clientTwoImage from '../assets/image-thomas.jpg'
import clientThreeImage from '../assets/image-jennie.jpg'


// Image block at bottom page
import milkBottlesImage from '../assets/mobile/image-gallery-milkbottles.jpg'
import orangePlateImage from '../assets/mobile/image-gallery-orange.jpg'
import coneImage from '../assets/mobile/image-gallery-cone.jpg'
import sugarImage from '../assets/mobile/image-gallery-sugar-cubes.jpg'


// Footer imports
import sunnyLogoFooter  from '../assets/logo-footer.svg'
import facebookIcon from '../assets/icon-facebook.svg'
import instaIcon from '../assets/icon-instagram.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import pinIcon from '../assets/icon-pinterest.svg'


// Larger screen image imports
import imgHeaderLarge from '../assets/desktop/image-header.jpg'
import eggLarger from '../assets/desktop/image-transform.jpg'
import pinkGlassLarger from '../assets/desktop/image-stand-out.jpg'
import graphDesignLarger from '../assets/desktop/image-graphic-design.jpg'
import photoImageLarger from '../assets/desktop/image-photography.jpg'
import milkBottlesLarger from '../assets/desktop/image-gallery-milkbottles.jpg'
import orangePlateLarger from '../assets/desktop/image-gallery-orange.jpg'
import iceCreamLarger from '../assets/desktop/image-gallery-cone.jpg'
import sugarCubesLarger from '../assets/desktop/image-gallery-sugarcubes.jpg'



// white SVG imports for footer icons
import facebookIconWhite from '../assets/icon-facebook-white.svg'
import instaIconWhite from '../assets/icon-instagram-white.svg'
import twitterIconWhite from '../assets/icon-twitter-white.svg'
import pinIconWhite from '../assets/icon-pinterest-white.svg'



















export default function RootLayout() {
  const [dropState, setdropState] = useState(false);



 const dropMenu = () => {
    setdropState((current) => !current)
 }


console.log(dropState)



  return (
    <div className="site-wrapper">
       
            
               

              {window.innerWidth <= 640 && <img className="header-image" src={imgHeaderMobile} alt="Header" />}

              {window.innerWidth > 640 && <img className="larger-header-image" src={imgHeaderLarge} alt="Larger header" />}
            



             <div className="nav-wrap">
                    <div className="nav-content">

                          <img className="sunny-logo" src={sunnyLogo} alt="Logo" />

                                {window.innerWidth > 640 && <div className="large-navbar-links">

                                      <p className="large-about-link font-info">About</p>

                                      <p className="large-services-link font-info">Services</p>

                                      <p className="large-projects-link font-info">Projects</p>

                                      <button className="large-navbar-button">CONTACT</button>

                                </div>}

                          {window.innerWidth <= 640 && <img onClick={dropMenu} className="burger-icon" src={burger} alt="Burger icon" />}

                          

                    </div>

                    {dropState === true && <DropMenu />}
             </div>



             <div className="title-wrap">
                <div className="top-title-box"> 

                       <p className="creatives-main-title">WE ARE CREATIVES</p>

                       <img className="arrow-down-main" src={arrowDown} alt="Arrow down" />
                </div>
             </div>   



                <div className="main-contain">

                     {window.innerWidth <= 640 && <img className="egg-image" src={imageTransformMobile} alt="Egg" />}
                    

                     <div className="wrap-for-hover-white"> 
                        <div className="first-text-box-wrap">
                            <p className="first-text-box-title">Transform your brand</p>


                            <p className="first-text-box-copy">We are a full-service creative agency specializing in helping brands grow fast.
                            Engage your clients through compelling visuals that do most of the marketing for you.</p>

                            <p className="first-text-box-link text-box-links">Learn More</p>
                        </div>

                     </div>

                     {window.innerWidth <= 640 && <img className="pink-glass-image" src={pinkGlass} alt="Pink glass" />}

                     

                     {window.innerWidth > 640 && <img className="egg-larger-screens" src={eggLarger} alt="Egg" />}


                     {window.innerWidth > 640 && <img className="pink-glass-larger" src={pinkGlassLarger} alt="Pink glass large" />}




                  <div className="wrap-for-hover-white"> 
                       <div className="second-text-box-wrap">
                            <p className="second-text-box-title">Stand out to the right audience</p>

                            <p className="second-text-box-copy">Using a collaborative formula of designers, researchers, photographers,
                            videographers and copywriters, we'll build and extend your brand in digital places.</p>

                            <p className="second-text-box-link text-box-links">Learn More</p>

                       </div>
                  </div>

                <div className="create-row-wrap">
                     <div className="graphic-image-wrap">

                       {window.innerWidth <= 640 && <img className="graphic-design-image" src={graphDesign} alt="Graphic design" />}

                       {window.innerWidth > 640 && <img className="graph-design-larger" src={graphDesignLarger} alt="Graphc design larger" />}



                       <div className="graphic-design-text-box-wrap">
                            <p className="graphic-design-title">Graphic Design</p>

                            <p className="graphic-design-copy">Great design makes you memorable. We deliver artwork that underscores your brand
                            message and captures potential client's attention.</p>
                       </div>

                     </div>  



                     <div className="photography-image-wrap">

                        {window.innerWidth <= 640 && <img className="photography-image" src={photoImage} alt="Photography" />}

                        {window.innerWidth > 640 && <img className="photography-image-larger" src={photoImageLarger} alt="Photography larger" />}



                        <div className="photography-text-box-wrap">

                           <p className="photography-title">Photography</p>

                           <p className="photography-copy">Increase your credability by getting the most stunning,
                           high-quality photos that improve your business image.</p>
                                

                        </div>

                     </div>

                </div>

                     <div className="client-testimony-box-wrap">
                       <div className="center-title-wrap">
                          <p className="client-testimony-title">CLIENT TESTIMONIALS</p>
                       </div>

                        <div className="wrap-for-all-clients">

                          <div className="client-one-wrap">

                           <img className="client-one-image" src={clientOneImage} alt="Client one" />

                           <p className="client-one-copy">We put our trust in Sunnyside and they delivered, making sure our needs
                           were met and deadlines were always hit.</p>


                           <p className="client-one-person-name">Emily R.</p>

                           <p className="client-one-job-title">Marketing Director</p>

                          </div>

                          <div className="client-two-wrap">
                            
                            <img className="client-two-image" src={clientTwoImage} alt="Client two" />

                            <p className="client-two-copy">Sunnyside's enthusiasm coupled with their keen interest in our brand's
                            success made it a satisfying and enjoyable experience.</p>

                            <p className="client-two-person-name">Thomas S.</p>

                            <p className="client-two-job-title">Chief Operating Officer</p>

                           
                          </div>

                          <div className="client-three-wrap">


                           <img className="client-three-image" src={clientThreeImage} alt="Client three" />

                           <p className="client-three-copy">Incredible end result! Our sales increased over 400%
                           when we worked with Sunnyside. Highly recommended!</p>

                           <p className="client-three-person-name">Jennie F.</p>

                           <p className="client-three-job-title">Business Owner</p>
               
                           
                          </div>

                        </div>  
                  </div>







                  <div className="image-block-wrap-one">

                        {window.innerWidth <= 640 && <img className="milk-bottles-image" src={milkBottlesImage} alt="Milk Bottles" />}

                        {window.innerWidth <= 640 && <img className="orange-plate-image" src={orangePlateImage} alt="Orange on plate" />}





                        {window.innerWidth > 640 && <img className="milk-bottles-larger" src={milkBottlesLarger} alt="Milk bottle large" />}

                        {window.innerWidth > 640 && <img className="orange-plate-larger" src={orangePlateLarger} alt="Orange on plate larger" />}

                        {window.innerWidth > 640 && <img className="ice-cream-cone-larger" src={iceCreamLarger} alt="Ice cream larger" />}

                        {window.innerWidth > 640 && <img className="sugar-cubes-larger" src={sugarCubesLarger} alt="Sugar cubes larger" />}

                        


                  </div>

                   <div className="image-block-wrap-two">


                        {window.innerWidth <= 640 && <img className="cone-image" src={coneImage} alt="Ice cream cone" />}


                        {window.innerWidth <= 640 && <img className="sugar-image" src={sugarImage} alt="Sugar cubes" />}


                  </div>


              


                     <div className="footer-box-wrap">

                            <div className="footer-logo-wrap">
                               
                               <img className="footer-logo" src={sunnyLogoFooter} alt="Sunny name" />
                                  
                            </div> 



                            <div className="footer-nav-wrap-links">

                              <p className="about-footer links">About</p>

                              <p className="services-footer links">Services</p>

                              <p className="projects-footer links">Projects</p>

                            </div>

                            <div className="footer-icon-wrap">

                              <img className="facebook-icon icon" src={facebookIcon} alt="Facebook" />
                              <img className="facebook-icon-white icon white-icon" src={facebookIconWhite} alt="Facebook" />

                              <img className="insta-icon icon" src={instaIcon} alt="Instagram" />
                              <img className="insta-icon-white icon white-icon" src={instaIconWhite} alt="Instagram" />

                              <img className="twitter-icon icon" src={twitterIcon} alt="Twitter" />
                              <img className="twitter-icon-white icon white-icon" src={twitterIconWhite} alt="Twitter" />
                                 
                           

                              <img className="pin-icon icon" src={pinIcon} alt="Pinterest" />
                              <img className="pin-icon-white icon white-icon" src={pinIconWhite} alt="Pinterest" />

                            </div>

                     </div>
                              
                              
                      


    </div>


            



            

              

           





           

          
               
                

            <footer>

            </footer>
        </div>
    
  )
}
