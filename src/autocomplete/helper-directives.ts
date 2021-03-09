import { Directive } from '@angular/core';

@Directive({
  selector: '[auiSuggestionGroupTitle]',
  exportAs: 'auiSuggestionGroupTitle',
  host: {
    '[class.aui-suggestion-group__title]': 'true',
  },
})
export class SuggestionGroupTitleDirective {}
