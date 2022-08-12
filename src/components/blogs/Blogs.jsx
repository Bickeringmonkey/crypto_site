import React from 'react';
import styled from 'styled-components';
import Blog1 from '../assets/blog1.png';
import Blog2 from '../assets/blog2.png';
import Blog3 from '../assets/blog3.png';

function Blogs() {
    const images = [Blog1, Blog2, Blog3]
  return (
    <Section id='blogs'>
        <div className='title'>
            <h2>News & Feeds</h2>
            <h5>Where you can earn crypto</h5>
        </div>
        <div className='blogs'>
            {images.map((img, index) => {
                return (
                    <div className='blog' key={index}>
                        <img src={img} alt='' />
                        <div className='data'>
                            <h6>
                                31 Jan, 2022
                            </h6>
                            <h4>
                                Rightmove Now Offering Click to Purchase Option
                            </h4>
                            <p>
                                Rightmove is now offering an option that enables buyers of 
                                selected commercial properties the option to submit offers and 
                                digitally exchange contracts online.
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    </Section>
  )
}

const Section = styled.section `
    margin: 4rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
    }
    .blogs {
        display: flex;
        gap: 5rem;
        .blog {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-direction: column;
            background-color: rgba(0,0,0, 0.3);
            border-bottom: 0.5rem transparent solid;
            transition: 0.3s ease-in-out;
            &:hover {
                border-color: var(--primary-color);
            }
            img {
                width: 99%;
            }
            .data {
                padding: 1rem;
                gap: 1rem;
                display: flex;
                flex-direction: column;
                p {
                    font-size: 0.9rem;
                    font-weight: 100;
                }
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        margin: 2rem 1rem;
        .title {
            h2 {
                font-size: 2.4rem;
                color: var(--primary-color);
            }
        }
        .blogs {
            flex-direction: column;
            gap: 2rem;
        }
    }
`

export default Blogs