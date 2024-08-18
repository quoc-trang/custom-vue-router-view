---
difficulty: 1
training: true
chapter: "Chapter 1: Advanced Component Techniques"
tags: vue
---

# Custom RouterView Component Challenge

In this challenge, your task is to create a custom `RouterView` component using a render function.
You will be working in `src/router/index.js`.

## Requirements

1. Do not alter any code outside of `src/router/index.js`
2. Use a render function to define the `RouterView` component
3. Just like Vue Router's `RouterView`, it should display the proper page component based on the url path. (See main.js for the route definitions)
4. This `RouterView` component is a little more opinionated than the real thing. It needs to display extra markup with various attribute values and event listeners along with the current page component. This gives it the style of a browser window. Ultimately the rendered markdown should look like this:

```html
<div class="mockup-browser-wrapper">
  <!-- 👈 Notice the classes that need to be added-->
  <div class="mockup-browser-toolbar">
    <!-- 👈 and here, etc-->
    <div class="mockup-browser-url">
      <span>http://localhost:5173</span>
      <!-- 👇 The value of this input should be the current route path -->
      <!-- Whenever you type into the input if a route that matches
      the input value exists, you should navigate to that route -->
      <input />
    </div>
  </div>
  <div class="mockup-browser-content">
    <!-- 👉 The page component rendered here 👈 -->
  </div>
</div>
```

![Screenshot of the solution](https://images.certificates.dev/csvd-training-code-challenge-4.gif)
