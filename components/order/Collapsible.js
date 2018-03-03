import React, {Component} from 'react';
import Accordion from 'react-native-collapsible/Accordion';

class Collapsible extends Component {

  renderHeader = () => {
    return (
      <Text>Header</Text>
    )
  }

  renderContent = () => {
    return (
      <Text>Content</Text>
    )
  }

  render() {
    return (
      <Accordion
        sections={['Section 1', 'Section 2', 'Section 3']}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
      />
    );
  }
}

export default Collapsible;
