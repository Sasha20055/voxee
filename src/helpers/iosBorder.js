export function squircleClipPath(n = 5.2, samples = 80) {
    const e = 2 / Math.max(0.0001, n); // защита от n<=0
    const pts = [];

    for (let i = 0; i < samples; i++) {
        const t = (i / samples) * Math.PI * 2;
        const c = Math.cos(t), s = Math.sin(t);
        const x = Math.sign(c) * Math.pow(Math.abs(c), e);
        const y = Math.sign(s) * Math.pow(Math.abs(s), e);
        pts.push(`${(x * 50 + 50).toFixed(3)}% ${(y * 50 + 50).toFixed(3)}%`);
    }

    // polygon ожидает точки по часовой — эта параметризация уже даёт нужный обход
    return `polygon(${pts.join(', ')})`;
}