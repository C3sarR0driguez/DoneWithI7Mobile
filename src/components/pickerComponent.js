import React, { useState } from "react";
import {
    View,
    TouchableWithoutFeedback,
    Modal,
    Button,
    FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "components/textComponent";
import PickerItem from "components/pickerItemComponent";
import Screen from "components/screenComponent";
import COLORS from "ui/colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import styles from "./pickerStyles";

function Picker({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    width = "100%",
}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.root, { width }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={hp(3)}
                            color={COLORS.MEDIUM}
                            style={styles.icon}
                        />
                    )}
                    {selectedItem ? (
                        <Text style={styles.text}>{selectedItem.label}</Text>
                    ) : (
                        <Text style={styles.placeholder}>{placeholder}</Text>
                    )}

                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={hp(3)}
                        color={COLORS.MEDIUM}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button
                        title="Close"
                        onPress={() => setModalVisible(false)}
                    />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

export default Picker;
