import React from 'react';

function Quote() {

  return (

    <div className='container'>
      <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate"/>
            <label for="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate"/>
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="email" className="validate"/>
            <label for="email">Email</label>
          </div>
          <div className="input-field col s6">
            {/* <i className="material-icons prefix">phone</i> */}
            <input id="icon_telephone" type="tel" className="validate"/>
            <label for="icon_telephone">Telephone</label>
          </div>
        </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label for="textarea1">Textarea</label>
              </div>
        </div>
      </form>
    </div>
    </div>

  );
}

export default Quote;