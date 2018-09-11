import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Icon, Text } from '@stardust-ui/react'

const VerticalStack = ({ gap, horizontalAlign, ...rest }: any) => (
  <div style={{ display: 'flex', flexDirection: 'column' }} {...rest} />
)

const HorizontalStack = ({ gap, horizontalAlign, ...rest }: any) => (
  <div style={{ display: 'flex' }} {...rest} />
)

const ContextualMenu = () => null

const buttonMenu = props => (
  <ContextualMenu {...props} items={[{ key: 'a', name: 'Item a' }, { key: 'b', name: 'Item b' }]} />
)

const wordCustomizations = {
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

const teamsButtonVariables = {
  borderRadius: 2,
  borderWidth: 2,
  borderColor: 'rgb(189, 189, 189)',
  iconSize: 15,
  iconWeight: 700,
  states: {
    disabled: {
      borderColor: 'inherit',
    },
  },
}

const teamsCustomizations = {
  settings: {
    theme: {
      palette: {
        themePrimary: '#6061aa',
        themeLighterAlt: '#f7f7fc',
        themeLighter: '#e1e1f2',
        themeLight: '#c7c8e6',
        themeTertiary: '#9797cd',
        themeSecondary: '#6f70b5',
        themeDarkAlt: '#56579a',
        themeDark: '#494a82',
        themeDarker: '#363660',
        neutralLighterAlt: '#f8f8f8',
        neutralLighter: '#f4f4f4',
        neutralLight: '#eaeaea',
        neutralQuaternaryAlt: '#dadada',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c8c8',
        neutralTertiary: '#b6b0b0',
        neutralSecondary: '#9f9797',
        neutralPrimaryAlt: '#877f7f',
        neutralPrimary: '#282424',
        neutralDark: '#585151',
        black: '#403b3b',
        white: '#fff',
      },
      semanticColors: {
        buttonBackground: 'inherit',
        borderWidth: 2,
        buttonBackgroundHovered: 'rgb(189, 189, 189)',
        buttonBackgroundPressed: 'rgb(189, 189, 189)',
      },
    },
  },

  scopedSettings: {
    Button: {
      styleVariables: teamsButtonVariables,
    },
  },
}

const buttonGap = 10
const headingGap = 10

export default class ButtonTheme extends React.Component<any> {
  render() {
    const { className, title, customizations } = this.props

    return (
      <VerticalStack className={className} gap={headingGap}>
        <Text variant="h3">{title}</Text>

        <div>
          {/* TODO Customizer => Provider */}
          <div {...customizations}>
            <VerticalStack gap={buttonGap}>
              <HorizontalStack gap={buttonGap}>
                <Button content="Default button" />
                <Button disabled content="Disabled default button" />
                <Button variant="primary" content="Primary button" />
                <Button disabled variant="primary" content="Primary disabled button" />
              </HorizontalStack>

              <HorizontalStack gap={buttonGap}>
                <Button icon="PeopleAdd" circular />
                <Button icon="Video" circular />
                <Button icon="Phone" circular disabled />
                <Button icon="FontSize" type="primary" circular />
                <Button icon="Attach" type="primary" circular disabled />
              </HorizontalStack>

              <HorizontalStack gap={buttonGap}>
                <Button icon="Upload" content="Button with string icon" />
                <Button icon={{ iconName: 'Share' }} content="Button with iconProps" />
                <Button icon={<Icon iconName="Download" />} content="Button with custom icon" />
              </HorizontalStack>

              <HorizontalStack gap={buttonGap}>
                <Button>
                  <Icon iconName="Upload" />
                  {/*<Text variant="button">I am text.</Text>*/}
                </Button>

                <Button variant="primary" disabled>
                  {/*<Text variant="button">I am a variant="primary" button with text.</Text>*/}

                  <Icon iconName="Upload" />
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
        </div>
      </VerticalStack>
    )
  }
}
