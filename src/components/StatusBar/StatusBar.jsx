import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StatusItem, StatusItemHeader, StatusItemValue } from './StatusBar.styles.js';
const StatusBar = ({ statuses, isFooter }) => {
  const isSmallFont = statuses.length > 3;

  return (
    <Wrapper isFooter={isFooter}>
      { statuses.map((statusItem, key) => (
        <StatusItem key={key}>
          <StatusItemHeader underline small>
            <span>{ statusItem.title }</span>
            <span> { statusItem.subtitle }</span>
          </StatusItemHeader>

          <StatusItemValue isSmallFont={isSmallFont}>
            { statusItem.value }
          </StatusItemValue>
        </StatusItem>
      ))}
    </Wrapper>
  );
};

StatusBar.propTypes = {
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      subtitle: PropTypes.node,
      value: PropTypes.node.isRequired,
    })
  ).isRequired,
  isFooter: PropTypes.bool,
};

export default StatusBar;
