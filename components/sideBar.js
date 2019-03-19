import React, { Component } from 'react';
import styled from 'styled-components';


const hah={}

const Li = styled.li`
                    padding:15px;
                    width:240px;
                    margin-bottom:8px;
                    color:black;
                    background:#eeeee9;
                    border: 2px solid #eeeee0;
                    border-radius:5px;
                    &:hover{
                        background: #1e90ff;
                    cursor:pointer;
                    color: white;
                    }
                  
                    
                        
                     

`

 

class SideBar extends Component {
    constructor(props){
        super(props);
    }
    
    state = { activeItem:true}
    render() {

        return (
            <div >
                <ul>
                    <Li activeItem={true}><hah>Profile</hah></Li>
                    <Li>Team</Li>
                    <Li>Mission</Li>
                    <Li>Work Philosophy</Li>
                    <Li>Milestones</Li>
                    <Li>CSR Activities</Li>

                </ul>


                <style jsx>
                    {`
                ul{
                    list-style-type: none;
                    float:left;
                    position:relative;
                    right:15%;

                }
               
                
                `}</style>
            </div>
        );
    }
}

export default SideBar;