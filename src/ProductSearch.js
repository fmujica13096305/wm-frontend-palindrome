import React, { Component } from "react";
import classes from './ProductSearch.css';

class ProductDisplay extends Component {
    render() {
        let offertDiv = <>
            <ul>
                <div><h3 id="onSaleID"> Precio Oferta  : &#36; {this.props.product.onSalePrice}</h3><img class="to-go" src="https://lh3.googleusercontent.com/proxy/PF-3ol3bkGfufjybg2zHymCLb0tF58ydDosymbrfsFE25oOkShyjbitSQFqQtiWE_7VMa_xXLXNkaxyRV-dbO4WmZrX2RFggsYuiC9fWS0SwU6o6fjZ5nHGTyitTTQbG" alt="product"/></div>
            </ul>
            <ul>
                <div><strike><h3> Precio Original: &#36; {this.props.product.price}</h3></strike></div>
            </ul>
        </>;
        let normalPriceDic = <>
            <div> Precio : {this.props.product.price}</div>
        </>;
        let div = <div class="prehome-card">
            {this.getProductTitle()}
            {this.getProductImage()}

            {(this.props.product.onSalePrice === this.props.product.price) ?
                normalPriceDic
                :
                offertDiv}
        </div>;
        return div;
    }

    getProductImage() {
        return <img class="mine-mine" src={`http://${this.props.product.image}`} alt="product"/>;
    }

    getProductTitle() {
        return <div><h2>{this.props.product.brand}-{this.props.product.description}</h2></div>;
    }
}



class MainWindow extends Component {
    render() {
        return <div>
            <div class={classes.headerInfo}>
            <table>
                       <tr>
                        <td>
                        <input 
                            name="text"
                            type="text"
                            placeholder="Search"
                            text = "sdd"
                            onChange={this.props.onChange}
                            value={this.props.value}/>
                            </td>
                        <td>
                           <button id="buttonID" class={classes.button} onClick={this.props.onClick}>Find Product</button>
                        </td>
                    </tr>           
          </table>
</div>


 
            {this.props.meals.data ?
                (
                    <div>
                        {this.props.meals.data.map(this.props.prop4)}
                    </div>
                )
                :
                (
                    <table> <p>Please enter a valid product ID , Brand or description</p></table>
                )}
        </div>;
    }
}

class ProductSearch extends Component {
    state = { searchValue: '', meals: []};

    handleOnChange = event => {
        this.setState({searchValue: event.target.value});
    };

    handleSearch = () => {
        console.log("Searching :"+this.state.searchValue);
        this.makeApiCall(this.state.searchValue);
    }

    makeApiCall = searchInput => {
        const url = 'https://rocky-bastion-09181.herokuapp.com/api/v1/products/search';
        //const url = `https://salty-plains-09920.herokuapp.com/api/v1/products/search`;
        var searchUrl = `${url}?query=${searchInput}`;
        
        fetch(searchUrl).then(response => {
            return response.json();
        }).then(jsonData => {
            console.log(jsonData);
            this.setState({ meals: jsonData });
        });
    };


    render() {
        return (
            <MainWindow onChange={event => this.handleOnChange(event)} value={this.state.searchValue}
                        onClick={this.handleSearch} meals={this.state.meals} prop4={(product, index) =>
                <ProductDisplay key={index} product={product}/>}/>
        );
    }
}

export default ProductSearch;