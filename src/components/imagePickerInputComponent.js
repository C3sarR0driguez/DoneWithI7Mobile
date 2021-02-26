import React, { useEffect, useState } from "react";
import Flex from "components/flexComponent";
import { TouchableOpacity, Image } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

import styles from "./imagePickerInputStyles";

function ImagePickerInput(props) {
    const { uri, onImageChanged, style } = props;
    const [permission, askPermission] = Permissions.usePermissions(
        Permissions.MEDIA_LIBRARY
    );

    async function launchImageLibrary() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
        });
        if (!result.cancelled) {
            onImageChanged(result.uri);
        }
    }

    useEffect(() => {
        if (permission?.status !== "granted") {
            askPermission();
        }
    }, []);

    useEffect(() => {
        if (permission && permission.status !== "granted") {
            return Alert.alert("You need to enable permissions");
        }
    }, [permission?.status]);

    function handleImageDeleted() {
        onImageChanged(null);
    }

    async function handlePreviewPressed() {
        if (!uri) {
            launchImageLibrary();
        } else {
            return Alert.alert(
                "Delete",
                "Are you sure you want to delete this post",
                [{ text: "Yes", onPress: handleImageDeleted }, { text: "No" }]
            );
        }
    }

    return (
        <Flex style={[styles.root, style]} as="row">
            <TouchableOpacity
                style={styles.photoPreview}
                onPress={handlePreviewPressed}
            >
                {uri ? (
                    <Image source={{ uri }} style={styles.photo} />
                ) : (
                    <FontAwesome5Icon
                        name="camera-retro"
                        style={styles.cameraIcon}
                    />
                )}
            </TouchableOpacity>
        </Flex>
    );
}

ImagePickerInput.displayName = ImagePickerInput.name;
ImagePickerInput.propTypes = {};
ImagePickerInput.defaultProps = {};
export default ImagePickerInput;
