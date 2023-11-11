import React, { useEffect } from "react";
import { StatusBar, Platform, ScrollView } from "react-native";
import { Box, HStack } from "@gluestack-ui/themed";
import Header from "./Header";
import MobileBottomTabs from "./MobileBottomTabs";
import MobileModeChangeButton from "./MobileModeChangeButton";
import {
  Plus,
  Home,
  MessageCircle,
  User,
  SlidersHorizontal,
} from "lucide-react-native";
import MobileProfilePage from "./MobileProfilePage";
import WebSidebar from "./WebSidebar";
import MainContent from "./main-content/MainContent";

const bottomTabs = [
  {
    icon: Home,
    label: "Home",
  },
  {
    icon: SlidersHorizontal,
    label: "Filter",
  },
  {
    icon: Plus,
    label: "Listing",
  },
  {
    icon: MessageCircle,
    label: "Inbox",
    disabled: true,
  },
  {
    icon: User,
    label: "Profile",
  },
];

const HomePage = () => {
  useEffect(() => {
    if (Platform.OS === "web") {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  }, []);

  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <>
      <Box
        sx={{
          _light: { bg: "white" },
          _dark: { bg: "$backgroundDark950" },
        }}
      >
        <StatusBar />

        <Box flex={1}>
          <MobileProfilePage isActive={activeTab === "Profile"} />

          <Box
            w="100%"
            sx={{
              display: activeTab !== "Profile" ? "flex" : "none",
            }}
          >
            {/* header */}
            <Header />
          </Box>

          <ScrollView>
            <Box
              sx={{
                display: activeTab !== "Profile" ? "flex" : "none",

                "@md": { display: "none" },
              }}
            >
              <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
            </Box>
          </ScrollView>

          <HStack w="100%" display="none" sx={{ "@md": { display: "flex" } }}>
            <WebSidebar />
            <ScrollView style={{ flex: 1 }}>
              <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
            </ScrollView>
          </HStack>

          <MobileModeChangeButton />
        </Box>

        {/* mobile bottom tabs */}
        <Box
          h={72}
          alignItems="center"
          w="100%"
          sx={{
            "@md": {
              display: "none",
            },
            _dark: { borderColor: "$borderDark900" },
          }}
          borderTopWidth="$1"
          borderColor="$borderLight50"
        >
          <MobileBottomTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            bottomTabs={bottomTabs}
          />
        </Box>
      </Box>
      {/* )} */}
    </>
  );
};
export default HomePage;
