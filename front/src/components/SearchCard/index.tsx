import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import Result from '../Result';
import { useState } from 'react';
import { ApiResponse, getCalculatedPlans } from '../../services/ApiService';

export default function SearchCard () {
    const [plans, setPlans] = useState<ApiResponse[]>([]);
    const [search, setSearch] = useState({
        origin: '',
        destination: '',
        minutes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearch(prev => ({
          ...prev,
          [name]: value,
        }));
    };

    const fetchPlans = async () => {
        const response = await getCalculatedPlans(search.origin, search.destination, search.minutes);
        setPlans(response);
    }

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
                                name='origin'
                                value={search.origin}
                                onChange={handleChange}
                                placeholder='DDD Origem'
                                aria-label='DDD Origem'
                                aria-describedby='origin'
                            />
                            <Form.Control
                                name='destination'
                                value={search.destination}
                                onChange={handleChange}
                                placeholder='DDD Destino'
                                aria-label='DDD Destino'
                                aria-describedby='destination'
                            />
                            <Form.Control
                                name='minutes'
                                value={search.minutes}
                                onChange={handleChange}
                                placeholder='Minutos'
                                aria-label='Minutos'
                                aria-describedby='minutes'
                            />
                            <Button onClick={fetchPlans} variant='outline-secondary' id='btn-calculate'>
                                Calcular
                            </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col>
                            {plans.length > 0 ? (
                                <Result plans={plans} />
                            ) : ''}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}