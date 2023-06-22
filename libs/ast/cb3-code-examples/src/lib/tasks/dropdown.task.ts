import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraDropdownCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmSelectModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraDropdownModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraDropdownModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmSelectModule',
    moduleToFind: 'ZyfraDropdownModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraDropdownModule',
  }),
];
