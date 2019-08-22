import React from 'react';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react';

// const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

 const CustomItems = (props) => 
 {
     console.log('CustomItems',props)
 return (
      <Item>
        <Item.Image size="tiny" src={props.data.owner.avatar_url}/>
  
        <Item.Content>
          <Item.Meta>
            <a href={props.data.owner.html_url} target='_blank'><span className='RepoOwnerName'>{props.data.name}</span></a>
            <span className='cinema'>{props.data.full_name}</span>
          </Item.Meta>
          <Item.Description>{props.data.description}</Item.Description>
          <Item.Extra>
            <span>{props.data.stargazers_count} <i className="star icon"></i></span>
            <span>{props.data.forks_count} <i className="fa fa-code-fork"></i></span>
          </Item.Extra>
        </Item.Content>
      </Item>
  );
 }
  export default CustomItems;