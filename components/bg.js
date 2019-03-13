import React, { Component } from 'react';
import { Image } from "semantic-ui-react";

class bg extends Component {
    state = {}
    render() {
        return (
            <div className="bgDiv">
                <img src="https://www.millionaireacts.com/wp-content/uploads/2018/01/Before-Opening-Business-to-Public-1.jpg" className="mybg"/>

                <style jsx>
                    {`
                .bgDiv{
                    margin-bottom: 40px;


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