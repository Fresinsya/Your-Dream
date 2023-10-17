import { useRouteError } from 'react-router-dom';

const ErorPage = () => {
    const error = useRouteError();

    return (
        <div className='flex justify-center min-h-screen items-center flex-col'>
            <h1 className='text-3xl font-bold'>Oops!</h1>
            <p className='font-medium text-slate-500 mb-8'>Something went wrong.</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErorPage;