import React, {useState} from 'react';
import Typewriter from "typewriter-effect"

const Home = () => {
    const [start, setstart] = useState(false)
    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            {start?<>I am Vipransh Upadhyay</>:<Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("I am Vipransh Upadhyay").callFunction(() => {
                    setstart(true)
                  }).start();
                }}
              />}
                <div>{start?<Typewriter
                  options={{
                    strings: [
                      "Front-End",
                      "Blockchain-Development",
                      "Back-End",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />:""}</div>
                <div className="social-links">
                    <a href="https://twitter.com/i/flow/login" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100009331594718" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/vipransh_upadh/" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="https://in.linkedin.com/?src=go-pa&amp;trk=sem-ga_campid=14650114791_asid=127961666580_crid=601257986851_kw=linkedin_d=c_tid=kwd-285981853_n=g_mt=p_geo=9299424_slid=&amp;mcid=6844056167778418688&amp;cid=&amp;gclsrc=ds&amp;gclsrc=ds" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Home
