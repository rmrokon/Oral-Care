import { CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='w-75 mx-auto'>
            <div className='single-qna-div'>
                <h3><QuestionMarkCircleIcon className='qna-icon'></QuestionMarkCircleIcon> Difference between authorization and authentication?</h3>
                <div><CheckCircleIcon className='qna-icon'></CheckCircleIcon> <span className='fs-5'>
                    Authentication is the process of verifying a user. This process confirms the identity of a user. It requires an Authentication Solution where user can input the identity credentials.
                </span>
                    <p className='fs-5'>Whereas Authorization is the process of verifying specific resources a user has access to. It requires an authorization solution. It also requires an autheticated identity and access control policies.</p>
                </div>
            </div>
            <div className='single-qna-div'>
                <h3><QuestionMarkCircleIcon className='qna-icon'></QuestionMarkCircleIcon> Why are you using firebase? What other options do you have
                    to implement authentication?</h3>
                <p><CheckCircleIcon className='qna-icon'></CheckCircleIcon> <span className='fs-5'>
                    I am using firebase beacuse it's easy to implement and very powerfull at the same time. It saves my time. Also, as I am a begginer, I have no idea about other authentication systems. But I can name a few alternatives of Google Firebase and they are <span className='fw-bold'>Auth0, MongoDB, Passport, Okta, JSON Web Token, Amazon Cognito and Keycloak</span>.
                </span></p>
            </div>
            <div className='single-qna-div'>
                <h3><QuestionMarkCircleIcon className='qna-icon'></QuestionMarkCircleIcon> What other services does firebase provide other than authentication?</h3>
                <p><CheckCircleIcon className='qna-icon'></CheckCircleIcon> <span className='fs-5'>
                    Google Firebase provides a bunch of other services too. One the most useful services is hosting. We can easily deploy our site and host it on firebase. Apart from that it also provides <span className='fw-bold'>Storage, Release/Monitor Products, Analytics etc.</span>
                </span></p>
            </div>
        </div>
    );
};

export default Blog;