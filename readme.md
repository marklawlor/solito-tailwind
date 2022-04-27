# Solito Tailwind

This Solito app uses [tailwindcss-react-native](https://github.com/marklawlor/tailwindcss-react-native) for its styles.

When running in web:

> This example is using the react-native-web 0.18 preview

- Styles are compiled by NextJS and outputted as CSS Stylesheets
- RN components are giving classNames and use the CSS rules

When running in native:

- Styles are compiled by `tailwindcss-react-native` babel plugin
- RN components are styled via `StyledSheet.create`

This example uses the Component API of `tailwindcss-react-native`, however you could enable the babel plugin for automatic transformation to StylesdComponents.
