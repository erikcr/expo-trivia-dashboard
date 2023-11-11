import React from "react";
import { Box } from "@gluestack-ui/themed";
import HomestayInformationFold from "../_archive/HomestayInformationFold";
import MainContentHeader from "./MainContentHeader";
import NewThisWeekFold from "../_archive/NewThisWeekFold";

const MainContent = ({
  modalVisible,
  setModalVisible,
  setActiveTab,
  activeTab,
}: any) => {
  return (
    <Box
      sx={{ "@md": { maxHeight: "calc(100vh - 144px)", pr: "$16", pl: "$8" } }}
      flex={1}
    >
      <Box>
        {/* explore page main content header */}
        <MainContentHeader
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </Box>
    </Box>
  );
};
export default MainContent;
