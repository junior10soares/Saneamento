import React from 'react';
import { Block, Container, Row } from './styles';

import { VideoItem } from '../VideoItem';
import { PhotoItem } from '../PhotoItem';

export function AlbumPhotos({ midiaArray }) {
    const pictures = midiaArray?.map((media) => {
        if (media.type === 'pictures') {
            const response = Object.keys(media)?.map((item, index) => {
                if (item === media.length) return;
                return {
                    ...media[item],
                    type: 'pictures'
                };
            })
            response?.pop();
            return response;
        }
    })

    const videos = midiaArray?.map((media) => {
        if (media.type === 'videos') {
            const response = Object.keys(media)?.map((item, index) => {
                if (item === media.length) return;
                return {
                    ...media[item],
                    type: 'videos'
                };
            })
            response?.pop()
            return response;
        }
    })

    const combinedArrays = pictures?.concat(videos)?.flat();



    return (
        <Container>
            <Row>
                {combinedArrays?.map((item) => {
                        if (item?.type === 'videos') {
                            return (
                                <Block>
                                    <VideoItem video={item} />
                                </Block>
                            )
                        }

                    return (
                        <Block>
                            <PhotoItem />
                        </Block>
                    )
                })}
            </Row>

        </Container>
    );
};
