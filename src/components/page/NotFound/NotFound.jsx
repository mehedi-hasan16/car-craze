import notfound from '../../../assets/notfound.jpg'

const NotFound = () => {
    return (
        <div className='min-vh-100 d-flex justify-content-center align-items-center'>
            <img src={notfound} alt="" className='w-50 h-50' />
        </div>
    );
};

export default NotFound;