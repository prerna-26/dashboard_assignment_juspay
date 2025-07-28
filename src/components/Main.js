import { BarGraph, RevenueGraph, TopSellingProducts } from "./Graph";
import SalesPieChart from "./SalesPieChart";
import worldMap from "../attributes/images/WorldMap.png";
import { FaArrowTrendUp, FaArrowTrendDown, FaRegCircle } from "react-icons/fa6";
import styled from "styled-components";

const cards = [
  {
    field: "Customers",
    number: "3,781",
    percentage: "+11.01",
    bgColor: "#E3F5FF",
  },
  { field: "Orders", number: "1,219", percentage: "-0.03", bgColor: "#F7F9FB" },
  {
    field: "Revenue",
    number: "$695",
    percentage: "+15.03",
    bgColor: "#F7F9FB",
  },
  { field: "Growth", number: "30.1%", percentage: "+6.08", bgColor: "#E5ECF6" },
];

const revenueByLocation = [
  { location: "New York", revenue: 72 },
  { location: "San Franciso", revenue: 39 },
  { location: "Sydney", revenue: 25 },
  { location: "Singapore", revenue: 61 },
];

const MainContainer = styled.div`
  width: 1172px;
  height: 970px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  width: 95%;
  padding: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  flex-grow: 1;
  align-self: stretch;
`;

const BarGraphContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #f7f9fb;
  border-radius: 10px;
  min-height: 100%;
  margin-top: 4.5em;
`;

const Heading = styled.h2`
  font-size: 14px;
  font-weight: 600;
  padding: 19px;
`;

const RevenueGraphContainer = styled.div`
  width: 70%;
  height: 318px;
  border-radius: 15px;
  background-color: #f7f9fb;
  padding-left: 1.5em;
`;

const RevenueHeader = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-left: 10px;
  padding-top: 13px;
`;

const SmallText = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const DataSpan = styled.span`
  margin-right: 20px;
`;

const ChartContainer = styled.div`
  padding: 24px;
  border-radius: 20px;
  background-color: #f7f9fb;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
`;

const DetailsDiv = styled.div`
  margin: 3px;
  font-size: 12px;
  padding-left: 20px;
`;

const ProgressBar = styled.progress`
  width: 15em;
  height: 0.7em;
`;

const TableContainer = styled.div`
  width: 70%;
  height: 25em;
  border-radius: 15px;
  background-color: #f7f9fb;
  padding-left: 1.5em;
`;

const Card = styled.div`
  min-width: 152px;
  height: 87px;
  padding: 21px 21px 0 21px;
  border-radius: 16px;
  background-color: ${(props) => props.bgColor || "#fff"};
`;

const CardHeader = styled.h3`
  font-size: 14px;
  font-weight: 600;
`;

const Trend = styled.span`
  padding-left: 10px;
`;

export default function Main() {
  return (
    <main>
      <MainContainer>
        <Row className="upperDivCss">
          <LeftSection>
            <SectionTitle>eCommerce</SectionTitle>
            <CardsContainer>
              {cards.map((c, i) => (
                <RevenueDetailsCards data={c} key={c.field + i} />
              ))}
            </CardsContainer>
          </LeftSection>
          <BarGraphContainer>
            <Heading>Projections vs Actuals</Heading>
            <BarGraph />
          </BarGraphContainer>
        </Row>
        <Row>
          <RevenueGraphContainer>
            <RevenueHeader>
              Revenue
              <span style={{ color: "#1C1C1C33", padding: "0 20px 0 15px" }}>
                {" | "}
              </span>
              <SmallText as={DataSpan}>
                <FaRegCircle className="circles" />
                Current Week <b> $58,211</b>
              </SmallText>
              <SmallText>
                <FaRegCircle
                  className="circles"
                  style={{ paddingRight: "2px" }}
                />
                Previous Week <b> $68,768</b>
              </SmallText>
            </RevenueHeader>
            <RevenueGraph />
          </RevenueGraphContainer>
          <ChartContainer>
            <h2 className="graph-title">Revenue by Location</h2>
            <img
              alt="nothing"
              src={worldMap}
              style={{ width: "-webkit-fill-available" }}
            />
            {revenueByLocation.map((location) => (
              <DetailsDiv key={location.location}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{location.location}</span>
                  <span>{location.revenue}K</span>
                </div>
                <ProgressBar
                  value={location.revenue / 100}
                  max="1"
                  strokeColor="#D3D3D3"
                />
              </DetailsDiv>
            ))}
          </ChartContainer>
        </Row>
        <Row>
          <TableContainer>
            <TopSellingProducts />
          </TableContainer>
          <ChartContainer>
            <SalesPieChart />
          </ChartContainer>
        </Row>
      </MainContainer>
    </main>
  );
}

export function RevenueDetailsCards({ data }) {
  const isPositive = parseFloat(data.percentage) > 0;
  return (
    <Card bgColor={data.bgColor}>
      <CardHeader>{data.field}</CardHeader>
      <div>
        <span
          style={{ fontSize: "24px", fontWeight: "600", paddingRight: "20px" }}
        >
          {data.number}
        </span>
        <SmallText>
          <span>{data.percentage}%</span>
          <Trend>
            {isPositive ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
          </Trend>
        </SmallText>
      </div>
    </Card>
  );
}
