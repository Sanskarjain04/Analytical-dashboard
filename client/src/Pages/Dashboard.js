import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import Card from "../Components/Dashboard-card";
import { reedem, service, users, revenue } from "../Assets/index";
import ChartComponent from "../Components/Chart";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <div
          className={`w-1/4 h-full bg-gray-200 ${showMenu ? "" : "hidden"
            } lg:block`}>
          <Menubar />
        </div>
        <div className="flex-1 sm:relative">
          <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
          <div className="h-16 bg-white shadow-md">
            <Navbar pagename={"Dashboard"} />
          </div>
          <div className="flex flex-wrap justify-between mt-10 mx-4 sm:justify-start">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
              <Card
                title={"350K"}
                subtitle={"Total savings from pwd projects"}
                icon={revenue}
                color={"bg-gradient-to-r from-cyan-500 to-blue-500"}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
              <Card
                title={"150K"}
                subtitle={"From Nagar Nigam Projects"}
                icon={reedem}
                color={"bg-gradient-to-r from-purple-500 to-pink-500"}
              />
            </div>
            <div className="w-full lg:w-1/4 px-2 mb-4">
              <Card
                title={"120K"}
                subtitle={"From departmental projects"}
                icon={service}
                color={"bg-gradient-to-r from-amber-400 to-amber-600"}
              />
            </div>
            <div className="w-full lg:w-1/4 px-2 mb-4">
              <Card
                title={"50K"}
                subtitle={"From other projects"}
                icon={users}
                color={"bg-gradient-to-r from-lime-400 to-lime-600"}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full px-2 mb-4">
              <ChartComponent
                heading="Project Analysis"
                fields={[
                  {
                    name: "Completed Projects",
                    value: 300,
                  },
                  {
                    name: "Ongoing Projects",
                    value: 50,
                  },
                  {
                    name: "Pending Projects",
                    value: 100,
                  },
                  {
                    name: "Cancelled Projects",
                    value: 150,
                  },
                ]}
              />
              <ChartComponent
                heading=" Active Analysis"
                fields={[
                  {
                    name: "Today's  ",
                    value: 190,
                  },
                  {
                    name: "Past Week's",
                    value: 50,
                  },
                  {
                    name: "Past Month's ",
                    value: 100,
                  },
                  {
                    name: "Past Six Month's",
                    value: 150,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
