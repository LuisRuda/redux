import React, { Component } from 'react'

// responsável por atualizar nossos componentes quando houver atualização no state 
import { Provider } from 'react-redux'

import store from './store'

import Todolist from './components/Todolist'
import Counter from './components/Counter'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Todolist />
                    <Counter />
                </div>
            </Provider>
        )
    }
}
