import React from 'react';
import data from './data.json';

const Example2 = () => {
  return (
    <>
      {
        data && data["Skills"].map(
          skill => {
            return(
              <div key={skill['Area']}>
                <h3>{skill['Area']}</h3>
                <ul>
                  {
                    skill["SkillSet"].map(
                      set => <li>{set.Name}</li>
                    )
                  }
                </ul>
              </div>
            )
          }
        )
      }
    </>
  );
};

export default Example2;