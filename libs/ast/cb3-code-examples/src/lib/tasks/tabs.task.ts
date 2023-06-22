import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraTabsCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmTabsModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraTabViewModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraTabViewModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmTabsModule',
    moduleToFind: 'ZyfraTabViewModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraTabViewModule',
  }),
];
