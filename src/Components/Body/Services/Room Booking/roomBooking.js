import { Component } from "react";
import {Card,CardHeader,CardBody,CardFooter,Button} from 'reactstrap';

class RoomBooking extends Component {
    constructor(props){
        super(props);
        this.state = {
            economyRoomsLeft: 5,
            businessRoomsLeft: 5,
        }
    }
    render() {
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
                        <h5>Economy Rooms Left: {this.state.economyRoomsLeft}</h5>
                        <h5>Business Rooms Left: {this.state.businessRoomsLeft}</h5>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default RoomBooking;