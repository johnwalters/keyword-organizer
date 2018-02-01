import { Injectable } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'angular-web-storage';

@Injectable()
export class StorageService {
  constructor(public local: LocalStorageService) {}

  set(key: string, value: any) {
    this.local.set(key, value);
  }

  remove(key: string) {
    this.local.remove(key);
  }

  get(key: string) {
    return this.local.get(key);
  }

  clear() {
    this.local.clear();
  }
}
