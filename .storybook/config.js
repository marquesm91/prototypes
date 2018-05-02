import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/Button');
}

configure(loadStories, module);
