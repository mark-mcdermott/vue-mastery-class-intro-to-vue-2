My weekly notes and progress on the vuemastery.com Intro To Vue 2 course (https://www.vuemastery.com/courses/intro-to-vue-js)
Each folder has the follow-along code as of that week as well as that lesson's challenge.

# Notes

## Lesson 1 The Vue Instance (11/4/22)
- for local dev using vue cdn, use vue chrome extension -> manage extensions -> Allow Access To File Urls
- cdn: `<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>`
- `var app = new Vue()` is how it starts - an instance of the Vue object
- the app details are an options object passed in: `var app = new Vue({ ... })`
- need to set element property (`el`) to plug the vue instance to an element in the DOM
- `data` property provides the vue instance with data to use
- `data`'s value is an object'
- `{{ }}` syntax is call an "expression". Thus more than a variable can be put in there:
  - `{{ product + '?' }}`
  - `{{ firstName + '' + lastName }}`
  - `{{ clicked ? true : false }}`
  - `{{ message.split('').reverse().join('') }}`
- Vue is "reactive" 
  - the instance's data is linked to every place that data is being referenced
  - ie, the `{{ }}` expressions' value is updated as the app's data property values change
- you can change vue data live in the console:
  - a data's `product` property can be accessed like `app.product = xyz`

## Lesson 2 Attribute Binding (11/4/22)
- `v-bind` binds data/expression to an attribute
  - ie, `v-bind:src="image"`
  - shorthand is just `:`, ie `:src="image"`
  - example attributes that can be v-bound: alt, href, title, class, style, disabled

## Lesson 3 Conditional Rendering (11/4/22)
- `v-if` conditionally shows, whether the expression is true
  - ie, `v-if="inStock"
- `v-else` can display if the `v-if` is false
- can also do `v-else-if`
- `v-if` adds/removes elements from the DOM
  - the alternative is `v-show` which instead does `display: none`

## Lesson 4 List Rendering (11/4/22)
- `v-for` displays collection elements
  - ie, `v-for="detail in details"`
  - in above example "detail" is an alias
  - can be simple array elements or objects with properties
- using a list's key element is "highly recommended"
  - `:key="variant.variantId"`

## Lesson 5 Event Handing (11/6/22)
- `v-on` listens for specified event
- `v-on:click="cart += 1"` listens for click and increments cart
- `methods` is a property on the vue instance like `data` and its value is also an object
- the `v-on` can either have an inline expression or call a function in `methods`
- the functions in `methods` are anonymous functions
- es6 shorthand for the anonymous functions is just `propertyName() { }`
- references to `data` variables in `methods` need `this.` before them
- the shorthand for `v-on:` is just `@` (without a colon)
- other example events `v-on` works with: submit, keyup
- events can have modifiers like `@keyup.enter` which listens for the enter key to be released

## Lesson 6 Class & Style Binding (11/8/22)
- you can use multiple `v-bind`s per html element
- `v-bind` works for style attributes, too
- you can set dynamic styles like `:style="{ backgroundColor: elem.color }"` - as the variable `elem.color` changes, the html element's backgroundColor style will change with it.
-  the elements style on the left of the `:` is either in `camelCase` or `'kebab-case'` with single quotes
- instead of binding a single style, you can bind to an object with multiple styles
- you can also bind multiple style objects in an array
- class binding is when you do `class="{ className: variable }"` and if variable is true, className will be present
- you can bind multiple variables with `:class="{ name1: var1, name2: var2 }"`
- you can also bind an object of multiple classes like `:class="classObject"`
- ternary operator works here: `:class="[isActive ? activeClass : '']"` <-- why is this an array?

## Lesson 7 Computed Properties
- `computed` is another property on the Vue instance. It's equal to an object, which itself has properties that are anonymous functions with a return value.
- you can use the property of the anonymous function as a variable in {{ }} in the the html to plug in the return value into the html
- in a `v-for` you can get the index by `(elem, index) in elems`
- computed values are cached before updating, so are good for expensive operations that you don't want to recalculate over and over.

## Lesson 8 Components
- syntax is ``Vue.component('name', { props: [], template: ``, data() { return { }}})``
- variables in props can be referenced in template

## Lesson 9 Communicating Events
- Values pass down with props and up with emit
- `this.$emit('event-name', <optional var to pass up>)` emits upward
- to catch the emission, it's component needs `@event-name="methodInParent"`
- it's fine to pass emissions all the way to the top Vue instance
- the emission catching attribute doesn't need () to pass vars (just the actual method declaration needs ())

## Lesson 10 Fors & v-model
- v-bind only binds from data to template
- v-model binds both from data to template and also from template to data (2 way data binding)
