# Buto-Plugin-JsConsole_yml
Javascript method to read object/array data as yml in the console.

## Include
Include script using widget include_js.
```
type: widget
data:
  plugin: js/console_yml
  method: include_js
```

## Method log
Call method log.
```
PluginJsConsole_yml.log(['john', {age: 25, sex: 'male'}, ['smith', 'jane', 'alan']]);
```
Result.
```
0: john
1: 
 age: 25
 sex: male
2: 
 0: smith
 1: jane
 2: alan
```
## Method put
Call method put to put yml in an element.
```
PluginJsConsole_yml.put(['john', {age: 25, sex: 'male'}, ['smith', 'jane', 'alan']], '_my_div_');
```
