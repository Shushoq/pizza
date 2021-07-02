import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'

import { setPizzas } from './redux/actions/pizzas'

// const App = () => {
//   const [pizzas, setPizzas] = useState([])

//   useEffect(() => {
// axios.get('./db.json').then(({ data }) => {
//   setPizzas(data.pizzas)
// })
//   }, [])

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path="/" exact render={() => <Home items={pizzas} />} />
//         <Route path="/cart" exact component={Cart} />
//       </div>
//     </div>
//   )
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('./db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            path="/"
            exact
            render={() => <Home items={this.props.items} />}
          />
          <Route path="/cart" exact component={Cart} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
