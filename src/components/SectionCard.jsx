import { Card, Col } from 'react-bootstrap';

export function SectionCard(props) {
    const { children, title } = props;

    const handleCardClick = () => {
        console.log('SectionCard content:', title || children);
    };

    // const handleClick = () => {
    //     console.log(`Section card children: ${title|| children}`)
    // };

    return (
        <Col s={12} sm={6} md={4} lg={3} xl={2} xxl={2}>
            <Card className="m-2 p-2 shadow-sm text-center" onClick={handleCardClick}>
                <h4> {title}</h4>
                {children}
            </Card>
        </Col>
    );
}
