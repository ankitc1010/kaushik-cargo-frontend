import React, { Component } from 'react';
import { Image } from "semantic-ui-react";

class bg extends Component {
    state = {}
    render() {
        return (
            <div className="bgDiv">
                <img src="https://png.pngtree.com/thumb_back/fw800/back_pic/04/55/00/875863a90a7de9d.jpg" className="mybg">
                </img>
                <div className="banner" >
                <h1 className="bannerDesign" >GROW YOUR BUSINESS</h1>
                
                <h1 className="bannerDesign2" >We are the best choice.
                    </h1>

                    <ul>
                        <li>Sea Cargo</li>
                        <li> Sea Freight</li>
                        <li>Air Freight</li>
                        <li>Project Cargo</li>
                        <li>CFS</li>
                        <li>Coastal Shipping</li>
                    </ul>
                
                </div>
                <style jsx>
                    {`
                .bgDiv{
                    margin-bottom: 40px;
                    position: relative;
                    margin-top: 0;



                }
                li{
                    font-size: 160%;
                    margin: 15px;
                    color:black;
                }
                .banner{
                    position: absolute;
                    top:5px;
                }
                .bannerDesign{
                    font-size:300%;
                    color:black;
                    margin 35px 45px;
                   
                }
                .bannerDesign2{
                    font-size:250%;
                    color:black;
                    margin 35px 45px;
                    
                }
                .mybg{
                    width: 100%;
                    height: 550px;

                }

                
                `
                    }</style>
            </div>
        );
    }
}

export default bg;