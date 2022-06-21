import React from 'react';
import Header from '../components/Header';
import Feature from '../components/Feature';
import Category from '../components/Category';
import { Route, Switch } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CartFeature from '../components/Feature/ProductFeature/components/Cart';

function Home(props) {
    return (
        <div>
            <Header />
            <Category />
            <Banner />

            <Switch>
                <Route path="/" component={Feature} />
            </Switch>
            <Footer />
        </div>
    );
}

export default Home;
