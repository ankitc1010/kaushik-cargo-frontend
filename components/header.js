import React from "react";
import Link from "next/link";
import { Segment, Menu, Grid, Icon, Divider } from "semantic-ui-react";
import User from "./common/User";



const Nav = () => (
  <nav>
    <div className='header'>
    <Grid >
        <Grid.Row   >
        <Grid.Column computer={8} only='computer'> 
        <p className="text"> 
                <Icon name='phone' flipped='horizontally'/>  
                Call us at: +91 ##########
                               
                <Icon name='mail' style={{padding:5}}/> Email: shanky.bharadwaj@gmail.com
                </p> 

        </Grid.Column>
        <Grid.Column computer={6} only='computer'>

        </Grid.Column>
        <Grid.Column computer={2} only='computer'>
            <Icon name='facebook' inverted size='big' style={{ paddingTop:5 }}/>
            <Icon name='linkedin' inverted size='big'style={{ paddingTop:5 }}/>
            <Icon name='youtube' inverted size='big' style={{ paddingTop:5 }}/>

        </Grid.Column>

        </Grid.Row>
    </Grid>
   
            


      <style jsx>{`
      .header{
        background-color: #1e90ff;

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
