import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <p>Currently serving {snacks.length} food items & {drinks.length} drink specials!</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
