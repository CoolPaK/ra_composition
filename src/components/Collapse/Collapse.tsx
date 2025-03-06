import { useState } from "react";

type CollapseProps = {
    collapsedLabel: string | undefined
    expandedLabel: string | undefined
}

export default function Collapse(props: CollapseProps) {
    const { collapsedLabel, expandedLabel } = props;
    let [description, setDescription] = useState('description close');

    const handler = () => {
        setDescription(description === 'description close' ? 'description open' : 'description close')
    }    

    return(
        <>
            <button onClick={handler}>{collapsedLabel ? collapsedLabel : 'Развернуть'}</button>
            <div className={description}>{ expandedLabel ? expandedLabel : 'Свернуть' }</div>
        </>
    )
}