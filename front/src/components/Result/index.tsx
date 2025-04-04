import { Row, Table } from "react-bootstrap";
import { getCalculatedPlans } from "../../services/ApiService";
import { useEffect, useState } from "react";

export default function Result() {

    const [plans, setPlans] = useState([]);
    
    useEffect(() => {
        const returnData = async () => {
            try {
                const response = await getCalculatedPlans(11, 16, 20);
                console.log(response);
            } catch (error) {
                console.error("Error fetching plans:", error);
            }
        }
        returnData();
    }, []);
    
    return (
        <>
            <Row>
                <h5 className="text-center">Resultados</h5>
            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Plano</th>
                            <th>Preço sem plano</th>
                            <th>Preço com plano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {plans.map(item => (
                            <tr>
                                <td>{item.origin}</td>
                                <td>{item.destination}</td>
                                <td>{item.plan}</td>
                                <td>{item.no_plan_price}</td>
                                <td>{item.with_plan_price}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </Table>
            </Row>
        </>
    );
}