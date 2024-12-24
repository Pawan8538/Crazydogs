import React, { useState } from 'react';
import loader from './loader.gif';
import LoadingBar from 'react-top-loading-bar'

const Images = () => {
    const [breed, setBreed] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const fetchImage = async (breed) => {
        try {
            setError('');
            setImageUrl('');
            setProgress(10);
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
            setProgress(30);
            const data = await response.json();
            setLoading(false);
            setProgress(70);
            if (data.status === 'success') {
                setImageUrl(data.message);
            } else {
                setError('Breed not found. Please try a different breed.');
            }
        } catch (err) {
            setError('An error occurred while fetching the image.');
        }
        setProgress(100);
    };

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        fetchImage(breed.toLowerCase());
    };

    return (
        <>
            <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
            <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='text-center'>
                    <h2 className='text-center my-5'>Images of Dog Breed</h2>
                    <form className='text-center' onSubmit={handleSubmit}>
                        <input className='my-3' type="text" placeholder="Enter first name only" value={breed} onChange={(e) => setBreed(e.target.value)} />
                        <button className="btn btn-success btn-sm mx-3" type="submit">Fetch Image</button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {loading && <div className="text-center">
                        <img className="my-3" src={loader} alt="loading" />

                    </div>}
                    <div className='text-center'>
                        {imageUrl && <img className='card screen my-5' src={imageUrl} alt="Dog"/>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Images

