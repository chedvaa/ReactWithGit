import *as React from 'react';
import '../App.css';
import {Dispatch} from "redux";
import {connect} from "react-redux";

interface Istate {
    num2:number;
    num:number;
    inputValue:string;
    opertor:string;
}
interface Idispatch {
    add:(state:Istate)=>void;
    sub:(state:Istate)=>void;
    mul:(state:Istate)=>void;
    div:(state:Istate)=>void;
}

interface IstateProps {
   result:number;
}
type Iprop=Idispatch & IstateProps;
class CalcComponent extends React.Component<Iprop,Istate> {

    constructor(props:Iprop){
        super(props);
        this.state={num2:0,num:0,inputValue:"",opertor:""};
        this.change=this.change.bind(this);
        this.reset=this.reset.bind(this);
        this.calc=this.calc.bind(this);
        this.seeResult=this.seeResult.bind(this);
    }

    public change(e:any){
        this.setState({inputValue:this.state.inputValue+e.target.value});
    }

    public reset(){
        this.setState({inputValue:""});
    }

    public calc(e:any){
        this.setState({opertor:e.target.value,num:+this.state.inputValue,inputValue:this.state.inputValue+e.target.value});
    }

    public seeResult(){
        this.setState({num2:+this.state.inputValue.split(this.state.opertor)[1]});
        switch (this.state.opertor) {
            case '+':this.props.add(this.state);break;
            case '-':this.props.sub(this.state);break;
            case '/':this.props.div(this.state);break;
            case '*':this.props.mul(this.state);break;
        }
        this.setState({inputValue:this.props.result.toString()});
    }

    public render() {
        return (
            <div>
                <table>
                    <thead id={"t"}>
                        <tr id={"t"}>
                            <th onClick={this.reset}><label>x</label></th>
                            <th colSpan={3}><input id={"num"} value={this.state.inputValue}/></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type={"button"} value={"7"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"8"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"9"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"/"} onClick={this.calc}/></td>
                    </tr>
                    <tr>
                        <td><input type={"button"} value={"4"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"5"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"6"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"*"} onClick={this.calc}/></td>
                    </tr>
                    <tr>
                        <td><input type={"button"} value={"1"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"2"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"3"} onClick={this.change}/></td>
                        <td><input type={"button"} value={"-"} onClick={this.calc}/></td>
                    </tr>
                    <tr>
                        <td><input type={"button"} value={"0"} onClick={this.change}/></td>
                        <td colSpan={2}><input id={"equals"} type={"button"} value={"="} onClick={this.seeResult}/></td>
                        <td><input type={"button"} value={"+"} onClick={this.calc}/></td>
                    </tr>
                </tbody>
                </table>



            </div>
        );
    }


}

const mapStateToProps = (state: any) => {
      result:state.result;
};

const mapDispatchToProps = (dispatch: Dispatch): Idispatch=> ({
    add:(state:Istate)=>{
        dispatch({type:'ADD',payload:{num1:state.num,num2:state.num2}})
    },
    sub:(state:Istate)=>{
        dispatch({type:'SUB',payload:{num1:state.num,num2:state.num2}})
    },
    mul:(state:Istate)=>{
        dispatch({type:'MUL',payload:{num1:state.num,num2:state.num2}})
    },
    div:(state:Istate)=>{
        dispatch({type:'DIV',payload:{num1:state.num,num2:state.num2}})
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(CalcComponent);




