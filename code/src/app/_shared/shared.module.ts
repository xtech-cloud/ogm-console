import { NgModule } from '@angular/core';
import { SafePipe } from 'app/_pipe/safe.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    SafePipe,
  ],
  exports: [
    SafePipe,
  ],
})
export class SharedModule {}
