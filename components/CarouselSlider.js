import { useRef, useState, useEffect } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, useTheme } from "@mui/material";
import { tokens } from '../theme/theme';

const CarouselSlideItem = ({ item, idx }) => {

    return (
        <img className='carousel__img'
            src={item.url}
            alt={`slide-${idx}`}
        />
    );
};

const CarouselSlider = ({ items }) => {
    if (!items) {
        throw new Error('items is required');
    }

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const carouselRef = useRef();

    const [leftScroll, setLeftScroll] = useState(false);
    const [rightScroll, setRightScroll] = useState(false);

    const prevClick = (scrollOffset) => {
        carouselRef.current.scrollLeft -= scrollOffset;
    };

    const nextClick = (scrollOffset) => {
        carouselRef.current.scrollLeft += scrollOffset;
    };

    useEffect(() => {
        const calculateScroll = () => {
            const carousel = carouselRef.current;
            const carouselOffsetWidth = carousel.offsetWidth;
            const carouselScrollWidth = carousel.scrollWidth;
            const carouselScrollLeft = carousel.scrollLeft;
            const carouselScrollRight = carouselScrollWidth - carouselOffsetWidth - carouselScrollLeft;

            console.log('carouselScrollLeft', carouselScrollLeft);
            console.log('carouselScrollRight', carouselScrollRight);

            if (carouselScrollLeft > 0) {
                setLeftScroll(true);
            }
            else {
                setLeftScroll(false);
            }

            if (carouselScrollRight > 0) {
                setRightScroll(true);
            }
            else {
                setRightScroll(false);
            }
        };

        window.addEventListener('load', calculateScroll);
        carouselRef.current.addEventListener('scroll', calculateScroll);

        return () => {
            window.removeEventListener('load', () => { });
            carouselRef.current?.removeEventListener('scroll', () => { });
        }

    }, [carouselRef.current]);

    return (
        <Box
            position="relative"
            width="100%"
            m="0"
            p="0"
        >
            <Box
                position="relative"
                width="100%"
                m="0"
                p="0"
                sx={{
                    overflow: "hidden",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                    '::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}
                ref={carouselRef}
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    {
                        items.map((slide, i) => (
                            <CarouselSlideItem
                                key={`slide-${i}`}
                                item={slide}
                                idx={i}
                            />
                        ))
                    }
                </Box>
            </Box>

            {
                (leftScroll) ?
                    <button className='carousel__btn carousel__btn_prev'
                        style={{
                            backgroundColor: colors.dialog,
                        }}
                        onClick={() => prevClick(200)}
                    >
                        <ArrowBackIos
                            style={{
                                color: colors.primary[100],
                            }}
                        />
                    </button>
                    : null
            }

            {
                (rightScroll) ?
                    <button className='carousel__btn carousel__btn_next'
                        style={{
                            backgroundColor: colors.dialog,
                        }}
                        onClick={() => nextClick(200)}>
                        <ArrowForwardIos style={{
                            color: colors.primary[100],
                        }} />
                    </button>
                    : null
            }

        </Box>
    );
};

export default CarouselSlider;