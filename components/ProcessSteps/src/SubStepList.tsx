import React from 'react';

export const SubStepList: React.FC = ({ children }) => {
  return <ol className={'denhaag-process-steps__sub-step-list'}>{children}</ol>;
};

export default SubStepList;