import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container-fluid'>
            <Banner></Banner>
            <Services></Services>
            <CustomerReviews></CustomerReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;