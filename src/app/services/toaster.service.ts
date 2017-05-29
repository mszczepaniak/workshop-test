import {Injectable} from '@angular/core';

declare const toastr: any;

@Injectable()
export class ToasterService {
  success(message: string, title?: string) {
    toastr.success(message, title);
  }
}
