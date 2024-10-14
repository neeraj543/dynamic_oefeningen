import {Card, Col} from "react-bootstrap";

export function SectionCard(props) {
    const {title, children, isMarked, onSelect} = props;
    const className = `m-2 p-2 shadow-sm text-center ${isMarked && "bg-warning" } `;

    return <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={2  }>
        <Card className={className}
              onClick={onSelect}
        >
            <h5>{title}</h5>
            {children}
        </Card>
    </Col>
}