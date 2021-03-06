import React from "react";
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar'

export default function Home() {
    return <div>
    <Navbar />
        <img src='images/beers.png' alt='All Beers'/>
        <Link to='/beers'>All Beers</Link>
        <img src='images/random-beer.png' alt='Ranom Beer'/>
        <Link to='/random-beer'>Random Beer</Link>
        <img src='images/new-beer.png' alt='New Beer'/>
        <Link to='/new-beer'>New Beer</Link>
    </div>;
}
