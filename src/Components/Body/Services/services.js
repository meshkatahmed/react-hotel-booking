import {Component} from 'react';
import './services.css';
import {Card,CardHeader,CardBody,CardFooter,Button} from 'reactstrap';
import RoomBooking from './Room Booking/roomBooking';
import ActivityBooking from './Activity Booking/activityBooking';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        roomsLeft: state.roomsLeft,
        activitySlotsLeft: state.activitySlotsLeft
    }
}

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedRoom: false,
            clickedActivity: false,
        };
    }
    informRoom = () => {
        this.setState(
            {
                clickedRoom: true,
                clickedActivity: false,
            }
        )
    }
    informActivity = () => {
        this.setState(
            {
                clickedRoom: false,
                clickedActivity: true,
            }
        )
    }
    
    render() {
        if (this.state.clickedRoom) {
            return (
                <RoomBooking/>
            );
            
        } else if (this.state.clickedActivity) {
            return (
                <ActivityBooking/>
            );
        } else {
            return (
                <div>
                    <Card className='my-5'>
                        <CardHeader className='cardheaderfooter'>
                            Choose what you want
                        </CardHeader>
                        <CardBody className='cardbody'>
                            <Button className='cardbutton btn-lg' onClick={this.informRoom}>Room</Button>
                            <Button className='cardbutton btn-lg' onClick={this.informActivity}>Activity</Button>
                        </CardBody>
                        <CardFooter className='cardheaderfooter'>
                            <h5>Rooms Left: {this.props.roomsLeft}</h5> 
                            <h5>Activity Slots Left: {this.props.activitySlotsLeft}</h5>
                        </CardFooter>
                    </Card>
                </div>
            );  
        }
    }
}

export default connect(mapStateToProps)(Services);