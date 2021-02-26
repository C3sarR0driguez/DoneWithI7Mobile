import React, { useRef } from "react";
import { ScrollView } from "react-native";
import Flex from "components/flexComponent";
import styles from "./imagePickerListComponentStyles";
import ImagePickerInput from "./imagePickerInputComponent";

function ImagePickerListComponent(props) {
    const { uris = [], onImageAdded, onImageRemoved } = props;
    const scrollViewInstance = useRef(null);
    function handleContentSizeChanged() {
        scrollViewInstance.current.scrollToEnd();
    }
    return (
        <Flex row>
            <ScrollView
                ref={scrollViewInstance}
                horizontal
                style={styles.root}
                onContentSizeChange={handleContentSizeChanged}
            >
                {uris.map((uri) => {
                    return (
                        <ImagePickerInput
                            key={uri}
                            uri={uri}
                            style={styles.imagePickerInput}
                            onImageChanged={onImageRemoved?.bind(this, uri)}
                        />
                    );
                })}
                <ImagePickerInput
                    onImageChanged={onImageAdded}
                    style={styles.imagePickerInput}
                />
            </ScrollView>
        </Flex>
    );
}

ImagePickerListComponent.displayName = ImagePickerListComponent.name;
ImagePickerListComponent.propTypes = {};
ImagePickerListComponent.defaultProps = {};
export default ImagePickerListComponent;
