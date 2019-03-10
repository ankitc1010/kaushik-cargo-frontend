import React from 'react';
import { Button, Container } from "semantic-ui-react";
import Head from '../components/head';
import Navbar from "../components/navBar";
import Bg from '../components/bg';
import Footer from '../components/footer';
import Cards from '../components/cardCollection';




const HomePage = () => (
    <div className="myDiv">
        <Head title="Home Page"></Head>
        <Navbar />
        <Bg />
        <Cards />
        <Footer />

        <style jsx>
            {`
            
            .myDiv{
                display: flex;
                flex-direction: column;
            }
            `}</style>
    </div>
);


export default HomePage;