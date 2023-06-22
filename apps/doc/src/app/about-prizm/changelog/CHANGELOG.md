# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0](https://github.com/zyfra/Prizm) (21-06-2023)

### Features

- feat(components/input-zone): added new module for combine multiple inputs to one
- feat(components/input-native-value): added new module to correct native values of input if they differences
- feat(components/input-carousel): added component input-carousel which work with input-layout and unnecessarily added left-right buttons [391](https://github.com/zyfra/Prizm/issues/391)
- deprecated(components/carousel): instead of this you can use input-carousel
- ci: added publishing draft deploys to draft demo site [379](https://github.com/zyfra/Prizm/issues/379)
- ci: added publishing draft deploys to next demo site [378](https://github.com/zyfra/Prizm/issues/378)
- feat(components/input-layout-date-time): devided to seperate components
- feat(components/input-layout-date-time-range): added time output and seperato to multiple inputs [293](https://github.com/zyfra/Prizm/issues/293)
- feat(components/input-date-multi): no switch event between absolute and relative modes prizm-input-date-multi [[393](https://github.com/zyfra/Prizm/issues/393)](https://github.com/zyfra/Prizm/issues/393)
- feat(components/overlay): added ability to control backdrop color and opacity [[373](https://github.com/zyfra/Prizm/issues/373)](https://github.com/zyfra/Prizm/issues/373)
- feat(components/dropdown): added pass current global theme to dropdown [[342](https://github.com/zyfra/Prizm/issues/342)](https://github.com/zyfra/Prizm/issues/342)
- feat(components/tab): added ability to prevent tab open [195]((https://github.com/zyfra/Prizm/issues/195)
- feat(components/navigation): added the ability to hide the "hierarchical" view button [358](https://github.com/zyfra/Prizm/issues/358)
- feat(components/cron): added ability to show human readable value in cron #365
- feat(helpers/let): added ability to get current context from export via template ref

### BUG FIXES

- fix(components/cron): cannot write date to start date input [380](https://github.com/zyfra/Prizm/issues/380)
- fix(components/cron): show not full date in day tab [381](https://github.com/zyfra/Prizm/issues/381)
- fix(components/dropdown-host): cannot be used to register form controls with a parent formGroup directive [390](https://github.com/zyfra/Prizm/issues/390) [389](https://github.com/zyfra/Prizm/issues/390)
- fix(components/mask): in live demo, it is not possible to enter text into an input with a mask [[281](https://github.com/zyfra/Prizm/issues/281)](https://github.com/zyfra/Prizm/issues/281)
- fix(components/navigation): changes the navigation color when the side menu is hidden [[278](https://github.com/zyfra/Prizm/issues/278)](https://github.com/zyfra/Prizm/issues/278)
- fix(components/polymorph): does not work component template without context [265](https://github.com/zyfra/Prizm/issues/265)
- fix(components/table): pass does not right index [[260](https://github.com/zyfra/Prizm/issues/260)](https://github.com/zyfra/Prizm/issues/260)
- fix(components/select): fix hover and selected item colors in datepicker dropdowns [388](https://github.com/zyfra/Prizm/issues/388) [403](https://github.com/zyfra/Prizm/issues/403) [341](https://github.com/zyfra/Prizm/issues/341)
- fix(components/calendar-month): no hover when hovering over a month [301](https://github.com/zyfra/Prizm/issues/301)
- fix(helpers/to-observable): fix error when destroying not created instances
- fix(components/theme): fix error when we get current theme from root element
- fix(components/\*): small fixes for found bugs in 1.2.0-rc,1

## [1.2.0-rc,1](https://github.com/zyfra/Prizm) (19-06-2023)

### Features

- feat(components/input-carousel): added component input-carousel which work with input-layout and unnecessarily added left-right buttons [391](https://github.com/zyfra/Prizm/issues/391)
- deprecated(components/carousel): instead of this you can use input-carousel
- ci: added publishing draft deploys to draft demo site [379](https://github.com/zyfra/Prizm/issues/379)
- ci: added publishing draft deploys to next demo site [378](https://github.com/zyfra/Prizm/issues/378)
- feat(components/input-layout-date-time): devided to seperate components
- feat(components/input-layout-date-time-range): added time output and seperato to multiple inputs [293](https://github.com/zyfra/Prizm/issues/293)
- feat(components/input-date-multi): no switch event between absolute and relative modes prizm-input-date-multi [[393](https://github.com/zyfra/Prizm/issues/393)](https://github.com/zyfra/Prizm/issues/393)
- feat(components/overlay): added ability to control backdrop color and opacity [[373](https://github.com/zyfra/Prizm/issues/373)](https://github.com/zyfra/Prizm/issues/373)
- feat(components/dropdown): added pass current global theme to dropdown [[342](https://github.com/zyfra/Prizm/issues/342)](https://github.com/zyfra/Prizm/issues/342)
- feat(components/tab): added ability to prevent tab open [195]((https://github.com/zyfra/Prizm/issues/195)
- feat(components/navigation): added the ability to hide the "hierarchical" view button [358](https://github.com/zyfra/Prizm/issues/358)
- feat(components/cron): added ability to show human readable value in cron #365
- feat(helpers/let): added ability to get current context from export via template ref

### BUG FIXES

- fix(components/cron): cannot write date to start date input [380](https://github.com/zyfra/Prizm/issues/380)
- fix(components/cron): show not full date in day tab [381](https://github.com/zyfra/Prizm/issues/381)
- fix(components/dropdown-host): cannot be used to register form controls with a parent formGroup directive [390](https://github.com/zyfra/Prizm/issues/390) [389](https://github.com/zyfra/Prizm/issues/390)
- fix(components/mask): in live demo, it is not possible to enter text into an input with a mask [[281](https://github.com/zyfra/Prizm/issues/281)](https://github.com/zyfra/Prizm/issues/281)
- fix(components/navigation): changes the navigation color when the side menu is hidden [[278](https://github.com/zyfra/Prizm/issues/278)](https://github.com/zyfra/Prizm/issues/278)
- fix(components/polymorph): does not work component template without context [265](https://github.com/zyfra/Prizm/issues/265)
- fix(components/table): pass does not right index [[260](https://github.com/zyfra/Prizm/issues/260)](https://github.com/zyfra/Prizm/issues/260)
- fix(components/select): fix hover and selected item colors in datepicker dropdowns [388](https://github.com/zyfra/Prizm/issues/388) [403](https://github.com/zyfra/Prizm/issues/403) [341](https://github.com/zyfra/Prizm/issues/341)
- fix(components/calendar-month): no hover when hovering over a month [301](https://github.com/zyfra/Prizm/issues/301)
- fix(helpers/to-observable): fix error when destroying not created instances
- fix(components/theme): fix error when we get current theme from root element

## [1.0.1](https://github.com/zyfra/Prizm) (31-05-2023)

### Features

- feat(plugin/update-version): added ability to update dependencies for changed version [MR](https://github.com/zyfra/Prizm/pull/367)
- feat(ci): added support to update full dependencies when we publish pre/draft release [MR](https://github.com/zyfra/Prizm/pull/367)
- feat(components/cron): add min/max validators for start and end date [364](https://github.com/zyfra/Prizm/issues/364) [MR](https://github.com/zyfra/Prizm/pull/362)
- feat(components/select): clear search value after close modal [MR](https://github.com/zyfra/Prizm/pull/362)
- feat(doc): add pristine, dirty, touched controls to api page for form control components
- feat(components/input-layout): clear button does not show on focus with keyboard [356](https://github.com/zyfra/Prizm/issues/356) [MR](https://github.com/zyfra/Prizm/pull/362)
- feat(components/inputs): add ngModelOptions to inner inputs [345](https://github.com/zyfra/Prizm/issues/345) [360](https://github.com/zyfra/Prizm/issues/360) [MR](https://github.com/zyfra/Prizm/pull/351)
- feat(doc/zone-event): add page with examples to doc [MR](https://github.com/zyfra/Prizm/pull/351)
- feat(components/charts): add example with update color callback [292](https://github.com/zyfra/Prizm/issues/292) [MR](https://github.com/zyfra/Prizm/pull/368)

### BUG FIXES

- fix(components/input-text): set only dirty afte clear value [354](https://github.com/zyfra/Prizm/issues/354) [MR](https://github.com/zyfra/Prizm/pull/362)
- fix(ci): fix prereleased-released actions [MR](https://github.com/zyfra/Prizm/pull/367)
- fix(components/cron): fix end date label [362](https://github.com/zyfra/Prizm/pull/362) [MR](https://github.com/zyfra/Prizm/pull/362)
- fix(components/input-select): falsy values does not display in dropdown [331](https://github.com/zyfra/Prizm/issues/331) [MR](https://github.com/zyfra/Prizm/pull/362)
- fix(components/input-layout): now show status text [346](https://github.com/zyfra/Prizm/issues/346) [MR](https://github.com/zyfra/Prizm/pull/347)
- fix(components/input-multi-select): not display date after write value [332](https://github.com/zyfra/Prizm/issues/332) [MR](https://github.com/zyfra/Prizm/pull/370)
- fix(components/input-select): update inner template after disable/enable [335](https://github.com/zyfra/Prizm/issues/335) [MR](https://github.com/zyfra/Prizm/pull/370)
- fix(components/input-date-time): add auto correction time [66](https://github.com/zyfra/Prizm/issues/66) [MR](https://github.com/zyfra/Prizm/pull/369)
- fix(componets/ouside): flickering event emits inside/outside [366](https://github.com/zyfra/Prizm/issues/355) [MR](https://github.com/zyfra/Prizm/pull/351)

## [1.0.0](https://github.com/zyfra/Prizm) (24-05-2023)

### Features

- feat(chore): add linter to sort html attr   [MR](https://github.com/zyfra/Prizm/pull/311)
- feat(ast): remove angular from peer dependencies
- feat(ast): added utils to manipulate with semver version
- feat(nx-plugin): added new generator for manipulate publishable versions and examples to doc

### BUG FIXES

- fix(components/table): in a table with a tree-like data structure, \*ngIf does not work correctly for nested elements [235](https://github.com/zyfra/Prizm/issues/235)
- fix(components/input-layout): no prompt text for Input, InputSelect containing validation errors is displayed [315](https://github.com/zyfra/Prizm/issues/315)
- fix(components/input-select): value in the InputSelect field is displayed incorrectly [314](https://github.com/zyfra/Prizm/issues/314)
- fix(components/dropdown-host): does not react to [isOpen] changes [316](https://github.com/zyfra/Prizm/issues/316)

## [1.0.0-rc.2](https://github.com/zyfra/Prizm) (19-05-2023)

### Features

- feat(input-layout): add ability to show status messages from controls
- chore: splitted angular file to seperated project
- feat(components/dropdown-host): add ability to control auto close on outside click
- feat(components/select-input): we deprecated old prizm-select, and created new prizm-select-input which you can use with our layout
- feat(components/input-layout): add support directives from control to support components with dropdown
- feat(doc/select-input): update api page
- feat(components/dropdown-host): added new input for add another host instead of default element
- feat(components/input-layout): change logic appear layers on disabled'
- feat(components/input-date-time): added new component which supports input layout with new page in docs [160](https://github.com/zyfra/Prizm/issues/160) [185](https://github.com/zyfra/Prizm/issues/185) [66](https://github.com/zyfra/Prizm/issues/66) [155](https://github.com/zyfra/Prizm/issues/155)
- feat(components/input-date): added new component which supports input layout with new page in docs
- feat(components/input-multi-select): added new component which supports input layout with new page in docs [115](https://github.com/zyfra/Prizm/issues/115) [159](https://github.com/zyfra/Prizm/issues/159) [184](https://github.com/zyfra/Prizm/issues/184) [243](https://github.com/zyfra/Prizm/issues/243) [202](https://github.com/zyfra/Prizm/issues/202) [161](https://github.com/zyfra/Prizm/issues/161)
- feat(components/input-time): added new component which supports input layout with new page in docs
- feat(components/input-date): added new component which supports input layout with new page in docs
- feat(components/input-month): added new component which supports input layout with new page in docs
- feat(components/input-month-range): added new component which supports input layout with new page in docs
- feat(components/input-date-range): added new component which supports input layout with new page in docs
- feat(docs/input-date-multi): page in doc updated
- feat(components/input-select): added new component which supports input layout with new page in docs [184](https://github.com/zyfra/Prizm/issues/184) [205](https://github.com/zyfra/Prizm/issues/205) [245](https://github.com/zyfra/Prizm/issues/245) [29](https://github.com/zyfra/Prizm/issues/29)
- feat(components/input-layout-date-time-range): the overlay window is now closed by clicking in the non-modal window only not when selecting date or time
- feat(doc/live-demo): added controller to live demo for add/delete required validator
- feat(components/accordion): dded ability to override padding in prizm-accordion [MR](https://github.com/zyfra/Prizm/pull/271) [262](https://github.com/zyfra/Prizm/issues/262)
- feat(components/input-layout-\*): added fully sypport input-layout features for new input-layout-\_ components [63](https://github.com/zyfra/Prizm/issues/63) [231](https://github.com/zyfra/Prizm/issues/231)

### BUG FIXES

- fix(components/splitter): there was an error with the gutter at runtime [MR](https://github.com/zyfra/Prizm/pull/271) [266](https://github.com/zyfra/Prizm/issues/266)
- fix(components/sidebar): deprecated field header was required in PrizmSidebarOptions [MR](https://github.com/zyfra/Prizm/pull/271) [272](https://github.com/zyfra/Prizm/issues/272)
- fix(components/sidebar): PrizmSidebarService buttons could not be set to disabled state [MR](https://github.com/zyfra/Prizm/pull/271) [261](https://github.com/zyfra/Prizm/issues/261)
- fix(chore): fixed versions that interfered with the installation of our packages
- fix(components/input-password): when disabled is true, the "show password" button does not disable.
- fix(doc/input-text): fix error in api page
- fix(components/input-layout-date-time): the old flicker time selection bug has been fixed

## [1.0.0-rc.1](https://github.com/zyfra/Prizm) (11-05-2023)

### BUG FIXES

- fix(components/dropdown): fix placement error [218](https://github.com/zyfra/Prizm/issues/215) [MR](https://github.com/zyfra/Prizm/pull/236)
- fix(doc/getting-started): corrected path for connecting icons [193](https://github.com/zyfra/Prizm/issues/190) [244](https://github.com/zyfra/Prizm/issues/244)
- fix(components/select): stringify did not work for falsy values [229](https://github.com/zyfra/Prizm/issues/228) [MR](https://github.com/zyfra/Prizm/pull/237)
- fix(chore): fix tests and linters [MR](https://github.com/zyfra/Prizm/pull/232)
- fix(chore): fix husky check-brench-name checker [MR](https://github.com/zyfra/Prizm/pull/232)
- fix(components/dropdown-host): remove first emit isOpenChange
- fix(components/widget): card does not stretch to full height inside prizm-widget [256](https://github.com/zyfra/Prizm/issues/256) [MR](https://github.com/zyfra/Prizm/pull/254)

### Features

- feat(chore): update ngxmask library to 14 version [MR](https://github.com/zyfra/Prizm/pull/254)
- feat(components/dropdown): added ability to control dropdown styles [224](https://github.com/zyfra/Prizm/issues/224) [MR](https://github.com/zyfra/Prizm/pull/236)
- feat(components/cron): added button to reset to last submitted or initial value [188](https://github.com/zyfra/Prizm/issues/188) [MR](https://github.com/zyfra/Prizm/pull/238)
- feat(components/sidebar): added outerContent input to pass full content for example with your scrollbar [199](https://github.com/zyfra/Prizm/issues/199) [MR](https://github.com/zyfra/Prizm/pull/239)
- feat(components/sidebar): added headerTemplate input to pass your header with close button [131](https://github.com/zyfra/Prizm/issues/131) [MR](https://github.com/zyfra/Prizm/pull/239)
- feat(components/sidebar): content container is not stretching to full height [130](https://github.com/zyfra/Prizm/issues/130) [MR](https://github.com/zyfra/Prizm/pull/239)
- feat(components/sidebar): add input to control overlay zIndex [223](https://github.com/zyfra/Prizm/issues/223) [MR](https://github.com/zyfra/Prizm/pull/239)
- feat(doc/toggle): update content of example to show current value [234](https://github.com/zyfra/Prizm/issues/234) [MR](https://github.com/zyfra/Prizm/pull/240)
- feat(doc/table): added the possibility of controlling the display of the column [235](https://github.com/zyfra/Prizm/issues/235) [MR](https://github.com/zyfra/Prizm/pull/241)
- feat(components/splitter): added ability to more flexibly style PrizmSplitterComponent gutter [70](https://github.com/zyfra/Prizm/issues/70) [MR](https://github.com/zyfra/Prizm/pull/252)
- feat(chore): update angular to 14 version [MR](https://github.com/zyfra/Prizm/pull/232)
- feat(chore): update nx to 14 version [MR](https://github.com/zyfra/Prizm/pull/232)
- feat(components/polymorph): add passing injector to template [MR](https://github.com/zyfra/Prizm/pull/232)

### BREAKING CHANGES

- BC(components/dropdown-host): remove parentZone input [MR](https://github.com/zyfra/Prizm/pull/232)

## [1.0.0-beta.35](https://github.com/zyfra/Prizm) (28-04-2023)

### Features

- feat(doc): now our api page checker supports work with directives [MR](https://github.com/zyfra/Prizm/pull/226)
- feat(components/sidebar): add new optional parameter for control can we close sidebar or not [194](https://github.com/zyfra/Prizm/issues/194) [MR](https://github.com/zyfra/Prizm/pull/226)
- feat(components/navigation-menu): added ability to provide childrenHandler via token or view input parameter [220](https://github.com/zyfra/Prizm/pull/220)

### Bug fixes

- fix(components/hint): fixed hint may overlap its target [200](https://github.com/zyfra/Prizm/issues/200) [86](https://github.com/zyfra/Prizm/issues/86) [149](https://github.com/zyfra/Prizm/issues/149)
- fix(components/navigation): Fixed message, added borders. [MR](https://github.com/zyfra/Prizm/pull/221)
- fix(components/breadcrumbs): added option to show only icon in breadcrumb, removing 8px gap and empty text padding. [MR](https://github.com/zyfra/Prizm/pull/222)
- fix(components/navigation-menu): removed duplicate template outlet for headerExtraTemplate [MR](https://github.com/zyfra/Prizm/pull/225)

### BREAKING CHANGES

- BREAKING CHANGE(components/splitter): refactored splitter component, removed setAreasSize method, instead of it add new inputs size, minSize to control size [MR](https://github.com/zyfra/Prizm/pull/210) [69](https://github.com/zyfra/Prizm/issues/69)

## [1.0.0-beta.34](https://github.com/zyfra/Prizm) (27-04-2023)

### Features

- feat(plugin): new @prizm-ui/nx-plugin with all our generators and executors for manipulate code
- feat(doc): new page with info how to use our migrator
- feat(ast): now our code manipulator support changing in new ts version >4.7

### BREAKING CHANGES

- feat(testid): update data-testid attributes by RFC [MR](https://github.com/zyfra/Prizm/pull/206)
- feat(cb3-to-prizm): remove @prizm-ui/cb3-to-prizm lib, move to @prizm-ui/nx-plugin

## [1.0.0-beta.33](https://github.com/zyfra/Prizm) (24-04-2023)

### Features

- feat(cb3-to-prizm): add textarea support to migrate
- feat(doc/ast): add example with migration of textarea

### BUG FIXES

- fix(chore): fix error for template to create issues [201](https://github.com/zyfra/Prizm/issues/201)
- fix(doc/indicator): fix import module name in example [203](https://github.com/zyfra/Prizm/issues/203)
- fix(components/select): remove unnecessary hint [186](https://github.com/zyfra/Prizm/issues/186)
- fix(ci): github error with memory leak

## [1.0.0-beta.32](https://github.com/zyfra/Prizm) (23-04-2023)

### Features

- feat(doc): add how to change and use our i18 library info [141](https://github.com/zyfra/Prizm/issues/141)
- feat(components/spinner): new spinner component
- feat(doc/spinner): add doc page about spinner component
- feat(components/hint): add input to pass context
- feat(components/hint): add show input
- feat(doc/hint): update doc for hint
- feat(helpers/log): new decorator **PrizmLogExecution** and unit tests for its
- feat(ast): new template tasks, task to change typescript code with unit tests for its
- feat(cb3-to-prizm): add unit tests to stable our migrator
- feat(doc/cb3-to-prizm): add info how to use our migrator
- feat(doc/ast): add info how to use our ast library

### BUG FIXES

- fix(components/select): fix error with disable when searchable is false

## [1.0.0-beta.31](https://github.com/zyfra/Prizm) (17-04-2023)

### BUG FIXES

- fix(chore): fix es5-ext, fix es6-set version
- fix(chore): removed cli-color library
- fix(chore): removed fantasticon

## [1.0.0-beta.30](https://github.com/zyfra/Prizm) (14-04-2023)

### Features

- feat(ci): automatically create comments in issue after PR were updated, created, or closed [143](https://github.com/zyfra/Prizm/issues/143)
- feat(ci): automatically create comments in issue after PR was released 143[https://github.com/zyfra/Prizm/issues/143]
- feat(components/chips): new chips-item added to lib [162](https://github.com/zyfra/Prizm/issues/162)
- feat(doc/chips): new chips-item added to doc [162](https://github.com/zyfra/Prizm/issues/162)
- feat(components/cron): added new input to hide cron result [166](https://github.com/zyfra/Prizm/issues/166)
- feat(components/cron): added new input to filter items from every tab [163](https://github.com/zyfra/Prizm/issues/163)
- feat(doc/input-date-time): add example with required [124](https://github.com/zyfra/Prizm/issues/124)
- feat(doc/icons): now on click icon name will be copied to clipboard [150](https://github.com/zyfra/Prizm/issues/150)
- feat(doc/old-icons): now on click old icon name will be copied to clipboard [150](https://github.com/zyfra/Prizm/issues/150)
- feat(components/navigation-menu): replace deprecated menu
- feat(components/button): now you can pass polymorph content as icon to use any icon set [151](https://github.com/zyfra/Prizm/issues/151)
- feat(doc/icon-button): add example with you custom icon [151](https://github.com/zyfra/Prizm/issues/151)
- feat(components/sidebar): add ability to hide footer [153](https://github.com/zyfra/Prizm/issues/153)

### BUG FIXES

- fix(components/input-date-time): required did not set [124](https://github.com/zyfra/Prizm/issues/124)
- fix(components/input): reset touched state on control.reset() [114](https://github.com/zyfra/Prizm/issues/114)
- fix(components/sidebar): scrollbar content now exanded to all view [130](https://github.com/zyfra/Prizm/issues/130)
- fix(components/tabs): remove title on tab with idx [152](https://github.com/zyfra/Prizm/issues/152)
- fix(components/multi-select): fix bug with red border on required [161](https://github.com/zyfra/Prizm/issues/161)
- fix(components/multi-select): chips can be deleted on disabled multi-selected [159](https://github.com/zyfra/Prizm/issues/159)
- fix(chore): prettier gets different result on different os

## [1.0.0-beta.29](https://github.com/zyfra/Prizm) (07-04-2023)

### Features

- feat(ast): new library for help to write you migrator and code updater
- feat(cb3-to-prizm): new migrator for help to migrate to prizm from pervious component base 3
- feat(ci): add ability for work with forked pull requests
- feat(doc/dialog): add example with close in template buttons [123](https://github.com/zyfra/Prizm/issues/123)
- feat(components/table): added example with new `PrizmTableDataSource`  [133](https://github.com/zyfra/Prizm/issues/133)
- feat(components/table): added  `PrizmTableDataSource` class [133](https://github.com/zyfra/Prizm/issues/133)
- feat(components/table): added example with new `PrizmTableDataSource`  [133](https://github.com/zyfra/Prizm/issues/133)

### BUG FIXES

- fix(components/input-date-time): fix the time disappears when you select the same date again [125](https://github.com/zyfra/Prizm/issues/125)
- fix(components/input-date-time): sometimes after choose some time from preset we get wrong times
- fix(components/select): mark as dirty if it has initial value [132](https://github.com/zyfra/Prizm/issues/132)
- fix(components/multi-select): validation status in multiSelect is not reset [129](https://github.com/zyfra/Prizm/issues/129)

## [1.0.0-beta.28](https://github.com/zyfra/Prizm) (31-03-2023)

### Features

- feat(doc/input-date-range): add example with presets list 🎨
- feat(doc/calendar-range): add example with presets list 🎨
- feat(doc/table): add example with stick to left, to right, to bottom side 🎨 [104](https://github.com/zyfra/Prizm/issues/104)
- feat(doc/sticky): add doc for new directive prizmStick 🎨 [104](https://github.com/zyfra/Prizm/issues/104)
- feat(components/sticky): add new directive prizmStick for sticky to any side with dynamic calculations 🎨 [104](https://github.com/zyfra/Prizm/issues/104)
- feat(components/switcher): add disabled and add support template icon [117](https://github.com/zyfra/Prizm/issues/117) 🎨
- feat(components/accordion): show border on hover [100](https://github.com/zyfra/Prizm/issues/100)

### BUG FIXES

- fix(components/table): pass correct context to row [110](https://github.com/zyfra/Prizm/issues/110)
- fix(components/input-date-period): fix export [107](https://github.com/zyfra/Prizm/issues/107)
- fix(components/dialog): fix error with more than context size [108](https://github.com/zyfra/Prizm/issues/108)
- fix(components/confirm-dialog): fix error with more than context size [108](https://github.com/zyfra/Prizm/issues/108)
- fix(components/sidebar): error with double height set [101](https://github.com/zyfra/Prizm/issues/101)
- feat(components/select): null content does not show [116](https://github.com/zyfra/Prizm/issues/116)
- fix(components/toast): toasts overlap each other [118](https://github.com/zyfra/Prizm/issues/118)
- fix(components/sidebar): can not pass footer template [94](https://github.com/zyfra/Prizm/issues/94)
- fix(components/select): fix full width [120](https://github.com/zyfra/Prizm/issues/120)
- fix(components/select): validator required does not work [119](https://github.com/zyfra/Prizm/issues/119)
- fix(components/accordion): problem with nested accordion [96](https://github.com/zyfra/Prizm/issues/96)
- fix(components/accordion): fix bug with big title in hint [99](https://github.com/zyfra/Prizm/issues/99)
- fix(components/input-text): fix bug with error on clear [92](https://github.com/zyfra/Prizm/issues/92)

## [1.0.0-beta.27](https://github.com/zyfra/Prizm) (24-03-2023)

### Features

- feat(doc/auto-emit): add new page with auto-emit to tools
- feat(doc/observable): add new page with observable to tools
- feat(core/observable): add symbol support and property attributes to prizmObservable decorator [81](https://github.com/zyfra/Prizm/issues/81)
- feat(core/auto-emit): add symbol support and set dynamic values to prizmAutoEmit decorator
- feat(theme): update theme v2, add new palete and value for light and dark themes
- feat(doc/input): add input-layout to api page (components/input)
- feat(components/input-date-time): add forceClear control input
- feat(components/input-date-time-range): add forceClear control input [76](https://github.com/zyfra/Prizm/issues/76)
- feat(components/input-time): add forceClear control input
- feat(components/input-date): add forceClear control input
- feat(components/input-month): add forceClear control input
- feat(components/input-month-range): add forceClear control input
- feat(components/input-date-range): add forceClear control input
- feat(components/input-date-relative): add forceClear control input
- feat(components/sidebar): add dismissible option to close on outside click [98](https://github.com/zyfra/Prizm/issues/98)
- feat(helpers/to-observable): new to-observable pipe
- feat(doc/to-observable): new page with to-observable examples
- feat(i18n): new i18n to library
- feat(doc/internalization): new page with info how to work with i18n
- feat(components/file-upload): support i18n to file-upload component (79)[https://github.com/zyfra/Prizm/issues/79]

### BUG FIXES

- fix(doc): set title on change page [72](https://github.com/zyfra/Prizm/issues/72)
- fix(components/select): emit val change event with same value [91](https://github.com/zyfra/Prizm/issues/91)
- fix(components/select): update value on emitEvent false [90](https://github.com/zyfra/Prizm/issues/90) [36](https://github.com/zyfra/Prizm/issues/36)
- fix(components/sidebar): fix scrollbar overflow [97](https://github.com/zyfra/Prizm/issues/97)
- fix(components/input-date-time): fix time format error [66](https://github.com/zyfra/Prizm/issues/66)
- fix(components/paginator): fix disabled error [67](https://github.com/zyfra/Prizm/issues/67)
- fix(components/input): fix input clear behavior [92](https://github.com/zyfra/Prizm/issues/92)
- fix(doc): fixed paddings and margins for showcase inputText

## [1.0.0-beta.26](https://github.com/zyfra/Prizm) (17-03-2023)

### Features

- feat(components/table): add tree support for table [78](https://github.com/zyfra/Prizm/issues/78)
- feat(components/table): add empty table directive to table [71](https://github.com/zyfra/Prizm/issues/71)
- feat(components/tree-button): add tree button component
- feat(doc/table): add tree example
- feat(doc/table): add empty table example
- feat(doc): add new pages and small fixes

## [1.0.0-beta.25](https://github.com/zyfra/Prizm) (10-03-2023)

### BUG FIXES

- fix(components/tooltip): recalc on left and right position [#34](https://github.com/zyfra/Prizm/issues/34)
- chore: correct old helper issues templates
- fix(components/overlay): fix case with not correct display overlay [#4](https://github.com/zyfra/Prizm/issues/4)
- fix(components/confirm): fix console errors [#31](https://github.com/zyfra/Prizm/issues/31)
- feat(components/dialogs): invert theme inside dialog and confirm dialog [#74](https://github.com/zyfra/Prizm/issues/74)

### Features

- feat(theme): new inverted theme directive
- feat(doc/theme): examples how to use theme and inverted theme directive

## [1.0.0-beta.24](https://github.com/zyfra/Prizm) (03-03-2023)

### BUG FIXES

- fix(components/icon-button): incorrect calculation of IconButton height in DropdownHost
- fix(doc/dropdown-host): the nested dropdown did not open
- fix(components/input-icon-button): changing the default type of input-icon-button to button
- fix(components/table): fix font-weight for table header
- fix(components/input-number): add default value type number
- fix(components/pagination): changing totalRecords does not redraw buttons with page numbers

### Features

- feat(doc): add sla info to contact page

## [1.0.0-beta.23](https://github.com/zyfra/Prizm) (16-02-2023)

### Features

Migrate PrizmThemeModule > prizm/theme

- feat(components/prizmObservable): new decorator prizmObservable
- feat(components/prizmAutoEmit): new decorator prizmAutoEmit
- feat(components/navigation): now theme does not switch when theme was changed'
- feat(components/stop-propagation): new directive for stop propagation
- feat(doc): change vcs logo to github
- feat(components/table): multiple sorting
- feat(components/table): add server sorting
- feat(doc/table): add examples with new sorting
- chore: add pre commit checks branch name and commit message
- chore: add pre push check ci
- feat(doc): add a page with SLA
- feat(components/paginator): add moreButtonLabel input
- feat(doc/input): input as carousel example

### BUG FIXES

- fix(components): remove primeng
- fix(components/splitter): nested style bug
- fix(theme): init variable in root
- fix(doc/theme): change theme on local change
- fix(doc/tree): change lazy tree source documentation
- fix(doc/shadow): fix console errors
- fix (components/overlay): falling out of the window borders during the
- fix(components/text-arrea,input-chips): fix checking NgControl
- fix(components/overlay): fix disabled/enabled state

### BREAKING CHANGES

- BREAKING CHANGE: Migrate PrizmThemeModule to prizm/theme library
- fix(components/radio)!: remove formControl input
- ref(components/table-old): move to deprecated library
- ref(components/navigation): move to deprecated library

## [1.0.0-beta.22](https://github.com/zyfra/Prizm) (27-01-2023)

### Features

- feat(components/paginator) add new output paginatorChange
- feat(components/paginator): add showMoreDisabled input
- feat(doc/polymorph): add documentation with examples
- feat(doc/split-button): add example with dropdown

### BUG FIXES

- fix(components/paginator) fix pageChange output logic
- fix(components/paginator): corrected multiple output trigger
- fix(components/tag): fix tag select on disabled

## [1.0.0-beta.21](https://github.com/zyfra/Prizm) (23-01-2023)

### Features

- fix(doc/paginator) remove not working params in api page
- feat(doc/paginator) add new params
  feat(components/tabs): add show menu control
- feat(components/dialog/sidebar): add icons to sidebar buttons
- feat(components/tabs): add canShowMenu input
- feat(components/table): Simplify usage in a minimal amount

### BUG FIXES

- fix(components/date-relative): fix change disabled via FormControl
- fix(components/date): open time picker when open date picker
- fix(doc/tabs): second tab content in api page
- fix(doc/confirm-dialog): PrizmConfirmDialog, horizontal view: пример кода не верный
- fix(components/table): fix tests
- fix(components/splitter): resize events. bug fix with classes
- fix(components/stepper): fix a bug with the order of steps

### BREAKING CHANGES

- ref(components/paginator): change initialValue > page
- ref(components/paginator): change tabChange > pageChange
- ref(components/checkbox): remove required

## [1.0.0-beta.20](https://github.com/zyfra/Prizm) (11-01-2022)

### Features

- doc(update): update doc for many components and small fixes
- docs (components/table): update table api page
- docs (components/table): update widget api page
- feat(charts): update doc pages and api for components
- feat(doc): new error detector in api page
- feat(doc): sorting params in api page
- feat(components/cron): adaptive width
- feat(components/cron): new autoSubmit param
- feat(components/cron): new hidePeriod param
- feat(components/panel): add css variable for change radius
- feat(doc/getting-started): update page
- feat(theme/switcher): change only in local zone
- feat(helpers/let): add context service
- feat(charts/area): add component area
- feat(charts/bar): add component bar
- feat(charts/gauge): add component gauge
- feat(charts/gauge): add component gauge
- feat(charts/column): add component column
- feat(charts/line): add component line
- feat(charts/pie): add component pie
- feat(charts/radar): add component radar
- feat(charts/radial-bar): add component radio bar
- feat(charts/scatter): add component scatter
- feat(charts/treemap): add component treemap

### BUG FIXES

- fix(components/date): data relative component
- fix(components/cron): day count and bug with submit logic
- fix(components/date): display in dark mode
- fix(theme/switcher): error in global change

### BREAKING CHANGES

- feat(theme): themes moved from the package @prizm-ui/components to @prizm-ui/theme library (PLEASE UPDATE as in doc documentation)
- feat(components/tabs): change api (PLEASE UPDATE as in doc documentation)

## [1.0.0-beta.19](https://github.com/zyfra/Prizm) (27-12-2022)

### Features

- docs(components/table): Пример с выбором c помощью metakeys + fix
- feat(components/file-upload): new file upload component
- feat(components/navigation): new navigation component
- feat(doc): new doc design
- feat(components/cron): new cron component

### BUG FIXES

- fix(components/tabs) Tabs. Отсутствует ховер для icon tabs
- fix(doc): link to figma in menu
- fix(doc): sections and pages; colors in license and colors; fix size in typography and grid
- fix(components/slider): cnob active color
- fix(components/\*): small fixes

## [1.0.0-beta.18](https://github.com/zyfra/Prizm) (9-12-2022)

### BUG FIXES

- fix(icons/base): Fix publish error in base icon set
- fix(icons/flags): Fix publish error in flag icon set

## [1.0.0-beta.16](https://github.com/zyfra/Prizm) (6-12-2022)

### Features

- feat(icons): Added new library with svg and fonts icons
- feat(flag-icons): Added new library with flags svg icons
- feat(components/splitter): Added new component splitter
- feat(components/input): Added the ability to display error parameters in PrizmInputValidationTexts

### BUG FIXES

- fix(components/table): sort
- fix(docs): fixes install info

## [1.0.0-beta.15](https://github.com/zyfra/Prizm) (5-12-2022)

### BUG FIXES

- fix: peer dependencies

## [1.0.0-beta.14](https://github.com/zyfra/Prizm) (5-12-2022)

### Features

- feat(components/table): Added new color themes for Table
- feat(components/theme): Added new color themes

## [1.0.0-beta.13](https://github.com/zyfra/Prizm) (28-11-2022)

### Features

- feat(core): update doc

## [1.0.0-beta.12](https://github.com/zyfra/Prizm) (28-11-2022)

### BUG FIXES

- fix(core): add core to publish

## [1.0.0-beta.11](https://github.com/zyfra/Prizm) (21-11-2022)

### Features

- feat(components/stepper): IDPPRIZM-152 Stepper
- feat(components/table): Добавлен компонент таблиц
- feat(components/charts): Charts stage 1

### BREAKING CHANGES

- feat(components): rename selectors, prefix for all project ( pzm, zui to prizm ) 1
- feat(components): rename selectors, prefix for all project ( pzm, zui to prizm ) 2
- packages names to @prizm-ui/\*
- change git repo

## [1.0.0-beta.10](https://github.com/zyfra/Prizm) (18-10-2022)

### Features

- feat(next/icon): add poi svg icons
- feat(next/multi-select): add single line chips multi-select
- feat(next/chips): add single line for chips

### BUG FIXES

- feat(next/chips): fix select border

## [1.0.0-beta.9](https://github.com/zyfra/Prizm) (14-10-2022)

### Features

- fix(components/calendar): add day with status
- fix(components/multi-select): add select-all button
- docs: add forceClear option to doc

### BUG FIXES

- fix(components/checkbox): fix checkbox, input-search, input-chips
- fix(components/select): fix less output
- fix(components/input-mask): Настройки NgxMaskModule.
- fix(components/select): fix size error logging

## [1.0.0-beta.8](https://github.com/zyfra/Prizm) (03-10-2022)

### BUG FIXES

- fix(components/nav-menu): Фикс бага с отображением иконок, фикс бага с границей.
- fix(components/input-mask): Настройки NgxMaskModule.
- fix(components/select): show initial value from control
- docs: fix less output

### Features

- feat(doc): add webpack build
- feat(components/tree): increase font-weigt
- feat(components/widget): change header, body background color
- feat(components/hint): add prizmHintCanShow
- feat(components): add themes mixins
- feat(components/select): add isChipsDeletable, forceClear for multi-select
- feat(components/multi-select): add forceClear for select
- docs(components/carousel): Example of select year and month.

> **Special thanks**
>
> ✏️ **MR:** Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.7](https://github.com/zyfra/Prizm) (16-09-2022)

### BUG FIXES

- fix(components): add testId
- fix(components/textarea) Textarea fix

### Features

- feat(components/zoom-control): Добавлен паттерн zoom-control
- feat(components): shadow encapsulation for primeng wrappers

> **Special thanks**
>
> ✏️ **MR:** Rustam Imaikin, Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.6](https://github.com/zyfra/Prizm) (13-09-2022)

### BUG FIXES

- fix(components/icon): rebuild up poi-2 icon
- fix(components/panel, components/tabs, components/side-menu): Косметические фиксы компонент

### Features

- feat: added new css global variables
- feat(components/paginator): Компонента приведена в соответствие с дизайном
- feat(next/dropdown): new close method, fix version in doc, and small fixes
- feat(components): shadow encapsulation for primeng wrappers
- docs(components/dropdown): dropdown hierarchy example

> **Special thanks**
>
> ✏️ **MR:** Rustam Imaikin, Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.5](https://github.com/zyfra/Prizm) (08-09-2022)

### BUG FIXES

- feat: new global variables

### Features

- fix(components/icon): rebuild up poi-2 icon

## [1.0.0-beta.4](https://github.com/zyfra/Prizm) (06-09-2022)

### Features

- feat(components/tab): add closable ability for each tab

> **Special thanks**
>
> ✏️ **MR:** Andrey Smirnov
