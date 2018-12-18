# keystone-list-prepend

This is a copy of https://github.com/keystonejs/keystone/blob/master/lib/list/add.js

instead of `push`ing fields to the end of the List, it `unshift`s them to the beginning.


## why?
If you inherit from a List and add fields into it, they'll always end up at the end of the screen in the admin UI.
Mostly, you are inheriting from a List because it has some default fields. You don't want these fields on top in your admin UI, but you want the List specific fields first. By unshifting, you can add fields to the top of the page.

## How to use

This package injects a function on the List prototype in keystone. Use it like `.add`, e.g.:
```
const MyList = keystone.List('MyList');
MyList.prepend({
  newField: {
    type: String
  }
});
```
This feature makes the most sense with `inherits`:
```
const BaseList = keystone.List('BaseList');
BaseList.add({
  originalField: {
    type: String
  }
});
const MyList = keystone.List('MyList', {
  inherits: BaseList,
});
MyList.prepend({
  topField: {
    type: String,
  }
});
```

`topField` will now be shown before `originalField` in the admin UI.