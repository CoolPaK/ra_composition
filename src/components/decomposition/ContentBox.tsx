import { PropsWithChildren } from "react";
import { baseTextElement } from "./models";

interface ContentBoxProps extends baseTextElement {
    boxClass?: string
}

export default function ContentBox({ props, children }: PropsWithChildren<{props: ContentBoxProps}>) {
    const { text, textClass, boxClass, link } = props;
    return(
        <div className={boxClass}>
            <h3 className={textClass}>
                <a href={link}>{ text }</a>
            </h3>
            { children }
        </div>
    )
}