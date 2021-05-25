//imrc = import react
import React, { Component } from 'react';


class Counter extends Component {

    // state = {
    //     value: this.props.counter.value,
    //     tags: []
    //     // imageUrl: 'https:picsum.photos/200'
    // };

    // styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold',
    //     backgroundColor:'blue'

    // }

    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

    // }

    // handleIncrement = () =>{
    //     this.setState({value : this.state.value + 1});
    // }

    // doHandleIncrement = () => {
    //     this.handleIncrement( {id: 1} );
    // }
    
    //onClick={this.handleIncrement}

    // handleReduce = () => {
    //     this.setState( {value: this.state.value - 1} )
    // }

    render() { 
        console.log('props', this.props);

        return (
            <div>
            {/*<span  className={this.getBadgeClasses()} >{this.formatCount()}</span>  {/*this.state.count*/}
            {/*<button className='btn btn-secondary btn-sm'>Increment</button> */}
            {/* { this.state.tags.length === 0 && 'Please create a new tag'}
            {this.renderTags()}; */}
                
                <span  className={this.getBadgeClasses()} >{this.formatCount()}</span>  
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm"
                >Increment</button>

                <button 
                    onClick={() => this.handleReduce() } 
                    className="btn btn-secondary btn-sm m-2"
                >Increment</button>

                <buton 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2"
                    >Delete</buton>
            </div>
        );
    }

    formatCount(){
        const { value: count } = this.props.counter;
        // return count === 0 ? 'Zero' : count
        return count === 0 ? 'Zero' : count
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;


