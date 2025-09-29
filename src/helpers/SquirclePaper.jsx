import React from "react";
import { Squircle } from "@squircle-js/react";

const SquirclePaper = React.forwardRef(
    ({ className, style, children, ...rest }, ref) => {
        return (
            <div ref={ref} className={className} style={{ ...style, background: "transparent", borderRadius: 0 }} {...rest}>
                <Squircle
                    cornerRadius={14}
                    cornerSmoothing={1}
                    style={{
                        background: "#fff",
                        padding: 6,
                        overflow: "hidden",
                        boxShadow: "0 12px 28px rgba(19,33,68,.08)",
                        border: "1px solid rgba(221,227,234,.8)",
                    }}
                >
                    {children}
                </Squircle>
            </div>
        );
    }
);
SquirclePaper.displayName = "SquirclePaper";