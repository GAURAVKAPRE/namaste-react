import ItemList from "./ItemList";
const RestroCategory =({data}) =>{
   
    return <div>
        {/* {header} */}
        <div>
            <span>{data.title } {data.itemCards.length}</span>
           
        </div>
        {/* {Accoodian Body} */}

        <ItemList items={data.itemCards}/>
    </div>
}



export default RestroCategory ;