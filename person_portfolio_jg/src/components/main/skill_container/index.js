import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SkillContainer() {


    return (
        <Container fluid>
            <Row className='.ms-auto'  > 
                <div className=" skill-box ">
                <Stack gap={2} >
                    <h2>Front-End</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    </Stack>

            </div>
                <div className=" skill-box">
                    <Stack gap={2} >
                    <h2 className="skill-header .ms-auto">Back-End</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                    </Stack>
                </div>

                <div className=" skill-box">
                <Stack gap={2} >
                    <h2 className="skill-header .ms-auto">Other</h2>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>
                    </Stack>
   
                </div>
        </Row>
    </Container>
    );

}