import { useEffect, useMemo, useRef, useState } from 'react';

export const formatVnd = (value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);

export const useTodayCountdown = () => {
    const target = useMemo(() => {
        const t = new Date();
        t.setHours(23, 59, 59, 999);
        return t.getTime();
    }, []);

    const [msLeft, setMsLeft] = useState<number>(() => Math.max(0, target - Date.now()));
    useEffect(() => {
        const id = setInterval(() => setMsLeft(Math.max(0, target - Date.now())), 1000);
        return () => clearInterval(id);
    }, [target]);

    const hours = Math.floor(msLeft / 1000 / 60 / 60);
    const minutes = Math.floor((msLeft / 1000 / 60) % 60);
    const seconds = Math.floor((msLeft / 1000) % 60);
    return { hours, minutes, seconds };
};

export const useAutoCarousel = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let index = 0;
        const timer = setInterval(() => {
            const children = el.querySelectorAll('[data-slide]');
            if (!children.length) return;
            index = (index + 1) % children.length;
            el.scrollTo({ left: (children[index] as HTMLElement).offsetLeft, behavior: 'smooth' });
        }, 4000);
        return () => clearInterval(timer);
    }, []);
    return ref;
};


