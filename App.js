import React from 'react'
import PageChange from './src/components/PageChange';
import { Provider, connect } from 'react-redux';
import { getFooterLink } from "./src/redux/selectors";
import {store} from './src/redux'

const App = ({ page }) => {
  console.log(page)
  return (
    <Provider store={store}>
      <PageChange />
    </Provider>
  )
}

// const mapStateToProps = () => {
//   const page = getFooterLink();
//   return { page };
// }

// export default connect(mapStateToProps)(App)
export default App;