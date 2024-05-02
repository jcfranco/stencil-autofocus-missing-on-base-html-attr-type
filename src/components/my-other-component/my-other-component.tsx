import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-other-component',
  shadow: true,
})
export class MyOtherComponent {

  render() {
    return (
      <Host>
        <my-component autofocus></my-component>
        <my-component autofocus={true}></my-component>
        <div autofocus></div>
        <div autofocus={true}></div>
      </Host>
    );
  }

}
