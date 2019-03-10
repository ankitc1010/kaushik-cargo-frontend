import React, { Component } from 'react';
import { Grid, Icon, IconGroup } from 'semantic-ui-react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="parent">
                <div className="footer">
                    <Grid columns={3} divided stackable className="stickDown">
                        <Grid.Column>
                            <p style={{ fontSize: 20 }}> GET IN TOUCH</p>
                            <Icon className="icon" name="facebook square" inverted color="blue" size="big"></Icon>
                            <Icon name="google" inverted color="red" size="big"></Icon>
                        </Grid.Column>
                        <Grid.Column>
                            <p style={{ fontSize: 20 }}>GROUP COMPANIES</p>
                            <p style={{ fontSize: 13 }}>Unicorn Mark Unicron Mark Unicorn Mark</p>

                        </Grid.Column>
                        <Grid.Column>
                            <p style={{ fontSize: 20 }}>MEMBERS</p>
                        </Grid.Column>
                    </Grid>
                </div>

                <style jsx>
                    {`
                    
                p{
                    color:#fff;
                    padding: 6px;
                    text-align: center  ;
                }
                .stickDown{
                    bottom:0;
                }
                .footer{
                    background-color: black  ;
                    bottom: 0;
                    width: 100%;
                    height: 15%;
                }
                .icon{
                    float: right;
                }
                
                `
                    }</style>
            </div>
        );
    }
}

export default Footer;