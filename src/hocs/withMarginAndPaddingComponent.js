import React from 'react';
import { SPACE } from 'ui/metrics';

function mapStateAndPropsToStyles({
  margin,
  padding,
  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  paddingVertical,
  paddingHorizontal,
  marginVertical,
  marginHorizontal,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
  ...rest
}) {
  const ownStyles = {
    rootStyle: {}
  };
  Object.entries({
    margin,
    padding,
    paddingRight,
    paddingLeft,
    paddingTop,
    paddingBottom,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    marginRight,
    marginLeft,
    marginTop,
    marginBottom
  }).forEach(([key, value]) => {
    if (value) {
      ownStyles.rootStyle[key] = SPACE * +value;
    }
  });

  return ownStyles;
}

function withMarginAndPadding(Component) {
  return function (props) {
    const {
      margin,
      padding,
      paddingRight,
      paddingLeft,
      paddingTop,
      paddingBottom,
      paddingVertical,
      paddingHorizontal,
      marginVertical,
      marginHorizontal,
      marginRight,
      marginLeft,
      marginTop,
      marginBottom,
      ...rest
    } = props;
    const { rootStyle } = mapStateAndPropsToStyles(props);
    return <Component {...rest} marginAndPaddingStyle={rootStyle} />;
  };
}

withMarginAndPadding.displayName = withMarginAndPadding.name;

export default withMarginAndPadding;
