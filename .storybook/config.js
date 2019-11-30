import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
addDecorator(withA11y)

// automatically import all files ending in *.stories.js
configure(requireContext('../src', true, /\.stories\.tsx$/), module);
