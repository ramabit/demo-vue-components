// require context
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();

// add global components
import './../src/components/globalComponents';

// add mock of fetch() function for jest
require('jest-fetch-mock').enableMocks()
