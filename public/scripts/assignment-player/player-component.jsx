'use strict';

var ReactLabel = require('../common-modules/common-label.jsx');
var ReactBox = require('../common-modules/common-textbox.jsx');

var MsPlayer = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Inside the MsPlayer Component</h1>
                <ReactLabel label="Hi from common lable component"/>
                <ReactBox intialVal="text of common text box component"/>
            </div>
        );
    }
});

ReactDOM.render(<MsPlayer />, document.getElementById('assignment-player'));