import React, { Component } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

class TawkMessenger extends Component {
  render() {
    return (
      <TawkMessengerReact propertyId='<property_id>' widgetId='<widget_id>' />
    );
  }
}
export default TawkMessenger;