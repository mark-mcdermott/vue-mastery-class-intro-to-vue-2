My weekly notes and progress on the vuemastery.com Intro To Vue 2 course (https://www.vuemastery.com/courses/intro-to-vue-js)
Each folder has the follow-along code as of that week.

# Notes

## Lesson 1 The Vue Instance Notes (11/4/22)
- for local dev using vue cdn, use vue chrome extension -> manage extensions -> Allow Access To File Urls
- cdn: `<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>`
- `var app = new Vue()` is how it starts - an instance of the Vue object
- the app details are an options object passed in: `var app = new Vue({ ... })`
- need to set element property (`el`) to plug the vue instance to an element in the DOM
- `data` property provides the vue instance with data to use
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

## Lesson 2 Attribute Binding Notes (11/4/22)
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