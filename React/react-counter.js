import './App.css';
import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        //Chỉ định một state
        this.state = { year: 2021 };
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Year {this.state.year}</h1>
                    <button onClick={() => {
                        this.setState({
                            year: this.state.year - 1
                        })
                    }}
                    >Giam</button>
                    <button onClick={() => {
                        this.setState({
                            year: this.state.year + 1
                        })
                    }}>Tang</button>
                </header>
            </div>
        );
    }
}
export default App;
