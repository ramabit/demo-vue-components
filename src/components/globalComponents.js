import Vue from 'vue';
import upperfirst from 'lodash.upperfirst';
import camelcase from 'lodash.camelcase';

// dynamically require and register components globally
// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  './',
  // Do not look in subdirectories
  false,
  // Only include .vue files
  /[\w-]+\.vue$/,
);

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName);
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
