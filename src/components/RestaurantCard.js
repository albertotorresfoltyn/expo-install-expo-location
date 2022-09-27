import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import star from "../../assets/star";
import open from "../../assets/open";
import Favorite from "./Favorite";

const StyledCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    width: 95%;
    align-self: center;
    margin-bottom: ${(props) => props.theme.space[3]};
`;

const CardImage = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
    /* padding: ${(props) => props.theme.space[3]}; */
    color: ${(props) =>
        props.isClosed
            ? props.theme.colors.ui.error
            : props.theme.colors.ui.primary};
`;

const Section = styled.View`
    align-items: center;
    flex-direction: row;
`;

const SectionEnd = styled.View`
    align-items: center;
    flex: 1;
    justify-content: space-around;
    flex-direction: row;
`;

const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Icon = styled.Image`
    height: 30px;
    width: 30px;
    position: absolute;
    right: 0px;
    bottom: 0px;
`;

export default function RestaurantCard({ restaurant = {} }) {
    const {
        name = "Some Restaurant",
        icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAY1BMVEX///8AAACjo6PMzMz39/fx8fHS0tLm5uY1NTWFhYW/v79YWFgiIiKtra2NjY28vLydnZ3f399PT09ubm61tbUWFhZGRkYRERHFxcU6Ojp5eXlpaWmUlJRjY2MaGhp/f38rKyt0SsqlAAADn0lEQVRoge3a65aqIBgGYDybaWWa2djUvv+r3BofCgooobjW3rz/nBqeVE6CCNnY2JhPFJaZu1oyL19O180fZ+VcL8EiOqzWlj+5uwvs5yZ0lyqas383s9uEcrvZ0nYc6blftrWdh8SOhm+5tbdW6qy5kXKf8xc99eQ3RznBD9GFLY6c+HVluos7d+pwx1/L+gPFwLlXvuBzaGblFjYK7rh0QU/rQ7XYxO5PvRb8tu3ueJczLv4ixd8b4Z60xkFlP2yEh30ncnSn/awxvLu341tvEnecgm3QZnHnD9PoDONskzeO36grbwaPj+lQ7U3jJxQkV6IPdd4U3uYEeLUH3k9T+zpnEkdw5fvO1igOPf3vLjiCuk/mFmbxBz4kTd0sfrT4Ujy/dI/bF5gKnD9HLlSZpO4ieRrTxdlpGEx28fOXjw+K7fCEwYvPwYvBfyz+j+G7Vrgg/ATWF3J8BE0t+0TwMLQGrhWLW9ziFre4xS1ucYtvgMOqc7MRXuPiyUIIH39thMMmCtnHGOE+bKIqbPmqJMalk+fYEU5Wx46C/9ZLhguPiTbGyeqoZOft6+RQdv9IM8bJlXFOov2nr+PB3tKwlzvBS/iGU2VB4H/CLcpXS1AXpOB+3W2Kk790ucddUt4mW/mIVUK/hhBJcLLzNmSK+xpb7FRpUxzlY32C19/TTE3m4Ch/SHH/oGEzb03wcGq3mYPrvMxRsctkXLwV6JvK4BovFkxqrgBvz748VOkEj+jTThXyKDhbiEK8Sz3GXYoW7MaqpJLhZxYPqC6gWmPowc3qxu/FWDy5DfZhjc4XZi6C/XIaD97UzZYsOCkEmqxg2kThYTzYBf8mqYYMoMkcTvcrgi8r2+QuCj4H/Ex3eb/rDLVB31+IWg3gR6qmVWW2MCXvV3r4s0vRD3Op6OedHZ1cOa3xPfmWsO7q4byxeDImibsqXdxpxu1ijEu6SW3cuZ+luKy/0MfbToGpdwz+I+0vBrxp4kmxCxPTo1mPv6rnzOjQ41nbMPMwUUhGNU9q5gS4G86PS4DPv7LJSXQd9KEAwJe86IfxJS+r8pJR157UakX88f3AnVPTnmP0Ba63THAadDyBU8DLm+7A7Y1GYgU8/6amsfGLQX+FKvgqSah693wbxlEwfX/ZHN42uvHTn0kc5dcd8fEr84ZxFKY74kyPYx5HXrojjoJiR7ztsO874jDM74TjZ/zd8G6Y3w9H/mFHvOX3xG1s/uf8BZ1DORI5VmtFAAAAAElFTkSuQmCC",
        photos = [
            "https://media.istockphoto.com/id/1274428125/es/foto/concepto-de-negocio-de-atenci%C3%B3n-m%C3%A9dica-examen-m%C3%A9dico-y-datos-gr%C3%A1ficos-de-crecimiento-de.webp?s=612x612&w=is&k=20&c=9QtfNpvcuhn2A-DWQxALfgbStGd3qYlTRX04znLa9XI=",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        phone = "+542215068891",
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array(Math.floor(rating)).fill(0);

    return (
        <StyledCard elevation={2}>
            <Favorite restaurant={restaurant} />
            <CardImage source={{ uri: photos[0] }} />
            <Info>
                <Title>{`${name} - ${phone}`}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map((_, idx) => (
                            <SvgXml
                                xml={star}
                                width={20}
                                height={20}
                                key={idx}
                            />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Title isClosed>CLOSED TEMPORARILY</Title>
                        )}

                        {isOpenNow && (
                            <SvgXml xml={open} width={20} height={20} />
                        )}
                    </SectionEnd>
                </Section>
                <Address>{address}</Address><Icon source={{ uri: icon }} />
            </Info>
        </StyledCard>
    );
}
