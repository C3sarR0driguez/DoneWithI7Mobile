import React from "react";
import { useFormikContext } from "formik";

import TextInput from "components/textInputComponent";
import ErrorMessage from "components/errorMessageComponent";

function FormField({ name, width = "100%", ...rest }) {
    const {
        setFieldTouched,
        handleChange,
        errors,
        touched,
        values
    } = useFormikContext();

    return (
        <>
            <TextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                value={values[name]}
                {...rest}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormField;
