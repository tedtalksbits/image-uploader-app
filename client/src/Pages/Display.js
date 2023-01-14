import React, { useRef, useState } from 'react';
import { Box } from '../Components/Box';
import LoadingBar from '../Components/LoadingBar';
import styled from 'styled-components';
import { buttonStyles, mobileBox } from '../ConstantStyles';
import { Link } from 'react-router-dom';
import { Button } from '../Components/Button';
import { PlaceholderImg } from '../Placeholders';
import Toast from '../Components/Toast';

const BackLink = styled(Link)`
    ${buttonStyles}
`;
const LoadingBox = styled(Box)`
    width: 50%;
    max-width: 500px;
    ${mobileBox};
`;

const SuccessBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    i {
        font-size: 3rem;
        color: green;
        animation-delay: 0.3s;
        animation-iteration-count: 2;
    }
`;
const Img = styled.img`
    max-height: 420px;
    border-radius: 12px;
    object-fit: contain;
    max-width: 340px;
    width: 100%;
`;
const CopyText = styled.div`
    width: 100%;
    overflow: auto;
    background: #f6f8fb;
    border: 1px solid #e0e0e0;
    padding: 2px 2px 2px 8px;
    border-radius: 8px;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ::-webkit-scrollbar {
        display: none;
    }

    input {
        border: none;
        background: transparent;
        height: 2rem;
        width: 100%;
        font-size: 12px;
        color: #828282;
        line-height: 15px;
        font-family: 'Poppins', sans-serif;
    }
`;

const Display = ({ image }) => {
    const [uploading, setUploading] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const ref = useRef();

    setTimeout(() => {
        setUploading(false);
    }, 3000);

    return (
        <>
            <BackLink to='/'>Back</BackLink>
            {uploading ? (
                <LoadingBox>
                    <h1 style={{ textAlign: 'left' }}>Uploading...</h1>
                    <LoadingBar />
                </LoadingBox>
            ) : (
                <SuccessBox className='success'>
                    {image.img && (
                        <>
                            <i className='bx bxs-check-circle bx-tada'></i>
                            <h1>Uploaded Successfully!</h1>
                        </>
                    )}
                    <Img src={image.img || PlaceholderImg} alt='display' />
                    <CopyText>
                        <input
                            ref={ref}
                            type='text'
                            value={image.img}
                            onChange={() => {}}
                        />
                        <Button
                            style={{ margin: 0, borderRadius: '6px' }}
                            onClick={(e) => {
                                e.preventDefault();
                                ref.current.focus();
                                ref.current.select();
                                navigator.clipboard.writeText(
                                    ref.current.value
                                );
                                setShowToast(true);

                                setTimeout(() => {
                                    setShowToast(false);
                                }, 3600);
                            }}
                        >
                            Copy
                        </Button>
                    </CopyText>

                    {showToast && <Toast msg='Copied!' />}
                </SuccessBox>
            )}
        </>
    );
};

export default Display;
