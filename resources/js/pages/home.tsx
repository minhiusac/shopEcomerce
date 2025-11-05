import '../../css/home.css';
import { useAutoCarousel, useTodayCountdown, formatVnd } from '../utils/format';
import { blogs, categories, featuredProducts, flashSaleProducts, feedbacks } from '../data/home.data';

export default function Home() {
    const { hours, minutes, seconds } = useTodayCountdown();
    const heroRef = useAutoCarousel();

    return (
        <main className="bg-gray-50">
            {/* Hero */}
            <section className="section hero">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="hero-wrap">
                        <h1 className="hero-title">
                            Mua sắm mọi thứ bạn cần
                            <br className="hidden md:block" />
                            <span className="hero-em"> nhanh, tiện, giá tốt</span>
                        </h1>
                        <p className="hero-desc">Hàng ngàn sản phẩm chính hãng, khuyến mãi mỗi ngày, giao nhanh trong 2h.</p>
                        <div className="mt-6">
                            <a href="#featured" className="btn btn-primary btn-lg" aria-label="Mua ngay">Mua ngay</a>
                        </div>
                    </div>
                    <div>
                        <div ref={heroRef} className="hero-carousel">
                            {[
                                'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1920&auto=format&fit=crop',
                                'https://images.unsplash.com/photo-1548286978-f218c6ca0492?q=80&w=1920&auto=format&fit=crop',
                                'https://images.unsplash.com/photo-1515165562835-c3b8c4f0b09f?q=80&w=1920&auto=format&fit=crop',
                            ].map((src, i) => (
                                <img key={src} data-slide src={src} alt={`Banner ${i + 1}`} className="hero-slide" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">Danh mục nổi bật</h2>
                        <a href="#" className="link">Xem tất cả</a>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
                        {categories.map((c) => (
                            <a key={c.id} href="#" className="card cat">
                                <div className="cat-media"><img src={c.image} alt={c.name} className="img-cover" /></div>
                                <div className="p-3 text-center"><p className="cat-name">{c.name}</p></div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured products */}
            <section id="featured" className="section bg-white">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">Sản phẩm nổi bật</h2>
                        <a href="#" className="link">Xem thêm</a>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {featuredProducts.map((p) => (
                            <div key={p.id} className="card product">
                                <div className="product-media">
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
                                    <p className="product-price">{formatVnd(p.price)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flash sale */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">Flash Sale hôm nay</h2>
                        <div className="countdown" aria-label="Đếm ngược">
                            <span className="countdown-box">{String(hours).padStart(2, '0')}</span>
                            <span className="countdown-sep">:</span>
                            <span className="countdown-box">{String(minutes).padStart(2, '0')}</span>
                            <span className="countdown-sep">:</span>
                            <span className="countdown-box">{String(seconds).padStart(2, '0')}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {flashSaleProducts.map((p) => (
                            <div key={p.id} className="card product ring-red-200 hover:ring-red-200">
                                <div className="product-media">
                                    <span className="badge-sale">-{p.discount}%</span>
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
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="product-price text-red-600">{formatVnd(Math.round(p.price * (1 - p.discount / 100)))}</span>
                                        <span className="text-gray-400 line-through text-xs">{formatVnd(p.price)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">Tin mới</h2>
                        <a href="#" className="link">Xem tất cả</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {blogs.map((b) => (
                            <article key={b.id} className="card">
                                <div className="ratio-16x9"><img src={b.image} alt={b.title} className="img-cover" /></div>
                                <div className="p-5">
                                    <h3 className="article-title">{b.title}</h3>
                                    <p className="article-excerpt">{b.excerpt}</p>
                                    <a href="#" className="link mt-3 inline-flex">Đọc thêm →</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feedback */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Khách hàng nói gì?</h2>
                    <div className="feedback-rail">
                        {feedbacks.map((f) => (
                            <div key={f.id} className="feedback-card">
                                <div className="flex items-center gap-3">
                                    <img src={f.avatar} alt={f.name} className="h-10 w-10 rounded-full object-cover" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{f.name}</p>
                                        <p className="text-xs text-gray-500">Khách hàng</p>
                                    </div>
                                </div>
                                <p className="mt-3 text-gray-700 text-sm">“{f.content}”</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <div>
                        <h2 className="cta-title">Nhận ưu đãi sớm nhất</h2>
                        <p className="cta-desc">Đăng ký email để không bỏ lỡ Flash Sale và mã giảm giá độc quyền.</p>
                    </div>
                    <form className="w-full">
                        <div className="flex rounded-md shadow-sm overflow-hidden">
                            <input type="email" className="cta-input" placeholder="Nhập email của bạn" />
                            <button type="button" className="cta-button">Đăng ký</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}


