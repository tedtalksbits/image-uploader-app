import React, { useEffect, useState } from 'react';
import { Box } from './Box';
import { Button, FileInput } from './Button';
import { ShowFile } from './ShowFile';
import styled from 'styled-components';
import DragAndDrop from './DragAndDrop';
import { buttonStyles } from '../ConstantStyles';
import { Link } from 'react-router-dom';

const RouteButton = styled(Link)`
    ${buttonStyles};
    text-decoration: none;
`;

const FlexBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

const FileUpload = ({ setImage }) => {
    const [data, setData] = useState('');
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (data) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                console.log(reader.result);
            };
            reader.readAsDataURL(data[0]);
        } else {
            setPreview(null);
        }
    }, [data]);
    // console.log(data);

    const uploadData = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_POST_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ img: preview }),
            });

            const uploadedImage = await res.json();

            setImage(uploadedImage);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FlexBox>
            <h1>Upload your image</h1>
            <small>File should be Jpeg, Png,...</small>
            <DragAndDrop />
            <p>Or</p>
            <Button className='file-btn'>
                <FileInput
                    className='hide-default'
                    type='file'
                    accept='image/png, image/gif, image/jpeg'
                    onChange={(e) => setData(e.target.files)}
                />
                Choose a file
            </Button>

            {data.length > 0 && (
                <>
                    <ShowFile data={data} preview={preview} />
                    <RouteButton
                        to='/success'
                        onClick={uploadData}
                        className='file-btn'
                    >
                        upload
                    </RouteButton>
                </>
            )}
        </FlexBox>
    );
};

export default FileUpload;
