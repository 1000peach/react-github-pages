import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {backgroundColor: 'transparent', textColor: '#c8dbc8'};
    this.isSelected = this.isSelected.bind(this);
  }

  isSelected = () => {
    this.setState({
      backgroundColor: 'transparent',
      textColor: 'white'
    });
  }

  render() {
    return (
      <Div>
        <div>
          <Logo>yENGINEER</Logo>
        </div>
        <div>
          <button style={{backgroundColor: this.state.backgroundColor, color: this.state.textColor}} onClick={this.isSelected}>About</button>
          <Menu>Ability</Menu>
          <Menu>Portfolio</Menu>
          <Menu>Contact</Menu>
        </div>
      </Div>
    )
  }
}

const Div = styled.div`
  background-color: green;
  height: 85px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12.5%;
  padding-right: 12.5%;
`;

const Logo = styled.button`
  color: white;
  background-color: transparent;

  font-size: 25px;
  font-family: Roboto;
  font-weight: bold;
  letter-spacing: 3px;
  
  border-style: none;
  outline: none;
  cursor: pointer;
`;

const Menu = styled.button`
  color: #c8dbc8;
  &:hover {
    color: white;
  }
  background-color: transparent;

  font-size: 15px;
  font-family: Arial;

  margin-left: 30px;
  border-style: none;
  outline: none;
  cursor: pointer;
`;

export default Header;
