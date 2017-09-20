import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookDownloadComponent } from './ebook-download.component';

describe('EbookDownloadComponent', () => {
  let component: EbookDownloadComponent;
  let fixture: ComponentFixture<EbookDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
