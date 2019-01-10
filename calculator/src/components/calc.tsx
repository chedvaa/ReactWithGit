import *as React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";

class CalcComponent extends React.Component {


    public render() {
        return (
            <div>
                <input/>&nbsp<input/>
                <br/><br/>
                <input type={"button"} value={"+"} onClick={}/>&nbsp
                <input type={"button"} value={"-"} onClick={}/>&nbsp
                <input type={"button"} value={"/"} onClick={}/>&nbsp
                <input type={"button"} value={"*"} onClick={}/>&nbsp
            </div>
        );
    }


}

const mapStateToProps = (state: any) => {
      return null;
}

const mapDispatchToProps = (dispatch: Dispatch) => {

}

export default connect(mapStateToProps,mapDispatchToProps)(CalcComponent);




