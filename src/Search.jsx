import React, {useState} from 'react'

const Search = ({getQuery}) => {

    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="text"
                  value={text}
                  onChange={(e) => onChange(e.target.value)}
                  autoFocus
                  placeholder="Search Characters" 
                />
              </div>
              </form>
              </div>
              </div>
              </div>
    )
}

export default Search;
