import { TestBed } from '@angular/core/testing';

import { AuthenticationInterceptorTsService } from './authentication.interceptor.ts.service';

describe('AuthenticationInterceptorTsService', () => {
  let service: AuthenticationInterceptorTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationInterceptorTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
