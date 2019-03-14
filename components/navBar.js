import React, { Component } from 'react'
import { Input, Menu, Image } from 'semantic-ui-react'
import Link from 'next/link';

export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>


                <Menu inverted pointing  fixed="top" size="massive" className="size">
                    <Menu.Item
                        name='COMPANY NAME'
                        position="left"
                        style={{margin: 10}} />
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        position="right"
                        style={{margin: 10}}
                    />
                    <Link href="/contact">
                        <Menu.Item
                            name='contact us'
                            active={activeItem === 'contact us'}
                            style={{margin: 10}}
                        />
                    </Link>

                    <Menu.Item
                        name='about us'
                        active={activeItem === 'about us'}
                        onClick={this.handleItemClick}
                        style={{margin: 10}}
                    />


                </Menu>


                <style jsx>{
                    `
                    .size{
                        position: fixed;
                        top:0;
                    }
                   
                
                `
                }
                </style>
            </div>

        )
    }
}