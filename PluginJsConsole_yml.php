<?php
class PluginJsConsole_yml{
  public function widget_include_js(){
    $file = '/plugin/js/console_yml/js/PluginJsConsole_yml.js';
    $widget = wfDocument::createWidget('wf/embed', 'embed', array('type' => 'script', 'file' => $file));
    wfDocument::renderElement(array($widget));  
  }
}