import React, { Component } from 'react';
import './Home.css'
import Dice from '../Dice/Dice'

class Home extends Component {

    state = {
        dicesAttack: [],
        dicesDefence: []
    }

    handleClikcDiceAttack = (event) => {
        var dices = this.state.dicesAttack;

        dices.push({
            color: event.target.id,
            face: Math.floor(Math.random() * 6) + 1
        })

        this.setState({ dicesAttack: dices })
    }

    handleClikcDiceDefence = (event) => {
        var dices = this.state.dicesDefence;

        dices.push({
            color: event.target.id,
            face: Math.floor(Math.random() * 6) + 1
        })

        this.setState({ dicesDefence: dices })
    }

    handleClikcDeleteDicesAttack = () => {
        if (this.state.dicesAttack.length !== 0)
            this.setState({ dicesAttack: [] });
    }

    handleClikcDeleteDicesDefence = () => {
        if (this.state.dicesDefence.length !== 0)
            this.setState({ dicesDefence: [] });
    }

    render() {
        return (
            <>
                <img className="img-bg" alt="" src="images/bg2.jpg" />
                <div className="main">
                    <div className="div-dices">
                        Кубы атаки
                    <div className="div-attack-dice">
                            <img
                                className="img-dice"
                                src="dices/yellow0.png"
                                alt=""
                                id="yellow"
                                onClick={this.handleClikcDiceAttack}
                            />
                            <img
                                className="img-dice"
                                src="dices/blue0.png"
                                alt=""
                                id="blue"
                                onClick={this.handleClikcDiceAttack}
                            />
                            <img
                                className="img-dice"
                                src="dices/green0.png"
                                alt=""
                                id="green"
                                onClick={this.handleClikcDiceAttack}
                            />
                            <img
                                className="img-dice"
                                src="dices/red0.png"
                                alt=""
                                id="red"
                                onClick={this.handleClikcDiceAttack}
                            />
                        </div>

                        <div className="div-attack-dice">
                            Пул кубов атаки
                        <div className="div-attack-dice">
                                {
                                    this.state.dicesAttack.length !== 0 ?
                                        this.state.dicesAttack.map((dice, index) => {
                                            return <Dice color={dice.color} key={index} face={dice.face} />
                                        })
                                        : null
                                }
                            </div>
                        </div>
                        <div className="div-button">
                            <button onClick={this.handleClikcDeleteDicesAttack} className="button-delete">Удалить кубы</button>
                        </div>

                    </div>

                    <div className="div-dices">
                        Кубы защиты
                    <div className="div-attack-dice">
                            <img
                                className="img-dice"
                                src="dices/white0.png"
                                alt=""
                                id="white"
                                onClick={this.handleClikcDiceDefence}
                            />
                            <img
                                className="img-dice"
                                src="dices/black0.png"
                                alt=""
                                id="black"
                                onClick={this.handleClikcDiceDefence}
                            />
                        </div>

                        <div className="div-attack-dice">
                            Пул кубов защиты
                        <div className="div-attack-dice">
                                {
                                    this.state.dicesDefence.length !== 0 ?
                                        this.state.dicesDefence.map((dice, index) => {
                                            return <Dice color={dice.color} key={index} face={dice.face} />
                                        })
                                        : null
                                }
                            </div>
                        </div>
                        <div className="div-button">
                            <button onClick={this.handleClikcDeleteDicesDefence} className="button-delete">Удалить кубы</button>
                        </div>

                    </div>
                </div>
               
            </>
        );
    }
}

export default Home;