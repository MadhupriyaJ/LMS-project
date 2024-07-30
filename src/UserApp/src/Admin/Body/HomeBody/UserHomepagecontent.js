import React, { useState } from "react";
import "./UserHomepagecontent.css";
import Sidemenu from "../SideLayout/Sidemenu";
import MainContent from "./MainContent/MainContent";

const UserHomepagecontent = () => {
  return (
    <div className="ml-96 grid grid-flow-col col-12">
      <div className="col-span-4">
        <Sidemenu />
      </div>
      <div>
        <MainContent />
      </div>
    </div>
  );
};

export default UserHomepagecontent;
