import React from "react";
import { useFormikContext } from "formik";

import Picker from "components/pickerComponent";
import ErrorMessage from "components/errorMessageComponent";

function FormPicker({
    items,
    name,
    numberOfColumns,
    PickerItemComponent,
    placeholder,
    width,
}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <Picker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormPicker;
