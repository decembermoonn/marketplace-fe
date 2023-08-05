import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService extends ErrorHandler {
  override handleError(error: unknown): void {
    if (error instanceof HttpErrorResponse) {
      // todo - implement
      // Will not be invoked when component / service handles error itself, which is desired
      console.log('Global HTTP error handling');
    } else {
      return super.handleError(error);
    }
  }
}
