import React, { useState, useEffect } from "react";
import { fetchImageUrls } from "../api/index";
import { Typography } from '@mui/material';

const ImageCarousel = (props) => {
    const [imageUrls, setImageUrls] = useState(null);
    const [currentUrlToShow, setCurrentUrlToShow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUrls() {
            const urls = await fetchImageUrls();
            setImageUrls(urls);
            if(urls.length > 0)
                setCurrentUrlToShow(urls[0])
            setIsLoading(false);
        }

        fetchUrls();
    }, []);

    if(isLoading){
        // TODO: Loader.
        return <Typography>loading</Typography>;
    }

    if(!isLoading && !imageUrls){
        // TODO: error message.
    }

    return <h1>{currentUrlToShow}</h1>;
};
export default ImageCarousel;
