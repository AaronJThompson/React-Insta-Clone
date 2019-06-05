import React from 'react';

export default function withAuthentication(Component, Login) {
    return class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                loggedIn: false,
            }
        }

        updateAuthentication= () => {
            if (localStorage.getItem('user')) {
                this.setState({loggedIn: true});
            }
        }

        componentDidMount() {
            if (localStorage.getItem('user')) {
                this.setState({loggedIn: true});
            }
        }

        render() {
            if (this.state.loggedIn)
                return <Component {...this.props} />;
            return <Login updateAuth={this.updateAuthentication}/>;
        }
    }
}