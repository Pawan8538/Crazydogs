import React, { useEffect,  useState } from 'react'
import Randominfo from './Randominfo'
import loader from './loader.gif'
import LoadingBar from 'react-top-loading-bar'

const Random = () => {

    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    const handleRandom = async (e) => {
        try {
            e.preventDefault();
            const url = `https://api.thedogapi.com/v1/images/search?has_breeds=true&order=RANDOM&page=0&limit1&api_key=${api_key}`
            setProgress(10);
            setLoading(true);
            let req = await fetch(url);
            setProgress(30);
            let res = await req.json();
            setProgress(70);
            setLoading(false);
            setArr(res);
            setProgress(100);
        } catch (err) {
            alert('An error occurred while fetching the image.')
        }
    }

    useEffect(() => {
        const fetchRandom = async () => {
            try {
                const url = `https://api.thedogapi.com/v1/images/search?has_breeds=true&order=RANDOM&page=0&limit1&api_key=${api_key}`
                setProgress(10);
                setLoading(true);
                let req = await fetch(url);
                setProgress(30);
                let res = await req.json();
                setProgress(70);
                setArr(res);
                setLoading(false);
                setProgress(100);
            } catch (err) {
                alert('An error occurred while fetching the image.');
            }
        };
        fetchRandom();
    }, []);
    return (

        <>
            <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
            <h2 className="text-center my-5">Get random image and information </h2>
            <div className='container-fluid my-3' >
                {loading && <div className="text-center">
                    <img className="my-3" src={loader} alt="loading" /></div>}
                {arr.map((element) => (
                    <div className='container my-5' key={element.url}  >
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='card' >
                                    <img src={element.url} alt="..." />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                {element.breeds.map((value) => (
                                    <div className='card' key={value.name}>
                                        <Randominfo name={value.name} use={value.bred_for} breed={value.breed_group} life={value.life_span} temperament={value.temperament} weight={value.weight.metric} height={value.height.metric} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <div className='row my-3'>
                    <div className='text-center col-lg-12'>
                        <button type="button" className="btn btn-success" onClick={handleRandom} >Refresh</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Random
