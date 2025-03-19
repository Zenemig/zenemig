import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'jotai';
import userEvent from '@testing-library/user-event';
import getTheme from '@/theme';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <ThemeProvider theme={getTheme('light')}>
        {children}
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

const setupUserEvent = () => userEvent.setup();

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, setupUserEvent }; 