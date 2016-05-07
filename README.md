# React mdl Layout

## Props

You can give data to component like this:
```
  data = {
    'id': 'gridId',
    'class': 'gridClass',
    'style': {},
    'cells': [
      {'id': 'cellid'}
    ]
  }
```

You will get like this:
```
<div data-reactroot="" data-reactid="1" data-react-checksum="826285998">
  <div id="gridId" class="mdl-grid gridClass" data-reactid="2">
    <div id="cellID" class="mdl-cell mdl-cell--hide-desktop mdl-cell--hide-tablet mdl-cell--hide-phone" data-reactid="3"></div>
  </div>
</div>
```
