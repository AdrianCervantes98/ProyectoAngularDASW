import { TestBed } from '@angular/core/testing';
import { ProductosService } from '../productos-main/productos.service';


describe('CarritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductosService = TestBed.get(ProductosService);
    expect(service).toBeTruthy();
  });
});
