type ImageForCardProps = {
    src: string
    alt: string
}

function ImageForCard(props: ImageForCardProps) {
    const { src, alt } = props;
    return(
        <img src={ src } className="card-img-top" alt={ alt }></img>
    )
}

export default ImageForCard;