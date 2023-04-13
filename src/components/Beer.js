const Beer = ({beer, index, beerChoice}) => {

    const handleClick = (beerName) => {
        beerChoice(beerName)
    }


    return ( 
        <>
            <h3 onClick = {() => handleClick(beer.name)} >{index +1} {beer.name}</h3>
        </>
     );
}
 
export default Beer;