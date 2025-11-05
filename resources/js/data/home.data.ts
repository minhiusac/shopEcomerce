export const categories = [
    { id: 1, name: 'Điện thoại', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, name: 'Laptop', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, name: 'Thời trang', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop' },
    { id: 4, name: 'Gia dụng', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop' },
    { id: 5, name: 'Phụ kiện', image: 'https://images.unsplash.com/photo-1518444028785-8f5fa4c37f22?q=80&w=1200&auto=format&fit=crop' },
    { id: 6, name: 'Gaming', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop' },
];

export const featuredProducts = new Array(8).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Sản phẩm nổi bật ${i + 1}`,
    price: 199000 + i * 12000,
    image: `https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200&auto=format&fit=crop#${i}`,
}));

export const flashSaleProducts = new Array(4).fill(null).map((_, i) => ({
    id: i + 101,
    name: `Flash sale ${i + 1}`,
    price: 299000 + i * 50000,
    image: `https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop#fs${i}`,
    discount: 30,
}));

export const blogs = [
    {
        id: 1,
        title: 'Mẹo chọn điện thoại phù hợp cho công việc',
        excerpt: 'Những tiêu chí cần biết khi chọn smartphone cho nhu cầu làm việc và giải trí.',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Các xu hướng thời trang 2025',
        excerpt: 'Cập nhật xu hướng mới nhất giúp bạn luôn nổi bật và tự tin.',
        image: 'https://images.unsplash.com/photo-1520975922284-9f8a9a0bb119?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Gợi ý setup góc làm việc tối giản',
        excerpt: 'Bố trí không gian làm việc hiệu quả với ngân sách hợp lý.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },
];

export const feedbacks = [
    { id: 1, name: 'Nguyễn Minh', avatar: 'https://i.pravatar.cc/100?img=13', content: 'Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm đúng mô tả!' },
    { id: 2, name: 'Trần Thảo', avatar: 'https://i.pravatar.cc/100?img=32', content: 'Chất lượng rất tốt so với tầm giá. Hỗ trợ khách hàng nhiệt tình.' },
    { id: 3, name: 'Lê Quân', avatar: 'https://i.pravatar.cc/100?img=5', content: 'Mình đã mua nhiều lần, đều rất hài lòng. Sẽ ủng hộ dài lâu.' },
];



