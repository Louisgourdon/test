import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule.withRoutes([])],

    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to User component on User button click',() => {
    const userButton = fixture.nativeElement.querySelector('[routerLink="/user"]');
    userButton.click();
    fixture.detectChanges();
    expect(router.url).toBe('/user');
  });

 /* it('should navigate to Admin component on Admin button click', () => {
    const adminButton = fixture.nativeElement.querySelector('[routerLink="/admin"]');
    adminButton.click();
    fixture.detectChanges();
    expect(router.url).toBe('/admin');
  });

  it('should navigate to Anonymous component on Anonymous button click', () => {
    const anonymousButton = fixture.nativeElement.querySelector('[routerLink="/anonymous"]');
    anonymousButton.click();
    fixture.detectChanges();
    expect(router.url).toBe('/anonymous');
  });*/
});
