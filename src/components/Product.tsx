function Product(props){  //{ prod: { id:  ,name:.....}}

    
    //state

    return(
        <div className="card p-3 h-100">
            <img src={props.prod.image} width="170px" height="200px" className="d-block mx-auto" alt="" />
            <div className="card-body">
                <p className="lead fs-3 text-primary">{props.prod.title}</p>
                <p className="lead text-success">{props.prod.price}</p>
            </div>
        </div>  
    )
}


export default Product;