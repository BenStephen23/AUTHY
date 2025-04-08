import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}] 

    try {
        const response = await mailtrapClient.send({
        from: sender,
        to: recipient,
        subject: "Verify Your Email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        category: "Email Verification"
    })
        console.log("Verification email sent successfully", response);
    } catch (error) {
        console.log("Error sending verification email: ", error);
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid:"1672cb1c-84c9-4896-ae9d-1e55010a4fa0",
            template_variables: {
                "name": name
            },
        });
        console.log("Welcome email sent successfully", response);

    } catch (error) {
        console.log("Error sending welcome email: ", error);

        throw new Error(`Error sending welcome email: ${error}`);
    }
}