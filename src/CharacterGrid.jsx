import React from 'react'
import Card from './Card';

const CharacterGrid = (props) => {
    return props.isLoading ? (<h1>lodaing.....</h1>) : (<section>
        <div className="container-fluid md-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-1">
                {props.item.map((itemdata) => {
                    return <Card key={itemdata.char_id} imgsrc={itemdata.img} nickname={itemdata.nickname} birthday={itemdata.birthday} status={itemdata.status} title={itemdata.name} />
                })}
            </div>
            </div>
            </div>
            </div>
    </section>
    )
}

export default CharacterGrid;
