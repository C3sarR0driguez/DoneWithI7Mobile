import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import COLORS from "ui/colors";
import styles from "./newListingButtonStyles";

function NewListingButton(props) {
    const { onPress } = props;
    return (
        <TouchableOpacity style={styles.root} onPress={onPress}>
            <MaterialCommunityIcons
                name="plus-circle"
                size={hp(3.5)}
                color={COLORS.WHITE}
            />
        </TouchableOpacity>
    );
}

NewListingButton.displayName = NewListingButton.name;
NewListingButton.propTypes = {};
NewListingButton.defaultProps = {};
export default NewListingButton;
