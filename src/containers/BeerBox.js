import BeerList from "../components/BeerList";
import SelectedBeer from "../components/SelectedBeer";
import React, { useState, useEffect } from 'react';


const BeerBox = () => {

    const [beer, setBeer] = useState([])
    const [selectedBeer, setSelectedBeer] = useState('')

    useEffect(() => {
        fetchBeer()
    },[])

    const fetchBeer = function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(data => setBeer(data))
    }

    const beerChoice = function(beerName){
        const foundBeer = beer.find((singlebeer) => beerName === singlebeer.name )
        setSelectedBeer(foundBeer)
    }

    return ( 
        <>
            <h2>BeerBox</h2> 
            <BeerList beers = {beer} beerChoice = {beerChoice} ></BeerList>
            <SelectedBeer selectedBeer = {selectedBeer}></SelectedBeer>
        </>
    );
}
 
export default BeerBox;
