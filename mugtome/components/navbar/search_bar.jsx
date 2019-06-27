import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {input: ""};
    }

    componentDidMount () {
        this.props.requestUsers();
    }

    handleSearchSubmit () {
        
        const nearestSearch = Object.values(this.props.users).filter(user => (
            `${user.first_name} ${user.last_name}`.toLowerCase().includes(this.state.input.toLowerCase())
            ))[0];
        this.setState({
            input: ""
        });
        // <Redirect to={`/home`} />
        return <Redirect to={`/users/${nearestSearch.first_name}/${nearestSearch.last_name}/${nearestSearch.id}`} />
    }

    renderSearchResults () {
        const results = Object.values(this.props.users).filter(user => (
            `${user.first_name} ${user.last_name}`.toLowerCase().includes(this.state.input.toLowerCase())
        ));
        if (this.state.input)
        return (
            <div className="search-results">
                <ul>
                    {results.slice(0, 15).map((user) => (
                        <Link onClick={this.handleSearchSubmit.bind(this)} className='search-result-link-container' key={`${user.first_name} ${user.last_name}`} to={`/users/${user.first_name}/${user.last_name}/${user.id}`}>
                            {/* <i class="fas fa-search" /> */}
                            <p className='search-result-link'>{`${user.first_name} ${user.last_name}`}</p>
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }

    render () {
        return (
            <div className="search-bar-container">
                <div className="search-bar">
                    <input type="text" placeholder={this.props.placeholderText || "Search"} value={this.state.input} onChange={e => this.setState({input: e.currentTarget.value})}/>
                    {/* <input type="submit" value="Search"/> */}
                    <button type='submit' onClick={this.handleSearchSubmit.bind(this)}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default SearchBar;