import React from 'react';

export const Head = (props) => {
  React.useEffect(() => {
    document.title = `E-Commerce | ${props.title}`;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description);
  }, [props]);
  return <></>;
};
