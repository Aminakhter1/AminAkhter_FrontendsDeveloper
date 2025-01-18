
import React from 'react';

import trade from "../images/trade.png";
const FeatureSection = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:"#0a0f1c"}}>
      {/* row1 */}
    <div className="row" style={{ marginLeft:"5%",marginRight:"5%",paddingTop:"2rem"}}>
      <div className="col-md-3"  >
      <div className="card" style={{ backgroundColor:"#0a0f40",color:"white"}}>
          <img className="card-img-top" src={trade} alt="Card image cap"/>
          
       <div className="card-body" >
       <h2>Trade Optimizer</h2>
         <p className="card-text">Find the right movement to bug or sell,with personalized trade suggestions desined to  this is help help you make the most of every oppertinity</p>
      </div>
      </div>


      </div>
      <div className="col-md-6">
        <div className="row">
        <div className="card" style={{backgroundColor:"#0a0f40",color:"white"}}>
      
       <div className="card-body">
        <h3>Market Insight</h3>
         <p className="card-text">Stay ahead of the market.Get real-time updates on market treds,track top traders movement and spot signals from key influences</p>
      </div>
      </div>

      </div>
        <div className="row h-60 mt-3">
        <div className="card " style={{backgroundColor:"#0a0f40",color:"white"}}>
        <div className="card-body" style={{vh:"100%"}}>
      
       
      </div>
      </div>
        </div>
      </div>
      <div className="col-md-3">
      <div className="card" style={{ backgroundColor:"#0a0f40",color:"white"}}>
      <img className="card-img-top" src={trade} alt="Card image cap" />
       <div className="card-body">
       <h2>Risk Guard</h2>
         <p className="card-text">Stay ahead of the market.Get real-time updates on market treds,track top traders movement and spot signals from key influences</p>
        </div>
      </div>
      </div>
      
    </div>
    {/* row2 */}
    <div className="row mt-2" style={{ marginLeft:"5%",marginRight:"5%"}}>
      <div className="col-md-4">
      <div className="card p-4" style={{backgroundColor:"#0a0f40",color:"white"}}>
      
       <div className="card-body">
        <h3>Trade Optimizer</h3>
         <p className="card-text">Find the r trade suggelp you make the most of every oppertinity</p>
      </div>
      </div>


      </div>
      
      <div className="col-md-8">
      <div className="card p-4" style={{backgroundColor:"#0a0f40",color:"white"}}>
      
       <div className="card-body">
         <p className="card-text">Some quick example text toddfbfhd nejdbekjf fnfdsjbgsd g,jsdbgjd g,sdmbljgad gdmnbvljadn adb,enfjbe fe,mfnlejbf efmeabfljeaf ea,mfbaekjfbaej ,mfbajbfa fajba,d g,a d,mv advfjhdfkdbfkbdajfbda fadfkjadbf fjadkjfjad fadjfdjabfjabdf build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
      
    </div>


    </div>
  );
};

export default FeatureSection;
