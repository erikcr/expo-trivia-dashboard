import React from "react";
import {
  CircleIcon,
  Heading,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  VStack,
} from "@gluestack-ui/themed";
import { RadioIcon } from "@gluestack-ui/themed";

const SortBySection = () => {
  const sidebarFiltersCustomerRatings = [
    {
      label: "Top ratings",
      value: "Top ratings",
    },
    {
      label: "Best price",
      value: "Best price",
    },
    {
      label: "Discount",
      value: "Discount",
    },
    {
      label: "What’s new",
      value: "What’s new",
    },
  ];
  const [values, setValues] = React.useState("Top ratings");

  return (
    <VStack space="sm">
      <Heading size="sm">Sort by</Heading>
      <RadioGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="sort-by filter"
      >
        {sidebarFiltersCustomerRatings.map((placeType: any) => {
          return (
            <Radio
              value={placeType.value}
              justifyContent="flex-start"
              size="sm"
              my="$2"
              key={placeType.value}
            >
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel ml="$2">{placeType.label}</RadioLabel>
            </Radio>
          );
        })}
      </RadioGroup>
    </VStack>
  );
};
export default SortBySection;
