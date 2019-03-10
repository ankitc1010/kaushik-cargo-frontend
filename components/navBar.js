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


                <Menu pointing inverted fixed="top" size="massive" className="size">
                    <Menu.Item
                        name='company name'
                        position="left" />
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        position="right"
                    />
                    <Link href="/contact">
                        <Menu.Item
                            name='contact us'
                            active={activeItem === 'contact us'}
                        />
                    </Link>

                    <Menu.Item
                        name='about us'
                        active={activeItem === 'about us'}
                        onClick={this.handleItemClick}
                    />


                </Menu>


                <style jsx>{
                    `
                    .size{
                        height: 10% !important;
                    }
                   
                
                `
                }
                </style>
            </div>

        )
    }
}