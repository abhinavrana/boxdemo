import React from 'react';
import ContentPreview from 'box-ui-elements/es/elements/content-preview';
import messages from 'box-ui-elements/i18n/en-US';

const Dashboard = ({token , language}) => {
    const FILE_ID_DOC = '657821838169';
    const FILE_ID_TEXT = '656186312813';
    return (
        <ContentPreview
        hasHeader
        fileId={FILE_ID_DOC}
        token={token}
        language={language}
        messages={messages}
        collection={[FILE_ID_DOC, FILE_ID_TEXT]}
    />
    )
}

export default Dashboard;
