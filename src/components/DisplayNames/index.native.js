import React from 'react';
import {propTypes, defaultProps} from './displayNamesPropTypes';
import Text from '../Text';

// As we don't have to show tooltips of the Native platform so we simply render the full display names list.
function DisplayNames(props) {
    return (
        <Text
            aria-label={props.accessibilityLabel}
            style={props.textStyles}
            numberOfLines={props.numberOfLines || undefined}
        >
            {props.fullTitle}
        </Text>
    );
}

DisplayNames.propTypes = propTypes;
DisplayNames.defaultProps = defaultProps;
DisplayNames.displayName = 'DisplayNames';

export default DisplayNames;
