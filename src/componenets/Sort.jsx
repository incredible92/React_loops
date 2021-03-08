import React,{useState} from 'react';



function Sort() {

  const [changeIndex, setChangeIndex] = useState(0);
  const sorts = "Sort by price, Sort by name, Sort by relevance".split(",")
  const currentChange = sorts[changeIndex]

    return (
      <div className="App">

<div className="wrapper">
  {
    sorts.map((sort, sortIndex) => {
      return(
        <div className="sort">
          <span 
            className={`button ${changeIndex===sortIndex? 'active' : ''}`}
            onClick={() => setChangeIndex(sortIndex)}
            key={`sort-pnr ${sortIndex}`}>
            {sort}
          
        </span>
        </div>
        )
      })
    }  
</div>

      </div>
    );
  }

  export default Sort;