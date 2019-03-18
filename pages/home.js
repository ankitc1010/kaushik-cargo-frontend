import React from 'react';
import { Button, Container } from "semantic-ui-react";
import Head from '../components/head';
import Navbar from "../components/navBar";
import Bg from '../components/bg';
import Footer from '../components/footer';
import Cards from '../components/homePageCards';
import Header from '../components/header';





const HomePage = () => (
    <div className="myDiv">
        <Head title="Home Page"></Head>
        <Header/>
        <Navbar currentPage={'home'}/>
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
