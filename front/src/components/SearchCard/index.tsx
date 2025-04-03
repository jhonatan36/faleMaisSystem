import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

export default function SearchCard () {
    return (
        <>
            <Card className='shadow-lg p-4'>
                <Card.Body>
                    <Row>
                        <Col>
                            <h5 className='text-center'>Calcule os Valores dos Minutos</h5>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                            <InputGroup>
                            <Form.Control
                                placeholder='DDD Origem'
                                aria-label='DDD Origem'
                                aria-describedby='origin'
                            />
                            <Form.Control
                                placeholder='DDD Destino'
                                aria-label='DDD Destino'
                                aria-describedby='destination'
                            />
                            <Form.Control
                                placeholder='Minutos'
                                aria-label='Minutos'
                                aria-describedby='minutes'
                            />
                            <Button variant='outline-secondary' id='btn-calculate'>
                                Calcular
                            </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}