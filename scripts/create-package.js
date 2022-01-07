// from material UI

const childProcess = require('child_process');
const path = require('path');
const { promisify } = require('util');
const fs = require('fs');

const exec = promisify(childProcess.exec);

async function run() {
  const verbose = true;

  const outDir = path.resolve('./dist');

  if (verbose) {
    console.log('cleaning out directory');
  }

  await exec(`rm -rf ${outDir}`);

  const buildCommand = 'yarn run build:ds';

  if (verbose) {
    console.log(`running '${buildCommand}'`);
  }

  const { stdout } = await exec(buildCommand);

  // if (stderr) {
  //   throw new Error(`'${buildCommand}' failed with \n${stderr}`);
  // }

  if (verbose) {
    console.log(stdout);
  }

  const packageJson = {
    main: 'index.js',
    types: 'index.d.ts',
    name: '@tag/design-system',
    version: '0.0.1',
  };
  fs.writeFileSync(
    path.join(outDir, 'package.json'),
    JSON.stringify(packageJson, null, 2),
  );

  const tailwindFolder = path.join(outDir, 'tailwind');
  await exec(`mkdir ${tailwindFolder}`);
  await exec(`cp tailwind.config.js ${tailwindFolder}/index.js`);
  await exec(`mkdir ${tailwindFolder}/util`);
  await exec(`cp util/tw*.js ${tailwindFolder}/util/`);
}

run();
