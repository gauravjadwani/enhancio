import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Maincomponent from "./components/Maincomponent";
import { connect } from 'react-redux';
import { getRepoList } from './actions';
class App extends React.Component{
  constructor(props){
    super(props);
    this.props.getRepoList();
    console.log('fef',this.props)
  }
  render(){
    return(
      <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
         </div>
         <div className="col-md-4">
        <Maincomponent/>
         </div>
         <div className="col-md-4">
         </div>
         </div>
      </div>
     </div>
    )
  }
}
// export default App;

const mapStatetoProps = ({ Maincomponent }) => {
  const {
    repoData
  } = Maincomponent;
  return {
    repoData
  };
};

export default connect(
  mapStatetoProps,
  {
    getRepoList
  },
)(App);
