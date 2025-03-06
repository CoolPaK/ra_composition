import { PropsWithChildren } from "react";
import CardBody from "./CardBody";
import { CardBodyProps } from "./models";

function Card({ props, children }: PropsWithChildren<{props: CardBodyProps}>) {
    return(
        <div className="card mt-3" style={{width: '18rem'}}>
            { children }
            <CardBody {...props} />
        </div>
    )
}

export default Card;