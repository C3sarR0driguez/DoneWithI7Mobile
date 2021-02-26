import { StyleSheet } from 'react-native';
import COLORS from 'ui/colors';

const baseStyles = {
    root: {
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
    },
    primary: {
        backgroundColor: COLORS.PRIMARY
    },
    secondary: {
        backgroundColor: COLORS.SECONDARY
    }
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
