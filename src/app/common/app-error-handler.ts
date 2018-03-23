import { ErrorHandler } from '@angular/core';

// Application Level Error Handler

export class AppErrorHandler implements ErrorHandler {

  handleError(error) {
    alert('Unexpected error occured');
    console.log(error);
  }
}
