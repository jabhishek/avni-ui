import * as React from 'react';

// simulate dark mode in a story
export const DarkMode = ({ children }: { children: React.ReactElement<any> }) => {
  return (
    <div
      css={{
        backgroundColor: '#111',
        padding: 40,
      }}
    >
      {React.Children.map(children, (child: React.ReactElement<any>) => {
        return child
          ? React.cloneElement(child, {
              darkMode: true,
            })
          : null;
      })}
    </div>
  );
};
