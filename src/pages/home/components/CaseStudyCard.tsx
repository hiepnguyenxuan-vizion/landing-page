import React, { useCallback } from 'react';
import { ChevronsDown } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col } from 'reactstrap';

export interface CaseStudyProps {
  imgUrl: string;
  name: string;
  path: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ name, path, imgUrl }) => {
  const navigate = useNavigate();
  const goToBookADemo = useCallback(() => {
    navigate('/book-for-demo');
  }, [navigate]);

  return (
    <Col xs="12" md="4">
      <Card
        className="vz-card--case-study text-black position-relative border-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <div className="d-flex flex-column p-4 justify-content-end position-relative">
          <h4 className="font-weight-bold text-white">{name}</h4>
          <div>
            <Button
              color="vz-red"
              onClick={goToBookADemo}
              className="btn--book-a-demo text-white font-weight-bold text-uppercase"
            >
              Book For Demo
            </Button>
          </div>
          <ChevronsDown className="chevrons" color="#f73e3e" />
        </div>
      </Card>
    </Col>
  );
};

export default CaseStudyCard;
