import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ReplyToPost = () => (
  <Modal
    trigger={<Button>Reply</Button>}
    header='Post Reply'
    content='Message...'
    actions={[
      { key: 'no', content: 'No', color: 'red', triggerClose: true },
      { key: 'yes', content: 'Yes', color: 'green', triggerClose: true },
    ]}
  />
)

export default ReplyToPost
