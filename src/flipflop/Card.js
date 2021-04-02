import React from 'react';
import anas from './img/anas-mohammad.jpg';

function Card() {
return(
<div>
    
      <img className="ImageStyle" src={anas} alt="anas" />
    
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h3 style={{"color":"lightsteelblue"}}>Anas Mohammad</h3>
      <p style={{"textAlign":"center"}}>Anas is a product-oriented, full-stack web and Android developer. He's worked on almost every conceivable team size and has led his own teams as well. His expertise lies in building MVPs, scalable microservices, web crawlers, notification applications, REST and Socket APIs, infrastructure modeling, complex algorithms, AWS, and deployments. Overall, Anas is the perfect developer for transforming any idea into a working prototype.</p>
    </div>
    <div className="flip-card-back">
    <h3 style={{"color":"lightsteelblue"}}>Anas Mohammad</h3>
     <button>React</button>
     <button>Node js</button>
     <button>Javascript</button>
     <button>Asp.Net</button>
     <button>Java</button>
     <button>HTML</button>
     <div className="profile">View Profile</div>
    </div>
  </div>
</div>
</div>
);
}
export default Card;