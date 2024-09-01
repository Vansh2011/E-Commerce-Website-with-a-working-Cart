import React from "react";
import Filterbox from "../Filter/Filterbox";
import ProductPLP from "../Productplp/Productplp";

function App() {
  return (
    <section className="w-[100%] flex relative">
      <div className="-md:hidden w-[20%]">
        <Filterbox />
      </div>
      <ProductPLP />
    </section>
  );
}

export default App;
