import React, { Component } from 'react';
import { Image } from "semantic-ui-react";
class bg extends Component {
    state = {}
    render() {
        return (
            <div className="bg">
                <Image src="https://www.millionaireacts.com/wp-content/uploads/2018/01/Before-Opening-Business-to-Public-1.jpg" className="mybg">
                </Image>
                <style jsx>
                    {`
                .bg{
                    margin-bottom: 40px;
                    margin-top: 40px;

                }
                .mybg{
                    width: 100%;
                }
                `
                    }</style>
            </div>
        );
    }
}

export default bg;