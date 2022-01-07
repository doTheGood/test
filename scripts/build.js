// from material UI

const childProcess = require('child_process');
const path = require('path');
const { promisify } = require('util');
const yargs = require('yargs');

const exec = promisify(childProcess.exec);

async function run() {
  const verbose = true;

  const env = {
    NODE_ENV: 'production',
    PATH: process.env.PATH,
  };
  const babelConfigPath = path.resolve(__dirname, '../babel.config.json');
  const srcDir = path.resolve('./src');
  const outDir = path.resolve('./dist');

  const command = [
    'yarn babel',
    '--config-file',
    babelConfigPath,
    '--extensions',
    '".tsx",".ts"',
    srcDir,
    '--out-dir',
    outDir,
    '--ignore',
    '"**/*.test.js","**/*.spec.ts","**/*.d.ts","**/*.stories.tsx","**/*classnames.gen.ts","**/*classnames.ts"',
    '--copy-files',
    '--no-copy-ignored',
  ].join(' ');

  if (verbose) {
    console.log('cleaning out directory');
  }
  // TODO: after git backup done
  // await exec(`rm -rf ${outDir}`);

  if (verbose) {
    console.log(`running '${command}' with ${JSON.stringify(env)}`);
  }

  const { stderr, stdout } = await exec(command, {
    env: { ...process.env, ...env },
  });
  if (stderr) {
    throw new Error(`'${command}' failed with \n${stderr}`);
  }

  if (verbose) {
    console.log(stdout);
  }
}

yargs
  .command({
    command: '$0',
    description: 'build package',
    handler: run,
  })
  .help()
  .strict(true)
  .version(false)
  .parse();
