import React from "react";
import { SpinnerWrapper } from "./SpinnerStyle";
import { Oval } from "react-loader-spinner";
import { breakpoints, colors } from "../../utils/styles/theme";

const SpinnerComponent = () => {
  return (
    <>
      <SpinnerWrapper>
        <Oval
          height={150}
          width={150}
          color="#7a2222"
          wrapperStyle={{}}
          wrapperClass="div"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#b60606"
          strokeWidth={3}
          strokeWidthSecondary={3}
        />
      </SpinnerWrapper>
    </>
  );
};

export default SpinnerComponent;
