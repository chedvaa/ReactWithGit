import {types}from './actionTypes'
import {Action, handleActions, Reducer} from "redux-actions";

interface ICalc {
    result:number;
}

const initialSTATE:ICalc={
    result:0
}

export const mainReducer: Reducer<ICalc, any> = handleActions<ICalc, any>({

    [types.CALC_RESULT]: (state: ICalc = initialSTATE, action: Action<any>): ICalc => {
        return {
            ...state, result: {...action.payload}
        };
    },
}, initialSTATE);
export default mainReducer;