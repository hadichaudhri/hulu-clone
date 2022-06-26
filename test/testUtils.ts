import { render, RenderOptions, RenderResult } from '@testing-library/react'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

// const Providers = ({ children }: { children: any }): any => {
//   return children
//   // return (
//   //   <ThemeProvider theme="light">
//   //     <TranslationProvider messages={defaultStrings}>
//   //       {children}
//   //     </TranslationProvider>
//   //   </ThemeProvider>
//   // )
// }

const customRender = (
  ui: JSX.Element,
  options: RenderOptions = {}
): RenderResult => render(ui, options) // Or, options = {wrapper: Providers, ...options} if using Theme Provider

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
