import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

type NavItem = {
    label: string;
    href: string;
};

const productSubItems: NavItem[] = [
    { label: 'Điện thoại', href: '/danh-muc/dien-thoai' },
    { label: 'Thời trang', href: '/danh-muc/thoi-trang' },
    { label: 'Gia dụng', href: '/danh-muc/gia-dung' },
    { label: 'Laptop', href: '/danh-muc/laptop' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductOpenMobile, setIsProductOpenMobile] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left: Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <span className="text-xl font-bold text-gray-900">ShopX</span>
                        </Link>
                    </div>

                    {/* Center: Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
                        <Link
                            href="/"
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition"
                        >
                            Home
                        </Link>

                        {/* Products with hover dropdown */}
                        <div className="relative group">
                            <button
                                type="button"
                                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition inline-flex items-center"
                            >
                                <span>Sản phẩm</span>
                                <ChevronDownIcon className="ml-1 h-4 w-4 text-gray-500" aria-hidden="true" />
                            </button>
                            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg transition-opacity">
                                <ul className="py-2">
                                    {productSubItems.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <Link
                            href="/gioi-thieu"
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition"
                        >
                            Giới thiệu
                        </Link>
                        <Link
                            href="/lien-he"
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition"
                        >
                            Liên hệ
                        </Link>
                    </div>

                    {/* Right: Icons */}
                    <div className="flex items-center space-x-3">
                        <Link
                            href="/gio-hang"
                            aria-label="Giỏ hàng"
                            className="select-none px-2 py-1 rounded-md hover:bg-gray-50 transition text-gray-700 hover:text-gray-900"
                        >
                            <ShoppingCartIcon className="h-6 w-6" />
                        </Link>
                        <Link
                            href="/tai-khoan"
                            aria-label="Tài khoản"
                            className="select-none px-2 py-1 rounded-md hover:bg-gray-50 transition text-gray-700 hover:text-gray-900"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                            onClick={() => setIsMenuOpen((v) => !v)}
                        >
                            {isMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 pb-3">
                        <div className="pt-2 space-y-1">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>

                            {/* Mobile collapsible Products */}
                            <div>
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                                    onClick={() => setIsProductOpenMobile((v) => !v)}
                                    aria-expanded={isProductOpenMobile}
                                >
                                    <span>Sản phẩm</span>
                                    <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform ${isProductOpenMobile ? 'rotate-180' : ''}`} aria-hidden="true" />
                                </button>
                                {isProductOpenMobile && (
                                    <ul className="ml-4 mt-1 space-y-1">
                                        {productSubItems.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <Link
                                href="/gioi-thieu"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Giới thiệu
                            </Link>
                            <Link
                                href="/lien-he"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Liên hệ
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}


