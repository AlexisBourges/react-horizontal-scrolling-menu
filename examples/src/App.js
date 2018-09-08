import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';

const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' },
  { name: 'item10' },
  { name: 'item11' },
  { name: 'item12' },
  { name: 'item13' },
  { name: 'item14' },
  { name: 'item15' },
  { name: 'item16' },
  { name: 'item17' },
  { name: 'item18' },
  { name: 'item19' },
  { name: 'item20' },
  { name: 'item21' },
  { name: 'item22' },
  { name: 'item23' },
  { name: 'item24' },
  { name: 'item25' }
];

const MenuItem = ({ text, selected }) => {
  return (
    <div
      className={`menu-item ${selected ? 'active' : ''}`}
    >
      {text}
    </div>
  );
};
MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool
};
MenuItem.defaultProps = {
  selected: false
};

export const Menu = (list, count) => list
  .slice(0, count)
  .map(el => {
    const { name } = el;

    return (
      <MenuItem
        text={name}
        key={name}
      />
    );
  });
Menu.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.func
  ).isRequired,
  count: PropTypes.number.isRequired
};

const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class App extends Component {

  state = {
    selected: 'item1',
    translate: 0,
    alignCenter: true,
    dragging: true,
    clickWhenDrag: false,
    transition: 0.4,
    wheel: true,
    itemsCount: 25
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = null;
    this.itemsCount = null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const {
      alignCenter: alignCenterNew
    } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setState({ translate: 0, initialized: true, mounted: true, xPoint: 0});
      this.menu.setInitial();
      this.menu.forceUpdate();
    }
  }

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  }

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  }

  setAlign = () => {
    this.setState(prevState => {
      return { alignCenter: !prevState.alignCenter };
    });
  }

  setDragging = () => {
    this.setState(prevState => {
      return { dragging: !prevState.dragging };
    });
  }

  setClick = () => {
    this.setState(prevState => {
      return { clickWhenDrag: !prevState.clickWhenDrag };
    });
  }

  setWheel = () => {
    this.setState(prevState => {
      return { wheel: !prevState.wheel };
    });
  }

  setTranslate = ev => {
    const { translate: translateOld } = this.state;
    const val = parseFloat(ev.target.value);
    const value = !isNaN(val)
      ? val
      : translateOld;
    this.setState({ translate: value });
  }

  setDuration = ev => {
    const { transition: transitionOld } = this.state;
    const val = parseFloat(ev.target.value);
    const value = !isNaN(val)
      ? val
      : transitionOld;
    this.setState({ transition: value });
  }

  setItems = ev => {
    const { items: itemsOld } = this.state;
    const val = +ev.target.value;
    const value = !isNaN(val)
      ? val
      : itemsOld;
    this.setState({ itemsCount: value });
  }

  render() {
    const {
      selected,
      translate,
      alignCenter,
      dragging,
      clickWhenDrag,
      transition,
      wheel,
      itemsCount
    } = this.state;

    // For don't return new object instance with every render
    // If change items after component mounted
    //
    // If you don't change menu items count or property can map it one time,
    // better not in render method
    const { itemsCount: itemsCountOld } = this;
    if (itemsCountOld !== itemsCount) {
      this.itemsCount = itemsCount;
      this.menuItems = Menu(list, itemsCount);
    }

    const checkboxStyle = {
      margin: '5px 10px'
    };
    const valueStyle = {
      margin: '5px 10px',
      display: 'inline-block'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React horizontal scrolling menu</h1>
        </header>
        <p className="App-intro">
          Horizontal scrolling menu example.
          Click arrow or drag items.
        </p>

        <ScrollMenu
          ref={el => this.menu = el}
          data={this.menuItems}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          transition={+transition}
          onUpdate={this.onUpdate}
          onSelect={this.onSelect}
          selected={selected}
          translate={translate}
          alignCenter={alignCenter}
          dragging={dragging}
          clickWhenDrag={clickWhenDrag}
          wheel={wheel}
        />

        <form className="properties">
          <label style={ checkboxStyle }>
            Align center
            <input
              name="alignCenter"
              type="checkbox"
              checked={alignCenter}
              onChange={this.setAlign}
            /> 
          </label>
          <label style={ checkboxStyle }>
            Dragging
            <input
              name="dragging"
              type="checkbox"
              checked={dragging}
              onChange={this.setDragging}
            /> 
          </label>
          <label style={ checkboxStyle }>
            Click when drag end
            <input
              name="clickWhenDrag"
              type="checkbox"
              checked={clickWhenDrag}
              onChange={this.setClick}
            /> 
          </label>
          <label style={ checkboxStyle }>
            Use mouse wheel
            <input
              name="wheel"
              type="checkbox"
              checked={wheel}
              onChange={this.setWheel}
            /> 
          </label>
          <br />
          <label style={ valueStyle }>
            Translate:
            <input
              name="translate"
              type="number"
              value={translate}
              onChange={this.setTranslate}
            /> 
          </label>
          <div style={ valueStyle }>Selected: {selected}</div>
          <label style={ valueStyle }>
            Items count
            <input
              style={{ margin: '0 5px' }}
              name="itemsCount"
              type="number"
              value={itemsCount}
              min={0}
              max={list.length}
              onChange={this.setItems} />
          </label>
          <label style={ valueStyle }>
            Transition duration:
            <input
              style={{ margin: '0 5px' }}
              name="transition"
              type="number"
              value={transition || 0}
              min={0}
              max={10}
              onChange={this.setDuration} />
          </label>
        </form>
        <hr />
        <div>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu">
            Project on GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default App;
