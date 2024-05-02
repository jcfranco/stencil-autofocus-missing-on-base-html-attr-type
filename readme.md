# stencil-autofocus-missing-on-base-html-attr-type

This is a repro case showing that the global `autofocus` attribute/prop is not available Stencil's `HTMLElement` type.

## Steps to reproduce

1. Clone this repo
2. `npm install`
3. `npm test`

Notice the build will fail with the following type errors:

```
[ ERROR ]  TypeScript: src/components/my-other-component/my-other-component.tsx:13:23
   Type '{ autofocus: boolean; }' is not assignable to type 'MyComponent &
   HTMLAttributes<HTMLMyComponentElement>'.Property 'autofocus' does not exist on type 'MyComponent &
   HTMLAttributes<HTMLMyComponentElement>'.
   
[ ERROR ]  TypeScript: src/components/my-other-component/my-other-component.tsx:14:14
   Type '{ autofocus: true; }' is not assignable to type 'HTMLAttributes<HTMLDivElement>'.Property 'autofocus'
   does not exist on type 'HTMLAttributes<HTMLDivElement>'.
```

## Additional info

As a workaround, a custom component prop can be added, but this seems unnecessary given that the `autofocus` attribute is a global attribute.
