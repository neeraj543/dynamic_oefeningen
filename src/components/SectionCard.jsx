import {Card, Row, Col} from 'react-bootstrap'


export function SectionCard(props) {
    const { children} = props;
    return (
            <Col s={12} sm={6} md={4} lg={3} xl={2} xxl={2}>
                <Card className="m-2 p-2 shadow-sm text-center">
                    {children}
                </Card>
            </Col>
    );
}

