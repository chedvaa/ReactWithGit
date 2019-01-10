"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var calc_1 = require("./components/calc");
require("./App.css");
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "jumbotron" },
            React.createElement("header", null,
                React.createElement("h1", null, "Calculator")),
            React.createElement(calc_1.default, null)));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map