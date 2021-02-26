import React from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import ErrorMessage from "components/errorMessageComponent";
import ImagePickerList from "components/imagePickerListComponent";

function FormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const uris = values[name];

    const handleImageAdded = (nextUri) => {
        if (uris.find((uri) => uri === nextUri)) {
            return;
        }
        setFieldValue(name, [...uris, nextUri]);
    };

    const handleImageRemoved = (uri) => {
        setFieldValue(
            name,
            uris.filter((imageUri) => imageUri !== uri)
        );
    };

    return (
        <>
            <ImagePickerList
                uris={uris}
                onImageAdded={handleImageAdded}
                onImageRemoved={handleImageRemoved}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

FormImagePicker.propTypes = {
    name: PropTypes.string.isRequired
};

export default FormImagePicker;
