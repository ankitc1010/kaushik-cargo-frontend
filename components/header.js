import React from "react";
import Link from "next/link";
import { Segment, Menu, Grid, Icon, Divider } from "semantic-ui-react";
import User from "./common/User";



const Nav = () => (
  <nav>
    <div className='header'>
    <Grid >
        <Grid.Row only='computer' >
        <Grid.Column computer={8}> 
        <p className="text"> 
                <Icon name='phone' flipped='horizontally'/>  
                Call us at: +91 ##########
                               
                <Icon name='mail' style={{padding:5}}/> Email: shanky.bharadwaj@gmail.com
                </p> 

        </Grid.Column>
        <Grid.Column computer={6}>

        </Grid.Column>
        <Grid.Column computer={2} >
            <Icon name='facebook' inverted size='big' style={{ paddingTop:5 }}/>
            <Icon name='linkedin' inverted size='big'style={{ paddingTop:5 }}/>
            <Icon name='youtube' inverted size='big' style={{ paddingTop:5 }}/>

        </Grid.Column>

        </Grid.Row>
    </Grid>
   
            


      <style jsx>{`
      .header{
        background-color: #1e90ff;
        padding:1px;
          }
      .text{
          color:white;
          padding: 7px;
          position:relative;
      }
      
      `}</style>
    </div>
  </nav>
);

export default Nav;
