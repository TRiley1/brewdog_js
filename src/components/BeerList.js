import Beer from "./Beer";

const BeerList = ({beers, beerChoice}) => {

    const beerNodes = beers.map((beer, index) => {
        return(
            <Beer  beer = {beer} index = {index} key = {index} beerChoice = {beerChoice}></Beer>
        )
    })


    return ( 
        <>
            <h3>BeerList</h3>
            {beerNodes}
        </>
     );
}
 
export default BeerList;