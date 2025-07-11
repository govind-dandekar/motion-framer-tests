"use client"

import * as Progress from "@radix-ui/react-progress"
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export function RadixProgress() {
    const progress = useMotionValue(0)
    const roundedProgress = useTransform(() => Math.round(progress.get()))
    const pathLength = useTransform(progress, [0, 100], [0, 1])
    const strokeLinecap = useTransform(() =>
        pathLength.get() === 0 ? "none" : "round"
    )
    const filter = useTransform(progress, [0, 100], ["blur(10px)", "blur(0px)"])
    const scale = useTransform(progress, [0, 100], [0.5, 1])
    const opacity = useTransform(progress, [0, 100], [0.5, 1])

    useEffect(() => {
        animate(progress, 100, { duration: 3, ease: [0.31, 0.05, 0.28, 0.85] })
    }, [progress])

    return (
        <>
            <div className="container">
                <Progress.Root className="root">
                    <Progress.Indicator asChild>
                        <div className="indicator-container">
                            <svg className="indicator" viewBox="0 0 100 100">
                                <motion.path
                                    d="M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10"
                                    fill="none"
                                    stroke="var(--divider)"
                                    strokeWidth="8"
                                />
                                <motion.path
                                    d="M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10"
                                    fill="none"
                                    stroke="#0cdcf7"
                                    strokeWidth="8"
                                    style={{
                                        pathLength,
                                        strokeLinecap,
                                    }}
                                />
                            </svg>
                            <div className="input-container">
                                <motion.div
                                    className="input"
                                    style={{
                                        filter,
                                        scale,
                                        opacity,
                                        willChange:
                                            "filter, transform, opacity",
                                    }}
                                >
                                    {roundedProgress}
                                </motion.div>
                            </div>
                        </div>
                    </Progress.Indicator>
                </Progress.Root>
            </div>
            <StyleSheet />
        </>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>{`
            .container {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .root {
                position: relative;
                width: 200px;
                height: 200px;
            }

            .indicator-container {
                position: relative;
                width: 100%;
                height: 100%;
            }

            .indicator {
                width: 100%;
                height: 100%;
            }

            .input-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .input {
                font-size: 64px;
                text-align: center;
                color: #0cdcf7;
            }
        `}</style>
    )
}

export default RadixProgress