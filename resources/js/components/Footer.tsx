import { Link } from '@inertiajs/react';
import { GlobeAltIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">ShopX</h3>
                        <p className="mt-3 text-sm text-gray-600">
                            Nền tảng thương mại điện tử mang đến trải nghiệm mua sắm tiện lợi, nhanh chóng và an toàn.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">Điều hướng</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                            <li><Link href="/gioi-thieu" className="text-gray-600 hover:text-gray-900">Giới thiệu</Link></li>
                            <li><Link href="/lien-he" className="text-gray-600 hover:text-gray-900">Liên hệ</Link></li>
                            <li><Link href="/gio-hang" className="text-gray-600 hover:text-gray-900">Giỏ hàng</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">Hỗ trợ</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><Link href="/ho-tro/huong-dan-mua-hang" className="text-gray-600 hover:text-gray-900">Hướng dẫn mua hàng</Link></li>
                            <li><Link href="/ho-tro/van-chuyen" className="text-gray-600 hover:text-gray-900">Vận chuyển</Link></li>
                            <li><Link href="/ho-tro/doi-tra" className="text-gray-600 hover:text-gray-900">Đổi trả</Link></li>
                            <li><Link href="/ho-tro/chinh-sach-bao-mat" className="text-gray-600 hover:text-gray-900">Chính sách bảo mật</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">Kết nối</h4>
                        <div className="mt-3 flex items-center space-x-3">
                            <a href="#" aria-label="Website" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300">
                                <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a href="mailto:support@shopx.vn" aria-label="Email" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300">
                                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a href="tel:19001234" aria-label="Hotline" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300">
                                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">Email: support@shopx.vn</p>
                        <p className="mt-1 text-sm text-gray-600">Hotline: 1900 1234</p>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} ShopX. All rights reserved.</p>
                    <div className="mt-3 sm:mt-0 flex items-center space-x-4 text-sm">
                        <Link href="/dieu-khoan" className="text-gray-600 hover:text-gray-900">Điều khoản</Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/chinh-sach-bao-mat" className="text-gray-600 hover:text-gray-900">Bảo mật</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}


