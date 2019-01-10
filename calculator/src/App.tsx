import * as React from 'react';
import Calc from './components/calc';

// import './App.css';


class App extends React.Component <any,any>{
    constructor(props:any) {
        super(props);
    }

    public render() {
        return (
            <div className="jumbotron">
                <header>
                    <h1>Calculator</h1>
                </header>
                <Calc/>
            </div>
        );

    }
}

export default App;