# sigmag
Express a sigma with jQuery and BEM

## DOM
Build with BEM style class
```html
<div class="sigma">
  <span class="sigma__upper-bound">6</span>
  <span class="sigma__map">Math.pow(i, 2)</span>
  <span class="sigma__index">i</span>
  <span class="sigma__lower-bound">3</span>
</div>
```

## How to use
Use `data-role="sigma"` or jQuery instance methods:
### data-role
```html
<div class="sigma" data-role="sigma">
  <span class="sigma__upper-bound">6</span>
  <span class="sigma__map">Math.pow(i, 2)</span>
  <span class="sigma__index">i</span>
  <span class="sigma__lower-bound">3</span>
</div>
```
### jQuery instance methods
```js
$(selector).sigma();
```
