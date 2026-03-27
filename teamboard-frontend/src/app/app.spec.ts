import { TestBed } from '@angular/core/testing';
import { App } from './app.component'; // Zmieniono import z './app' na './app.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Wymagane, bo komponent używa AdService
import { FormsModule } from '@angular/forms'; // Wymagane, bo używasz ngModel

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
        HttpClientTestingModule,
        FormsModule
      ], // Dodano moduły testowe dla HTTP i formularzy
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // Wymusza odświeżenie widoku
    const compiled = fixture.nativeElement as HTMLElement;
    // Zmieniono tekst na 'CoffeeBoard', bo taki masz w pliku app.html
    expect(compiled.querySelector('h1')?.textContent).toContain('CoffeeBoard');
  });
});
