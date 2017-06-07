import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    static defaultProps = {
        children: '<p />'
    }

    render() {
        const { children } = this.props;

        return (
            <button {...this.props}>
                {children}
            </button>
        );
    }
}

export default Button;
