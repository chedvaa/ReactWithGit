"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CalcComponent = /** @class */ (function (_super) {
    __extends(CalcComponent, _super);
    function CalcComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { math: "" };
        _this.change = _this.change.bind(_this);
        return _this;
    }
    CalcComponent.prototype.change = function (e) {
        this.setState({ math: this.state.math + " " + e.target.value });
    };
    CalcComponent.prototype.render = function () {
        return (<div>
                <input id={"num"}>{this.state.math}</input>
                <br /><br />
                <table>
                    <tr>
                        <td><input type={"button"} value={"7"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"8"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"9"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"/"} onClick={this.change}/></td>
                    </tr>
                    <tr>
                        <td><input type={"button"} value={"4"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"5"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"6"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"*"} onClick={this.change}/></td>
                    </tr>
                    <tr>
                        <td><input type={"button"} value={"1"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"2"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"3"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"-"} onClick={this.change}/></td>
                    </tr>
                    <tr>
                        <td><input type={"button"} value={"0"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"="} onClick={this.change}/></td>
                        <td><input type={"button"} value={"+"} onClick={this.change}/></td>
                    </tr>
                </table>



            </div>);
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
