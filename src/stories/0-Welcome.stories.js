import React from 'react';

const Welcome = () => {
  return (
    <div style={ { padding: '1rem 2rem' } }>
      <h1>Default component Storybook</h1>
      <p>This is a UI component dev environment for Default component library.</p>
    </div>
  );
};

export default {
  title: 'Welcome',
  component: Welcome
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'Default Storybook'
};