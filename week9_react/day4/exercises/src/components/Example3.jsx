import React from 'react';
import data from './data.json';
import { Link } from 'react-router-dom';

const Example3 = () => {
  return (
    <>
    {
      data && data.Experiences.map(
        exp => {
          return(
            <div>
              <figure>
                <img src={exp.logo} alt="logo" />
              </figure>
              <h2><Link to={exp.url}>{exp.companyName}</Link></h2>
              {
                exp.roles.map(
                  role => {
                    return(
                      <>
                      <h4>{role.title}</h4>
                      <p>{role.startDate} {role.location}</p>
                      <p>{role.description}</p>
                      </>
                    )
                  }
                )
              }
            </div>
          )
        }
      )
    }
    </>
  );
};

export default Example3;