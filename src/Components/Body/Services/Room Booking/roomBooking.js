import { Component } from "react";
import EconomyRoom from './Economy Room/economyRoom';
import BusinessRoom from './Business Room/businessRoom';
import {Card,CardHeader,CardBody,CardFooter,Button} from 'reactstrap';
import { connect } from "react-redux";
// import '../services.css';

const mapStateToProps = state => {
    return {
        economyRoomsLeft: state.economyRoomsLeft,
        businessRoomsLeft: state.businessRoomsLeft
    }
}
class RoomBooking extends Component {
    constructor(props){
        super(props);
        this.state = {
            clickedEconomyRoom: false,
            clickedBusinessRoom: false
        }
    }
    informEconomyRoom = () => {
        this.setState({
            clickedEconomyRoom: true,
            clickedBusinessRoom: false
        });
    }
    informBusinessRoom = () => {
        this.setState({
            clickedEconomyRoom: false,
            clickedBusinessRoom: true
        });
    }
    render() {
        if (this.state.clickedEconomyRoom) {
            return (
                <EconomyRoom left={this.props.economyRoomsLeft}/>
            );
        } else if (this.state.clickedBusinessRoom) {
            return (
                <BusinessRoom left={this.props.businessRoomsLeft}/>
            );
        } else {
            return (
                <div>
                    <Card>
                        <CardHeader className='cardheaderfooter'>
                            Rooms: Choose a class
                        </CardHeader>
                        <CardBody className='cardbody'>
                            <Button className='cardbutton btn-lg' onClick={this.informEconomyRoom}>Economy</Button>
                            <Button className='cardbutton btn-lg' onClick={this.informBusinessRoom}>Business</Button>
                        </CardBody>
                        <CardFooter className='cardheaderfooter'>
                            <h5>Economy Rooms Left: {this.props.economyRoomsLeft}</h5>
                            <h5>Business Rooms Left: {this.props.businessRoomsLeft}</h5>
                        </CardFooter>
                    </Card>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(RoomBooking);