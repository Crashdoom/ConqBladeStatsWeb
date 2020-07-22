import React from 'react';

interface Props {
  diff: number;
}

export const StatusDiff: React.FunctionComponent<Props> = ({ diff }) => {
  if (diff === 0) {
    return (
      <div className='status-trend text-dark'>
        <span className='material-icons text-secondary'>trending_flat</span> 0
      </div>
    );
  }
  
  if (!diff) {
    return null;
  }

  return (
    <div className='status-trend text-dark'>
      {diff > 0 ? (
        <><span className='material-icons text-success'>trending_up</span> {diff}</>
      ) : (
        <><span className='material-icons text-danger'>trending_down</span> {diff}</>
      )}
    </div>
  );
};