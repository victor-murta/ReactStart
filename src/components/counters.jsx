import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    

    render() { 
        return ( 
            <div>
                <button 
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {/* <Counter/>
                <Counter/>
                <Counter/>
                <Counter/> */}
                {this.props.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={this.props.onDelete} 
                        onIcrement={this.props.onIncrement}
                        counter={counter}
                    />
                ))}
            </div> 
        );
    }
}
 
export default Counters;




