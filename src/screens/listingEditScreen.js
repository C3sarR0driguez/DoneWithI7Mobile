import React, { useState } from "react";
import * as Yup from "yup";
import Form from "components/formComponent";
import FormField from "components/formFieldComponent";
import FormPicker from "components/formPickerComponent";
import FormImagePicker from "components/formImagePickerComponent";
import SubmitButton from "components/submitButtonComponent";
import CategoryPickerItem from "../components/categoryPickerItemComponent";
import Screen from "components/screenComponent";
import listingsApi from "api/listings";
import useLocation from "hooks/useLocation";
import UploadProgress from "components/uploadProgressComponent";
import { Alert } from "react-native";

import styles from "./listingEditStyles";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
];

function ListingEditScreen() {
    const location = useLocation();
    const [submitting, setSubmitting] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    async function handelSubmit(listing, { resetForm }) {
        setSubmitting(true);
        setUploadProgress(0);
        const response = await listingsApi.postListing(
            {
                ...listing,
                location,
            },
            handleUploadProgress
        );
        if (!response.ok) {
            setSubmitting(false);
            Alert.alert("Could not save the listing");
            return;
        }
        resetForm();
    }

    function handleUploadFinish() {
        setSubmitting(false);
    }

    function handleUploadProgress(progressEvent) {
        const percentCompleted = progressEvent.loaded / progressEvent.total;
        setUploadProgress(percentCompleted);
    }

    return (
        <Screen style={styles.root}>
            <UploadProgress
                visible={submitting}
                progress={uploadProgress}
                onUploadFinish={handleUploadFinish}
            />
            <Form
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [],
                }}
                onSubmit={handelSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <FormField maxLength={255} name="title" placeholder="Title" />
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <FormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </Form>
        </Screen>
    );
}

export default ListingEditScreen;
