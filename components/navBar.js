import React, { Component, createRef } from 'react'
import { Input, Menu, Image, Grid, Sticky } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link';
import { relative } from 'path';


const Wrap = styled.span`
margin-top:25px;
float:right;
height:40px;
border-radius:15px;


&:hover{
    background: #1e90ff;
}

`;

export default class Navbar extends Component {
    constructor(props) {
        super(props);

    }
    state = { activeItem: this.props.currentPage }

    contextRef = createRef()


    render() {
        const { activeItem } = this.state

        return (
            <div >

                
                <Menu pointing size="massive" className="size" stackable>
                


                    <Image style={{ 'font-size': 50 }} avatar src='http://www.transitionsta.org/wp-content/uploads/2016/12/twitter-black-round-icon.png' className='logo' />

                    <Link href='/home'>
                    <Wrap>

                        <Menu.Item
                            name='HOME'
                            active={activeItem === 'home'}
                            position='right'
                        />
                    </Wrap>

                    </Link>

                    <Link href="/contact">
                    <Wrap>
                        <Menu.Item
                            name='CONTACT US'
                            active={activeItem === 'contact us'}
                            position='right'

                        />
                     </Wrap>
                    </Link>
                    <Link href='/aboutProfile'>
                    <Wrap>
                        <Menu.Item
                            name='ABOUT US'
                            active={activeItem === 'about us'}  
                            position='right'

                            />
                   </Wrap>

                    </Link>
                </Menu>





                <style jsx>{
                    `
                    .logo{
                        height:100px;
                        width:160px;
                        margin:10px;
                    }
                  

                    .size{
                        position: -webkit-sticky;
                        position: sticky;
                        top:0;
                    }
                
                
                   
                
                `
                }
                </style>
            </div>

        )
    }
}