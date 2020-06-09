import React from 'react'
import ReactDOM from 'react-dom'
import '../styles.scss'

const Index = () => {
    return (
        <div>
        <h1>Hello world from React!</h1>
        <img src="../img/logo-on-white-bg.png"/>
        <h2>Testing env variable: {process.env.API_BASE}</h2>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"))