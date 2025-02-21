'use client';
import React, { ReactNode, useMemo } from 'react';
import classnames from 'classnames';

const renderGradientColor = (
  onBackground: 'primary' | 'secondary' | 'tertiary' | 'quaternary',
) => {
  switch (onBackground) {
    case 'primary':
      return 'bg-gradient-to-r from-transparent via-color-content-8 to-transparent';
    case 'secondary':
      return 'bg-gradient-to-r from-transparent via-color-content-7 to-transparent';
    case 'tertiary':
      return 'bg-gradient-to-r from-transparent via-color-content-6 to-transparent';
    case 'quaternary':
      return 'bg-gradient-to-r from-transparent via-color-content-5 to-transparent';
  }
};

const Skeleton = ({
  className,

  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={classnames(
        'bg-color-content-9 relative overflow-hidden',
        className,
      )}
    >
      <div className="2s linear infinite animate-skeletonLoader via-color-content-8 absolute inset-0 w-full bg-gradient-to-r from-transparent to-transparent transition" />
      {children}
    </div>
  );
};

export default Skeleton;
