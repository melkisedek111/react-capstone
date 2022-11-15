import React, { useState, useEffect } from "react";
import {
	Button,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
} from "@mui/material";

const ContactUsForm = ({addNewMessage, addNewMessageResponse, setIsLoading}) => {
	const [errors, setErrors] = useState({});
	const [formFields, setFormFields] = useState({
		name: "",
		emailAddress: "",
		contactNumber: "",
		subject: "",
		messageBody: "",
	});
	/**
	 * DOCUMENT: This function is used to handle value of each fields. <br>
	 * Triggered: when insert value on the fields <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleFieldChange = (event) => {
		let {
			target: { value, name, id },
		} = event;

		setFormFields({ ...formFields, [id || name]: value });
	};

	/**
	 * DOCUMENT: This function is used to validate all the field on the user form. <br>
	 * Triggered: when submitting a form <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleValidation = () => {
		/* default fields */
		let fields = {
			name: {
				type: "letter",
				label: "Name",
			},
			emailAddress: {
				type: "email",
				label: "Email Address",
			},
			contactNumber: {
				type: "number",
				label: "Contact Number",
			},
			subject: {
				type: "mixed",
				label: "Subject",
			},
			messageBody: {
				type: "mixed",
				label: "Message",
			},
		};

		/* validation for only letter and spaces */
		const alphabetValidation = /^[a-zA-Z\s]*$/;

		/* validation for email only */
		const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		/* validation for number only */
		const numberValidation = /^[0-9]\d*$/;
		let errors = {};

		/* this loop is used to iterate each of the default fields to check for errors and validations */
		for (const field in fields) {
			const { type, label } = fields[field];
			const value = formFields[field].trim();

			/* check for empty value */
			if (!value) {
				errors[field] = `${label} is empty. Please insert the field.`;
			} else if (type === "letter") {
				/* check if the field is letter only */
				if (!value.match(alphabetValidation)) {
					errors[field] = `${label} must be an alphabet only.`;
				}
			} else if (type === "email") {
				/* check if the field is email only */
				if (!value.match(emailValidation)) {
					errors[
						field
					] = `Your ${label} is invalid, Please provide a valid one.`;
				}
			} else if (type === "number") {
				/* check if the field is number only */
				if (!value.match(numberValidation)) {
					errors[
						field
					] = `Your ${label} is invalid and should include digits only.`;
				} else if (value.length !== 11) {
					errors[field] = `Your ${label} length should be 10.`;
				}
			}
		}
		setErrors(errors);

		return errors;
	};

	/**
	 * DOCUMENT: This function is used to check for errors and submit the form. <br>
	 * Triggered: when submitting a form <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleFormSubmit = () => {
		const errors = handleValidation();

		/* checking for error if no, then submit */
		if (!Object.keys(errors).length) {
            addNewMessage(formFields);
			/* this will reset all the fields */
			setIsLoading(true);
		}
	};

    useEffect(() => {
        if(addNewMessageResponse?.isSuccess){
            const { data } = addNewMessageResponse;

            setTimeout(() => {

				if (data?.responseType === "success") {
                    setFormFields({
                        name: "",
                        emailAddress: "",
                        contactNumber: "",
                        subject: "",
                        messageBody: "",
                    });
					setErrors({});
				}
			}, 2500);
        }
    }, [addNewMessageResponse])

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
				<TextField
					id="name"
					name="name"
					label="Nmae"
					variant="outlined"
					fullWidth
					error={errors?.name ? true : false}
					helperText={errors?.name || ""}
					value={formFields.name}
					onChange={handleFieldChange}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<TextField
					id="emailAddress"
					name="emailAddress"
					label="Email Address"
					variant="outlined"
					fullWidth
					error={errors?.emailAddress ? true : false}
					helperText={errors?.emailAddress || ""}
					value={formFields.emailAddress}
					onChange={handleFieldChange}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					id="contactNumber"
					name="contactNumber"
					label="Contact Number"
					variant="outlined"
					fullWidth
					error={errors?.contactNumber ? true : false}
					helperText={errors?.contactNumber || ""}
					value={formFields.contactNumber}
					onChange={handleFieldChange}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					id="subject"
					name="subject"
					label="Subject"
					variant="outlined"
					fullWidth
					error={errors?.subject ? true : false}
					helperText={errors?.subject || ""}
					value={formFields.subject}
					onChange={handleFieldChange}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					id="messageBody"
					name="messageBody"
					label="Message"
					variant="outlined"
					fullWidth
					error={errors?.messageBody ? true : false}
					helperText={errors?.messageBody || ""}
					value={formFields.messageBody}
					onChange={handleFieldChange}
					multiline
					rows={6}
				/>
			</Grid>
			<Grid item xs={12}>
				<Button fullWidth variant="contained" onClick={handleFormSubmit}>
					Submit Request
				</Button>
			</Grid>
		</Grid>
	);
};

export default ContactUsForm;
