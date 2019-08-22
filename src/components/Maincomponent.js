import React from 'react';
import CustomItem from './Item';
import { connect } from 'react-redux';
import { getRepoList } from './../actions';
import {  Item } from 'semantic-ui-react'

class Maincomponent extends React.Component{
  render(){
    console.log('himealone',this.props.repoData)
    return(
      <div>
        <Item.Group divided>
        {
          this.props.repoData.map((key,index)=>(
              <CustomItem data={key} key={index}/>
            )
          )
        }
        </Item.Group>
        </div>
    )
  }
}

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
)(Maincomponent);
