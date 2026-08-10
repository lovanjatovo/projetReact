function Image({ src, alt }, description) {
    return (
        <>
        <div className="imagine">
        <img src={src} alt={alt} />
        <h1>{description}</h1>
        </div>
        </>
    );
}

export default Image;