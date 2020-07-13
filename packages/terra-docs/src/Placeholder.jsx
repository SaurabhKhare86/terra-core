import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Placeholder.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The themed variant of the text and border. Example, use the light variant when against a dark background.
   */
  variant: PropTypes.oneOf(['light', 'dark']),
  /**
   * The placeholder text to be displayed.
   */
  title: PropTypes.string,
};

const defaultProps = {
  variant: 'dark',
  title: '',
};

const Placeholder = ({
  variant,
  title,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const placeholderClassNames = classNames(
    cx([
      'placeholder',
      theme.className,
    ]),
    customProps.className,
  );

  const innerClassNames = cx([
    'inner',
    `is-${variant}`,
  ]);

  return (
    <div {...customProps} className={placeholderClassNames}>
      <div className={innerClassNames}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

export default Placeholder;
