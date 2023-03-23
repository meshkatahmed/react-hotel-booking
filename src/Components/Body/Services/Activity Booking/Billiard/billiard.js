import { Component } from "react";
import {Card,Button} from 'reactstrap';
import {connect} from 'react-redux';
import * as actionCreators from '../../../../../Redux/actionCreators';


const mapDispatchToProps = dispatch => {
    return {
        discardActivitySlot: ()=>dispatch(actionCreators.discardActivitySlot()),
        discardBilliardSlot: ()=>dispatch(actionCreators.discardBilliardSlot())
    }
}

class Billiard extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }
    handleBooking = () => {
        this.props.discardActivitySlot();
        this.props.discardBilliardSlot();
        this.setState({
            clicked: true
        })
    }
    render () {
        if (this.state.clicked) { 
            return (
                <div className="container">
                    <div style={{backgroundColor:'green',height:'70px'}}>
                        <p style={{textAlign:"center",paddingTop:'15px',paddingBottom:'15px'}}>Your booking is successful!</p>
                    </div>
                </div>
            );
        } else {
            if (this.props.left<1){
                return (
                    <div className="container">
                        <div style={{backgroundColor:'red',height:'70px'}}>
                            <p style={{textAlign:"center",paddingTop:'15px',paddingBottom:'15px'}}>All billiard slots are booked!</p>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div>
                        {console.log(this.props.left)}
                        <Card>
                            <Button onClick={this.handleBooking}>Book</Button>
                        </Card>
                    </div>
                );  
            }  
        }
    }
}

export default connect(null,mapDispatchToProps)(Billiard);