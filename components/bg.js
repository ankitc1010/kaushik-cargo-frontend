import React, { Component } from 'react';
import { Image } from "semantic-ui-react";

class bg extends Component {
    state = {}
    render() {
        return (
            <div className="bgDiv">
                <img src="https://guide4info.com/site/wp-content/uploads/2016/05/business-banner.png" className="mybg">
                </img>
                <div className="banner">
                <h1 className="bannerDesign" style={{fontSize:60}}>GROW YOUR BUSINESS</h1>
                
                <h1 className="bannerDesign" style={{fontSize:40}}>We are the best choice.
                    </h1>
                
                </div>
                <style jsx>
                    {`
                .bgDiv{
                    margin-bottom: 40px;
                    position: relative;


                }
                li{
                    font-size: 40px;
                    margin: 15px;
                }
                .banner{
                    position: absolute;
                    top:5px;
                }
                .bannerDesign{
                    color:black;
                    margin 35px 60px;
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