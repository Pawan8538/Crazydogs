import React, { useEffect, useState, useContext } from 'react'
import Doginfo from './Doginfo';
import loader from './loader.gif';
import '..//App.css'
import SearchContext from '../context/SearchContext';
import LoadingBar from 'react-top-loading-bar'
import About from './About';
import InfiniteScroll from 'react-infinite-scroll-component';

const apikey = process.env.REACT_APP_API_KEY;

const Dog = () => {

    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const { query } = useContext(SearchContext);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                setLoading(true);
                setProgress(10);
                let req = await fetch(`https://api.thedogapi.com/v1/breeds?limit=25&page=${page}&api_key=${apikey}`)
                setProgress(30);
                let res = await req.json();
                setProgress(70);
                setArr(res);
                setLoading(false);
                setProgress(100);
            } catch (err) {
                alert('An error occurred while fetching the image.')
            }
        };
        fetchDogs();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const footerTimer = setTimeout(() => {
          setShowFooter(true); 
        }, 5000); 

        return () => clearTimeout(footerTimer);
      }, [loading]);

     
      const fetchMoreData = async () => {
        try {
            const nextPage = page + 1;
            setProgress(10);
            let req = await fetch(`https://api.thedogapi.com/v1/breeds?limit=15&page=${nextPage}&api_key=${apikey}`);
            setProgress(30);
            let res = await req.json();
            setProgress(70);
    
            if (res.length > 0) {
                setArr(prevArr => [...prevArr, ...res]);
                setPage(nextPage);
            }
    
            if (res.length < 15) {
                setHasMore(false);
            }
    
            setProgress(100);
        } catch (err) {
            alert('An error occurred while fetching the image.');
        }
    };
    
    
    

    return (
        <>
            <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
            {loading && <div className="text-center">
                <img className="my-3" src={loader} alt="loading" />
            </div>}
            
            <InfiniteScroll
                dataLength={arr.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<div className="text-center">
                    <img className="my-3" src={loader} alt="loading" />
                  </div>}
                scrollThreshold={0.95}
                endMessage={
                <p style={{ textAlign: 'center' }}>
                <b>Thanks for Visting!</b>
                </p>
                }
            >   

            <ul className='container col-md-4'>
                {arr.map((breed, index) => {
                    if (breed.name.toLowerCase() === query.toLowerCase()) {
                        return <div className='text center' ><li key={index}>
                            <Doginfo name={breed.name} use={breed.bred_for} breed={breed.breed_group} life={breed.life_span} temperament={breed.temperament} pic={breed.image.url} weight={breed.weight.metric} height={breed.height.metric} /></li></div>
                    } return null;
                })}
            </ul>
            <h1 className='text-center my-5'>Welcome to Crazydogs!</h1>
            <div className='container my-3'>
                <div className='row'>
                    {arr.map((element, index) => {
                        return <div className='col-md-4 col-sm-6 col-lg-4' key={index} >
                            <Doginfo name={element.name ? element.name : "unknown"} use={element.bred_for ? element.bred_for : "unknown"} breed={element.breed_group} life={element.life_span} temperament={element.temperament} pic={element.image.url} weight={element.weight.metric} height={element.height.metric} />
                        </div>
                    })}
                </div>
            </div>

           {showFooter && <div className='footer container-fluid' >
            <About/>
            </div>}
            </InfiniteScroll> 
        </>
    )
}

export default Dog
