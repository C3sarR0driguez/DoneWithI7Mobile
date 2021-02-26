import React, { useState } from "react";
import Flex from "components/flexComponent";
import styles from "./homeStyles";
import ImagePickerList from "components/imagePickerListComponent";
import { SafeAreaView } from "react-native";

function Home(props) {
    const [uris, setUris] = useState([]);

    function handleImageAdded(nextUri) {
        console.log('nextUri', nextUri);
        if (uris.find((uri) => uri === nextUri)) {
            return;
        }
        setUris([...uris, nextUri]);
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <ImagePickerList uris={uris} onImageAdded={handleImageAdded} />
        </SafeAreaView>
    );
}

Home.displayName = Home.name;
Home.propTypes = {};
Home.defaultProps = {};
export default Home;
