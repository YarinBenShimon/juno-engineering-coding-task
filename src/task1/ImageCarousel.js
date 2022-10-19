import React, { useState, useEffect } from "react";
import './App.css';
import { fetchImageUrls } from "../api/index";
import { CircularProgress, Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageCarousel = (props) => {
    const [imageUrls, setImageUrls] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUrls() {
            const urls = await fetchImageUrls();
            setImageUrls(urls);
            setIsLoading(false);
        }

        fetchUrls();
    }, []);

    if(!isLoading && !imageUrls){
        <Typography> A really bad error occured !!</Typography>
    }

    return <Box alignItems='center' sx={{ width: '100vw', height: '100vh'}} display='flex' justifyContent='center' position='relative'>
                <IconButton onClick={() => {
                    setIsLoading(true);
                    if (currentImageIndex === 0){
                        setCurrentImageIndex(imageUrls.length - 1);
                    }
                    else {
                        setCurrentImageIndex(currentImageIndex - 1);
                    }
                }}>
                    <ArrowBackIcon/>
                </IconButton>
                {imageUrls && <img
                    alt='So Cool'
                    hidden={isLoading}
                    className={"image-class"}
                    onLoad={() => {
                        setIsLoading(false)
                    }
                    }
                    src={imageUrls[currentImageIndex]} /> }
                    {isLoading && <CircularProgress /> }
                <IconButton onClick={() => {
                    setIsLoading(true);
                    if (currentImageIndex === imageUrls.length - 1){
                        setCurrentImageIndex(0);
                    }
                    else {
                        setCurrentImageIndex(currentImageIndex + 1);
                    }
                }}>
                    <ArrowForwardIcon/>
                </IconButton>
         </Box>;
};

export default ImageCarousel;
