import React from 'react';
import people1 from '../../../assets/images/people1.jpg';
import people2 from '../../../assets/images/people2.jpg';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            userReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
            location: 'California',
            img: people1
        },
        {
            id: 2,
            name: 'Herry Peater',
            userReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
            location: 'California',
            img: people2
        },
        {
            id: 3,
            name: 'Jonshon Due',
            userReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
            location: 'California',
            img: people1
        },
    ]

    return (
        <section>
            <div className=' container mx-auto pb-20'>
                <div>
                    <h4 className='text-lg text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl font-bold text-black'>What Our Patients Says</h2>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:grid-cols-3'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        
                        ></Review>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Testimonial;