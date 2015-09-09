import CSSModules from 'react-css-modules';
import styles from './test.css';
import React from 'react';

@CSSModules(styles)
export default class Test extends React.Component {
	render() {
	    return <div styleName="testStyle">Hello world!</div>
  	}
}