import React from 'react';

class LifeCycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('🔧 Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('📦 getDerivedStateFromProps');
    return null; // No state update
  }

  componentDidMount() {
    console.log('✅ componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('🔍 shouldComponentUpdate');
    return true; // Allow update
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('📸 getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('♻️ componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('🗑️ componentWillUnmount');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('🎨 render');
    return (
      <div>
        <h2>React Class Component Life Cycle</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifeCycleDemo;
