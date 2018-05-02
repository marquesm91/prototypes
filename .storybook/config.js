import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/Button');
  require('../src/stories/Input');
  require('../src/stories/Card');
}

configure(loadStories, module);
