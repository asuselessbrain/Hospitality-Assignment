import { useEffect } from 'react';
import img from '../assets/images/notFound.avif'

const NotFound = () => {

    useEffect(() => {
        document.title = 'Page Not Found';
    }, []);

    return (
        <div>
            <img width={'100%'} src={img} alt="" />
        </div>
    );
};

export default NotFound;