const { DependContainer } = require('./node_modules/miniapp-shaking');
const path = require('path');

const options = {
  sourceDir: path.join(__dirname, 'src'),
  targetDir: path.join(__dirname, 'dist'),
  analyseDir: path.join(__dirname, 'analyse'),
  isSplitNpm: true,
  groupName: 'groupA',
  needDeleteGroupCode: true,
  needCustomTabBar: false,
  excludeFiles: ['package-lock.json', 'package.json'],
};

const instance = new DependContainer(options);
instance.init().catch(err => console.error(err));
