import React from 'react';

const Card = (props) => {
  

  
  return (
    <>
      <div className="col-md-4 col-10 mx-auto p-3">
        <div className="card ">
          <img src={props.imgsrc} className="card-img-top"  alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title text-center">{props.title}</h5>
            {/* <h6 className="card-text text-center"><label>Nickname:</label>{props.nickname}</h6>
            <h6 className="card-text text-center"><label>Birthday:</label>{props.birthday}</h6>
            <h6 className="card-text text-center"><label>Status: </label>{props.status}</h6> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
