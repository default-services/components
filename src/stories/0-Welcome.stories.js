import React from 'react';

const Welcome = () => {
  return (
    <div style={ { padding: '1rem 2rem' } }>
      <h1>Default component Storybook</h1>
      <p>This is a UI component dev environment for Default component library.</p>

      <section style={{ marginLeft: '.75rem' }}>
        <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Component To-Do:</h5>
        <ol>
          <li>Create loading component.</li>
          <li>Create card component.</li>
          <li>Create 404 page component.</li>
          <li>Update pagination component (for 10+ pages).</li>
        </ol>
      </section>
    </div>
  );
};

export default {
  title: 'Welcome',
  component: Welcome
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'to the Default Storybook'
};