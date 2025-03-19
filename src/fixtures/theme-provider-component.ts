import React from 'react';
import { ReactNode } from 'react';

/**
 * Test fixtures for ThemeProvider component
 * Only includes props and data relevant to our implemented code
 */
export const themeProviderFixtures = {
  // Basic props with a simple text child
  allProps: {
    children: 'Test Child' as ReactNode
  },
  
  // Edge case with null children
  minimalProps: {
    children: null as ReactNode
  },
  
  // Edge case with multiple children
  multipleChildren: {
    children: [
      React.createElement('div', {
        key: 'child-1',
        'data-testid': 'test-child-1'
      }, 'Child 1'),
      React.createElement('div', {
        key: 'child-2',
        'data-testid': 'test-child-2'
      }, 'Child 2')
    ] as ReactNode
  }
}; 