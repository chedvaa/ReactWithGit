import {types}from './actionTypes'
import {Action, handleActions, Reducer} from "redux-actions";

interface ICalc {
    result:number;
}

const initialSTATE:ICalc={
    result:0
}

export const mainReducer: Reducer<ICalc, any> = handleActions<ICalc, any>({

    [types.ADD_RESULT]: (state: ICalc = initialSTATE, action: Action<any>): ICalc => {
        const num1:number= +action.payload.Num1;
        const num2:number= +action.payload.Num2;
        const h:any=num1+num2;
        return {
            ...state, result: {...h}
        };
    },
    [types.SUB_RESULT]: (state: ICalc = initialSTATE, action: Action<any>): ICalc => {
       const num1:number= +action.payload.Num1;
       const num2:number= +action.payload.Num2;
       const h:any=num1-num2;
        return {
            ...state, result: {...h}
        };
    },
    [types.MUL_RESULT]: (state: ICalc = initialSTATE, action: Action<any>): ICalc => {
        const num1:number= +action.payload.Num1;
        const num2:number= +action.payload.Num2;
        const h:any=num1*num2;
        return {
            ...state, result: {...h}
        };
    },
    [types.DIV_RESULT]: (state: ICalc = initialSTATE, action: Action<any>): ICalc => {
        const num1:number= +action.payload.Num1;
        const num2:number= +action.payload.Num2;
        const h:any=num1/num2;
        return {
            ...state, result: {...h}
        };
    },
}, initialSTATE);
export default mainReducer;