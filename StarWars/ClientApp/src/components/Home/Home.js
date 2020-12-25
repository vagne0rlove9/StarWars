import React, { Component } from 'react';
import './Home.css'
import Dice from '../Dice/Dice'

class Home extends Component {

    state = {
        dicesAttack: [],
        dicesDefence: [],
	chubaca: "images/Chubaca0.png",
	chubacaCards: [{src: "images/ChubacaCard1.png", class: "img-hero-cards"}, {src: "images/ChubacaCard2.png", class: "img-hero-cards"}, {src: "images/ChubacaCard3.png", class: "img-hero-cards"}]
    }

    handleClikcDiceAttack = (event) => {
        var dices = this.state.dicesAttack;

        dices.push({
            color: event.target.id,
            face: Math.floor(Math.random() * 6) + 1
        })

        this.setState({ dicesAttack: dices })
    }

    handleChangeDamage = (event) => {
	if(event.target.value >= 17)
	    this.setState({ chubaca: "images/Chubaca1.png" })
	console.log(event.target.value)
	if(event.target.value === "-1")
	    this.setState({ chubaca: "images/Chubaca0.png" })
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

    handleClickHeroCard = (event) => {
	var cards = this.state.chubacaCards
	cards[event.target.id].class += " img-hero-card-rotate"
	console.log(cards)
	this.setState({ chubacaCards: cards })
    }

    render() {
        return (
            <>
		<img alt="" src="images/left.png" className="img-bg-left"/>
		<img alt="" src="images/right.png" className="img-bg-right"/>
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
               <div className="div-heros">
		   <div className="div-hero">
				<img alt="" src={this.state.chubaca} className="img-hero"/>
				<label className="label">Число активаций
				    <select>
				        <option>2</option>
	    		        	<option>1</option>
				        <option>0</option>
				    </select>
				</label>
				<label className="label">Число ран
				    <input onChange={this.handleChangeDamage}/>
				</label>
				<label className="label">Число усталости
				    <input/>
				</label>
			<div>
			    {
				this.state.chubacaCards.map((card, index) => {
					return <img alt="" onClick={this.handleClickHeroCard} id={index} key={index} src={card.src} className={card.class}/>
				})
			    }
			</div>
		   </div>
		   
	       </div>
            </>
        );
    }
}

export default Home;