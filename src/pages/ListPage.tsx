import React, { useState, useEffect } from 'react';
import './ListPage.css';

interface Product {
    title: string;
    description: string;
}

const ListPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Mock data
        const mockProducts: Product[] = [
            { title: 'Product 1', description: 'Description for Product 1' },
            { title: 'Product 2', description: 'Description for Product 2' },
            { title: 'Product 3', description: 'Description for Product 3' },
            { title: 'Product 4', description: 'Description for Product 4' },
            { title: 'Product 5', description: 'Description for Product 5' },
            { title: 'Product 6', description: 'Description for Product 6' },
            { title: 'Product 7', description: 'Description for Product 7' },
            { title: 'Product 8', description: 'Description for Product 8' },
            { title: 'Product 9', description: 'Description for Product 9' },
            { title: 'Product 10', description: 'Description for Product 10' },
            { title: 'Product 11', description: 'Description for Product 11' },
            { title: 'Product 12', description: 'Description for Product 12' },
            { title: 'Product 13', description: 'Description for Product 13' },
            { title: 'Product 14', description: 'Description for Product 14' },
            { title: 'Product 15', description: 'Description for Product 15' },
        ];

        setProducts(mockProducts);
    }, []);

    return (
        <div>
            <header className="product-header">
                <h1>Product Details</h1>
            </header>
        <div className="product-list-container">
            {products.map((product, index) => (
                <div key={index} className="product-item">
                    <div className="product-title">
                        {product.title}
                    </div>
                    <div className="product-description">
                        {product.description}
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ListPage;
