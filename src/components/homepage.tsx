import { useEffect } from "react";
import "./styles/homepage.css";
import Person from "../assets/person.jpg";
import MWT from "../assets/mwttechnologies_logo.jpg"
import CABOT from "../assets/cabot.jpg"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Homepage() {
  useEffect(() => {
    // Ensure GSAP plugins are registered
    gsap.registerPlugin(ScrollTrigger);

    // Define the animation function
    const animateOnScroll = () => {
      gsap.to(".firstitle", {
        // Changed from gsap.from to gsap.to
        fontSize: "20px",
        opacity: 1, // Changed from 0 to 1
        duration: 1,
        scrollTrigger: {
          trigger: ".firstdiv",
          start: "top 10%", // start animation when the top of the element is 80% in view
          end: "bottom 20%", // end animation when the bottom of the element is 20% in view
          scrub: true, // smooth scrubbing
        },
      });

      gsap.to(".picprofile", {
        // Changed from gsap.from to gsap.to
        opacity: 0.8, // Changed from 0 to 1
        duration: 1,
        width:10,
        borderRadius:100,
        height:100,
        scrollTrigger: {
          trigger: ".firstdiv",

          start: "top 10%", 
          end: "bottom 20%", 
          scrub: true, 
        },
      });

      gsap.to(".studycontainer", {
        duration: 0.1,
        opacity:1,
        marginLeft:"100px",
        scrollTrigger: {
          trigger: ".firstdiv",
          start: "top 10%",
          end: "bottom 20%", 
          scrub: true, 
        },
      });
    };

    // Call the animation function
    animateOnScroll();
  }, []);


const studyjson=[{
  id:1,
  name:"10th",
  nameschool:"S.S.H.S.S Anicadu",
},{
  id:1,
  name:"12th",
  nameschool:"S.A.H.S.S Kalloorkad",
},{
  id:1,
  name:"BCA",
  nameschool:"St.joeph's Moolamattom",
},
{ id:1,
  name:"MCA",
  nameschool:"Nirmala Muvattupuzha",}]

  const skills=[{
    id:1,
    name:"React"
  },{
    id:2,
    name:"React Native"
  },{
    id:3,
    name:"JS",
  },{
    id:4,
    name:"TS"
  },{
    id:5,
    name:"Node JS"
  },{
    id:6,
    name:"Jest"
  },{id:7,
    name:"HTML"
  },{
    id:8,
    name:"CSS"
  },{
    id:9,
    name:"Vue JS"
  },{
    id:10,
    name:"Next JS"
  },{
    id:10,
    name:"Next JS"
  },{
    id:10,
    name:"Next JS"
  }]

  return (
    <div>
      <div className="homepageimgdetails">
        <div className="firstdiv">
          <div className="firstdivcontent">
            <img
              className="picprofile"
              width={300}
              height={200}
              style={{ borderRadius: 40, opacity: 1 }}
              src={Person}
            />
            <div className="profiledesc">
              <p
                className="firstitle"
                style={{
                  color: "#fff",
                  fontSize: 15,
                  width: "400px",
                  textAlign: "start",
                }}
              >
                Highly skilled and motivated React/React Native Developer with
                professional experience. Proficient in creating robust and
                efficient web and mobile applications using React and React
                Native frameworks. Strong understanding of front-end
                development principles, responsive design, and cross-browser
                compatibility. Committed to delivering high quality code and
                exceeding client expectations. Experienced in using Jest for
                testing React and React Native applications. Seeking
                challenging opportunities to contribute to innovative projects
              </p>
            </div>
            <div style={{marginTop:"10px"}}>
            <h1 style={{color:"#fff"}}>Skills</h1>
            <div style={{display:"flex",marginTop:"10px",width:600, flexWrap: "wrap"}}>
            {skills?.map((itm)=>(
              <p style={{padding:"10px",backgroundColor:"yellow",marginLeft:"12px",borderRadius:"20px",marginBottom:10}} key={itm?.id}>{itm?.name}</p>
            ))}
            </div>
          </div>
          </div>
        </div>
        <div className="seconddiv">

          <div style={{marginTop:"90px"}}>
            <h1 style={{color:"#fff"}}>Studies</h1>
            <div className="studycontainer" style={{display:"flex",marginTop:"20px"}}>
              {studyjson?.map(itm=>{
                return(
<div key={itm?.id} style={{padding:"10px",backgroundColor:"yellow",marginLeft:"12px",borderRadius:"20px"}}>
  <h4>{itm?.name}</h4>
  <p>{itm?.nameschool}</p>
</div>
                )
              })}
            </div>
            <div style={{marginTop:"40px"}}>
              <h1 style={{color:"#fff"}}>Experience</h1>
              <div style={{display:"flex"}}>
                <div>
              <img width={150} height={150} src={MWT} style={{marginTop:"10px",borderRadius:"40px"}}/>
              <p style={{color:"#fff",backgroundColor:"turquoise",padding:"5px",borderRadius:20}}>Junior software developer</p>
              <p style={{color:"#fff"}}>2024 jan 3rd to present</p>
              </div>
              <div style={{marginLeft:"20px"}}>
              <img width={150} height={150} src={CABOT} style={{marginTop:"10px",borderRadius:"40px"}}/>
              <p style={{color:"#fff",backgroundColor:"turquoise",padding:"5px",borderRadius:20}}>Associate software developer</p>
              <p style={{color:"#fff"}}>2023/03/06-2024/01/03</p>
              </div>
              </div>
              <div style={{marginTop:"10px"}}>
                <h1 style={{color:"#fff"}}>Projects</h1>

                <div style={{marginTop:2,display:"flex"}}>
                  <div>
                  <p style={{color:"#000",padding:5,borderRadius:20,backgroundColor:"yellow"}}>PAC-IQ-Referral Management Platform</p>
                  </div>
                  <div style={{marginLeft:10}}>
                  <p style={{color:"#000",padding:5,borderRadius:20,backgroundColor:"yellow"}}>LMS</p>
                  </div>
                  <div style={{marginLeft:10}}>
                  <p style={{color:"#000",padding:5,borderRadius:20,backgroundColor:"yellow"}}>FoodCafe</p>
                  </div>
                  <div style={{marginLeft:10}}>
                  <p style={{color:"#000",padding:5,borderRadius:20,backgroundColor:"yellow"}}>FoodCafe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepageimgdetails">
        <div className="firstdiv">
          <div>
          <h1 style={{ color: "#fff",marginLeft:20 }}>Languages</h1>
          <div style={{display:"flex",marginLeft:20,marginTop:10}}>
            <div style={{marginLeft:10}}><p style={{padding:5,backgroundColor:"yellow",marginLeft:10,borderRadius:20}}>English</p></div>
            <div style={{marginLeft:10}}><p style={{padding:5,backgroundColor:"yellow",borderRadius:20}}>Malayalm</p></div>
            <div style={{marginLeft:10}}><p style={{padding:5,backgroundColor:"yellow",borderRadius:20}}>Tamil</p></div>
            <div style={{marginLeft:10}}><p style={{padding:5,backgroundColor:"yellow",borderRadius:20}}>Hindi</p></div>
          </div>
        </div>
        </div>
        <div className="seconddiv"></div>
      </div>
    </div>
  );
}

export default Homepage;
