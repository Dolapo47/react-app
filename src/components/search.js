import React, { Component } from 'react';


class Search extends Component {
    render() {
        return (
            <div className='search'>
                <input className="container"  placeholder='Search...' onChange={e => console.log(e.target.value)}/>
            </div>
        )
    }
}

export default Search;
