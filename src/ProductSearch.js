import React, { Component } from "react";
import classes from './ProductSearch.css';

class ProductDisplay extends Component {
    render() {
        let offertDiv = <>
            <ul>
                <div><h3> Precio Oferta  : &#36; {this.props.product.onSalePrice}</h3><img class="to-go" src="https://lh3.googleusercontent.com/proxy/PF-3ol3bkGfufjybg2zHymCLb0tF58ydDosymbrfsFE25oOkShyjbitSQFqQtiWE_7VMa_xXLXNkaxyRV-dbO4WmZrX2RFggsYuiC9fWS0SwU6o6fjZ5nHGTyitTTQbG" alt="product"/></div>
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




export default ProductSearch;