import React from 'react';
import ContentPreview from 'box-ui-elements/es/elements/content-preview';
import messages from 'box-ui-elements/i18n/en-US';

const Otherfiles = ({token , language}) => {
    const FILE_ID_DOC = '308339768087';
    const FILE_ID_VIDEO = '308566420378';
    const FILE_ID_3D = '319004423111';
    const FILE_ID_TEXT = '308349801521';
    const FILE_ID_EXCEL = '319011536090';
    const FILE_ID_AUDIO = '308566419514';
    const FILE_ID_IMAGE = '308345646235';
    return (
        <ContentPreview
        hasHeader
        fileId={FILE_ID_DOC}
        token={token}
        language={language}
        messages={messages}
        collection={[FILE_ID_DOC, FILE_ID_EXCEL, FILE_ID_VIDEO, FILE_ID_3D, FILE_ID_TEXT, FILE_ID_AUDIO, FILE_ID_IMAGE]}
    />
    )
}

export default Otherfiles;
