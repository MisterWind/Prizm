import {TemplateRef} from '@angular/core';
import {PolymorpheusComponent} from '../classes/component';
import {PolymorpheusTemplate} from '../directives/template';
import {PolymorpheusHandler} from './handler';
import {PolymorpheusPrimitive} from './primitive';

/**
 * All content types supported by {@link PolymorpheusOutletDirective}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type PolymorpheusContent<C extends object = {}> =
    | TemplateRef<C>
    | PolymorpheusTemplate<C>
    // eslint-disable-next-line @typescript-eslint/ban-types
    | PolymorpheusComponent<object, C>
    | PolymorpheusHandler<C>
    | PolymorpheusPrimitive;
