import { Col, Row } from '@node_modules/antd/es';
import Link from '@node_modules/next/link';
import { Card } from 'antd';

const HomeProductsComponent = () => {
  const { Meta } = Card;
  return (
    <>
      <Row className="justify-center">
        <Col
          className="flex w-full flex-row"
          span={20}>
          <h1 className="header-title">Dự án toàn quốc</h1>
        </Col>
      </Row>
      <Row className="justify-center flex flex-row mt-2">
        <Col
          className="flex w-full flex-row"
          span={20}>
          <Card
            className="w-full home-page-card"
            hoverable>
            {/* <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            /> */}
            <Link
              href="#"
              className="flex flex-nowrap text-black hover:text-black">
              <img
                className="w-1/3 product-image"
                style={{ objectFit: 'contain' }}
                src="https://file4.batdongsan.com.vn/2023/06/17/20230617010432-7ec0_wm.jpg"
                alt="image"
              />
              <div className="flex-grow-1 product-infor p-4 flex w-full flex-col gap-2">
                <h3 className="text-lg font-bold product-name">Tên dự án</h3>
                <div className="product-info text-black">Mô tả ngắn về dự án, địa chỉ, giá cả, tiện ích...</div>
                <p className="text-sm text-gray-500 product-desperation">
                  Mô tả ngắn về dự án, địa chỉ, giá cả, tiện ích...
                </p>
              </div>
            </Link>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default HomeProductsComponent;
