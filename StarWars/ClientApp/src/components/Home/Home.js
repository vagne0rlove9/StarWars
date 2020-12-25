import React, { Component } from 'react';
import './Home.css'
import Dice from '../Dice/Dice'

class Home extends Component {

    state = {
        dicesAttack: [],
        dicesDefence: [],
        chubaca: "images/Chubaca0.png",
        chubacaCards: [{ src: "images/ChubacaCard1.png", class: "img-hero-cards" }, { src: "images/ChubacaCard2.png", class: "img-hero-cards" }, { src: "images/ChubacaCard3.png", class: "img-hero-cards" }],
        mak: "images/Mak0.png",
        makCards: [{ src: "images/MakCard1.png", class: "img-hero-cards" }, { src: "images/MakCard2.png", class: "img-hero-cards" }, { src: "images/MakCard3.png", class: "img-hero-cards" }, { src: "images/MakCard4.png", class: "img-hero-cards" }],
        gideon: "images/Gideon0.png",
        gideonCards: [{ src: "images/GideonCard1.png", class: "img-hero-cards" }, { src: "images/GideonCard2.png", class: "img-hero-cards" }, { src: "images/GideonCard3.png", class: "img-hero-cards" }],
        vladCards: [{ src: "images/vlad1.png", class: "img-hero-cards" }, { src: "images/vlad2.png", class: "img-hero-cards" }],
        monsterCard: [{ src: "images/stoormpers0.png", class: "img-monster" }, { src: "images/droid0.png", class: "img-monster" }],
        round: 0
    }

    handleClikcDiceAttack = (event) => {
        var dices = this.state.dicesAttack;

        dices.push({
            color: event.target.id,
            face: Math.floor(Math.random() * 6) + 1
        })

        this.setState({ dicesAttack: dices })
    }

    handleChangeDamageChubaca = (event) => {
        if (event.target.value >= 17)
            this.setState({ chubaca: "images/Chubaca1.png" })
        if (event.target.value === "-1")
            this.setState({ chubaca: "images/Chubaca0.png" })
    }

    handleChangeDamageMak = (event) => {
        if (event.target.value >= 15)
            this.setState({ mak: "images/Mak1.png" })
        if (event.target.value === "-1")
            this.setState({ mak: "images/Mak0.png" })
    }

    handleChangeDamageGideon = (event) => {
        if (event.target.value >= 13)
            this.setState({ gideon: "images/Gideon1.png" })
        if (event.target.value === "-1")
            this.setState({ gideon: "images/Gideon0.png" })
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

    handleClickHeroCardChubaca = (event) => {
        var cards = this.state.chubacaCards
        cards[event.target.id].class += " img-hero-card-rotate"
        this.setState({ chubacaCards: cards })
    }

    handleClickHeroCardMak = (event) => {
        var cards = this.state.makCards
        cards[event.target.id].class += " img-hero-card-rotate"
        this.setState({ makCards: cards })
    }

    handleClickHeroCardGideon = (event) => {
        var cards = this.state.gideonCards
        cards[event.target.id].class += " img-hero-card-rotate"
        this.setState({ gideonCards: cards })
    }

    handleClickHeroCardVlad = (event) => {
        var cards = this.state.vladCards
        cards[event.target.id].class += " img-hero-card-rotate"
        this.setState({ vladCards: cards })
    }

    handleClickMonsterCard = (event) => {
        var cards = this.state.monsterCard
        cards[event.target.id].class += " img-hero-card-rotate"
        this.setState({ monsterCard: cards })
    }

    handleChangeRound = (event) => {
        if (event.target.value > this.state.round) {
            this.setState({
                chubacaCards: [{ src: "images/ChubacaCard1.png", class: "img-hero-cards" }, { src: "images/ChubacaCard2.png", class: "img-hero-cards" }, { src: "images/ChubacaCard3.png", class: "img-hero-cards" }],
                makCards: [{ src: "images/MakCard1.png", class: "img-hero-cards" }, { src: "images/MakCard2.png", class: "img-hero-cards" }, { src: "images/MakCard3.png", class: "img-hero-cards" }, { src: "images/MakCard4.png", class: "img-hero-cards" }],
                gideonCards: [{ src: "images/GideonCard1.png", class: "img-hero-cards" }, { src: "images/GideonCard2.png", class: "img-hero-cards" }, { src: "images/GideonCard3.png", class: "img-hero-cards" }],
                vladCards: [{ src: "images/vlad1.png", class: "img-hero-cards" }, { src: "images/vlad2.png", class: "img-hero-cards" }],  
                monsterCard: [{ src: "images/stoormpers0.png", class: "img-monster" }, { src: "images/droid0.png", class: "img-monster" }],
            })
        }
        this.setState({ round: event.target.value })
    }

    handleDBClickChu = (event) => {
        var cards = this.state.chubacaCards
        cards[event.target.id].class = "img-hero-cards-reboot"
        this.setState({ chubacaCards: cards })
    }

    handleDBClickMak = (event) => {
        var cards = this.state.makCards
        cards[event.target.id].class = "img-hero-cards-reboot"
        this.setState({ makCards: cards })
    }

    handleDBClickGid = (event) => {
        var cards = this.state.gideonCards
        cards[event.target.id].class = "img-hero-cards-reboot"
        this.setState({ gideonCards: cards })
    }

    render() {
        return (
            <>
                <img alt="" src="images/left.png" className="img-bg-left" />
                <img alt="" src="images/right.png" className="img-bg-right" />
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
                        <img alt="" src={this.state.chubaca} className="img-hero" />
                        <label className="label">Число активаций
				            <select>
                                <option>2</option>
                                <option>1</option>
                                <option>0</option>
                            </select>
                        </label>
                        <label className="label">Число ран
				    <input onChange={this.handleChangeDamageChubaca} />
                        </label>
                        <label className="label">Число усталости
				    <input />
                        </label>
                        <div>
                            {
                                this.state.chubacaCards.map((card, index) => {
                                    return <img alt="" onDoubleClick={this.handleDBClickChu} onClick={this.handleClickHeroCardChubaca} id={index} key={index} src={card.src} className={card.class} />
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="div-heros">
                    <div className="div-hero">
                        <img alt="" src={this.state.mak} className="img-hero" />
                        <label className="label">Число активаций
				            <select>
                                <option>2</option>
                                <option>1</option>
                                <option>0</option>
                            </select>
                        </label>
                        <label className="label">Число ран
				    <input onChange={this.handleChangeDamageMak} />
                        </label>
                        <label className="label">Число усталости
				    <input />
                        </label>
                        <div>
                            {
                                this.state.makCards.map((card, index) => {
                                    return <img alt="" onDoubleClick={this.handleDBClickMak} onClick={this.handleClickHeroCardMak} id={index} key={index} src={card.src} className={card.class} />
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="div-heros">
                    <div className="div-hero">
                        <img alt="" src={this.state.gideon} className="img-hero" />
                        <label className="label">Число активаций
				            <select>
                                <option>2</option>
                                <option>1</option>
                                <option>0</option>
                            </select>
                        </label>
                        <label className="label">Число ран
				    <input onChange={this.handleChangeDamageGideon} />
                        </label>
                        <label className="label">Число усталости
				    <input />
                        </label>
                        <div>
                            {
                                this.state.gideonCards.map((card, index) => {
                                    return <img alt="" onDoubleClick={this.handleDBClickGid} onClick={this.handleClickHeroCardGideon} id={index} key={index} src={card.src} className={card.class} />
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="div-heros">
                    <div className="div-hero">
                        <label className="label">
                            Раунд
                            <input value={this.state.round} onChange={this.handleChangeRound} />
                        </label>
                        <label className="label">
                            Угроза
                            <input />
                        </label>
                        <div>
                            {
                                this.state.vladCards.map((card, index) => {
                                    return <img alt="" onClick={this.handleClickHeroCardVlad} id={index} key={index} src={card.src} className={card.class} />
                                })
                            }
                        </div>
                        {
                            this.state.monsterCard.map((card, index) => {
                                return <img alt="" src={card.src} key={index} id={index} onClick={this.handleClickMonsterCard} className={card.class} />
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Home;