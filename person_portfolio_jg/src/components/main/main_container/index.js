import React from 'react';
import './style.css';
import SkillContainer from '../skill_container';
import EducationContainer from '../education_container';
import ProjectContainer from '../project_container';
import SelfInfoContainer from '../selfInfo_container';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default class MainContainer extends React.Component {
    
    render() {
        return (
            <Container fluid className="main-container">
              
    <Row className='main-container-row'>
                    <SelfInfoContainer />              
    </Row>
    <Row className='main-container-row'>
    
                    <SkillContainer />
    </Row>
    <Row className='main-container-row'>
                    <EducationContainer />
    </Row>
    <Row className='main-container-row'>
                    <ProjectContainer />
    </Row>

    
    
            </Container>
        );
    }
    
}
