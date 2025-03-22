import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@styles/global.scss';
import NavbarComponent from '@components/nav';
import { Col, Row } from 'antd';

export const metadata: Metadata = {
  title: 'Trang rao bặt Nhà cửa uy tính',
  description: 'Bds uy tinh lắm',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"></link>
        <link
          rel="icon"
          href="/assets/images/symbol-only.svg"
          type="image/x-icon"
        />
      </head>
      <body>
        <NavbarComponent />
        <AntdRegistry>
          <Row className="justify-center py-2">
            <Col span={20}>{children}</Col>
          </Row>
        </AntdRegistry>
      </body>
    </html>
  );
}
