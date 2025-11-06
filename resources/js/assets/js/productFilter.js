// Mock products for fashion e-commerce
const MOCK_PRODUCTS = [
    { id: 1, name: 'Áo thun Uniqlo U', price: 199000, category: 'Áo', gender: 'Unisex', colors: ['trang', 'den'], sizes: ['S', 'M', 'L'], brand: 'Uniqlo', status: ['Mới'], sale: false, image: 'https://images.unsplash.com/photo-1520975682031-bc1e9e068e66?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, name: 'Quần jeans slim', price: 499000, category: 'Quần', gender: 'Nam', colors: ['xanh', 'den'], sizes: ['M', 'L', 'XL'], brand: 'Zara', status: ['Còn hàng'], sale: true, image: 'https://images.unsplash.com/photo-1519238263530-99bdd11dfbc3?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, name: 'Giày Nike Air', price: 1699000, category: 'Giày', gender: 'Unisex', colors: ['trang', 'do', 'den'], sizes: ['M', 'L', 'XL'], brand: 'Nike', status: ['Giảm giá'], sale: true, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
    { id: 4, name: 'Áo sơ mi Oxford', price: 599000, category: 'Áo', gender: 'Nam', colors: ['trang', 'be'], sizes: ['M', 'L', 'XL', 'XXL'], brand: 'Uniqlo', status: ['Mới'], sale: false, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
    { id: 5, name: 'Váy midi basic', price: 799000, category: 'Phụ kiện', gender: 'Nữ', colors: ['do', 'be'], sizes: ['S', 'M', 'L'], brand: 'Zara', status: ['Còn hàng'], sale: true, image: 'https://images.unsplash.com/photo-1520975432245-54f9f2d16d1a?q=80&w=1200&auto=format&fit=crop' },
    { id: 6, name: 'Giày Adidas Stan Smith', price: 1499000, category: 'Giày', gender: 'Unisex', colors: ['trang', 'xanh'], sizes: ['S', 'M', 'L'], brand: 'Adidas', status: ['Còn hàng'], sale: false, image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop' },
    { id: 7, name: 'Túi đeo Zara mini', price: 599000, category: 'Túi', gender: 'Nữ', colors: ['den', 'be'], sizes: [], brand: 'Zara', status: ['Mới'], sale: false, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop' },
    { id: 8, name: 'Áo hoodie basic', price: 699000, category: 'Áo', gender: 'Unisex', colors: ['den', 'xanh'], sizes: ['S', 'M', 'L', 'XL'], brand: 'Adidas', status: ['Còn hàng'], sale: true, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
    { id: 9, name: 'Thắt lưng da', price: 299000, category: 'Phụ kiện', gender: 'Nam', colors: ['den', 'be'], sizes: [], brand: 'Uniqlo', status: ['Còn hàng'], sale: false, image: 'https://images.unsplash.com/photo-1616406432309-0cf6f311cdf8?q=80&w=1200&auto=format&fit=crop' },
    { id: 10, name: 'Quần short thể thao', price: 399000, category: 'Quần', gender: 'Unisex', colors: ['den', 'xanh'], sizes: ['S', 'M', 'L'], brand: 'Nike', status: ['Còn hàng'], sale: true, image: 'https://images.unsplash.com/photo-1591348278863-2f2d0f6ba89b?q=80&w=1200&auto=format&fit=crop' },
    { id: 11, name: 'Mũ lưỡi trai', price: 199000, category: 'Phụ kiện', gender: 'Unisex', colors: ['den', 'trang'], sizes: [], brand: 'Adidas', status: ['Mới'], sale: false, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' },
    { id: 12, name: 'Túi tote vải', price: 249000, category: 'Túi', gender: 'Unisex', colors: ['trang', 'be'], sizes: [], brand: 'Uniqlo', status: ['Giảm giá'], sale: true, image: 'https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=1200&auto=format&fit=crop' },
];

// Normalizes and applies filters to the mock data
function applyFilters(items, filters) {
    const f = filters || {};
    return items.filter((p) => {
        if (f.gender && f.gender.length && !f.gender.includes(p.gender)) return false;
        if (f.categories && f.categories.length && !f.categories.includes(p.category)) return false;
        if (f.colors && f.colors.length && !p.colors.some((c) => f.colors.includes(c))) return false;
        if (f.sizes && f.sizes.length && !p.sizes.some((s) => f.sizes.includes(s))) return false;
        if (f.brands && f.brands.length && !f.brands.includes(p.brand)) return false;
        if (f.status && f.status.length && !p.status.some((s) => f.status.includes(s))) return false;
        if (f.priceRange) {
            const price = p.price;
            const r = f.priceRange;
            if (r === '<300' && !(price < 300000)) return false;
            if (r === '300-700' && !(price >= 300000 && price <= 700000)) return false;
            if (r === '700-1000' && !(price > 700000 && price <= 1000000)) return false;
            if (r === '>1000' && !(price > 1000000)) return false;
        }
        return true;
    });
}

// Simulated API call
export async function loadProducts(filters) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = applyFilters(MOCK_PRODUCTS, filters);
            resolve({ items: data, total: data.length });
        }, 700);
    });
}

export { MOCK_PRODUCTS };


