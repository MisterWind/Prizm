import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {
  PolymorphModule,
  ZuiButtonModule,
  ZuiDataListModule,
  ZuiDropdownHostModule
} from "@digital-plant/zui-components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownHostComponent} from "./dropdown-host.component";
import {ZuiDropdownHostExampleWithTemplateComponent} from "./examples/with-template/template";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiDataListModule,
    ZuiButtonModule,
    ZuiDropdownHostModule,
    RouterModule.forChild(generateRoutes(DropdownHostComponent)),
  ],
  declarations: [
    ZuiDropdownHostExampleWithTemplateComponent,
    DropdownHostComponent
  ],
  exports: [DropdownHostComponent],
})
export class DropdownHostModule {}
