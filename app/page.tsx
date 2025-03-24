import { Col, Row } from '@node_modules/antd/es/grid';
import HomePageSliderComponent from './home/slider';

export default function HomePage() {
  return (
    <>
      <HomePageSliderComponent />
      <Row className="justify-center py-2">
        <Col span={20}>
          <h1 className="header-title">Home Page</h1>
        </Col>
      </Row>
    </>
  );
}
