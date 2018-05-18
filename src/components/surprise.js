import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          gif: false
        };
    }

    displayGif(display){
      this.setState({
        gif: {display}
      });
    }

    render() {
        // Show the button to start with
        if(this.state.gif){
          return <SurpriseImage />
        }
        else{
        return <SurpriseButton onButtonClick={ gif => this.displayGif(gif)}/>;
      }
    }
}
