# React mdl Layout

## Props

You can give data to component like this:
```
  data = {
    'id': 'gridId',
    'class': 'gridClass',
    'style': {},
    'cells': [
      {'id': 'cellId'}
    ]
  }

  <Layout data={data} />
```

You will get like this:
```
<div>
  <div id="gridId" class="mdl-grid gridClass">
    <div id="cellId" class="mdl-cell mdl-cell--hide-desktop mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
  </div>
</div>
```

You can also add a component in objects of component, like this:
```
  import YourComponent from 'your/path/to/component';

  'cells' [
    {
      'id': 'id',
      'component': 'YourComponent'
    }
  ]
```

- data can have `id`, `class`, `style` and `cells`
- objects in `cells` can also have `id`, `class`, `style`. A react component can give to `component` and use `data` to give this component `props`.
