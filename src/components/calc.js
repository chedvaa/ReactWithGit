"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
// import {connect} from "react-redux";
// import {Dispatch} from "redux";
// import {number} from "prop-types";
require("../App.css");
var CalcComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CalcComponent, _super);
    function CalcComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { math: "" };
        _this.change = _this.change.bind(_this);
        _this.reset = _this.reset.bind(_this);
        return _this;
    }
    CalcComponent.prototype.change = function (e) {
        this.setState({ math: this.state.math + e.target.value });
    };
    CalcComponent.prototype.reset = function () {
        this.setState({ math: "" });
    };
    CalcComponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("table", null,
                React.createElement("thead", { id: "t" },
                    React.createElement("tr", { id: "t" },
                        React.createElement("th", { onClick: this.reset },
                            React.createElement("label", null, "x")),
                        React.createElement("th", { colSpan: 3 },
                            React.createElement("input", { id: "num", value: this.state.math })))),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "7", onClick: this.change })),
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "8", onClick: this.change })),
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "9", onClick: this.change })),
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "/", onClick: this.change }))),
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "4", onClick: this.change })),
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "5", onClick: this.change })),
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "6", onClick: this.change })),
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "*", onClick: this.change }))),
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "1", onClick: this.change })),
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "2", onClick: this.change })),
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "3", onClick: this.change })),
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "-", onClick: this.change }))),
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "0", onClick: this.change })),
                        React.createElement("td", { colSpan: 2 },
                            React.createElement("input", { id: "equals", type: "button", value: "=", onClick: this.change })),
                        React.createElement("td", null,
                            React.createElement("input", { type: "button", value: "+", onClick: this.change })))))));
    };
    return CalcComponent;
}(React.Component));
// const mapStateToProps = (state: any) => {
//       return null;
// };
// const mapDispatchToProps = (dispatch: Dispatch) => {
//
// };
exports.default = CalcComponent;
// export default connect(mapStateToProps,mapDispatchToProps)(CalcComponent);
//# sourceMappingURL=calc.js.map