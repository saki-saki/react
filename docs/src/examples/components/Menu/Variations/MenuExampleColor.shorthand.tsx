import * as React from 'react'
import * as _ from 'lodash'
import { Menu, ProviderConsumer, Grid, Text } from '@stardust-ui/react'

const MenuExampleColor = () => (
  <ProviderConsumer
    render={({ siteVariables: { colorScheme } }) => (
      <Grid
        columns="repeat(2, auto)"
        styles={{ justifyContent: 'left', justifyItems: 'left' }}
        variables={{ gridGap: '10px' }}
      >
        <Text content="DEFAULT:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
          }))}
        />
        <Text content="PILLS:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          pills
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
          }))}
        />
        <Text content="POINTING:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          pointing
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
          }))}
        />
        <Text content="VERTICAL POINTING:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          vertical
          pointing
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
          }))}
        />
        <Text content="UNDERLINED:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          underlined
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
          }))}
        />
        <Text content="ICON:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
            icon: 'home',
          }))}
        />
        <Text content="ICON ONLY:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          iconOnly
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            icon: 'home',
          }))}
        />
        <Text content="------:" weight="bold" />
        <Text content="PIMARY:" weight="bold" />
        <Text content="DEFAULT:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          primary
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
          }))}
        />
        <Text content="PILLS:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          primary
          pills
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
          }))}
        />
        <Text content="POINTING:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          primary
          pointing
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
          }))}
        />
        <Text content="VERTICAL POINTING:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          primary
          vertical
          pointing
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
          }))}
        />
        <Text content="UNDERLINED:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          primary
          underlined
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
          }))}
        />
        <Text content="ICON:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          primary
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            content: _.startCase(color),
            icon: 'home',
          }))}
        />
        <Text content="ICON ONLY:" weight="bold" />
        <Menu
          defaultActiveIndex={0}
          primary
          iconOnly
          items={_.take(_.keys(colorScheme), 5).map(color => ({
            color,
            key: color,
            icon: 'home',
          }))}
        />
      </Grid>
    )}
  />
)

export default MenuExampleColor
