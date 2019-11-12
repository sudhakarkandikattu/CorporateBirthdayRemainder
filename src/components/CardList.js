import React from 'react';
import Card from './Card';

const CardList = ({ colleagues }) => {
  return (
    <div>
      {
        colleagues.map((user, i) => {
            var date = new Date();
            date.setDate(date.getDate()+1);
            var month = date.getMonth()+1;
            var datenum = date.getDate();
            if((""+datenum+"-"+month) === colleagues[i].dob) {

              //window.location.reload(false);
            }
            
          
          return (
            <Card
              key={i}
              id={colleagues[i].id}
              name={colleagues[i].name}
              dob={colleagues[i].dob}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;