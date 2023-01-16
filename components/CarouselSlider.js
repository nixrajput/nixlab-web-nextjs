import { useState, useEffect } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const CarouselSlideItem = ({ item, idx, activeIdx }) => {

    return (
        <li className="carousel__slide-item"
            style={{
                transform: `translateX(${idx * 30}rem)`,
            }}>
            <div className="carousel__slide-item-img-link">
                <img
                    src={item}
                    alt={`slide-${idx}`}
                />
            </div>
        </li>
    );
};

const CarouselSlider = ({ items, showIndicator = false }) => {
    if (!items) {
        throw new Error('items is required');
    }

    const [isTicking, setIsTicking] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const length = items.length;

    const sleep = (ms = 0) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setActiveIdx((prev) => (prev - jump + length) % length);
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setActiveIdx((prev) => (prev + jump) % length);
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    // useEffect(() => {
    //     setActiveIdx((length - (items % length)) % length);
    // }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev"
                    onClick={() => prevClick()}
                >
                    <ArrowBackIos />
                </button>

                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {
                            items.map((slide, i) => (
                                <CarouselSlideItem
                                    key={`slide-${i}`}
                                    item={slide}
                                    idx={i}
                                    activeIdx={activeIdx}
                                />
                            ))
                        }
                    </ul>
                </div>

                <button className="carousel__btn carousel__btn--next"
                    onClick={() => nextClick()}>
                    <ArrowForwardIos />
                </button>

                {
                    showIndicator ?
                        <div className="carousel__dots">
                            {items.slice(0, length).map((pos, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleDotClick(i)}
                                    className={i === activeIdx ? 'dot active' : 'dot'}
                                />
                            ))}
                        </div>
                        : null
                }

            </div>
        </div>
    );
};

export default CarouselSlider;