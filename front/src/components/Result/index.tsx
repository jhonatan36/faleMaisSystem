import { Row, Table } from "react-bootstrap";
import { adicionarZerosEsquerda, formatarDouble } from "../../utils/formatters";
import { ApiResponse } from "../../services/ApiService";

type props = {
    plans: ApiResponse[],
}

export default function Result({ plans }: props) {
    
    return (
        <>
            <Row>
                <h5 className="text-center">Resultados</h5>
            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr className="text-center">
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Plano</th>
                            <th>Preço sem plano</th>
                            <th>Preço com plano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((item, index) => (
                            <tr className="text-center" key={index}>
                                <td>{adicionarZerosEsquerda(item.origin)}</td>
                                <td>{adicionarZerosEsquerda(item.destination)}</td>
                                <td>{item.plan}</td>
                                <td>R$ {formatarDouble(item.no_plan_price)}</td>
                                <td>R$ {formatarDouble(item.with_plan_price)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </>
    );
}