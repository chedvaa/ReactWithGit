// import {types}from './actionTypes'
// import {Action, handleActions, Reducer} from "redux-actions";
//
// interface ICalc {
//     result:number;
// }
//
// const initialSTATE:ICalc={
//     result:0
// }
//
// export const mainReducer: Reducer<ICalc, any> = handleActions<ICalc, any>({
//
//     [types.ADD_RESULT]: (state: ICalc = initialSTATE, action: Action<any>): ICalc => {
//         return {
//             ...state, result: {...(action.payload.Num1+action.payload.Num2)}
//         };
//     },
//     [types.SUB_RESULT]: (state: ICalc = initialSTATE, action: Action<any>): ICalc => {
//         return {
//             ...state, result: {...(action.payload.Num1-action.payload.Num2)}
//         };
//     },
//     [types.MUL_RESULT]: (state: ICalc = initialSTATE, action: Action<any>): ICalc => {
//         return {
//             ...state, result: {...(action.payload.Num1+action.payload.Num2)}
//         };
//     },
//     [types.DIV_RESULT]: (state: ICalc = initialSTATE, action: Action<any>): ICalc => {
//         return {
//             ...state, result: {...(action.payload.Num1+action.payload.Num2)}
//         };
//     },
// }, initialSTATE);
// export default mainReducer;