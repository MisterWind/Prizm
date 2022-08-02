import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {inject} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {
  TUI_DOC_DEFAULT_TABS,
  TUI_DOC_LOGO,
  TUI_DOC_PAGES,
  TUI_DOC_SOURCE_CODE,
  TUI_DOC_TITLE,
  TuiDocSourceCodePathOptions,
} from '@taiga-ui/addon-doc';
import {isInsideIframe, TUI_DIALOG_CLOSES_ON_BACK, TUI_IS_CYPRESS, TUI_TAKE_ONLY_TRUSTED_EVENTS,} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_DURATION, TUI_SANITIZER} from '@taiga-ui/core';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {Observable, of} from 'rxjs';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {pages} from './pages';
import {LOGO_CONTENT} from "./logo/logo.component";

export const DEFAULT_TABS = [
  `Description and examples`,
  `API`,
  `Setup`,
  `How to use`,
];
const TITLE_PREFIX = 'Zyfra UI: ';

export const HIGHLIGHT_OPTIONS_VALUE = {
  coreLibraryLoader: async (): Promise<unknown> => import('highlight.js/lib/core'),
  lineNumbersLoader: async (): Promise<unknown> => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
  languages: {
    typescript: async (): Promise<unknown> => import('highlight.js/lib/languages/typescript'),
    less: async (): Promise<unknown> => import('highlight.js/lib/languages/less'),
    xml: async (): Promise<unknown> => import('highlight.js/lib/languages/xml'),
  },
};

export const APP_PROVIDERS = [
  Title,
  {
    provide: HIGHLIGHT_OPTIONS,
    useValue: HIGHLIGHT_OPTIONS_VALUE,
  },
  {
    provide: TUI_SANITIZER,
    useClass: NgDompurifySanitizer,
  },
  {
    provide: TUI_DOC_SOURCE_CODE,
    useValue: (context: TuiDocSourceCodePathOptions): null | string => {
      const link = 'https://gitdp.zyfra.com/digital-plant/ui-platform/frontend/zui-sdk';

      if (!context.package) {
        return null;
      }

      if (context.type) {
        return `${link}/${context.package.toLowerCase()}/${context.type.toLowerCase()}/${(
          context.header[0].toLowerCase() + context.header.slice(1)
        ).replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}`;
      }

      return `${link}/${context.path}`;
    },
  },
  {
    provide: LocationStrategy,
    useClass: PathLocationStrategy,
  },
  {
    provide: TUI_DOC_TITLE,
    useValue: TITLE_PREFIX,
  },
  {
    provide: TUI_DOC_PAGES,
    useValue: pages,
  },

  {
    provide: TUI_DOC_TITLE,
    useValue: TITLE_PREFIX,
  },
  {
    provide: TUI_DOC_PAGES,
    useValue: pages,
  },
  {
    provide: TUI_DOC_DEFAULT_TABS,
    useValue: DEFAULT_TABS,
  },
  {
    provide: TUI_DOC_LOGO,
    useValue: LOGO_CONTENT,
  },
  {
    provide: TUI_ANIMATIONS_DURATION,
    useFactory: (): number => (inject(TUI_IS_CYPRESS) ? 0 : 300),
  },
  {
    provide: TUI_TAKE_ONLY_TRUSTED_EVENTS,
    useFactory: (): boolean => !inject(TUI_IS_CYPRESS),
  },
  {
    provide: TUI_DIALOG_CLOSES_ON_BACK,
    useFactory: (): Observable<unknown> => of(!isInsideIframe(inject(WINDOW))), // for cypress tests
  },
];
