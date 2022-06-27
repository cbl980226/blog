import * as NextImage from 'next/image';

import '../pages/styles.css';

export const parameters = {
  controls: {
    expanded: true,
  },
};

// https://storybook.js.org/blog/get-started-with-storybook-and-next-js/
const OriginalNextImage = NextImage.default;

// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
