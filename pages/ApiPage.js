export class ApiPage {

    constructor(request) {

        this.request = request;
        this.baseUrl = 'https://fakestoreapi.com';

    }

    async getAllProducts() {

        return await this.request.get(
            `${this.baseUrl}/products`
        );

    }

    async getSingleProduct(productId) {

        return await this.request.get(
            `${this.baseUrl}/products/${productId}`
        );

    }

    async createProduct(productData) {

        return await this.request.post(
            `${this.baseUrl}/products`,
            {
                data: productData
            }
        );

    }

    async deleteProduct(productId) {

        return await this.request.delete(
            `${this.baseUrl}/products/${productId}`
        );

    }

}