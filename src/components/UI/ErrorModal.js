import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css';
import { ReactDOM } from "react-dom";

const ErrorModal = props => {

    const Backdrop = props => {
        return <div className={classes.backdrop} onConfirm={props.onConfirm}></div>;
    };

    const ModalOverlay = props => {
        return (
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        );
    };

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />)}
        </React.Fragment>
    );
}

export default ErrorModal;