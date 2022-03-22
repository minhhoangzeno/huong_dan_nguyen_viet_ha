import React from 'react';
import imgNew from '../../img/New song of the week/bts-dynamite_odoo.jpg';
export default function HomeNew(){
    return(
        <>
            <div className="content__new">
  <div className="title">
    <h1>New song of the week</h1>
  </div>
  <div className="row">
    <div className="col">
      <img src={imgNew} alt />
      <h5>DYNAMITE - BTS</h5>
    </div>
    <div className="col">
    <img src={imgNew} alt />
    <h5>DYNAMITE - BTS</h5>
    </div>
    <div className="col">
      <img  src={imgNew} alt="" />
      <h5>BUTTER - BTS</h5>
    </div>
    <div className="col">
      <img
         src={imgNew}
        alt=""
      />
      <h5>RIDIN' - NCT DREAM</h5>
    </div>
    <div className="col">
      <img  src={imgNew} alt="" />
      <h5>PSYCHO - RED VELVET</h5>
    </div>
    <div className="col">
      <img  src={imgNew} alt="" />
      <h5>QUEENDOM - RED VELVET</h5>
    </div>
  </div>
</div>

        </>
    )
}