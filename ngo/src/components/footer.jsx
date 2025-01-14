import React from 'react';
import "../css/footer.css";

export const Footer = ()=>{
    return(
        <>
        {/* this is the upper part of the footer which will stay contant in every website  */}
           <div className="container" id='footer-partition-one'>
                <h2 id='text1-footh2'>GIVE US A HAND</h2>
                <h1 id='text2-footh1'>SUPPORT US AND CHANGE THE COURSE OF A </h1>
                <h1 id='text3-footh1'>CHILD'S LIFE TODAY!</h1>
            </div>
        {/* this is the second part of the footer */}
        <div className="container" id='footer-partition-two'>

        </div>
        </>
    )
}