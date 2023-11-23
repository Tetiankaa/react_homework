import {Component} from "react";
import {carService} from "../../services";
import {Car} from "./Car";

class Cars extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cars:[]
        }
    }

    componentDidMount() {
        carService.getAll().then(({data})=>this.setState({cars:data}))
    }

    render() {
        return (

            <>
                <h2>Cars</h2>
                <div style={{display: "flex", flexWrap: 'wrap'}}>
                    {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
                </div>
            </>
        );
    }
}

export {Cars}