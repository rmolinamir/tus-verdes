import React, {Component} from 'react';

class TimeContainer extends Component {
    constructor() {
        super()
        let d = new Date()
            this.state = {
                day: d.getDay(),
                month: d.getMonth(),
                date: d.getDate(),
                year: d.getFullYear(),
                time: d.toLocaleTimeString()
            }
        this.countingSecond = this.countingSecond.bind(this)
    }

    countingSecond() {
        let d = new Date();
        this.setState({
            day: d.getDay(),
            month: d.getMonth(),
            date: d.getDate(),
            year: d.getFullYear(),
            time: d.toLocaleTimeString()
        });
    }

    componentDidMount() {
        setInterval(this.countingSecond, 1000);
    }

    render() {
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Noviembre", "Diciembre"]
        const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        return (
            <div>
                <span>{days[this.state.day]}, {months[this.state.month]} {this.state.date}, {this.state.year}. {this.state.time}</span>
            </div>
        );
    }
}

export default TimeContainer;