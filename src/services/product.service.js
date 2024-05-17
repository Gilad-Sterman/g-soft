export const productService = {
    getProducts,
    getInfo
}

const products = [
    {
        SKU: 123,
        name: 'product1',
        amount: 2,
        price: 50,
        Vat: '17%',
        isSelcted: false
    },
    {
        SKU: 124,
        name: 'product2',
        amount: 6,
        price: 36,
        Vat: '17%',
        isSelcted: false
    },
    {
        SKU: 125,
        name: 'product3',
        amount: 3.4,
        price: 5.9,
        Vat: '17%',
        isSelcted: true
    },
    {
        SKU: 126,
        name: 'product4',
        amount: 1.21,
        price: 38.95,
        Vat: '17%',
        isSelcted: false
    },
    {
        SKU: 127,
        name: 'product5',
        amount: 2.13,
        price: 58.39,
        Vat: '17%',
        isSelcted: true
    },
    {
        SKU: 128,
        name: 'product6',
        amount: 3.18,
        price: 18.99,
        Vat: '17%',
        isSelcted: false
    },
]

const info = [
    {
        title: 'Sales',
        isPrice: true,
        info: 167329.5
    },
    {
        title: 'Total Items',
        isPrice: false,
        info: 14395
    },
    {
        title: 'Total Profit',
        isPrice: true,
        info: 167329.5
    },
]

async function getProducts() {
    return new Promise(resolve => setTimeout(() => resolve(products), 500))
}

async function getInfo() {
    return new Promise(resolve => setTimeout(() => resolve(info), 300))
}