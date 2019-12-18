/*
api.js  has all the api functions
*/

const apiPrefix = "http://192.168.0.11:8080"

async function getInboxEmails() {
    await Auth0Manager.init();

    const emails = await Auth0Manager.getInboxEmails();
    const inboxlEmailList = emails.map(email => ({
        id: email.client_id,
        subject: email.subject,
        body: email.body || "",
    }));

    return { resourceType: "inbox-list", emails: inboxEmailList };
}

async function getArchievedEmails() {
    await Auth0Manager.init();

    const emails = await Auth0Manager.getArchievedEmails();
    const archievedEmailList = emails.map(email => ({
        id: email.client_id,
        subject: email.subject,
        body: email.body || "",
    }));

    return { resourceType: "inbox-list", emails: inboxEmailList };
}

async function getEmail(emailId) {
    await Auth0Manager.init();

    const email = await Auth0Manager.getEmail(emailId);

    return {
        resourceType: "email",
        id: email.email_id,
        subject: email.subject,
        body: email.body || "",
        links: {
            uri: `${apiPrefix}/email/${email.email_id}`,
            rel: "self"
        }
    };
}

async function getArchievedEmails() {
    await Auth0Manager.init();

    const emails = await Auth0Manager.getArchievedEmails();
    const archievedEmailList = emails.map(email => ({
        id: email.client_id,
        subject: email.subject,
        body: email.body || "",
    }));

    return { resourceType: "inbox-list", emails: inboxEmailList };
}


app.put(`${apiPrefix}/email/:emailId`, async (req, res) => {
    const updatedData = req.body;

    await updateEmail(req.params.emailId, updatedData);

    res.sendStatus(200);
});



