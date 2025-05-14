import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function ProjectContainer() {

    return (
        <Container fluid>
            <Row className='.ms-auto'>
                <div className="col">
                    <h2>Project 1</h2>
                    <p>Description of project 1.</p>
                </div>
                <div className="col">
                    <h2>Project 2</h2>
                    <p>Description of project 2.</p>
                </div>
            </Row>
        </Container>
    );

}