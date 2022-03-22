
import { Col, Row } from '@themesberg/react-bootstrap';
import React from "react";
import CountdownOverview from './CountdownOverview';
import DetailCountdownOverview from './DetailCountdownOverview';
import ProductOverview from './ProductOverview';
import UserOverview from './UserOverview';
import VoteUserOverview from './VoteUserOverview';


export default () => {
  return (
    <>
      <Row className="justify-content-md-center">
        {/* <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col> */}
        <UserOverview />
        <ProductOverview />
        <CountdownOverview />
      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={12} className="mb-4">
              <Row>
                <Col xs={12} lg={8} className="mb-4">
                  <DetailCountdownOverview />
                </Col>
                <Col xs={12} lg={4} className="mb-4">
                  <VoteUserOverview />
                </Col>
              </Row>
            </Col>

          </Row>
        </Col>
      </Row>
    </>
  );
};
