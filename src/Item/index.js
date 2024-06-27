import { Header, StyledItem, Paragraph, Title, Icon } from "./styled";

export const Item = ({ title, temp, wind, tempFeel, pressure, icon, description}) => {
    const renderIcon = () => {
        return (
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather icon" />
        );
    };

    return (
        <StyledItem>
            <Header>
                <Title>{title}</Title>
                <Icon>{renderIcon()}</Icon>
            </Header>
            <Paragraph>Temperature: <strong>{temp} °C</strong></Paragraph>
            <Paragraph>Feels like: <strong>{tempFeel}</strong></Paragraph>
            <Paragraph>Wind: <strong>{wind} km/h</strong></Paragraph>
            <Paragraph>Pressure: <strong>{pressure} hPa</strong></Paragraph>
            <Paragraph>Description: <strong>{description}</strong></Paragraph>
        </StyledItem>
    );
}