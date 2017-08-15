import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Comp1Component } from './jsonLoader.component';

describe('Comp1Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
    ],
      declarations: [
        Comp1Component
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(Comp1Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Load profile');
  }));


 /* it('Price should be four', async(() => {
    const fixture = TestBed.createComponent(Comp1Component);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    const nodeAttributes = compiled.querySelector('#c1').getAttribute("price") as NamedNodeMap;

   // expect(nodeAttributes.getNamedItem('price').value).toEqual(4);

  }));*/


  /*it(`should have as title 'ProtoSvb'`, async(() => {
    const fixture = TestBed.createComponent(Comp1Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ProtoSvb');
  }));

*/
 /* it('should render its name in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Comp1Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Comp 1');
  }));*/
});
