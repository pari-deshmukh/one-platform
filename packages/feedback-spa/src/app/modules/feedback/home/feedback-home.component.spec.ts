import { ComponentFixture, TestBed } from '@angular/core/testing';

// import all the dependent components
import { FeedbackHomeComponent } from './feedback-home.component';
import { FeedbackItemComponent } from '../feedback-item/feedback-item.component';

// import all the dependent services
import { FeedbackService } from '../feedback.service';

// import all the dependent modules
import { of } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';

// import all the dependent mocks
import { FeedbackMock } from '../testing/mocks/feedback.mock';
import { NgPipesModule } from 'ng-pipes';

describe('FeedbackHomeComponent', () => {
  let component: FeedbackHomeComponent;
  let fixture: ComponentFixture<FeedbackHomeComponent>;
  let getAllFeedbackSpy;
  // Create a feedbackService mock
  const feedbackService = { getAllFeedback: jest.fn() };
  getAllFeedbackSpy = feedbackService.getAllFeedback.mockReturnValue(of([FeedbackMock]));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeedbackHomeComponent,
        FeedbackItemComponent
      ],
      imports: [
        NgxPaginationModule,
        NgPipesModule
        
      ],
      providers: [
        
        { provide: FeedbackService, useValue: feedbackService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackHomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});