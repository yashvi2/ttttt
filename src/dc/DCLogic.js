import React from 'react';
import { injectScreenAssets } from './styles.js';

/**
 * Base class for every screen's behaviour.
 *
 * A screen is a React class component whose `renderVals()` returns the values
 * its template renders against (merged over its props), exactly like the
 * design source. `defineScreen()` attaches the template, styles and name.
 */
export class DCLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /** The flat object the template renders against (merged over props). */
  renderVals() {
    return {};
  }

  render() {
    const screen = this.constructor;
    injectScreenAssets(screen);
    const vals = { ...this.props, ...(this.renderVals() || {}) };
    return React.createElement(
      'div',
      { className: 'sc-host', 'data-sc-name': screen.screenName },
      screen.template(vals),
    );
  }
}
