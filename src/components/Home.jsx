import React from 'react'
import vg from "../assests/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"



const Home = () => {
  return (
  <>
    <div className="home" id="home">
    <main> 
     <h1>TechyStar</h1> 
     <p>Solution to all your problems</p>
    </main>
     </div>

     <div className="home2">
<img src={vg} alt="Graphics"/>

<div>
<p>
   We are your one and only solution to the tech problems
   you face
   everyday. We are leading tech company whose aim is to
   increase the
   problem solving ability in children.
</p>

</div>
     </div>
  <div className="home3" id="about"> 
    <div>
      <h1>Who we are?</h1>
      <p> If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.</p>
       
    </div>
    </div> 
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
        <div style={{
            animationDelay:"0.3s"
          }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
          </div>
      
          <div style={{
            animationDelay:"0.5s"
          }}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
          </div>
          
          <div style={{
            animationDelay:"0.7s"
          }}>
          <AiFillYoutube/>
          <p>Youtube</p>
          </div>
      
          <div style={{
            animationDelay:"0.1s"
          }}>
          <AiFillInstagram/>
          <p>Instagram</p>
          </div>
      

      
        </article>
      </div>
      </div>  
     </>
  )
};
export default Home;
