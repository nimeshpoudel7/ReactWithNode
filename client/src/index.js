import  ReactDOM from 'react-dom';
import React from 'react'
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'

const store= createStore(()=>[],{},applyMiddleware())
ReactDOM.render(
<Provider store={store}>
     <App/>
</Provider>
,document.getElementById('root')
)
