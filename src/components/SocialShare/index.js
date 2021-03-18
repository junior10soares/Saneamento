import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";
  
const configButtons = {
    size: 25
};

export default function SocialShare({data, children}) {
    const baseUrl = "https://sanear.vercel.app";

    const removedAccent = (text) => {
        const slug = text?.normalize("NFD").replace(/[^a-zA-Zs]/g, "-");
         return slug?.toLowerCase();
       }		
    console.log('data',data)
    return (
        <>
            <FacebookShareButton url={'https://sanear.vercel.app'} >
                <FacebookIcon size={configButtons.size}></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton url={'http://www.google.com'} key={1}>
                <TwitterIcon size={configButtons.size}></TwitterIcon>
            </TwitterShareButton>
        </>
    );
};