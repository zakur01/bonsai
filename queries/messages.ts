export const messagesQuery = `
query Messages {
    Messages {
        text
        image_message {
            id
        }
        date_created
        user_created {
            id
            first_name
        }
    }
}
`;
