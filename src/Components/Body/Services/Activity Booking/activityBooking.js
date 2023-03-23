import { Component } from "react";
import Billiard from './Billiard/billiard';
import Swimming from './Swimming/swimming';
import {Card,CardHeader,CardBody,CardFooter,Button} from 'reactstrap';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        billiardSlotsLeft: state.billiardSlotsLeft,
        swimmingSlotsLeft: state.swimmingSlotsLeft
    }
}
class ActivityBooking extends Component {
    constructor(props){
        super(props);
        this.state = {
            clickedBilliard: false,
            clickedSwimming: false,
        }
    }
    informBilliard = () => {
        this.setState({
            clickedBilliard: true,
            clickedSwimming: false,
        });
    }
    informSwimming = () => {
        this.setState({
            clickedBilliard: false,
            clickedSwimming: true,
        });
    }
    render() {
        if (this.state.clickedBilliard) {
            return (
                <Billiard left={this.props.billiardSlotsLeft}/>
            );
        } else if (this.state.clickedSwimming) {
            return (
                <Swimming left={this.props.swimmingSlotsLeft}/>
            );
        } else {
            return (
                <div>
                    <Card>
                        <CardHeader className='cardheaderfooter'>
                            Activities: Choose what you want
                        </CardHeader>
                        <CardBody className='cardbody'>
                            <Button className='cardbutton btn-lg' onClick={this.informBilliard}>Billiard</Button>
                            <Button className='cardbutton btn-lg' onClick={this.informSwimming}>Swimming</Button>
                        </CardBody>
                        <CardFooter className='cardheaderfooter'>
                            <h5>Billiard Slots Left: {this.props.billiardSlotsLeft}</h5>
                            <h5>Swimming Slots Left: {this.props.swimmingSlotsLeft}</h5>
                        </CardFooter>
                    </Card>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(ActivityBooking);