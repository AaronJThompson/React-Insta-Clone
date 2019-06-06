import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Input, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
import igLogo from '../../assets/Instagram_logo.svg';
import styled from 'styled-components';

const InstagramLogo = styled.img`
    height: 3rem;
    margin-left: .5rem;
`;

export default function SearchBar(props) {
    let { inputHandler, inputValue } = props;
    return (
        <Container>
            <Row>
                <Col lg="3" md="6" xs="12" className="logo-container">
                    <FontAwesomeIcon icon={faInstagram} className="icon-logo" />
                    <InstagramLogo src={igLogo} alt="Instagram" className="text-logo" />
                </Col>
                <Col lg={{size: 6, order: 0}} md={{size: 12, order: 1}} xs={{size: 12, order: 1}}>
                        <Input
                                type="text"
                                name="search"
                                className="search-form"
                                placeholder="Search"
                                value={inputValue}
                                onChange={inputHandler}
                        />
                </Col>
                <Col lg="3" md="6" xs="12">
                    
                </Col>
            </Row>
        </Container>
    )
}