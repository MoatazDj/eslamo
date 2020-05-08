import React from 'react';
import './statesSelect.css';

class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotionalStates: ['angry', 'sick', 'stuck', 'scared']
    }
  }

  getVerses(event) {
    event.preventDefault();
    console.log(`fetching verse for ${event.target.innerHTML}`);
  }
  render() {
    return (
      <div className='states'>
        {
          this.state.emotionalStates.map((emotionalState, index) => {
            return (
              <div className='state' key={index} onClick={this.getVerses}>
                {emotionalState}
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default States;