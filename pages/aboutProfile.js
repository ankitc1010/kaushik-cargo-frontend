import React, { Component } from 'react';
import Navbar from "../components/navBar";
import Head from '../components/head';
import Footer from '../components/footer';
import SideBar from '../components/sideBar';
import Header from '../components/header';
import { Grid,Image } from 'semantic-ui-react';


class AboutProfile extends Component {
    state = {  }
    render() { 
        return (
     <div className="myDiv">
        <Head title="About Us"></Head>
        <Header/>
        <Navbar currentPage={'about us'}/>
        <Grid style={{margin:10}}>
            <Grid.Column computer={4} >
            <SideBar />
            </Grid.Column>
            <Grid.Column computer={12}  tablet={16} mobile={16}>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'className='myimg' />
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 <h1>YOLOLOL</h1>
                 <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Grid.Column>
        </Grid>
        <Footer/>

        <style jsx>
            {`.myimg{
                width:100%;
                height:500px;
            }
            
            
            `}</style>
    </div>
          );
    }
}
 
export default AboutProfile;