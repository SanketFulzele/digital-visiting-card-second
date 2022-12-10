import React from 'react'
// import { Helmet } from 'react-helmet';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MetaInfo from '../MetaInfo/MetaInfo';
import "./homePage.css";

const HomePage = () => {
    return (
        <>
            {/* <Helmet>
                <title> Meri Pahchaan | Digital Visiting Card</title>
                <meta name="keyword" content="Digital Card | Make Digital Visiting Card Online | Meri Pahchaan | Trickysys | Digital Visiting Card Online" />
                <meta name="description" content="Make Your Digital Visiting Cards Online" />
                <meta name="author" content="Meri Pahchann | Make Digital Visiting Card Online" />
                <meta property="og:title" content="Home Page Meri Pahchaan | Digital Visiting Card" />
                <meta property="og:description" content="Home Page Make Your Digital Visiting Cards Online" />
                <meta property="og:image" content="https://www.trickysys.com/admin/uploads/logo/1641464884_trricky.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:image" content="https://trickysys.com/admin/uploads/logo/1641464884_trricky.png" />
                <meta property="og:image:secure" content="https://trickysys.com/admin/uploads/logo/1641464884_trricky.png" />
                <meta property="og:image:type" content="image/png" />
            </Helmet> */}

            <MetaInfo 
                ogTitle="Home Page Meri Pahchaan | Digital Visiting Card"
                ogDescription="Home Page Make Your Digital Visiting Cards Online"
                ogImage="https://www.trickysys.com/admin/uploads/logo/1641464884_trricky.png"
              />

            <div>

                <div className="hero-container">
                    <h3 className='heading-bg'> Make Your Own <br /> <span> Digital Visiting Card  </span></h3>
                    <h6 className='heading-sm'>with meripahchaan.in</h6>
                </div>

                <div className="content-section">
                    <div className="content-box">
                        <div className="text-container">
                            <h1 className='content-heading'>Inspire Your Client Digitally</h1>
                            <h4 className='content-subheading'>We Convert Your Normal Visiting Card into Digital Business Card. Our platform allows professionals to easily share their Business information without the need for paper business cards.</h4>
                        </div>
                        <div className="image-container">
                            <img src="/images/digitalCard.png" className='cards-image' alt="cards_images" />
                        </div>
                    </div>
                </div>


                <div className="service-section">
                    <div className="service-text-box">
                        <h1 className='service-heading'> Our digital business card platform makes designing a card simple, convenient, and reliable. </h1>
                    </div>
                    <div className="service-card-box">
                        <div className="service-card">
                            <div className="card-img-container">
                                <img className='card-img' src="/images/qrcode.png" alt="QR_Code" />
                            </div>
                            <div className="card-text-container">
                                <h1 className='card-heading'>Digital Visiting Card</h1>
                                <h4 className='card-subheading'>
                                    Still using old boring visiting cards? Now its time to change. Use our Online Visiting Card service and GO DIGITAL.
                                </h4>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="card-img-container">
                                <img className='card-img' src="/images/TrickyQr.png" alt="QR_Code" />
                            </div>
                            <div className="card-text-container">
                                <h1 className='card-heading'>Website Design / Development</h1>
                                <h4 className='card-subheading'>
                                    Design your own Business/Professional website in a Simple and Easy way.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="about-section">
                    <div className="about-box">
                        <h1 className='about-heading'>Freedom From Boring Printed Business Cards</h1>
                        <h4 className='about-subheading'>Design your digital visiting card in 2 minutes - it's easy, elegant and affordable. E-Visit Card is always in your pocket, never tears and never runs out. Your Digital Visiting Card can be easily updated with our user-friendly dashboard, so you won't need to re-print a business card again.</h4>
                    </div>
                </div>


                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default HomePage
