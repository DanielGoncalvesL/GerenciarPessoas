import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPessoaPage } from './add-pessoa.page';

describe('AddPessoaPage', () => {
  let component: AddPessoaPage;
  let fixture: ComponentFixture<AddPessoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPessoaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPessoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
