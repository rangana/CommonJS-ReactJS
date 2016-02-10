'use strict';

var ReactLabel = React.createClass({
    render: function () {
        return (
            <h1>{this.props.label}</h1>
        )
    }
});

module.exports = ReactLabel;