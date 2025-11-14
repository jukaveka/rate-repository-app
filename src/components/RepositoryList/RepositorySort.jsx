import { useState } from "react";
import { View } from "react-native";
import { Button, Menu } from "react-native-paper";

const filterOptions = [
  {
    name: "Latest reviewed",
    type: "CREATED_AT",
    direction: "DESC",
  },
  {
    name: "Highest rated",
    type: "RATING_AVERAGE",
    direction: "DESC",
  },
  {
    name: "Lowest rated",
    type: "RATING_AVERAGE",
    direction: "ASC",
  },
];

const RepositorySort = ({ setSortBy }) => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleOption = async (type, direction) => {
    setSortBy({ type, direction });
    handleClose();
  };

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={handleClose}
        anchor={<Button icon="sort" onPress={handleOpen} />}
      >
        {filterOptions.map((option) => {
          return (
            <Menu.Item
              onPress={async () =>
                await handleOption(option.type, option.direction)
              }
              title={option.name}
            />
          );
        })}
      </Menu>
    </View>
  );
};

export default RepositorySort;
