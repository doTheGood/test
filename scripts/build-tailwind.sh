rm -Rf dist-tailwind
mkdir dist-tailwind

yarn run generate

cp -R src/* dist-tailwind/

mkdir dist-tailwind/tailwind
mkdir dist-tailwind/tailwind/util

cp tailwind.config.js dist-tailwind/tailwind/index.js
cp util/tw* dist-tailwind/tailwind/util

cat <<EOF >dist-tailwind/package.json
{
  "name": "@tag/ds-tailwind",
  "version": "0.1.0",
  "private": true,
  "main": "./index.ts",
  "types": "./index.ts",
  "peerDependencies": {
    "@material-ui/core": "4.12.3",
    "@material-ui/icons": "4.11.2",
    "@material-ui/lab": "4.0.0-alpha.60",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
EOF
