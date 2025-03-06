import { baseTextElement } from "./models";

type GetListProps = {
    items: baseTextElement[]
    listClass?: string
}

function GetList(props: GetListProps) {
    const { items, listClass } = props;

    const AddIcon = (props: baseTextElement) => {
        const { iconLink, iconClass } = props;
    
        if(iconLink) {
            const url = 'url(' + iconLink + ')';
            return(
                <span className={ iconClass } style={ iconLink ? {backgroundImage: url} : undefined }></span>
            )
        }
    }

    return(
        <ul className={listClass}>
            {items.map((el) => 
                <li key={el.text + el.textClass + Math.random()}>                    
                    <a href={el.link} className={el.textClass}>
                        {AddIcon(el)}{el.text}
                    </a>
                </li>
            )}
        </ul>
    )
}

export default GetList;