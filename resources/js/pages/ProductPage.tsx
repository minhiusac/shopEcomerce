import { useEffect, useMemo, useState } from 'react';
import '../../css/app.css';
import '../../css/home.css';
import { loadProducts } from '../assets/js/productFilter';

const genders = ['Nam', 'Nữ', 'Unisex'];
const categories = ['Áo', 'Quần', 'Giày', 'Túi', 'Phụ kiện'];
const colors = [
    { key: 'den', label: 'Đen', className: 'bg-black' },
    { key: 'trang', label: 'Trắng', className: 'bg-white border' },
    { key: 'do', label: 'Đỏ', className: 'bg-red-500' },
    { key: 'xanh', label: 'Xanh', className: 'bg-blue-500' },
    { key: 'be', label: 'Be', className: 'bg-amber-200' },
];
const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const brands = ['Zara', 'Nike', 'Adidas', 'Uniqlo'];
const statuses = ['Mới', 'Giảm giá', 'Còn hàng'];

const formatVnd = (value) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);

export default function ProductPage() {
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        gender: '',
        categories: [],
        colors: [],
        sizes: [],
        priceRange: '',
        brands: [],
        status: [],
    });

    const appliedCount = useMemo(() => {
        const { gender, categories, colors, sizes, priceRange, brands, status } = filters;
        return (
            (gender ? 1 : 0) + categories.length + colors.length + sizes.length + (priceRange ? 1 : 0) + brands.length + status.length
        );
    }, [filters]);

    const handleApply = async () => {
        setLoading(true);
        const query = {
            ...filters,
            gender: filters.gender ? [filters.gender] : [],
        };
        const { items } = await loadProducts(query);
        setProducts(items);
        setLoading(false);
        setMobileFilterOpen(false);
    };

    const handleClear = async () => {
        setFilters({ gender: '', categories: [], colors: [], sizes: [], priceRange: '', brands: [], status: [] });
        setLoading(true);
        const { items } = await loadProducts({});
        setProducts(items);
        setLoading(false);
        setMobileFilterOpen(false);
    };

    useEffect(() => {
        handleApply();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Thời trang</h1>
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm"
                        onClick={() => setMobileFilterOpen((v) => !v)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M6.75 12h10.5M9.75 17.25h4.5" />
                        </svg>
                        Bộ lọc {appliedCount ? `(${appliedCount})` : ''}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Sidebar */}
                    <aside className={`md:col-span-3 ${mobileFilterOpen ? '' : 'hidden md:block'}`}>
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                            {/* Gender */}
                            <FilterBlock title="Giới tính">
                                <div className="space-y-2">
                                    {genders.map((g) => (
                                        <label key={g} className="flex items-center gap-2 text-sm text-gray-700">
                                            <input type="radio" name="gender" className="h-4 w-4" checked={filters.gender === g} onChange={() => setFilters((f) => ({ ...f, gender: g }))} />
                                            {g}
                                        </label>
                                    ))}
                                </div>
                            </FilterBlock>

                            {/* Categories */}
                            <FilterBlock title="Danh mục">
                                <div className="grid grid-cols-2 gap-2">
                                    {categories.map((c) => (
                                        <label key={c} className="flex items-center gap-2 text-sm text-gray-700">
                                            <input type="checkbox" className="h-4 w-4" checked={filters.categories.includes(c)} onChange={(e) => setFilters((f) => ({ ...f, categories: e.target.checked ? [...f.categories, c] : f.categories.filter((x) => x !== c) }))} />
                                            {c}
                                        </label>
                                    ))}
                                </div>
                            </FilterBlock>

                            {/* Colors */}
                            <FilterBlock title="Màu sắc">
                                <div className="flex flex-wrap gap-2">
                                    {colors.map((c) => (
                                        <button
                                            key={c.key}
                                            type="button"
                                            className={`h-7 w-7 rounded-full ring-1 ring-gray-300 ${c.className} ${filters.colors.includes(c.key) ? 'outline outline-2 outline-blue-500' : ''}`}
                                            aria-label={c.label}
                                            onClick={() =>
                                                setFilters((f) => ({
                                                    ...f,
                                                    colors: f.colors.includes(c.key) ? f.colors.filter((x) => x !== c.key) : [...f.colors, c.key],
                                                }))
                                            }
                                        />
                                    ))}
                                </div>
                            </FilterBlock>

                            {/* Sizes */}
                            <FilterBlock title="Kích thước">
                                <div className="grid grid-cols-5 gap-2">
                                    {sizes.map((s) => (
                                        <label key={s} className="flex items-center gap-1 text-xs text-gray-700">
                                            <input type="checkbox" className="h-4 w-4" checked={filters.sizes.includes(s)} onChange={(e) => setFilters((f) => ({ ...f, sizes: e.target.checked ? [...f.sizes, s] : f.sizes.filter((x) => x !== s) }))} />
                                            {s}
                                        </label>
                                    ))}
                                </div>
                            </FilterBlock>

                            {/* Price */}
                            <FilterBlock title="Giá">
                                <div className="grid grid-cols-1 gap-2 text-sm text-gray-700">
                                    {[
                                        { key: '<300', label: 'Dưới 300k' },
                                        { key: '300-700', label: '300k – 700k' },
                                        { key: '700-1000', label: '700k – 1tr' },
                                        { key: '>1000', label: 'Trên 1tr' },
                                    ].map((r) => (
                                        <label key={r.key} className="flex items-center gap-2">
                                            <input type="radio" name="price" className="h-4 w-4" checked={filters.priceRange === r.key} onChange={() => setFilters((f) => ({ ...f, priceRange: r.key }))} />
                                            {r.label}
                                        </label>
                                    ))}
                                </div>
                            </FilterBlock>

                            {/* Brand */}
                            <FilterBlock title="Thương hiệu">
                                <div className="grid grid-cols-2 gap-2">
                                    {brands.map((b) => (
                                        <label key={b} className="flex items-center gap-2 text-sm text-gray-700">
                                            <input type="checkbox" className="h-4 w-4" checked={filters.brands.includes(b)} onChange={(e) => setFilters((f) => ({ ...f, brands: e.target.checked ? [...f.brands, b] : f.brands.filter((x) => x !== b) }))} />
                                            {b}
                                        </label>
                                    ))}
                                </div>
                            </FilterBlock>

                            {/* Status */}
                            <FilterBlock title="Trạng thái">
                                <div className="grid grid-cols-2 gap-2">
                                    {statuses.map((s) => (
                                        <label key={s} className="flex items-center gap-2 text-sm text-gray-700">
                                            <input type="checkbox" className="h-4 w-4" checked={filters.status.includes(s)} onChange={(e) => setFilters((f) => ({ ...f, status: e.target.checked ? [...f.status, s] : f.status.filter((x) => x !== s) }))} />
                                            {s}
                                        </label>
                                    ))}
                                </div>
                            </FilterBlock>

                            <div className="mt-4 flex items-center gap-2">
                                <button type="button" onClick={handleApply} className="btn btn-primary px-4 py-2 rounded-md">Áp dụng</button>
                                <button type="button" onClick={handleClear} className="btn px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700">Xóa lọc</button>
                            </div>
                        </div>
                    </aside>

                    {/* Grid */}
                    <section className="md:col-span-9">
                        {loading ? (
                            <div className="py-20 flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                </svg>
                                <span className="text-gray-600">Đang tải sản phẩm...</span>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {products.map((p) => (
                                    <div key={p.id} className="card product">
                                        <div className="product-media relative">
                                            {p.sale && (
                                                <span className="badge-sale">-{p.discount || Math.round((1 - p.salePrice / p.price) * 100)}%</span>
                                            )}
                                            <img src={p.image} alt={p.name} className="img-cover" />
                                            <div className="product-actions">
                                                <button className="icon-btn add-cart" aria-label="Thêm giỏ hàng">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path d="M3 3h2l2.4 12.01a2 2 0 0 0 1.973 1.64H17a2 2 0 0 0 1.962-1.61L20 8H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                        <circle cx="9.5" cy="20" r="1.5" fill="currentColor" />
                                                        <circle cx="17" cy="20" r="1.5" fill="currentColor" />
                                                    </svg>
                                                </button>
                                                <button className="icon-btn wish" aria-label="Yêu thích">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="product-name">{p.name}</h3>
                                            {p.sale && p.salePrice ? (
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="product-price text-red-600">{formatVnd(p.salePrice)}</span>
                                                    <span className="text-gray-400 line-through text-xs">{formatVnd(p.price)}</span>
                                                </div>
                                            ) : (
                                                <p className="product-price">{formatVnd(p.price)}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}

function FilterBlock({ title, children }) {
    const [open, setOpen] = useState(true);
    return (
        <div className="border-b border-gray-100 py-3 first:pt-0 last:border-0">
            <button type="button" onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between text-left">
                <span className="text-sm font-semibold text-gray-900">{title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-4 w-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            {open && <div className="mt-3">{children}</div>}
        </div>
    );
}


