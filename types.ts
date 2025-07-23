import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  highlighted: boolean;
  image?: string;
}