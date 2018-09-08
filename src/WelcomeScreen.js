import React from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';

const defaultDuration = 700;
const defaultDelay = 2000;
const defaultBetween = 100;

class WelcomeScreen extends React.Component {
    constructor() {
        //last,timeout,array,styles,timeBetweenScreen
        super(...arguments);
        this.state = { AnimateTrigger: false, CurrentShowScreen: 0 };
        this.defaultStyle = {
            transition: `opacity ${this.props.timeout || defaultDuration}ms linear`,
            opacity: 0
        };
        this.WelcomeScreenStyle = {
            boxSizing: "content-box",
            width: "100%",
            height: "100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            position: "absolute",
            zIndex: 9999
        };
        this.WelcomeTransitionStyle = {
            backgroundColor: "black",
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%"
        };
        this.transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 },
        };
        this.ScreenUrls = this.ShapeScreenUrl();
        this.setChildrenRef = this.setChildrenRef.bind(this);
        this.RemoveTransitionComponent = this.RemoveTransitionComponent.bind(this);
    }
    setChildrenRef(r) {
        this.childrenRef = r;
    }
    ShapeScreenUrl() {
        let urls = this.props.ScreenArray;
        let news = [];
        for (let i of urls) {
            if (!i.startsWith("url(")) {
                i = `url('${i}')`;
            }
            news.push(i);
        }
        return news;
    }
    componentDidMount() {
        if (this.props.on) {
            this.setState({ AnimateTrigger: true });
        }
        else{
            this.childrenRef && (this.childrenRef.style.display = "inline");
        }
    }
    RemoveTransitionComponent() {
        this.childrenRef && (this.childrenRef.style.display = "inline");
        document.getElementById("WelcomeScreen").remove();
    }
    render() {
        return (
            <div className="WelcomeTransition" style={{ ...this.WelcomeTransitionStyle, ...(this.props.styles && this.props.styles.container) }}>
                {this.props.on ? <Transition
                    in={this.state.AnimateTrigger}
                    timeout={this.props.timeout || defaultDuration}
                    onEntered={() => {
                        setTimeout(() => {
                            this.setState({ AnimateTrigger: false });
                        }, this.props.last || defaultDelay)
                    }}
                    onExited={() => {
                        if (this.state.CurrentShowScreen + 1 < this.ScreenUrls.length) {
                            setTimeout(() => {
                                this.setState({ AnimateTrigger: true, CurrentShowScreen: this.state.CurrentShowScreen + 1 });
                            }, this.props.timeBetweenScreen || defaultBetween);
                        }
                        else {
                            this.RemoveTransitionComponent();
                        }
                    }}>
                    {(state) => (
                        <div style={{
                            ...(this.props.styles && this.props.styles.transition),
                            ...this.defaultStyle,
                            ...this.transitionStyles[state]
                        }}>
                            <div id="WelcomeScreen" style={{ backgroundImage: this.ScreenUrls[this.state.CurrentShowScreen], ...this.WelcomeScreenStyle, ...(this.props.styles && this.props.styles.screen) }} />
                        </div>
                    )}
                </Transition> : null}
                <div className="ChildrenContainer" ref={this.setChildrenRef} style={{ display: "none" }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
WelcomeScreen.propTypes = {
    last: PropTypes.number,
    styles: PropTypes.object,
    timeout: PropTypes.object,
    ScreenArray: PropTypes.array.isRequired,
    timeBetweenScreen: PropTypes.number
}
export default WelcomeScreen;
