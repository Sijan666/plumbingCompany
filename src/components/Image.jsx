

const Image = ({imgSrc , className}) => {
    return (
        <img className={`${className}`} src={imgSrc} alt="" loading="lazy"/>
    )
}

export default Image