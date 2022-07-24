import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
//    static contextType = LanguageContext;

  render(){
    // const text = this.context === 'english'? 'Submit': 'Vooleggen';
    return (
      // <button className='ui button primary'>{text}</button>
      <ColorContext.Consumer>
      {(color) => (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {(value) => (value.language === "english" ? "Submit" : "Vooleggen")}
          </LanguageContext.Consumer>
        </button>
      )}
      
      </ColorContext.Consumer>
    );
  }
}

export default Button