# React MDL Layout

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
  <div id="gridId" class="mdl-grid gridClass">
    <div id="cellId" class="mdl-cell mdl-cell--hide-desktop mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
  </div>
```

You can also add a component in objects of `cells`, like this:
```
  import YourComponent from 'your/path/to/component';

  'cells' [
    {
      'id': 'id',
      'component': 'YourComponent'
    }
  ]
```

This layout is using [this](https://getmdl.io/components/index.html#layout-section/grid) to layout your website. As a reuslt, you need to set `desktop`, `tablet` and `phone` to layout in different size of website.

- data can have `id`, `class`, `style` and `cells`
- objects in `cells` can also have `id`, `class`, `style` and `desktop`, `tablet`, `phone`. A react component can give to `component` and use `data` to give this component `props`.
