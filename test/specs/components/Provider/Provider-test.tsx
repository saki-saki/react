import * as _ from 'lodash'
import { mount } from 'enzyme'
import * as React from 'react'

import Provider from 'src/components/Provider/Provider'
import { IThemeInput } from '../../../../types/theme'

describe('Provider', () => {
  it('renders a child', () => {
    const child = mount(
      <Provider>
        <div id="provider-child">child</div>
      </Provider>,
    ).find('#provider-child')

    expect(child.length).toBe(1)
  })

  it('can consume an upstream theme', () => {
    expect.assertions(1)

    const theme = {
      siteVariables: { site: 'variables' },
      componentVariables: { Button: { fluid: true } },
      componentStyles: { Button: { root: { color: 'red' } } },
      rtl: false,
    } as IThemeInput

    mount(
      <Provider theme={theme}>
        <Provider.Consumer
          render={receivedTheme => {
            expect(receivedTheme).toMatchObject(theme)
            return <div />
          }}
        />
      </Provider>,
    )
  })

  // it('merges themes with nested providers', () => {
  //   expect.assertions(2)
  //
  //   const themeA = {
  //     siteVariables: { a: true, keep: true, override: 'yes' },
  //     componentVariables: {
  //       Button: { keep: true, override: 'yes' },
  //     },
  //     componentStyles: {
  //       Button: { root: { display: 'block', color: 'black' } },
  //     },
  //     rtl: false,
  //   } as IThemeInput
  //
  //   const themeB = {
  //     siteVariables: { b: true, add: true, override: true },
  //     componentVariables: {
  //       Button: { override: true },
  //       Icon: { size: 'sm' },
  //     },
  //     componentStyles: {
  //       Button: { root: { color: 'white', border: 'none' } },
  //       Icon: { root: { color: 'white' } },
  //     },
  //     rtl: false,
  //   } as IThemeInput
  //
  //   mount(
  //     <Provider theme={themeA}>
  //       <Provider.Consumer
  //         render={receivedTheme => {
  //           expect(receivedTheme).toMatchObject(themeA)
  //           return <div />
  //         }}
  //       />
  //
  //       <Provider theme={theme}>
  //         <Provider.Consumer
  //           render={mergedTheme => {
  //             expect(mergedTheme).toMatchObject(_.merge(themeA, themeB))
  //             return <div />
  //           }}
  //         />
  //       </Provider>
  //     </Provider>,
  //   )
  // })
})
