import React from 'react';
import useServices from '../../Utilities/useServices';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const services = useServices();
    return (
        <div id='services' className='mb-5'>
            <h3 className='titles text-center my-5 fs-1'>Services</h3>
            <div className='container'>
                <div className='row justify-content-center'>
                    {
                        services.map(service => <SingleService key={service._id} {...service}></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;