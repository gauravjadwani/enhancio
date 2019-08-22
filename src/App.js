import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Maincomponent from "./components/Maincomponent";
import { connect } from 'react-redux';
import { getRepoList } from './actions';
class App extends React.Component{
  constructor(props){
    super(props);
    
    console.log('fef',this.props)
  }
  componentDidMount(){
    let params = (new URL(document.location)).searchParams;
    let location = params.get("location") || 'india';
    this.props.getRepoList(location);
  }
  render(){
    if(this.props.repoData !== ''){
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
    }else if(this.props.repoData === 'INCORRECT_LOCATION'){
      return(
        <div className="App">
       please enter a valid location
       </div>
      )
    }
    return(
      <div className="App">
     loading...
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
