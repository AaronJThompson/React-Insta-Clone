import React from 'react';

export default function withAuthentication(Component) {
    return class extends React.Component {
        render() {
            return <Component {...this.props} />;
        }
    }
}