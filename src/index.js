import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export class Row extends Component{

    render() {

        const { type, className, ...others } = this.props;

        const classes = classNames({
            row                         :   true,
            [`${type}`]                 :   type,
            [className]                 :   className
        })

        return (
            <div {...others} className={classes}>{ this.props.children }</div>
        )
    }

}

export class Col extends Component{

    render() {

        const { width, className, ...others } = this.props;
        
        const classes = classNames({
            col                         :   true,
            [`${width}`]                :   width,
            [className]                 :   className
        })
        
        return (
            <div {...others} className={classes}>{ this.props.children }</div>
        )
    }
}

Col.propTypes = {
    width       :   React.PropTypes.string,
    className   :   React.PropTypes.string,
    children    :   React.PropTypes.node
}

Row.propTypes = {
    type        :   React.PropTypes.string,
    className   :   React.PropTypes.string,
    children    :   React.PropTypes.node
}