import React from 'react';
import SkillContainer from './skill_container';
import EducationContainer from './education_container';
import ProjectContainer from './project_container';
import Container from 'react-bootstrap/Container';

export default function MainContainer() {
    return (
        <Container fluid className="main-container">
                <SkillContainer />
                <EducationContainer />
                <ProjectContainer />
        </Container>
    );
}
