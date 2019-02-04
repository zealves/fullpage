import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FullPage from './fullpage.js'

class App extends Component {

    onChange = (val) => {
        console.log('currentValue', val)
    }

    saveItems = (items) => {
        console.log('saveItems', items)
    }

    render() {
        return (
            <div className="App">
                <FullPage>
                    <div orientation={'vertical'} className={'fullpage'} style={{ backgroundColor: 'seagreen' }}>
                        <h1>1</h1>
                    </div>
                    <div orientation={'horizontal'} className={'fullpage'} style={{ backgroundColor: 'red' }}>
                        <h1>2</h1>
                    </div>
                    <div orientation={'horizontal'} className={'fullpage'} style={{ backgroundColor: 'yellow' }}>
                        <h1>3</h1>
                    </div>
                    <div orientation={'vertical'} className={'fullpage'} style={{ backgroundColor: 'brown' }}>
                        <h1>4</h1>
                    </div>
                    <div orientation={'vertical'} className={'fullpage'} style={{ backgroundColor: 'green' }}>
                        <h1>5</h1>
                    </div>
                    <div orientation={'horizontal'} className={'fullpage'} style={{ backgroundColor: 'pink' }}>
                        <h1>6</h1>
                    </div>
                    <div orientation={'horizontal'} className={'fullpage'} style={{ backgroundColor: 'orange' }}>
                        <h1>7</h1>
                    </div>
                    <div orientation={'horizontal'} className={'fullpage'} style={{ backgroundColor: 'beige' }}>
                        <h1>8</h1>
                    </div>
                    <div orientation={'vertical'} className={'fullpage'} style={{ backgroundColor: 'coral' }}>
                        <h1>9</h1>
                    </div>
                </FullPage>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
