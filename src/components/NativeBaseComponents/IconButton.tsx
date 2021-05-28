import React from "react";
import { IconButton, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export const Example = () => {
	return (
		<IconButton
			shadow={6}
			mt={3}
			variant="solid"
			icon={<Icon size="md" as={<AntDesign name="search1" />} color="white" />}
		/>
	);
};
