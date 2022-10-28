import {HttpHeaders} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
// TODO(dilipsarkar): Imports to be updated later when available
// import {STACKDRIVER_CONFIG} from
// 'google3/lifescience/lims/clinical/ui/error_handler/error_handler';
// import {GoogleSigninService} from
// 'google3/lifescience/lims/ui/gapi/google_signin_service';
import {of as observableOf} from 'rxjs';

import {AppModule} from './app.module';
// import {DataService} from './data.service';
// import {DataServiceMock} from './data_service_mock';

/** Module to use in tests with default mocks and stubs provided. */
@NgModule({
  imports: [
    AppModule,
    RouterTestingModule,
    NoopAnimationsModule,
  ],
  providers: [
    // {
    //   provide: GoogleSigninService,
    //   useValue: {
    //     emails: observableOf('test-user@google.com'),
    //     isSignedIn: observableOf(true),
    //     authHeaders: observableOf(new HttpHeaders()),
    //     profileImages: observableOf(''),
    //   },
    // },
    // {provide: STACKDRIVER_CONFIG, useValue: undefined},
    // {provide: DataService, useClass: DataServiceMock},
  ],
})
export class TestModule {
}
