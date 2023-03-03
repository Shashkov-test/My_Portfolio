import React, { useState } from 'react'
import {BsBook} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeader/pageHeader';
import './portfolio.scss';
import { filterData, portfolioData } from './myPortfolio';
import { Animate } from 'react-simple-animate';

const Portfolio = () => {

  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (id) => {
    setFilteredValue(id);
  }

  const filteredItems = filteredValue === 1 
    ? portfolioData 
    : portfolioData.filter(item => item.id === filteredValue);


  const handleHover = (i) => {
    setHoveredValue(i);
  };

  return (
    <section className='portfolio'>
      <PageHeaderContent headerText='My Portfolio' icon={<BsBook size={40}/>} />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {
            filterData.map(item => (
              <li 
                className={item.filterId === filteredValue ? 'active' : ''}
                onClick={() => handleFilter(item.filterId)} 
                key={item.filterId}>
                  
                  {item.label}

              </li>
            ))
          }
        </ul>

        <Animate 
          play={true} 
          duration={1.5} 
          delay={0.5} 
          start={{
            opacity: 0,
          }}
          end={{
            opacity: 1,
          }}
        >
          <div className="portfolio__content__cards">
            {
              filteredItems.map((item, i) => (
                <div 
                  key={item.name.trim()} 
                  className='portfolio__content__cards__item'
                  onMouseEnter={() => handleHover(i)}
                  onMouseLeave={() => handleHover(i)}
                >
                  <div className="portfolio__content__cards__item__img-wrapper">
                    <img src={item.image} alt="My works" />
                  </div>

                  <div className="overlay">
                    {
                      i === hoveredValue && (
                        <div>
                          <p>
                            {item.name}

                            <a href={item.link}>
                              <button>
                                Visit
                              </button>
                            </a>
                             
                          </p>
                        </div>
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </Animate>
      </div>

    </section>
  )
}

export default Portfolio;