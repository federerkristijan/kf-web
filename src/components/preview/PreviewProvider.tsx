'use client';

import { LiveQueryProvider } from '@sanity/preview-kit';
import { client } from '../../lib/sanity.client';
import React from 'react';

interface PreviewProviderProps {
  children: React.ReactNode;
  token: string;
}

export default function PreviewProvider({ children, token }: PreviewProviderProps) {
  if (!token) throw new TypeError('Missing token');
  return (
    <LiveQueryProvider client={client} token={token}>
      {children}
    </LiveQueryProvider>
  );
}
