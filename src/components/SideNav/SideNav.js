import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class Home extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Navigation</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide out' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='Home'>
              Home
            </Menu.Item>
            <Menu.Item name='Cohort'>
              <Icon name='Cohort' />
              Cohort
            </Menu.Item>
            <Menu.Item name='Profile'>
              <Icon name='Profile' />
              Profile
            </Menu.Item>
            <Menu.Item name='Sign Out'>
              <Icon name='Sign Out' />
              Sign Out
            </Menu.Item>
          </Sidebar>
          {/* <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher> */}
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Home
