import upperfirst from 'lodash.upperfirst';
import camelcase from 'lodash.camelcase';
import Vue from 'vue';

// dynamically require and register svg icons from folder @/assets/icons as global components
// https://webpack.js.org/guides/dependency-management/#require-context
const requireSvgIcon = require.context(
  // Look for files in the current directory
  '@/assets/icons/',
  // Do not look in subdirectories
  false,
  // Only include "icon-" prefixed .svg files
  /icon-[\w-]+\.svg$/,
);

// For each matching file name...
requireSvgIcon.keys().forEach((fileName) => {
  // Get the component config
  let componentConfig = requireSvgIcon(fileName);
  // componentConfig = componentConfig.split('/')[2];
  // Get the PascalCase version of the component name
  const componentName = upperfirst(
    camelcase(
      fileName
      // Remove the file extension from the end
        .replace(/\.\w+$/, ''),
    ),
  );
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});
