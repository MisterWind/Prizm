import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'about-prizm',
    children: [
      {
        path: 'design-system',
        loadChildren: (): Promise<unknown> =>
          import('./about-prizm/design-system/design-system.module').then(i => i.DesignSystemModule),
        data: {
          title: 'About Design System',
        },
      },
      {
        path: 'license',
        loadChildren: (): Promise<unknown> =>
          import('./about-prizm/license/license.module').then(m => m.LicenseModule),
        data: {
          title: 'License',
        },
      },
      {
        path: 'repositories',
        loadChildren: (): Promise<unknown> =>
          import('./about-prizm/repositories/repositories.module').then(m => m.RepositoriesModule),
        data: {
          title: 'Repositories',
        },
      },
      {
        path: 'contacts',
        loadChildren: (): Promise<unknown> =>
          import('./about-prizm/contacts/contacts.module').then(i => i.ContactsModule),
        data: {
          title: 'Contacts',
        },
      },
      {
        path: 'release-policy',
        loadChildren: (): Promise<unknown> =>
          import('./about-prizm/release-policy/release-policy.module').then(i => i.ReleasePolicyModule),
        data: {
          title: 'Release policy',
        },
      },
      {
        path: 'service-level-agreement',
        loadChildren: (): Promise<unknown> =>
          import('./about-prizm/service-level-agreement/service-level-agreement.module').then(
            i => i.ServiceLevelAgreementModule
          ),
        data: {
          title: 'Service level agreement',
        },
      },
      {
        path: 'roadmap',
        loadChildren: (): Promise<unknown> =>
          import('./about-prizm/roadmap/roadmap.module').then(i => i.RoadmapModule),
        data: {
          title: 'Roadmap',
        },
      },
      {
        path: 'changelog',
        loadChildren: (): Promise<unknown> =>
          import('./about-prizm/changelog/changelog.module').then(i => i.ChangelogModule),
        data: {
          title: 'Changelog',
        },
      },
      {
        path: 'technology-list',
        loadChildren: (): Promise<unknown> =>
          import('./about-prizm/technology-list/technology-list.module').then(i => i.TechnologyListModule),
        data: {
          title: 'Technology list',
        },
      },
    ],
  },
  //How to work
  {
    path: 'how-to-work',
    children: [
      {
        path: 'internationalization',
        loadChildren: (): Promise<unknown> =>
          import('./how-to-work/internationalization/internationalization.module').then(
            i => i.InternationalizationModule
          ),
        data: {
          title: 'Internationalization',
        },
      },
      {
        path: 'for-developers',
        loadChildren: (): Promise<unknown> =>
          import('./how-to-work/for-developers/for-developers.module').then(i => i.ForDevelopersModule),
        data: {
          title: 'For developers',
        },
      },
      {
        path: 'transition',
        loadChildren: (): Promise<unknown> =>
          import('./how-to-work/transition/transition.module').then(i => i.TransitionModule),
        data: {
          title: 'Transition',
        },
      },
      {
        path: 'add-component',
        loadChildren: (): Promise<unknown> =>
          import('./how-to-work/add-component/add-component.module').then(i => i.AddComponentModule),
        data: {
          title: 'Add component',
        },
      },
      {
        path: 'set-task',
        loadChildren: (): Promise<unknown> =>
          import('./how-to-work/set-task/set-task.module').then(i => i.SetTaskModule),
        data: {
          title: 'Set task',
        },
      },
      {
        path: 'contributing',
        loadChildren: (): Promise<unknown> =>
          import('./how-to-work/contributing/contributing.module').then(i => i.ContributingModule),
        data: {
          title: 'Contributing',
        },
      },
      {
        path: 'codestyle',
        loadChildren: (): Promise<unknown> =>
          import('./how-to-work/codestyle/codestyle.module').then(i => i.CodestyleModule),
        data: {
          title: 'CodeStyle',
        },
      },
      {
        path: '**',
        redirectTo: 'for-developers',
      },
    ],
  },
  //For ZIIoT
  {
    path: 'forZIIoT',
    children: [
      {
        path: 'introduction',
        loadChildren: (): Promise<unknown> =>
          import('./forZIIoT/introduction/introduction.module').then(i => i.IntroductionModule),
        data: {
          title: 'Introduction',
        },
      },
      {
        path: 'library-requirements',
        loadChildren: (): Promise<unknown> =>
          import('./forZIIoT/library-requirements/library-requirements.module').then(
            i => i.LibraryRequirementsModule
          ),
        data: {
          title: 'Library requirements',
        },
      },
      {
        path: 'migration',
        loadChildren: (): Promise<unknown> =>
          import('./forZIIoT/migration/migration.module').then(i => i.MigrationModule),
        data: {
          title: 'Migration',
        },
      },
    ],
  },
  //Guidelines
  {
    path: 'guidelines',
    children: [
      {
        path: 'typography',
        loadChildren: (): Promise<unknown> =>
          import('./guidelines/typography/typography.module').then(m => m.TypographyModule),
        data: {
          title: 'Typography',
        },
      },
      {
        path: 'colors',
        loadChildren: (): Promise<unknown> =>
          import('./guidelines/colors/colors.module').then(m => m.ColorsModule),
        data: {
          title: 'Colors',
        },
      },
      {
        path: 'grid',
        loadChildren: (): Promise<unknown> => import('./guidelines/grid/grid.module').then(m => m.GridModule),
        data: {
          title: 'Grid',
        },
      },
    ],
  },
  // DOC
  {
    path: 'generate-example',
    loadChildren: (): Promise<unknown> =>
      import('./documentation/generate-example/generate-example.module').then(i => i.GenerateExampleModule),
    data: {
      title: 'Generate example',
    },
  },
  // COMPONENTS
  {
    path: 'components/dropdowns/dropdown-host',
    loadChildren: (): Promise<unknown> =>
      import('./components/dropdowns/dropdown-host/dropdown-host.module').then(i => i.DropdownHostModule),
    data: {
      title: 'DropdownHost',
    },
  },
  {
    path: 'components/sticky',
    loadChildren: (): Promise<unknown> =>
      import('./components/sticky/sticky.module').then(i => i.StickyModule),
    data: {
      title: 'Sticky',
    },
  },
  {
    path: 'components/skeleton',
    loadChildren: (): Promise<unknown> =>
      import('./components/skeleton/skeleton.module').then(i => i.SkeletonModule),
    data: {
      title: 'Skeleton',
    },
  },
  {
    path: 'components/dropdowns/select',
    loadChildren: (): Promise<unknown> =>
      import('./components/dropdowns/select/select.module').then(i => i.SelectModule),
    data: {
      title: 'Select',
    },
  },
  {
    path: 'components/dropdowns/multi-select',
    loadChildren: (): Promise<unknown> =>
      import('./components/dropdowns/multi-select/multi-select.module').then(i => i.MultiSelectModule),
    data: {
      title: 'Multi Select',
    },
  },
  {
    path: 'components/shadow',
    loadChildren: (): Promise<unknown> =>
      import('./components/shadow/shadow.module').then(i => i.ShadowModule),
    data: {
      title: 'Shadow',
    },
  },
  {
    path: 'components/card',
    loadChildren: (): Promise<unknown> => import('./components/card/card.module').then(i => i.CardModule),
    data: {
      title: 'Card',
    },
  },
  {
    path: 'components/progress-line-bar',
    loadChildren: (): Promise<unknown> =>
      import('./components/progress/line-bar/progress-line-bar.module').then(i => i.ProgressLineBarModule),
    data: {
      title: 'Progress Line',
    },
  },
  {
    path: 'components/progress-circle-bar',
    loadChildren: (): Promise<unknown> =>
      import('./components/progress/circle-bar/progress-circle-bar.module').then(
        i => i.ProgressCircleBarModule
      ),
    data: {
      title: 'Progress Circle',
    },
  },
  {
    path: 'components/progress-line-segmented',
    loadChildren: (): Promise<unknown> =>
      import('./components/progress/line-segmented/progress-line-segmented.module').then(
        i => i.ProgressLineSegmentedModule
      ),
    data: {
      title: 'Progress Segmented',
    },
  },
  {
    path: 'components/widget',
    loadChildren: (): Promise<unknown> =>
      import('./components/widget/widget.module').then(i => i.WidgetModule),
    data: {
      title: 'Widget',
    },
  },
  {
    path: 'components/button',
    loadChildren: (): Promise<unknown> =>
      import('./components/buttons/button/button.module').then(i => i.ButtonModule),
    data: {
      title: 'Button',
    },
  },
  {
    path: 'components/split-button',
    loadChildren: (): Promise<unknown> =>
      import('./components/buttons/split-button/split-button.module').then(i => i.SplitButtonModule),
    data: {
      title: 'Split Button',
    },
  },
  {
    path: 'components/tree-button',
    loadChildren: (): Promise<unknown> =>
      import('./components/buttons/tree-button/tree-button.module').then(i => i.TreeButtonModule),
    data: {
      title: 'Tree Button',
    },
  },
  {
    path: 'components/icon-button',
    loadChildren: (): Promise<unknown> =>
      import('./components/buttons/icon-button/icon-button.module').then(i => i.IconButtonModule),
    data: {
      title: 'Icon Button',
    },
  },
  {
    path: 'components/tree',
    loadChildren: (): Promise<unknown> => import('./components/tree/tree.module').then(i => i.TreeModule),
    data: {
      title: 'Tree',
    },
  },
  {
    path: 'components/toggle',
    loadChildren: (): Promise<unknown> =>
      import('./components/toggle/toggle.module').then(i => i.ToggleModule),
    data: {
      title: 'Toggle',
    },
  },
  {
    path: 'components/hint',
    loadChildren: (): Promise<unknown> => import('./components/hint/hint.module').then(i => i.HintModule),
    data: {
      title: 'Hint',
    },
  },
  {
    path: 'components/tooltip',
    loadChildren: (): Promise<unknown> =>
      import('./components/tooltip/tooltip.module').then(i => i.TooltipModule),
    data: {
      title: 'Tooltip',
    },
  },
  {
    path: 'components/confirm-popup',
    loadChildren: (): Promise<unknown> =>
      import('./components/confirm-popup/confirm-popup.module').then(i => i.ConfirmPopupModule),
    data: {
      title: 'Confirm Popup',
    },
  },
  {
    path: 'components/old-icon',
    loadChildren: (): Promise<unknown> =>
      import('./components/icons/old/icon.module').then(i => i.IconModule),
    data: {
      title: 'Old Icon',
    },
  },
  {
    path: 'components/icon',
    loadChildren: (): Promise<unknown> =>
      import('./components/icons/svg/icon.module').then(i => i.IconModule),
    data: {
      title: 'Icon',
    },
  },
  {
    path: 'components/flag-icons',
    loadChildren: (): Promise<unknown> =>
      import('./components/icons/flags/flags.module').then(i => i.FlagsModule),
    data: {
      title: 'Icon Flags',
    },
  },
  {
    path: 'components/scrollbar',
    loadChildren: (): Promise<unknown> =>
      import('./components/scrollbar/scrollbar.module').then(i => i.ScrollbarModule),
    data: {
      title: 'Scrollbar',
    },
  },
  {
    path: 'components/input',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-text/input-example.module').then(i => i.InputExampleModule),
    data: {
      title: 'Input',
    },
  },
  {
    path: 'components/input-chips',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-chips/input-chips-example.module').then(
        i => i.InputChipsExampleModule
      ),
    data: {
      title: 'Input Chips',
    },
  },
  {
    path: 'components/input-date',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-date/input-date.module').then(i => i.InputDateModule),
    data: {
      title: 'Input Date',
    },
  },
  {
    path: 'components/input-month',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-month/input-month.module').then(i => i.InputMonthModule),
    data: {
      title: 'Input Month',
    },
  },
  {
    path: 'components/input-month-range',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-month-range/input-month-range.module').then(
        i => i.InputMonthRangeRangeModule
      ),
    data: {
      title: 'Input Month Range',
    },
  },
  {
    path: 'components/input-date-time-range',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-date-time-range/input-date-time-range.module').then(
        i => i.InputDateTimeRangeModule
      ),
    data: {
      title: 'Input Date Time Range',
    },
  },
  {
    path: 'components/input-date-time',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-date-time/input-date-time.module').then(
        i => i.InputDateTimeTimeModule
      ),
    data: {
      title: 'Input Date Time',
    },
  },
  {
    path: 'components/input-date-multi',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-date-multi/input-date-multi.module').then(i => i.InputDateMultiModule),
    data: {
      title: 'Input Date Multi',
    },
  },
  {
    path: 'components/input-time',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-time/input-time.module').then(i => i.InputTimeTimeModule),
    data: {
      title: 'Input Time',
    },
  },
  {
    path: 'components/input-date-range',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-date-range/input-date-range.module').then(i => i.InputDateRangeModule),
    data: {
      title: 'Input Date Range',
    },
  },
  {
    path: 'components/input-date-relative',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-date-relative/input-date-relative.module').then(
        i => i.InputDateRelativeRelativeModule
      ),
    data: {
      title: 'Input Date Relative',
    },
  },
  {
    path: 'components/input-number',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-number/input-number-example.module').then(
        i => i.InputNumberExampleModule
      ),
    data: {
      title: 'Input Number',
    },
  },
  {
    path: 'components/input-mask',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-mask/input-mask-example.module').then(i => i.InputMaskExampleModule),
    data: {
      title: 'Input Mask',
    },
  },
  {
    path: 'components/input-password',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/input-password/input-password-example.module').then(
        i => i.InputPasswordExampleModule
      ),
    data: {
      title: 'Input Password',
    },
  },
  {
    path: 'components/carousel',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/carousel/carousel-example.module').then(i => i.CarouselExampleModule),
    data: {
      title: 'Carousel',
    },
  },
  {
    path: 'components/textarea',
    loadChildren: (): Promise<unknown> =>
      import('./components/input/textarea/textarea-example.module').then(i => i.TextareaExampleModule),
    data: {
      title: 'Textarea',
    },
  },
  {
    path: 'components/loader',
    loadChildren: (): Promise<unknown> =>
      import('./components/loader/loader.module').then(i => i.LoaderModule),
    data: {
      title: 'Loader',
    },
  },
  {
    path: 'components/dialogs/dialog',
    loadChildren: (): Promise<unknown> =>
      import('./components/dialogs/dialog/dialog.module').then(i => i.DialogModule),
    data: {
      title: 'Dialog',
    },
  },
  {
    path: 'components/dialogs/sidebar',
    loadChildren: (): Promise<unknown> =>
      import('./components/dialogs/sidebar/sidebar.module').then(i => i.SidebarModule),
    data: {
      title: 'Sidebar',
    },
  },
  {
    path: 'components/dialogs/confirm-dialog',
    loadChildren: (): Promise<unknown> =>
      import('./components/dialogs/confirm-dialog/confirm.module').then(i => i.ConfirmModule),
    data: {
      title: 'Confirm Dialog',
    },
  },
  {
    path: 'components/toast',
    loadChildren: (): Promise<unknown> => import('./components/toast/toast.module').then(i => i.ToastModule),
    data: {
      title: 'Toast',
    },
  },
  {
    path: 'components/indicators',
    loadChildren: (): Promise<unknown> =>
      import('./components/indicators/indicators-example.module').then(i => i.IndicatorsExampleModule),
    data: {
      title: 'Indicators',
    },
  },
  {
    path: 'components/paginator',
    loadChildren: (): Promise<unknown> =>
      import('./components/paginator/paginator-example.module').then(i => i.PaginatorExampleModule),
    data: {
      title: 'Paginator',
    },
  },
  {
    path: 'components/checkbox',
    loadChildren: (): Promise<unknown> =>
      import('./components/checkbox/checkbox-example.module').then(i => i.CheckboxExampleModule),
    data: {
      title: 'Checkbox',
    },
  },
  {
    path: 'components/radio-button',
    loadChildren: (): Promise<unknown> =>
      import('./components/radio/radio-button-example.module').then(i => i.RadioButtonExampleModule),
    data: {
      title: 'Radio-button',
    },
  },
  {
    path: 'components/panel',
    loadChildren: (): Promise<unknown> =>
      import('./components/panel/panel-example.module').then(i => i.PanelExampleModule),
    data: {
      title: 'Panel',
    },
  },
  {
    path: 'components/tabs',
    loadChildren: (): Promise<unknown> =>
      import('./components/tabs/tabs-example.module').then(i => i.TabsExampleModule),
    data: {
      title: 'Tabs',
    },
  },
  {
    path: 'components/breadcrumbs',
    loadChildren: (): Promise<unknown> =>
      import('./components/breadcrumbs/breadcrumbs-example.module').then(i => i.BreadcrumbsExampleModule),
    data: {
      title: 'Breadcrumbs',
    },
  },
  {
    path: 'components/table',
    loadChildren: (): Promise<unknown> =>
      import('./components/table/table-example.module').then(i => i.TableExampleModule),
    data: {
      title: 'Table',
    },
  },
  {
    path: 'components/table-old',
    loadChildren: (): Promise<unknown> =>
      import('./components/table-old/table-example-old.module').then(i => i.TableExampleOldModule),
    data: {
      title: 'Table',
    },
  },
  {
    path: 'components/accordion',
    loadChildren: (): Promise<unknown> =>
      import('./components/accordion/accordion-example.module').then(i => i.AccordionExampleModule),
    data: {
      title: 'Accordion',
    },
  },
  {
    path: 'tools/overlay',
    loadChildren: (): Promise<unknown> => import('./tools/overlay/overlay.module').then(i => i.OverlayModule),
    data: {
      title: 'Overlay',
    },
  },
  {
    path: 'tools/ast',
    loadChildren: (): Promise<unknown> => import('./tools/ast/ast.module').then(i => i.AstModule),
    data: {
      title: 'AST',
    },
  },
  {
    path: 'tools/to-observable',
    loadChildren: (): Promise<unknown> =>
      import('./tools/to-observable/to-observable.module').then(i => i.ToObservableModule),
    data: {
      title: 'To Observable',
    },
  },
  {
    path: 'tools/observable',
    loadChildren: (): Promise<unknown> =>
      import('./tools/observable/observable.module').then(i => i.ObservableModule),
    data: {
      title: 'Observable',
    },
  },
  {
    path: 'tools/auto-emit',
    loadChildren: (): Promise<unknown> =>
      import('./tools/auto-emit/auto-emit.module').then(i => i.AutoEmitModule),
    data: {
      title: 'Auto Emit',
    },
  },
  {
    path: 'tools/theme-service',
    loadChildren: (): Promise<unknown> =>
      import('./tools/theme-service/theme.module').then(i => i.ThemeModule),
    data: {
      title: 'Theme Service',
    },
  },
  {
    path: 'tools/theme',
    loadChildren: (): Promise<unknown> =>
      import('./tools/inverted-theme/inverted-theme.module').then(i => i.InvertedThemeModule),
    data: {
      title: 'Theme Module',
    },
  },
  {
    path: 'tools/polymorph',
    loadChildren: (): Promise<unknown> =>
      import('./tools/polymorph/polymorph.module').then(i => i.ExamplePolymorphModule),
    data: {
      title: 'Polymorph',
    },
  },
  // CHARTS
  {
    path: 'charts/line',
    loadChildren: (): Promise<unknown> => import('./charts/line/line.module').then(i => i.LineModule),
    data: {
      title: 'Line',
    },
  },
  {
    path: 'charts/area',
    loadChildren: (): Promise<unknown> => import('./charts/area/area.module').then(i => i.AreaModule),
    data: {
      title: 'Area',
    },
  },
  {
    path: 'charts/column-group',
    loadChildren: (): Promise<unknown> => import('./charts/column/column.module').then(i => i.ColumnModule),
    data: {
      title: 'Column',
    },
  },
  {
    path: 'charts/bar',
    loadChildren: (): Promise<unknown> => import('./charts/bar/bar.module').then(i => i.BarModule),
    data: {
      title: 'Bar',
    },
  },
  {
    path: 'charts/pie',
    loadChildren: (): Promise<unknown> => import('./charts/pie/pie.module').then(i => i.PieModule),
    data: {
      title: 'Pie',
    },
  },
  {
    path: 'charts/radar',
    loadChildren: (): Promise<unknown> => import('./charts/radar/radar.module').then(i => i.RadarModule),
    data: {
      title: 'Radar',
    },
  },
  {
    path: 'charts/scatter',
    loadChildren: (): Promise<unknown> =>
      import('./charts/scatter/scatter.module').then(i => i.ScatterModule),
    data: {
      title: 'Scatter',
    },
  },
  {
    path: 'charts/treemap',
    loadChildren: (): Promise<unknown> =>
      import('./charts/treemap/treemap.module').then(i => i.TreemapModule),
    data: {
      title: 'Treemap',
    },
  },
  {
    path: 'charts/gauge',
    loadChildren: (): Promise<unknown> => import('./charts/gauge/gauge.module').then(i => i.GaugeModule),
    data: {
      title: 'Gauge',
    },
  },
  {
    path: 'charts/radial-bar',
    loadChildren: (): Promise<unknown> =>
      import('./charts/radial-bar/radial-bar.module').then(i => i.RadialBarModule),
    data: {
      title: 'Radial Bar',
    },
  },
  {
    path: 'charts/waterfall',
    loadChildren: (): Promise<unknown> =>
      import('./charts/waterfall/waterfall.module').then(i => i.WaterfallModule),
    data: {
      title: 'Waterfall',
    },
  },
  {
    path: 'components/side-menu',
    loadChildren: (): Promise<unknown> =>
      import('./components/side-menu/side-menu-example.module').then(i => i.SideMenuExampleModule),
    data: {
      title: 'Side menu',
    },
  },
  {
    path: 'components/nav-menu',
    loadChildren: (): Promise<unknown> =>
      import('./components/nav-menu/nav-menu-example.module').then(i => i.NavMenuExampleModule),
    data: {
      title: 'Navigation menu (deprecated)',
    },
  },
  {
    path: 'components/navigation-menu',
    loadChildren: (): Promise<unknown> =>
      import('./components/navigation-menu/navigation-menu-example.module').then(
        i => i.NavigationMenuExampleModule
      ),
    data: {
      title: 'Navigation menu',
    },
  },
  {
    path: 'components/navigation',
    loadChildren: (): Promise<unknown> =>
      import('./components/navigation/navigation-example.module').then(i => i.NavigationExampleModule),
    data: {
      title: 'Navigation',
    },
  },
  {
    path: 'components/switcher',
    loadChildren: (): Promise<unknown> =>
      import('./components/switcher/switcher-example.module').then(i => i.SwitcherExampleModule),
    data: {
      title: 'Switcher',
    },
  },
  {
    path: 'components/calendar',
    loadChildren: (): Promise<unknown> =>
      import('./components/calendars/calendar/calendar.module').then(i => i.CalendarModule),
    data: {
      title: 'Calendar',
    },
  },
  {
    path: 'components/calendar-month',
    loadChildren: (): Promise<unknown> =>
      import('./components/calendars/calendar-month/calendar-month.module').then(
        i => i.ExampleCalendarMonthModule
      ),
    data: {
      title: 'Calendar Month',
    },
  },
  {
    path: 'components/calendar-range',
    loadChildren: (): Promise<unknown> =>
      import('./components/calendars/calendar-range/calendar-range.module').then(i => i.CalendarRangeModule),
    data: {
      title: 'Calendar Range',
    },
  },
  {
    path: 'components/grids',
    loadChildren: (): Promise<unknown> =>
      import('./components/grid/grid-example.module').then(i => i.GridExampleModule),
    data: {
      title: 'Grids',
    },
  },
  {
    path: 'components/zoom-control',
    loadChildren: (): Promise<unknown> =>
      import('./components/zoom-control/zoom-control-example.module').then(i => i.ZoomControlExampleModule),
    data: {
      title: 'Zoom Control',
    },
  },
  {
    path: 'components/stepper',
    loadChildren: (): Promise<unknown> =>
      import('./components/stepper/stepper-example.module').then(i => i.PrizmStepperExampleModule),
    data: {
      title: 'Stepper',
    },
  },
  {
    path: 'components/splitter',
    loadChildren: (): Promise<unknown> =>
      import('./components/splitter/splitter-example.module').then(i => i.PrizmSpliiterExampleModule),
    data: {
      title: 'Splitter',
    },
  },
  {
    path: 'components/slider',
    loadChildren: (): Promise<unknown> =>
      import('./components/slider/slider.module').then(i => i.PrizmSliderExampleModule),
    data: {
      title: 'Slider',
    },
  },
  {
    path: 'components/cron',
    loadChildren: (): Promise<unknown> => import('./components/cron/cron.module').then(i => i.CronModule),
    data: {
      title: 'Cron',
    },
  },
  {
    path: 'components/error-page',
    loadChildren: (): Promise<unknown> =>
      import('./components/error-page/error-page.module').then(i => i.PrizmErrorPageExampleModule),
    data: {
      title: 'Error page',
    },
  },
  {
    path: 'components/file-upload',
    loadChildren: (): Promise<unknown> =>
      import('./components/file-upload/file-upload-example.module').then(i => i.PrizmFileUploadExampleModule),
    data: {
      title: 'File upload',
    },
  },
  { path: '**', redirectTo: 'how-to-work/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutes {}
