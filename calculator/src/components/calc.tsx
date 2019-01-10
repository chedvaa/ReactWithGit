import *as React from 'react';
// import {connect} from "react-redux";
// import {Dispatch} from "redux";
// import {number} from "prop-types";

interface Istate {
    math:string;
}

class CalcComponent extends React.Component<any,Istate> {

    constructor(props:any){
        super(props);
        this.state={math:""};
        this.change=this.change.bind(this);
    }

    public change(e:any){
        this.setState({math:this.state.math+" "+e.target.value});
    }

    public render() {
        return (
            <div>
                <input id={"num"}>{this.state.math}</input>
                <br/><br/>
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



            </div>
        );
    }


}

// const mapStateToProps = (state: any) => {
//       return null;
// };

// const mapDispatchToProps = (dispatch: Dispatch) => {
//
// };

export default CalcComponent;
// export default connect(mapStateToProps,mapDispatchToProps)(CalcComponent);




