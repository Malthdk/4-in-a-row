import React from 'react';
import '../index.scss';

const Canvas = (props) => {

    return (
        <div className="flc-layout-bg mdl-layout mdl-js-layout">
            <main className="mdl-layout__content flc-layout--center-middle">
            <div className="page-content flc-layout--center">
                <div className="mdl-card mdl-shadow--2dp flc-card-main">
                <div className="flc-layout--center" style={{padding: 50}}>
                    <div className="flc-game-board">
                        <div className="board-col">
                        </div>
                        <div className="board-col">
                        </div>
                        <div className="board-col">
                        </div>
                        <div className="board-col">
                        </div>
                        <div className="board-col">
                        </div>
                        <div className="board-col">
                        </div>
                        <div className="board-col">
                        </div>
                    </div>
                </div>
                </div>
                <div className="mdl-card mdl-shadow--2dp flc-card-aside">
                <div className="flc-game-avatar-group">
                    <span className="flc-game-avatar woman player-one"></span>
                    <span>
                    Player one <br />
                    <i className="mdl-typography--caption-color-contrast">(you)</i>
                    </span>
                </div>
                <div className="flc-game-avatar-group">
                    <span className="flc-game-avatar man"></span>
                    <span>
                    Player two <br />
                    <i className="mdl-typography--caption-color-contrast">(waiting to join)</i>
                    </span>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <button onclick="alert('TODO: Implement Start Game route')" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect">
                    Start game
                    </button>
                    <button onclick="alert('TODO: Implement Join Game route')" className="mdl-button mdl-js-button mdl-button--accent mdl-js-ripple-effect">
                    Join game
                    </button>
                </div>
                </div>
            </div>
            </main>
            <footer className="mdl-mega-footer">
            <div className="mdl-mega-footer__middle-section">
                <div className="mdl-mega-footer__drop-down-section">
                <h1 className="mdl-mega-footer__heading">Assignment documentation</h1>
                <ul className="mdl-mega-footer__link-list">
                    <li><a href="/doc.html#">Documentation</a></li>
                    <li><a href="/doc.html#requirements#">Requirements</a></li>
                    <li><a href="/doc.html#boilerplate">Boilerplate</a></li>
                    <li><a href="/doc.html#how-to-submit">How to submit?</a></li>
                    <li><a href="/doc.html#how-do-we-evaluate">How do we evaluate?</a></li>
                </ul>
                </div>
                <div className="mdl-mega-footer__drop-down-section">
                <h1 className="mdl-mega-footer__heading">About Falcon.io</h1>
                <ul className="mdl-mega-footer__link-list">
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.falcon.io/">Home</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.falcon.io/company/">Company</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.falcon.io/insights-hub/">Blog</a></li>
                </ul>
                </div>
            </div>
            <div className="mdl-mega-footer__bottom-section">
                <div className="mdl-logo">
                <img src="../static/falcon_logo_white.svg" alt="" />
                </div>
            </div>
            </footer>
        </div>
    )
}

export default Canvas;