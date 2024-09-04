import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {

    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule],
            // declarations: [LikeWidgetComponent],
            // providers: [UniqueIdService],
            // imports: [],    // se tiver algum modulo que o componente dependa
            //                 // pode importar somente o módulo, que ja vai vir com as declarations e providers
        }).compileComponents();      // independente do build que vc usar

        // TestBed.configureTestingModule({
        //     declarations: [LikeWidgetComponent],
        // });     // funciona com o webpack, que trabalha inline

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance;

    });    

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
        fixture.detectChanges();    // vai chamar o ngOnInit -- nao colocar no beforeEach
        expect(component.id).toBeTruthy();
    });

    it('Should NOT auto-generate ID during ngOnInit when (@Input id) property is assigned', () => {
        const someId = 'someId';
        component.id = someId;
        fixture.detectChanges();    // vai chamar o ngOnInit -- nao colocar no beforeEach
        expect(component.id).toBe(someId);
    });

    it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
        //fixture.detectChanges();

        // // primeiro assina o observable e depois emite o evento (like)
        // component.liked.subscribe(() => {
        //     expect(true).toBeTrue();
        //     done();    // para garantir que o teste vai esperar a execução do subscribe
        // });
        // component.like();

        // ou

        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();

    });

});