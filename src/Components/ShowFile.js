import React from 'react';
import { DetailBox, DetailItem } from './DetailBox';

export const ShowFile = ({ data, preview }) => {
    return (
        <>
            <DetailBox className='file-info'>
                <DetailItem>
                    <i className='bx bxs-file'></i>
                    <p>{data[0].name}</p>
                </DetailItem>
                <DetailItem>
                    <i className='bx bxs-memory-card bx-tada'></i>
                    <p>{data[0].size / 1000000}MB</p>
                </DetailItem>
                <img style={{ height: 100 }} src={preview} alt='uploaded' />
            </DetailBox>
        </>
    );
};
