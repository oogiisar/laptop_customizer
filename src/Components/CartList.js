import React, { Component } from 'react';
import CartTotal from './CartTotal';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class SummaryList extends Component {

    renderTotal() {
        return (
            <section className="main__summary">
                <CartTotal
                    selected={this.props.selected}
                />
            </section>

        );
    }

    render() {
        const items = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            );

        });

        return (
            <div>
                {items}
                <br />
                {this.renderTotal()}
            </div>
        );
    }
}

export default SummaryList;