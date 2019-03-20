import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { activate, deactivate } from '../redux/actions';

export class Test extends PureComponent {
  static propTypes = {
    /** [Redux] Activate callback. */
    activate: PropTypes.func,
    /** [Redux] Deactivate callback.  */
    deactivate: PropTypes.func,
    /** [Redux] Is component active? */
    isActive: PropTypes.bool,
    /** Label for the component. */
    label: PropTypes.string.isRequired
  };

  static defaultProps = {
    isActive: false
  };

  handleClick = () => {
    const { activate, deactivate, isActive } = this.props;
    isActive
      ? deactivate && deactivate()
      : activate && activate();
  };

  render() {
    const { isActive, label } = this.props;
    return (
      <label>
        {label}
        <input type="checkbox" onChange={this.handleClick} checked={isActive}/>
      </label>
    )
  }
}

const mapStateToProps = state => ({
  isActive: state
});

const mapDispatchToProps = {
  activate,
  deactivate
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
