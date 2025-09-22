import { useEffect, useRef, useState } from "react";
import '../../index.css'

export default function FloatingBlob({
                                         size = 420,             // базовый размер круга в px
                                         blur = 120,             // степень блюра в px
                                         color = "rgba(120, 180, 255, 0.75)", // цвет «ядра» круга
                                         fade = 0.15,            // прозрачность краёв
                                         minSec = 18,            // минимальная длительность перелёта (сек)
                                         maxSec = 32,            // максимальная длительность перелёта (сек)
                                     }) {
    const ref = useRef(null);
    const [style, setStyle] = useState({ transform: "translate3d(0,0,0)" });

    // случайная позиция так, чтобы круг полностью помещался в окне
    const randomTarget = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const s = size;
        const x = Math.random() * (w - s) + s / 2;
        const y = Math.random() * (h - s) + s / 2;
        return { x, y };
    };

    const move = () => {
        const { x, y } = randomTarget();
        const dur = (minSec + Math.random() * (maxSec - minSec)).toFixed(2);
        setStyle({
            transform: `translate3d(${x}px, ${y}px, 0) scale(${0.95 + Math.random() * 0.1})`,
            transition: `transform ${dur}s cubic-bezier(.22,.61,.36,1)`,
        });
    };

    useEffect(() => {
        // начальная позиция и старт
        move();
        // новое направление после завершения каждой анимации
        const el = ref.current;
        const handler = () => move();
        el?.addEventListener("transitionend", handler);
        // адаптация к ресайзу
        const onResize = () => move();
        window.addEventListener("resize", onResize);
        return () => {
            el?.removeEventListener("transitionend", handler);
            window.removeEventListener("resize", onResize);
        };
    }, []); // один раз

    return (
        <div className="blob-root" aria-hidden>
            <div
                ref={ref}
                className="blob"
                style={{
                    ...style,
                    width: size,
                    height: size,
                    // цвет ядра + мягкие края через radial-gradient
                    background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,${fade}) 70%, transparent 100%)`,
                    filter: `blur(${blur}px)`,
                }}
            />
        </div>
    );
}