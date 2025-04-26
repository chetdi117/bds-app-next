import { Col, Row } from '@node_modules/antd/es';
const ProductsComponent = () => {
  return (
    <Row className="justify-center">
      <Col
        className="flex flex-row"
        span={20}>
        <h1 className="header-title">Dự án toàn quốc</h1>
        <p>List of products will be displayed here.</p>
      </Col>
    </Row>
  );
};
export default ProductsComponent;
