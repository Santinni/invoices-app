import './style/Card.scss';
import Button from '../button/Button';
import { useHistory } from 'react-router-dom';

//TODO poresit types

const Card = (props: any) => {
    const history = useHistory();
    const handleClick = () => history.goBack();

    return (
        <>
            <div className={`card ${props.class && props.class}`}>
                <div className="card__header">
                    <h1>
                        {props.title}
                    </h1>
                    {props.buttonProps &&
                        <Button
                            title={props.buttonProps.title ? props.buttonProps.title : "Zpět"}
                            variant={props.buttonProps.variant ? props.buttonProps.variant : "outlined"}
                            size={props.buttonProps.size ? props.buttonProps.size : "medium"}
                            withIcon={props.buttonProps.withIcon && props.buttonProps.withIcon}
                            customClass={props.buttonProps.customClass ? props.buttonProps.customClass : ''}
                            color={props.buttonProps.color ? props.buttonProps.color : "secondary"}
                            onClick={props.handleClick ? props.handleClick : handleClick}
                        />
                    }
                </div>
                <div className="card__content">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Card;