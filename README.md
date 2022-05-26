# @digital-plant/zyfra-components

## Setup components library

Run command in your Angular project:

```
ng add @digital-plant/zyfra-ui
```

## Contributing

Getting start:

Install globally `npm i -g nx`

Start develop, serve dev `npm run start`

### Add component to @digital-plant/zyfra-components

For example button component

1. Generate the module, component and add story

```
   > nx generate @nrwl/angular:module zyfra-message --project=components
   > nx generate @nrwl/angular:component zyfra-message --project=components
   > nx generate @nrwl/angular:stories components (opt "false" as an answer)
```
2. Add styles for component (by default ViewEncapsulation.None) to root styles (`libs/components/src/styles.less`)

styles.less:
```less
@import "../lib/button/zyfra-button.component.less";

```

And remove from Component declaration `zyfra-button.component`

```ts
@Component({
  selector: 'zyfra-button',
  templateUrl: './button.component.html',
  // styleUrls: ['./button.component.less'], remove this
  changeDetection: ChangeDetectionStrategy.OnPush,
})
```

3. Add to publish export modules (`libs/components/index.ts`)

```ts
export * from './lib/button';


```

### Commands

- Components: 
  - Rebuild component docs `nx run components:doc`
  - Build prod `nx run components:build`
  - Schematic build `nx run schematics:build`
- Icons:
  - Rebuild icons `nx run components:build-icons`
- Translate
  - Build `nx affected:build --files=libs/translate/src/index.ts`


---------


### Troubleshoot

If copy command `cp` not working in your OS platform, try run manually 

```
   "cp ./libs/schematics/src/collection.json ./dist/libs/schematics/src/collection.json",
   "cp ./libs/schematics/src/ng-add/schema.json ./dist/libs/schematics/src/ng-add/schema.json"
```

### Update package version

Path's for update lib info:

- `libs/components/package.json`
- `libs/schematics/package.json`
- `libs/schematics/src/ng-add/consts.ts`


#### Other info

> For more info [Readme nx guide](README_NX.md)


For specific styles on storybook, use `./storybook/preview-head.html`
