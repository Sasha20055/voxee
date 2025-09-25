import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function FloatingBlob({
                                         size = 420,
                                         blur = 120,
                                         color = "rgba(120,180,255,0.75)",
                                         fade = 0.15,
                                         minSec = 18,
                                         maxSec = 32,
                                     }) {
    const ref = useRef(null);
    const [style, setStyle] = useState({ transform: "translate3d(0,0,0)" });
    const [vw, setVw] = useState(window.innerWidth);

    const pageHeight = () => {
        const doc = document.documentElement;
        const body = document.body;
        return Math.max(doc.scrollHeight, doc.clientHeight, body?.scrollHeight || 0);
    };

    const randomTarget = () => {
        const s = size;
        const xMin = s / 2, xMax = Math.max(xMin, vw - s / 2);
        const yMin = s / 2, yMax = Math.max(yMin, pageHeight() - s / 2);
        const x = Math.random() * (xMax - xMin) + xMin;
        const y = Math.random() * (yMax - yMin) + yMin;
        return { x, y };
    };

    const move = () => {
        const { x, y } = randomTarget();
        const dur = +(minSec + Math.random() * (maxSec - minSec)).toFixed(2);
        setStyle({
            transform: `translate3d(${x}px, ${y}px, 0) scale(${0.95 + Math.random() * 0.1})`,
            transition: `transform ${dur}s cubic-bezier(.22,.61,.36,1)`,
        });
    };

    useEffect(() => {
        move();

        const el = ref.current;
        const onEnd = () => move();
        el?.addEventListener("transitionend", onEnd);


        let raf = 0;
        const onResize = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                setVw(window.innerWidth);

                setStyle(prev => {
                    const m = /translate3d\(([-\d.]+)px,\s*([-\d.]+)px/.exec(String(prev.transform));
                    const curX = m ? parseFloat(m[1]) : 0;
                    const curY = m ? parseFloat(m[2]) : 0;
                    const xMin = size / 2, xMax = Math.max(xMin, window.innerWidth - size / 2);
                    const clampedX = Math.min(Math.max(curX, xMin), xMax);
                    return { ...prev, transform: `translate3d(${clampedX}px, ${curY}px, 0)` };
                });
            });
        };
        window.addEventListener("resize", onResize);

        return () => {
            el?.removeEventListener("transitionend", onEnd);
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(raf);
        };
    }, []);

    return createPortal(
        <div className="blob-page-root" aria-hidden>
            <div
                ref={ref}
                className="blob"
                style={{
                    ...style,
                    width: size,
                    height: size,
                    background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,${fade}) 70%, transparent 100%)`,
                    filter: `blur(${blur}px)`,
                }}
            />
        </div>,
        document.body
    );
}