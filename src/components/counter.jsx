//imrc = import react
import React, { Component } from 'react';


class Counter extends Component {

    state = {
        count: 1,
        tags: []
        // imageUrl: 'https:picsum.photos/200'
    };

    // styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold',
    //     backgroundColor:'blue'

    // }

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

    }

    constructor() {
        
    }

    handleIncrement(){
        
    }

    render() { 
        return (
            <div>
            {/*<span  className={this.getBadgeClasses()} >{this.formatCount()}</span>  {/*this.state.count*/}
            {/*<button className='btn btn-secondary btn-sm'>Increment</button> */}
            {/* { this.state.tags.length === 0 && 'Please create a new tag'}
            {this.renderTags()}; */}
                <span  className={this.getBadgeClasses()} >{this.formatCount()}</span>  
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>

            </div>
        );
    }

    formatCount(){
        const { count } = this.state;
        // return count === 0 ? 'Zero' : count
        return count === 0 ? 'Zero' : count
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;


