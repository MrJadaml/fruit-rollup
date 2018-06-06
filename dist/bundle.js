import React from 'react';

var objectDestructuringEmpty = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};

var Bob = function Bob(_ref) {
  objectDestructuringEmpty(_ref);

  return React.createElement(
    'h1',
    null,
    'I\'m a local'
  );
};

export { Bob };
