import React, { Component } from 'react';
import Navbar from "../components/navBar";
import Head from '../components/head';
import Footer from '../components/footer';
import SideBar from '../components/sideBar';
import Header from '../components/header';


class AboutProfile extends Component {
    state = {  }
    render() { 
        return (
     <div className="myDiv">
        <Head title="About Us"></Head>
        <Header/>
        <Navbar currentPage={'about us'}/>
            <SideBar />

        <style jsx>
            {`
            
            
            `}</style>
    </div>
          );
    }
}
 
export default AboutProfile;