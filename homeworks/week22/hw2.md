## 請列出 React 內建的所有 hook，並大概講解功能是什麼

- **useCallback** - 協助在 re-render 之間 cache 住 function 的一個 hook，如果 useCallback 的 dependencies 沒有改變，就會回傳同一個 function，不會再宣告一個一樣的 function，效能自然會上升。
- **useContext** - 當我們有一個 state 是希望所有 components 都能 access 到的，就會利用 useContext 把這個值傳下去。
- useDebugValue - a React Hook that lets you add a label to a custom Hook in [React DevTools.](https://react.dev/learn/react-developer-tools)
- useDefferedValue - 這個 hook 主要是用來在下一次 UI 更新完成前，先維持住之前的 UI 內容。
- **useEffect** - 在 re-render、瀏覽器 paint 畫面後你想做什麼事？就寫在這個 hook 裡面。
- useId - 生成一個唯一的 ID。
- useImperativeHandle - a React Hook that lets you customize the handle exposed as a [ref.](https://react.dev/learn/manipulating-the-dom-with-refs)
- useInsertionEffect
- useLayoutEffect - 在 re-render 後，paint 畫面前，你想做什麼事？寫在這個 hook 裡。
- **useMemo** - 用來在 re-render 之間 cache 住特定 value，如果 depenedencies array 裡面的 element 沒有被改變，re-render 發生時這個 value 就會被保留。
- useReducer - 這個 hook 可以讓我們用類似 redux 用 reducer、action、dispatch 操作 state。
- **useRef** - 改動到卻不會影響到畫面的值，可以用 useRef 來存。
- **useState** - 記錄狀態（資料）的 hook。

## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點

1. **`constructor(props)`** - This method is called when a component is first initialized. It is used to set the initial state of the component and bind event handlers.
2. **`componentDidMount()`** - This method is called after the component has been mounted to the DOM. It is used to fetch data from an API or perform any other side effects that require access to the DOM.
3. **`shouldComponentUpdate(nextProps, nextState)`** - This method is called before the component is updated. It is used to determine whether the component should be re-rendered or not. It returns a boolean value indicating whether the component should update or not.
4. **`componentDidUpdate(prevProps, prevState)`** - This method is called after the component has been updated. It is used to perform any side effects that require access to the DOM, such as updating the scroll position or fetching new data.
5. **`componentWillUnmount()`** - This method is called just before the component is unmounted from the DOM. It is used to perform any cleanup tasks, such as removing event listeners or cancelling any pending requests.

Here is an example of how to use these lifecycle methods:

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Fetch data from an API
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only update if the count has changed
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    // Update the scroll position
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    // Remove event listeners
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
```

In this example, the `constructor` method is used to set the initial state of the component and bind the `handleClick` event handler. The `componentDidMount` method is used to fetch data from an API. The `shouldComponentUpdate` method is used to determine whether the component should be re-rendered or not. The `componentDidUpdate` method is used to update the scroll position. The `componentWillUnmount` method is used to remove event listeners. Finally, the `render` method is used to render the component.

## 請問 class component 與 function component 的差別是什麼？

In React, there are two types of components: class components and function components. Here are the main differences between the two:

1. **Syntax:** Class components are defined using ES6 classes, while function components are defined using JavaScript functions.
2. **State and lifecycle methods:** Class components have access to state and lifecycle methods, such as `componentDidMount` and `componentDidUpdate`, while function components do not. However, with the introduction of React Hooks, function components can now use state and lifecycle methods.
3. **Performance:** Function components are generally faster and more lightweight than class components, because they do not have the overhead of creating a new class instance for each component.
4. **Code organization:** Function components are often easier to read and understand, because they are typically shorter and more focused on a single task. Class components can become more complex and harder to maintain as they grow in size.

Here is an example of a class component and a function component that do the same thing:

```javascript
// Class component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

// Function component
function MyComponent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

In this example, the class component and the function component both render a counter that can be incremented by clicking a button. The class component uses state and a class method to handle the click event, while the function component uses the `useState` hook to manage state and a function to handle the click event.

## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？

參考資料：https://ithelp.ithome.com.tw/articles/10227866

在 React 中表單元素的處理主要可以分成兩種 Controlled 和 Uncontrolled 這兩種，這裡 **關於 Controlled 和 Uncontrolled 指的是「資料受不受到 React 所控制」，也就是「受 React 所控制的資料（Controlled）」或「不受 React 所控制的資料（Uncontrolled）」** 。

**把表單資料交給 React 來處理的就稱作 Controlled Components，也就是受 React 控制的資料；相對地，如果不把表單資料交給 React，而是像過去一樣，選取到該表單元素後，才從該表單元素取出值的這種做法，就稱作 Uncontrolled Components，也就是不受 React 控制的資料** 。

In React, there are two ways to manage form inputs: controlled components and uncontrolled components. Here are the main differences between the two:

1. **State management:** Controlled components manage their state using React state, while uncontrolled components manage their state using the DOM.
2. **Data flow:** Controlled components pass data from the parent component to the child component using props, while uncontrolled components pass data from the child component to the parent component using events.
3. **Validation:** Controlled components can easily validate input data before it is submitted, while uncontrolled components require additional validation logic to be implemented.

Here are some use cases for each type of component:

**Controlled components:**

1. **Form validation:** Controlled components are ideal for form validation, because the state of the form inputs is managed by React state. This allows you to easily validate the input data before it is submitted.
2. **Dynamic forms:** Controlled components are also useful for dynamic forms, where the form inputs change based on user input. By managing the state of the form inputs using React state, you can easily update the form as the user interacts with it.
3. **Complex forms:** Controlled components are well-suited for complex forms with multiple inputs, because the state of each input can be managed independently.

**Uncontrolled components:**

1. **Simple forms:** Uncontrolled components are ideal for simple forms with only a few inputs, because they require less code than controlled components.
2. **Third-party libraries:** Uncontrolled components are often used with third-party libraries that require direct access to the DOM, such as date pickers or color pickers.
3. **Legacy code:** Uncontrolled components may be used in legacy code that was written before controlled components were introduced in React.

Here is an example of a controlled component and an uncontrolled component that do the same thing:

```javascript
// Controlled component
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Uncontrolled component
function MyForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nameRef.current.value, emailRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this example, the controlled component and the uncontrolled component both render a form with two inputs: a name input and an email input. The controlled component manages the state of the inputs using React state and the `handleChange` method, while the uncontrolled component uses refs to access the input values directly.
