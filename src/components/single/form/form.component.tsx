import React, { useState } from "react";
import {
	Component,
	Flexbox,
	FormButton,
	FormInput,
	FormTextarea,
} from "./form.styled";
import { Text } from "../text/text.component";
import { FormAcceptance } from "../formAcceptance/formAcceptance.component";
import { navigate } from "gatsby";

export const Form: React.FC = (): JSX.Element => {
	const [formState, setFormState] = useState({
		email: "",
		topic: "",
		message: "",
	});

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	};

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formState }),
		})
			.then(() => navigate("/thank-you"))
			.catch((error) => alert(error));

		e.preventDefault();
	};

	return (
		<Component>
			<form
				name='contact'
				method='post'
				netlify-honeypot='bot-field'
				data-netlify='true'
				onSubmit={handleSubmit}
			>
				<input type='hidden' name='bot-field' />
				<Flexbox>
					<label
						data-sal='slide-up'
						data-sal-delay='300'
						data-sal-easing='ease'
						htmlFor='email'
					>
						<Text text={"Twój adres e-mail:"} />
						<FormInput
							id={"email"}
							type='email'
							name='email'
							onChange={handleChange}
							value={formState.email}
							required
						/>
					</label>
					<label
						data-sal='slide-up'
						data-sal-delay='300'
						data-sal-easing='ease'
						htmlFor='topic'
					>
						<Text text={"Temat wiadomości:"} />
						<FormInput
							id={"topic"}
							type='text'
							name='topic'
							onChange={handleChange}
							value={formState.topic}
						/>
					</label>
				</Flexbox>
				<label
					data-sal='slide-up'
					data-sal-delay='300'
					data-sal-easing='ease'
					htmlFor='message'
					style={{ position: "relative" }}
				>
					<FormTextarea
						id={"message"}
						type='text'
						name='message'
						onChange={handleChange}
						value={formState.message}
					/>
				</label>
				<FormAcceptance
					data-sal='slide-up'
					data-sal-delay='300'
					data-sal-easing='ease'
				/>
				<Flexbox>
					<FormButton
						data-sal='slide-up'
						data-sal-delay='300'
						data-sal-easing='ease'
						type='submit'
					>
						Wyślij wiadomość
					</FormButton>
				</Flexbox>
			</form>
		</Component>
	);
};
