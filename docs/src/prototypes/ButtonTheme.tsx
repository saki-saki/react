import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Icon, Provider, Text, themes } from '@stardust-ui/react'
import { IThemeInput } from '../../../types/theme'

const VerticalStack = ({ gap, horizontalAlign, ...rest }: any) => (
  <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }} {...rest} />
)

const HorizontalStack = ({ gap, horizontalAlign, ...rest }: any) => (
  <div style={{ padding: '1rem', display: 'flex' }} {...rest} />
)

const ContextualMenu = () => null

const buttonMenu = props => (
  <ContextualMenu {...props} items={[{ key: 'a', name: 'Item a' }, { key: 'b', name: 'Item b' }]} />
)

const word = {
  settings: {
    theme: {
      typography: {
        variants: {
          button: {
            size: 'small',
          },
        },
      },

      palette: {
        themePrimary: '#2b579a',

        themeSecondary: '#366ec2',
      },
    },
  },

  scopedSettings: {
    Button: {
      styleVariables: {
        borderWidth: 1,

        borderColor: 'rgb(237, 235, 233)',

        height: 26,

        iconSize: 12,

        contentPadding: '4px 8px',
      },
    },
  },
}

const fabric = {
  componentVariables: {
    Button: {
      primaryHoverBackground: '#45E',
    },
  },

  componentStyles: {
    Button: {
      root: ({ props }) => ({
        fontWeight: 'bold',
      }),

      content: {
        color: 'red',
      },

      icon: {
        color: 'red',
      },
    },
  },
} as IThemeInput

const buttonGap = 10
const headingGap = 10

const ButtonSet = ({ className, title, theme = {} }: any) => {
  return (
    <VerticalStack className={className} gap={headingGap}>
      <Text as="h3">{title}</Text>

      <Provider theme={theme}>
        <div>
          <VerticalStack gap={buttonGap}>
            <HorizontalStack gap={buttonGap}>
              <Button content="Default button" />
              <Button disabled content="Disabled default button" />
              <Button variant="primary" content="Primary button" />
              <Button disabled variant="primary" content="Primary disabled button" />
            </HorizontalStack>

            <HorizontalStack gap={buttonGap}>
              <Button icon="add user" circular />
              <Button icon="video" circular />
              <Button icon="phone" circular disabled />
              <Button icon="font" type="primary" circular />
              <Button icon="attach" type="primary" circular disabled />
            </HorizontalStack>

            <HorizontalStack gap={buttonGap}>
              <Button icon="upload" content="Button with string icon" />
              <Button
                icon={{ name: 'share', styles: { root: { transform: 'rotate(-30deg)' } } }}
                content="Button with iconProps"
              />
              <Button icon={<Icon name="download" />} content="Button with custom icon" />
            </HorizontalStack>

            <HorizontalStack gap={buttonGap}>
              <Button>
                <Icon name="upload" />
                {/*<Text variant="button">I am text.</Text>*/}
              </Button>

              <Button variant="primary" disabled>
                {/*<Text variant="button">I am a variant="primary" button with text.</Text>*/}
                <Icon name="upload" />
              </Button>
            </HorizontalStack>

            <HorizontalStack gap={buttonGap}>
              <Button content="Menu button" menu={buttonMenu} />
              <Button disabled content="Menu disabled button" menu={buttonMenu} />
              <Button expanded content="Menu expanded button" />
            </HorizontalStack>

            <HorizontalStack gap={buttonGap}>
              {/*
                <Button icon="Share" menu={buttonMenu}>
                  <VerticalStack gap={4} horizontalAlign="left">
                    <Text variant="button">I am a compound multiline button.</Text>

                    <Text variant="caption">I can have a caption.</Text>
                  </VerticalStack>
                </Button>
                */}

              <Button disabled content="Menu disabled button" menu={buttonMenu} />
              <Button expanded content="Menu expanded button" />
            </HorizontalStack>
          </VerticalStack>
        </div>
      </Provider>
    </VerticalStack>
  )
}

const allThemes = {
  teams: themes.teams,
  word,
  fabric,
}

export default class ButtonTheme extends React.Component<any> {
  state = {
    theme: themes.teams,
  }

  switchTheme = (name: string) => () => {
    this.setState({ theme: allThemes[name] })
  }

  render() {
    return (
      <div>
        <h1>Theme Switcher</h1>
        {Object.keys(allThemes).map(themeName => (
          <Button key={themeName} content={themeName} onClick={this.switchTheme(themeName)} />
        ))}
        <hr />
        <Provider theme={this.state.theme}>
          <ButtonSet title="Default" />
        </Provider>
        <hr />
        <h1>All Themes</h1>
        <ButtonSet title="Default" />
        <ButtonSet title="Fabric" theme={fabric} />
        <ButtonSet title="Word" theme={word} />
      </div>
    )
  }
}
