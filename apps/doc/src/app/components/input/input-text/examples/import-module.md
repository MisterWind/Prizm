```ts
import { NgModule } from '@angular/core';
import { InputModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ...

@NgModule({
  imports: [
    // ...
    ReactiveFormsModule,
    FormsModule,
    InputModule,
  ],
})
export class MyModule {}
```
