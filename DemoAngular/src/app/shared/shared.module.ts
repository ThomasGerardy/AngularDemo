import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ToTimerPipe } from './pipes/to-timer.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { FormateurCardComponent } from './components/formateur-card/formateur-card.component';



@NgModule({
  declarations: [
    ConvertTempPipe,
    ToFahrenheitPipe,
    ToTimerPipe,
    HighlightDirective,
    FormateurCardComponent
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ToTimerPipe,
    HighlightDirective,
    FormateurCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
