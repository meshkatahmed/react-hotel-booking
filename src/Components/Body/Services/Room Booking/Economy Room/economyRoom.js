import { Component } from "react";
import {Card,Button} from 'reactstrap';
import {connect} from 'react-redux';
import * as actionCreators from '../../../../../Redux/actionCreators';

const mapDispatchToProps = dispatch => {
    return {
        discardRoom: ()=>dispatch(actionCreators.discardRoom()),
        discardEconomyRoom: ()=>dispatch(actionCreators.discardEconomyRoom())
    }
}
class EconomyRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }
    handleBooking = () => {
        this.props.discardEconomyRoom();
        this.props.discardRoom();
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
            if (this.props.left<1) {
                return (
                    <div className="container">
                        <div style={{backgroundColor:'red',height:'70px'}}>
                            <p style={{textAlign:"center",paddingTop:'15px',paddingBottom:'15px'}}>All economy rooms are booked!</p>
                        </div>
                    </div>
                );  
            } else {
                return (
                    <div>
                        <Card>
                            <Button onClick={this.handleBooking}>Book</Button>
                        </Card>
                    </div>
                );
            }
        }
    }
}

export default connect(null,mapDispatchToProps)(EconomyRoom);