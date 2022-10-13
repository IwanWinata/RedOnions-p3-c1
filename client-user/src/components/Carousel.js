import React from "react"
const images = [
    `https://carlsjr.id/wp-content/uploads/2022/08/TWO-FOR-TUESDAY-HEADER-WEBSITE-1920X846PX.jpg`,
    `https://carlsjr.id/wp-content/uploads/2021/01/Website-01.jpg`,
    `https://carlsjr.id/wp-content/uploads/2021/01/Website-01.jpg`,
    `https://carlsjr.id/wp-content/uploads/2022/08/HAPPY-STAR-WEB-HEADER.jpg`
]
const Carousel = () => {
    const [currentImage, setCurrentImage] = React.useState(0);
    const refs = images.reduce((acc, val, i) => {
        acc[i] = React.createRef();
        return acc;
    }, {});

    const scrollToImage = i => {
        setCurrentImage(i);
        refs[i].current.scrollIntoView({
            // Defines the transition animation.
            behavior: 'smooth',
            // Defines vertical alignment.
            block: 'nearest',
            // Defines horizontal alignment.
            inline: 'start',
        });
    };

    const totalImages = images.length;
    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
            scrollToImage(0);
        } else {
            scrollToImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1);
        } else {
            scrollToImage(currentImage - 1);
        }
    };

    const arrowStyle =
        'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';
    const sliderControl = isLeft => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
            style={{ top: '40%' }}
        >
            <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
                {isLeft ? '◀' : '▶'}
            </span>
        </button>
    );

    return (
        <>
            <div className="flex mt-24 justify-center w-full md:w-full items-center">
                <div className="relative w-full">
                    <div className="carousel">
                        {sliderControl(true)}
                        {images.map((img, i) => (
                            <div className="w-full flex-shrink-0" key={i + 1} ref={refs[i]}>
                                <img src={img} className="w-full h-3/4 object-contain" alt="" />
                            </div>
                        ))}
                        {sliderControl()}
                    </div>
                </div>
            </div>
        </>
    );
};


export default Carousel