This is an example for render props

```
import React from 'react';

class Wrapper extends React.Component {
  state = { name: 'Tushant Name' };
  render() {
    const { render } = this.props;
    return render(this.state.name);
  }
}
const Greeting = () => (
  <Wrapper render={name => <h2>Hello, {name}!</h2>} />
);

export default Greeting;
```
