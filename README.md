# The Adecco Group Design System v.01

install dependencies and generate the tailwind typings:

```bash
yarn install
yarn run generate
```

Now you can run storybook in dev mode:

```bash
 yarn run start:dev
```

## Questions (notes)

- Use with tailwind and without, should that be different npm packages?

## Notes on theming:

Possibility: We can have a tailwind.config.base.js with all of the fundamentals ("design tokens"?).
That would be pure colors and e.g. border pixel radius.

We can expose all of these values as css variables by the tailwind-css-variables plugin and then set up a tailwind theme as tailwind.config.theme.js where we have the "human readable" namings.
These namings would be e.g. "primary" or "small" and would just reference css variables. In their default configuration they would be the agnostic theme.

Then a helper like createGlobalStyles from styled-components could set the css variables based on the brand theming. All of these settings (the basic design tokens and the theme specific mapping) should be somehow connected with figma on the long run.

## Next steps:

- Prefix with tag-
- improve the babel config (similar to material ui)
- create a esm bundle
- Export a single css file
- Figure out how to scope the scss component files
- Provide the css in a style provider (that will also be used for theming)
- No idea: how to maintain no prefix for compass?
  - That might break with the theming?
  - the theme provider might need the possibility to set it for prefixed and plain classes
- No way of figuring that out, best way of starting is
  - from scoped/prefixed design components to bundled code
  - bundled code with separate css
  - testing that bundle
  - adding this bundle to compass (not a preferred solution per se, but could work well)

## example apps:

- Using in CRA with material UI (similar TS setup)
- Using in custom tailwind setting (similar to SP setup)
- Potentially showing how to easily add tailwind to CRA to get the same utility classes
