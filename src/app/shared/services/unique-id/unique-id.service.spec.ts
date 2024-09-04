import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

    let service: UniqueIdService = null;
    beforeEach(() => {
        service = new UniqueIdService();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix('app');

        expect(id.startsWith('app-')).toBeTrue();   // MAIS USADO - sempre espera tipo LITERAL (const x = true)
        expect(id.startsWith('app-')).toBe(true);   // compara se um valor é igual a outro
        expect(id.startsWith('app-')).toBeTruthy(); // mais genérico (pode ser true, 1, 'true', '1', etc)

    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        should not generate duplicate ids when called multiple times`, () => {
        // const firstId = service.generateUniqueIdWithPrefix('app');
        // const secondId = service.generateUniqueIdWithPrefix('app');
        // expect(firstId).not.toBe(secondId);
        
        const ids = new Set();  // Set ignora duplicidades
        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app'))
        }
        expect(ids.size).toBe(50);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
        should return the number of generated ids when called`, () => {
        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');
        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        should throw when called with empty`, () => {
        const emptyValues = [null, undefined, '', '0', '1'];
        emptyValues.forEach(value => {
            expect(() => service.generateUniqueIdWithPrefix(value))
                .withContext(`Empty value: ${value}`)
                .toThrow();
        });
    })
});