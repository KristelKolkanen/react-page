import React from 'react'

const items = [
    "Kuidas React töötab?",
    "Millest alustada uue rakenduse loomisel?",
    "Javascripti parimad omadused?"
  ]
  
  const listItems = items.map((item, index) => 
    <li key={index}>{item}</li> 
  )

const Welcome = ({name}) => <div> 
    <h1>{name}</h1>
    {/* Question list */}
    <div className="questions">
        <ul>{listItems}</ul>
    </div>
    {/* CTA button */}
    <div className="CTA-div">
          <button className="CTAbtn">
            GET MONEY
          </button>
    </div>
    {/* Form */}
    <div className="container">
      <form action="">
        <div className="row">
          <div className="col-25">
        <label htmlFor="">Nimi</label>
          </div>
          <div className="col-75">
        <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
        <label htmlFor="">Email</label>
          </div>
          <div className="col-75">
        <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
        <label htmlFor="">Sõnum</label>
          </div>
          <div className="col-75">
        <textarea type="text"></textarea>
          </div>
        </div>
        <div className="row">
        <button type="submit">Saada</button>
        </div>
      </form>
    </div>

</div>

export default Welcome