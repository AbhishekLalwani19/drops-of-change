import React, { useEffect, useState } from 'react';
import '../css/aboutus.css'
import herodata from '../api/aboutus.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Aboutus(){
    const [herosetionData,setHerosetionData] = useState([]);

    const CalltheApi = async ()=>{
        try{
          let  res  = await fetch('/api/aboutus.json');
          let heroSetionApiData = await res.json();
            console.log(heroSetionApiData);
        }
        catch(err){
            console.log("error gentrt",err);
        }
        
    };
useEffect(()=>{
    CalltheApi();
},[])
return(
    <>
    <div className="herosetion">
        <div className="herosetionPart1">
            <div className="herosetionTagline">
                <h1>Sowing Seeds of Change, One Drop at a Time.</h1>
            </div>
            <div className="herosetionDescription">
                <h3>
                This tagline reflects the essence of creating meaningful impact through small, consistent efforts that lead to transformative changes in society.
                </h3>
                <button className='btn1'>Join With us</button>
            </div>
        </div>
        <div className="herosetionPart2">
            <img src="https://dropsofchange.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-12-at-14.54.33.jpg" alt="" />
        </div>
    </div>
    </>
)
}
export default Aboutus