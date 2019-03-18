import React, { Component } from 'react';

import Navbar from "../components/navBar";
import Head from '../components/head';
import ContactForms from '../components/contactForms'
import ContactCards from '../components/contactPageCards';
import Footer from '../components/footer';
import Header from '../components/header';



class ContactPage extends Component {
    constructor(props){
        super(props);

    }
    state = { }
    render() { 
        
        return ( 
            <div>

                
                <Head title="Contact Page"></Head>
                <Header/>
                <Navbar currentPage={'contact us'}/>
                <ContactForms/>
                <ContactCards/>
                <Footer/>

            <style jsx>
            {`
            
            `
            }</style>
            </div>
         );
    }
}
 
export default ContactPage;