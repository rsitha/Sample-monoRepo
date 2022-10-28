// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { MyLibComponent } from './my-lib.component';

// describe('MyLibComponent', () => {
//   let component: MyLibComponent;
//   let fixture: ComponentFixture<MyLibComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ MyLibComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MyLibComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { MyLibComponent } from './my-lib.component';

import { beforeEach, bootstrap, describe, getEl, it, setupModule } from '@angular/catalyst';

describe('MyLibComponent', () => {
  beforeEach(() => {
    setupModule({
      declarations: [MyLibComponent],
    });
  });

  it('should create the app', () => {
    const app = bootstrap(MyLibComponent);
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-lib'`, () => {
    const app = bootstrap(MyLibComponent);
    // expect(app.title).toEqual('my-lib');
  });

  it('should render title', () => {
    bootstrap(MyLibComponent);
    expect(getEl('.content span')?.textContent).toContain('my-lib app is running!');
  });
});
