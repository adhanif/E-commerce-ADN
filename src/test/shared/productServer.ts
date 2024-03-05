import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { products } from '../shared/mockData';
import {
  CreateProduct,
  CreateProductMockServer,
  Product,
} from '../../misc/types';

let mockProducts = products;

export const handler = [
  http.get('https://api.escuelajs.co/api/v1/products', () => {
    return HttpResponse.json(mockProducts, { status: 200 });
  }),
  http.post('https://api.escuelajs.co/api/v1/products', async ({ request }) => {
    const product = (await request.json()) as CreateProductMockServer;
    const createdProduct: CreateProductMockServer = {
      ...product,
      id: mockProducts.length + 1,
    };
    return HttpResponse.json(createdProduct, { status: 201 });
  }),

  //   http.delete(
  //     'https://api.escuelajs.co/api/v1/products/:productId',
  //     async ({ request }) => {
  //       const productId = new URL(request.url).searchParams.get('productId');
  //       if (!productId) {
  //         return new HttpResponse(null, { status: 404 });
  //       }
  //       mockProducts.splice(0, 1);
  //       console.log(
  //         'ater delete numbers of items in mock products:',
  //         mockProducts.length,
  //       );
  //       return HttpResponse.json(true, { status: 204 });
  //     },
  //   ),
  http.delete(
    'https://api.escuelajs.co/api/v1/products/:productId',
    async (req) => {
      const id = Number(req.params.productId);

      const productToBeDeleted = mockProducts.find(
        (product) => product.id === id,
      );

      if (productToBeDeleted) {
        mockProducts = mockProducts.filter((product) => product.id !== id);
        return HttpResponse.json(mockProducts, { status: 200 });
      }

      return HttpResponse.json(null, { status: 404 });
    },
  ),
];

export const productServer = setupServer(...handler);
