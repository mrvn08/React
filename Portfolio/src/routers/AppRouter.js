import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import PortfolioHome from '../components/PortfolioHome';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PortfolioHome} exact={true}/>
                <Route path="/portfolio" component={Portfolio} exact={true}/>
                <Route name="portfolioitem" path="/portfolio/:item" component={PortfolioItem}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;